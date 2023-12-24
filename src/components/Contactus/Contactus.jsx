// ContactPage.js
import React, { useState } from 'react';
import './ContactPage.css'; // Import your CSS file
import axios from 'axios';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:3001/contactus', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (response.status === 200) {
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Something went wrong. Please try again.');
    }
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // You can use this data to send an email or perform other actions
  };

  return (
    <div className='contact'>
    <div className="contact-page">
        <p>Lets talk about how we can help you</p>
        <p>Get in Touch with us for more information</p>
    </div>
    <div>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Contactus;
