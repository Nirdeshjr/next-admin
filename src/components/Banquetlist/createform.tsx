"use client";
import React from "react";

const CreateForm = ({ toggleForm }: { toggleForm: () => void }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-start z-50 p-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl mt-10 md:mt-24">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Register Banquet
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">
              Banquet Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 dark:border-gray-600 px-4 py-2 w-full rounded dark:bg-gray-700 dark:text-white"
              placeholder="Enter Banquet Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 dark:text-gray-300">
              Created At
            </label>
            <input
              type="date"
              id="date"
              className="border border-gray-300 dark:border-gray-600 px-4 py-2 w-full rounded dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 dark:border-gray-600 px-4 py-2 w-full rounded dark:bg-gray-700 dark:text-white"
              placeholder="Enter the username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="text"
              id="password"
              className="border border-gray-300 dark:border-gray-600 px-4 py-2 w-full rounded dark:bg-gray-700 dark:text-white"
              placeholder="Enter the password"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-white px-4 py-2 rounded"
              onClick={toggleForm}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;


