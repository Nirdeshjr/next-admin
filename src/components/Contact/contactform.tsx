"use client";
import React, { useState } from "react";

const ContactForm = ({ banquetName, closeForm }: { banquetName: string; closeForm: () => void }) => {
  const [formData, setFormData] = useState({
    location: "",
    username: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { banquetName, ...formData });
    closeForm(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Contact for {banquetName}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 dark:text-gray-300">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="border border-gray-300 dark:border-gray-600 px-4 py-2 w-full rounded dark:bg-gray-700 dark:text-white"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-gray-300 dark:border-gray-600 px-4 py-2 w-full rounded dark:bg-gray-700 dark:text-white"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 dark:border-gray-600 px-4 py-2 w-full rounded dark:bg-gray-700 dark:text-white"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-white px-4 py-2 rounded"
              onClick={closeForm}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
