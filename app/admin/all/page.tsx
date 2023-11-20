// Import Tailwind CSS classes
import React from "react";

const Details = () => {
  const data = [
    {
      id: 1,
      name: "Company A",
      industry: "Technology",
      barScore: 75,
      status: "Active",
    },
    {
      id: 2,
      name: "Company B",
      industry: "Healthcare",
      barScore: 90,
      status: "Inactive",
    },
    {
      id: 3,
      name: "Company C",
      industry: "Finance",
      barScore: 60,
      status: "Active",
    },
    {
      id: 4,
      name: "Company D",
      industry: "Education",
      barScore: 85,
      status: "Active",
    },
  ];

  return (
    <div className="flex flex-col bg-white p-24 h-full w-full">
      <table>
        <caption className="text-lg font-bold mb-2">Company Details</caption>
        <thead className="bg-gradient-to-r from-grad1-start to-grad1-end my-[2%] w-full h-full flex flex-col shadow-lg rounded-lg overflow-hidden">
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Industry</th>
            <th className="py-2 px-4 border-b">Bar Score (out of 100)</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody >
          {data.map((row) => (
            <tr key={row.id}>
              <td className="py-2 px-4 border-b">{row.name}</td>
              <td className="py-2 px-4 border-b">{row.industry}</td>
              <td className="py-2 px-4 border-b">{row.barScore}</td>
              <td className="py-2 px-4 border-b">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
