// index.tsx
"use client";
import React, { useState } from "react";
import CreateForm from "./createform"; // Adjust the import path if necessary

const BanquetTable = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const data = [
    { id: 6, name: "Special Foods", username: "user6", date: "2020-09-05", password: "pass1236" },
    { id: 5, name: "King Bed", username: "user5", date: "2020-09-05", password: "pass1235" },
    { id: 4, name: "Family Room", username: "user4", date: "2020-09-05", password: "pass1234" },
    { id: 3, name: "Pacific Room", username: "user3", date: "2020-09-05", password: "pass1233" },
    { id: 2, name: "Luxury Room", username: "user2", date: "2020-09-05", password: "pass1232" },
    { id: 1, name: "Duplex Restaurant", username: "user1", date: "2020-09-05", password: "pass1231" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={togglePasswordVisibility}
        >
          View
        </button>
        <div className="flex gap-2">
          <button className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600">Filters</button>
          <input
            type="text"
            placeholder="Search..."
            className="border px-4 py-2 rounded w-48 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
        </div>
        <div className="flex gap-2">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={toggleForm}
          >
            + Register
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Reload
          </button>
        </div>
      </div>

      {showForm && <CreateForm toggleForm={toggleForm} />}

      <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              <input type="checkbox" />
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">ID</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Name</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Username</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Created At</th>
            {showPassword && (
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Password</th>
            )}
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Operations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={`${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-700"}`}
            >
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">{item.id}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{item.username}</td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">{item.date}</td>
              {showPassword && (
                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">{item.password}</td>
              )}
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BanquetTable;
