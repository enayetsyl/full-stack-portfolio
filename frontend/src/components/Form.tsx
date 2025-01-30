'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Form: React.FC = () => {
  const [userInput, setUserInput] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_e1qe7ye';
    const templateID = 'template_69ehu6d';
    const userID = 'j9_KdWhhO5URP7vJN';

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        message: userInput.message,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        alert('Message sent successfully!');
        setUserInput({
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-y-0">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userInput.name}
          onChange={handleChange}
          required
          className="w-full sm:w-1/2 h-12 bg-[#1b1b1b] focus:border-[#36d7b7] rounded-md p-6 sm:p-7"
        />
        <input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full sm:w-1/2 h-12 bg-[#1b1b1b] focus:border-[#36d7b7] rounded-md p-6 sm:p-7"
        />
      </div>
      <textarea
        name="message"
        value={userInput.message}
        onChange={handleChange}
        placeholder="Message"
        rows={4}
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
