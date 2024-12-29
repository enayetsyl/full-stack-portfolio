"use client"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check the type of form.current
    const currentType = typeof form.current;

    if (currentType === 'object') {
      if (Array.isArray(form.current)) {
        console.log('form.current is an array');
      } else {
        console.log('form.current is an object');
      }
    } else {
      console.log('form.current is neither an array nor an object');
    }

    emailjs
      .sendForm(
        'service_bv20ho9',
        'template_hdke6ed',
        form.current,
        'c1tYBgkzdr0uStumq'
      )
      .then(
        (result) => {
          alert('Your message was sent successfully!');
        },
        (error) => {
          alert('Message Sending Failed!');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-y-0">
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          required
          className="w-full sm:w-1/2 h-12 bg-[#1b1b1b] focus:border-[#36d7b7] rounded-md p-6 sm:p-7"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          required
          className="w-full sm:w-1/2 h-12 bg-[#1b1b1b] focus:border-[#36d7b7] rounded-md p-6 sm:p-7"
        />
      </div>
      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        required
        className="w-full bg-[#1b1b1b] focus:border-[#36d7b7] rounded-md p-6 sm:p-7"
      />
      <button
        type="submit"
        className="w-full mt-4 bg-[#36d7b7] hover:bg-opacity-90 text-white p-3 rounded"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;