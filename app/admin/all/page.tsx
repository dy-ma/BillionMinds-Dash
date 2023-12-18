"use server"
// Import Tailwind CSS classes
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const data = [{
  "ID": 103,
  "Name": "Maven Research",
  "numEmployees": 38,
  "numActive": 2,
  "Slug": "mavenresearch",
  "Score": "75"
},
{
  "ID": 94,
  "Name": "Verinovum",
  "numEmployees": 56,
  "numActive": 56,
  "Slug": "verinovum",
  "Score": "69"
},
{
  "ID": 143,
  "Name": "Tealium",
  "numEmployees": 120,
  "numActive": 11,
  "Slug": "tealium",
  "Score": "67"
},
{
  "ID": 218,
  "Name": "Gusto",
  "numEmployees": 114,
  "numActive": 8,
  "Slug": "gusto",
  "Score": "59"
},
{
  "ID": 16,
  "Name": "AATS",
  "numEmployees": 27,
  "numActive": 27,
  "Slug": "aats",
  "Score": "69"
},
{
  "ID": 346,
  "Name": "Sunny Period",
  "numEmployees": 5,
  "numActive": 5,
  "Slug": "sunnyperiod",
  "Score": "58"
},
{
  "ID": 153,
  "Name": "Kaufer DMC",
  "numEmployees": 4,
  "numActive": 4,
  "Slug": "kauferdmc",
  "Score": "62"
},
{
  "ID": 113,
  "Name": "Linde Engineering",
  "numEmployees": 229,
  "numActive": 2,
  "Slug": "lindeengineering",
  "Score": "64"
},
{
  "ID": 418,
  "Name": "Cox",
  "numEmployees": 13,
  "numActive": 13,
  "Slug": "cox",
  "Score": "45"
},
{
  "ID": 430,
  "Name": "Sage Bionetworks",
  "numEmployees": 116,
  "numActive": 33,
  "Slug": "sagebionetworks",
  "Score": "51"
},
{
  "ID": 363,
  "Name": "Archbright",
  "numEmployees": 100,
  "numActive": 30,
  "Slug": "archbright",
  "Score": "51"
},
{
  "ID": 177,
  "Name": "BillionMinds",
  "numEmployees": 1,
  "numActive": 1,
  "Slug": "billionminds",
  "Score": "71"
},
{
  "ID": 339,
  "Name": "Cogwheel Marketing",
  "numEmployees": 12,
  "numActive": 1,
  "Slug": "coghweelmarketing",
  "Score": "62"
}]

const Details = () => {
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
              <th className="py-2 px-4 border-b text-black">Active Employees</th>
              <th className="py-2 px-4 border-b text-black">
                AR Score (out of 100)
              </th>
              <th className="py-2 px-4 border-b text-black">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.ID} className="items-center">
                <td className="py-2 px-4 border-b text-black items-center">
                  <Link href={"/employer/" + row.Slug}>
                    {row.Name}
                  </Link>
                </td>
                <td className="py-2 px-4 border-b text-black">
                  {row.numActive}
                </td>
                <td className="py-2 px-4 border-b text-black">
                  {row.Score}
                </td>
                <td className="py-2 px-4 border-b text-black">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
