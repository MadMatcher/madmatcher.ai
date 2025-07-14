import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:entitymatchinginfo@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open mail client
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="section bg-white">
      <div className="container">
        <div className="text-center mb-2xl">
          <h2 className="section-title">Contact Us</h2>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card">
          <div className="form-header">
            <h3>Send us a message</h3>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="youremail@email.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="How can we help you?"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell us more about your needs..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="alert alert-success">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="alert alert-error">
                There was an error sending your message. Please try again.
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-lg contact-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading-spinner">
                  <span className="spinner"></span>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
