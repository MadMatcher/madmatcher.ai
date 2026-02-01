import { useState } from 'react';
import styles from './EmailSignup.module.css';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('apiKey', process.env.REACT_APP_STATICFORMS_API_KEY || '');
      formData.append('subject', 'MadMatcher newsletter signup');
      formData.append('email', email);
      formData.append('redirect', 'false'); // Prevent redirect

      const response = await fetch('https://api.staticforms.dev/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      console.log('Response data:', data);

      // Check if the response indicates success
      // StaticForms API returns success in the data object
      if (data.success === true || data.message === 'Form submitted successfully') {
        setStatus('success');
        setMessage(data.message || "Success! You've been added to our mailing list.");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        marginTop: '2.5rem',
        width: '100%',
        maxWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <p
        style={{
          textAlign: 'center',
          marginBottom: '1rem',
          fontSize: 'var(--text-lg)',
          fontFamily: 'inherit',
        }}
      >
        Join our mailing list to stay updated
      </p>
      <form
        onSubmit={handleSubmit}
        className={styles.signupForm}
      >
        <label htmlFor="email-signup" className="form-label" style={{ display: 'none' }}>
          Email
        </label>
        <div className={styles.formRow}>
          <div className={styles.inputWrap}>
            <input
              id="email-signup"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`form-input ${styles.signupInput}`}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className={styles.buttonWrap}>
            <button
              type="submit"
              className={`btn btn-primary ${styles.signupSubmit}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Subscribe'}
            </button>
          </div>
        </div>
        {message && (
          <div
            className="alert"
            style={{
              marginTop: '0',
              marginBottom: 0,
              padding: 'var(--spacing-sm) var(--spacing-md)',
              fontSize: 'var(--text-sm)',
              ...(status === 'success'
                ? {
                    background: 'rgba(52, 199, 89, 0.1)',
                    color: '#34c759',
                    border: '1px solid rgba(52, 199, 89, 0.2)',
                  }
                : {
                    background: 'rgba(219, 7, 14, 0.1)',
                    color: '#db070e',
                    border: '1px solid rgba(219, 7, 14, 0.2)',
                  }),
            }}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
