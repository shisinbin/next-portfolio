'use client';

import React from 'react';
import styles from './ContactForm.module.css';
import { sendMessage } from '@/lib/actions/contact';

const initialState = {
  status: 'idle',
  message: '',
  errors: {},
  values: {},
};

function ContactForm() {
  const [state, formAction, pending] = React.useActionState(
    sendMessage,
    initialState
  );

  const [clientErrors, setClientErrors] = React.useState({});

  const getValue = (name) => state.values?.[name] || '';
  const getError = (name) => state.errors?.[name];

  return (
    <form action={formAction} className={styles.form}>
      {/* <p>{JSON.stringify(formData)}</p> */}
      <label className={styles.label}>
        Name
        <input
          type='text'
          name='name'
          required
          defaultValue={getValue('name')}
          aria-invalid={!!getError('name')}
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
          required
          defaultValue={getValue('email')}
          aria-invalid={!!getError('email')}
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
          required
          defaultValue={getValue('message')}
          aria-invalid={!!getError('message')}
        />
        {getError('message') && (
          <span className={styles.error}>{getError('message')}</span>
        )}
      </label>

      <button
        type='submit'
        disabled={pending}
        className={styles.submitButton}
      >
        {pending ? 'Sending...' : 'Send message'}
      </button>

      {state.status === 'success' && (
        <p className={styles.success}>{state.message}</p>
      )}
      {state.status === 'error' && (
        <p className={styles.error}>{state.message}</p>
      )}
    </form>
  );
}

export default ContactForm;
