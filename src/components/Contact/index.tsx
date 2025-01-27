"use client";
import React, { useState } from "react";
import ContactForm from "./contactform"; // Adjust the import path if necessary

const Banquet: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedBanquet, setSelectedBanquet] = useState<string | null>(null);

  const itemsPerPage = 4;
  const data = [
    { id: 6, name: "Special Foods" },
    { id: 5, name: "King Bed" },
    { id: 4, name: "Family Room" },
    { id: 3, name: "Pacific Room" },
    { id: 2, name: "Luxury Room" },
    { id: 1, name: "Duplex Restaurant" },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto p-4">
      {selectedBanquet && (
        <ContactForm
          banquetName={selectedBanquet}
          closeForm={() => setSelectedBanquet(null)}
        />
      )}

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 rounded w-48 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
      </div>

      <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">ID</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Name</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Operation</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={item.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-700"
              }`}
            >
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                {item.id}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                {item.name}
              </td>
              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() => setSelectedBanquet(item.name)}
                >
                  Contact
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banquet;



