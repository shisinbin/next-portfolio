'use client';

import React from 'react';
import { z } from 'zod';
import styles from './ContactForm.module.css';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Enter a valid email'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

const initialFormData = {
  name: '',
  email: '',
  message: '',
};

const validationErrorFeedback =
  'Please correct the validation error(s).';

function ContactForm() {
  const [formData, setFormData] = React.useState(initialFormData);
  const [status, setStatus] = React.useState('idle'); // idle || loading || success || error
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState([]);
  const [feedback, setFeedback] = React.useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Only proceed if field is in touched
    if (!touched.includes(name)) return;

    // Extract appropriate validation rule
    const singleSchema = schema.pick({ [name]: true });

    // Validate the field
    const result = singleSchema.safeParse({
      [name]: value,
    });

    if (!result.success) {
      // If it failed validation, make sure it's in errors
      const fieldErrors =
        z.flattenError(result.error).fieldErrors || {};
      setErrors((prev) => {
        return { ...prev, ...fieldErrors };
      });
      setFeedback(validationErrorFeedback);
    } else {
      setErrors((prev) => {
        // const { [name]: _, ...errors } = prev;
        // return errors;
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });

      // If all errors gone, clear feedback
      setFeedback((prev) =>
        Object.keys(errors).length === 1 ? '' : prev
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the fields
    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors =
        z.flattenError(result.error).fieldErrors || {};
      setErrors(fieldErrors);
      setTouched(Object.keys(fieldErrors));
      setStatus('error');
      setFeedback(validationErrorFeedback);
      return;
    }

    // Passed client validation
    setStatus('submitting');
    setFeedback('');
    setTouched([]); // just in case

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...result.data,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setErrors({});
        setTouched([]);
        setFormData(initialFormData);
        setFeedback(
          'Thanks! Your message has been sent successfully.'
        );
        setTimeout(() => {
          setFeedback('');
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
        setFeedback(
          data?.message ||
            'Something went wrong. Please try again later'
        );
      }
    } catch (err) {
      console.error('Contact form submit error', err);
      setStatus('error');
      setFeedback(
        err?.message ||
          'A network error occured. Please try again later (or email me directly)'
      );
    }
  };

  const getError = (field) => errors?.[field];

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      noValidate={true}
    >
      <label className={styles.label}>
        Name
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          aria-invalid={!!getError('name')}
          data-invalid={
            touched.includes('name') && errors.name ? 'true' : 'false'
          }
        />
        {getError('name') && (
          <span className={styles.error}>{getError('name')}</span>
        )}
      </label>
      <label className={styles.label}>
        Email
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          aria-invalid={!!getError('email')}
          data-invalid={
            touched.includes('email') && errors.email
              ? 'true'
              : 'false'
          }
        />
        {getError('email') && (
          <span className={styles.error}>{getError('email')}</span>
        )}
      </label>
      <label className={styles.label}>
        Message
        <textarea
          name='message'
          rows='5'
          value={formData.message}
          onChange={handleChange}
          required
          aria-invalid={!!getError('message')}
          data-invalid={
            touched.includes('message') && errors.message
              ? 'true'
              : 'false'
          }
        />
        {getError('message') && (
          <span className={styles.error}>{getError('message')}</span>
        )}
      </label>

      <button
        type='submit'
        disabled={status === 'submitting'}
        className={styles.submitButton}
      >
        {status === 'submitting' ? 'Sending...' : 'Send message'}
      </button>

      {feedback && (
        <p
          className={
            status === 'error' ? styles.error : styles.success
          }
        >
          {feedback}
        </p>
      )}
    </form>
  );
}

export default ContactForm;

// async function handleSubmit(e) {
//   e.preventDefault();

//   // Initiate loading
//   setState((prevState) => {
//     return {
//       ...prevState,
//       status: 'loading',
//       message: '',
//     };
//   });

//   const formData = new FormData(e.target);
//   const data = Object.fromEntries(formData.entries());

//   // Validate with Zod
//   const result = schema.safeParse(data);
//   if (!result.success) {
//     const fieldErrors = z.flattenError(result.error).fieldErrors;
//     return setState({
//       status: 'error',
//       message: 'Please correct the error(s) above',
//       errors: fieldErrors,
//       values: data,
//     });
//   }

//   try {
//     const res = await fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         access_key: process.env.WEB3FORMS_ACCESS_KEY,
//         ...result.data,
//       }),
//     });

//     const json = await res.json();

//     if (json.success) {
//       setState({
//         status: 'success',
//         message: 'Thanks! Your message has been sent successfully.',
//         errors: {},
//         values: {},
//       });
//     } else {
//       setState({
//         status: 'error',
//         message: 'Something went wrong. Please try again later.',
//         errors: {},
//         values: data,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     setState({
//       status: 'error',
//       message: 'A network error occured. Please try again later',
//       errors: {},
//       values: data,
//     });
//   }
// }
