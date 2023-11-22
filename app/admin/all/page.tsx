// Import Tailwind CSS classes
import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

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
    <div className="flex flex-col bg-white p-5 h-screen">
      <div className="mx-[5%] flex flex-row h-[5%]">
        <Link href="/admin">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <div className="flex items-end text-black text-2xl ml-[5%] mr-[60%] font-bold">
          <p>View All Organizations</p>
        </div>
        {/* <div className='flex text-black text-xl mr-10 items-end'> Home </div> */}
      </div>
      <div className="flex-1 flex flex-col w-full rounded-lg p-4 items-center">
        <div className="flex items-center w-10/12">
          <TextField
            fullWidth
            placeholder="Search Employees"
            InputProps={{
              endAdornment: (
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </div>
      </div>
      <br />
      <div className="flex flex-col bg-white h-full w-full items-center ">
        <table className="w-10/12 rounded-lg">
          <thead className="bg-gradient-to-r from-grad1-start to-grad1-end hadow-lg rounded-lg overflow-hidden">
            <tr className="text-left">
              <th className="py-2 px-4 border-b text-black">Name</th>
              <th className="py-2 px-4 border-b text-black">Industry</th>
              <th className="py-2 px-4 border-b text-black">
                Bar Score (out of 100)
              </th>
              <th className="py-2 px-4 border-b text-black">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="items-center">
                <td className="py-2 px-4 border-b text-black items-center">
                  {row.name}
                </td>
                <td className="py-2 px-4 border-b text-black">
                  {row.industry}
                </td>
                <td className="py-2 px-4 border-b text-black">
                  {row.barScore}
                </td>
                <td className="py-2 px-4 border-b text-black">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
