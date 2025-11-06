'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(5),
});

export async function sendMessage(prevState, formData) {
  const data = Object.fromEntries(formData.entries());
  const result = schema.safeParse(data);

  // Validate form
  if (!result.success) {
    const fieldErrors = z.flattenError(result.error).fieldErrors;
    return {
      status: 'error',
      message: 'Please correct the error(s) above',
      errors: fieldErrors,
      values: data,
    };
  }

  // Try to send the message using API
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        ...result.data,
      }),
    });

    const response = await res.json();

    if (response.success) {
      return {
        status: 'success',
        message: 'Thanks! Your message has been sent successfully.',
        errors: {},
        values: {},
      };
    } else {
      return {
        status: 'error',
        message: 'Something went wrong. Please try again later.',
        errors: {},
        values: data,
      };
    }
  } catch (err) {
    console.error(err);
    return {
      status: 'error',
      message: 'A network error occured. Please try again later',
      errors: {},
      values: data,
    };
  }
}

// form access key: 3bda9d72-a019-43d4-b4fc-86c2d9bb381a
