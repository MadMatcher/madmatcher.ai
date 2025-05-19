import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto URL with the form data
    const mailtoLink = `mailto:entitymatchinginfo@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open the mail app
    window.location.href = mailtoLink;
  };

  return (
    <Main title="Contact" description="Get in touch with us">
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>Contact</h2>
          </div>
        </header>

        <section id="contact-form">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-buttons">
                <button type="submit" className="button primary">
                  Send Message
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() =>
                    setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      message: '',
                    })
                  }
                >
                  Reset Form
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* <section id="contact-info">
          <h3>Other Ways to Reach Us</h3>
          <ContactIcons />
        </section> */}
      </article>
    </Main>
  );
};

export default Contact;
