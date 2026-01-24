import { useState } from 'react';

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

      if (response.ok && data.success) {
        setStatus('success');
        setMessage("Success! You've been added to our mailing list.");
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
          color: 'var(--color-gray-700)',
        }}
      >
        Join our mailing list to stay updated
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
      >
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 200px', minWidth: '200px' }}>
            <label htmlFor="email-signup" className="form-label" style={{ display: 'none' }}>
              Email
            </label>
            <input
              id="email-signup"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-input"
              required
              disabled={isSubmitting}
              style={{
                marginBottom: 0,
                borderRadius: 'var(--radius-md)',
                width: '100%',
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
            style={{
              whiteSpace: 'nowrap',
              padding: 'var(--spacing-md) var(--spacing-lg)',
              flexShrink: 0,
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </button>
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
