/* eslint-disable react/prop-types */
import React from "react";
import Scorer from "./Scorer";
import Assist from "./Assist"


const Standings = ({ standings, scorer, assist}) => {
  const data = [
    "Classement",
    "Equipe",
    "MJ",
    "G",
    "N",
    "P",
    "BP",
    "BC",
    "DB",
    "PTS",
    "Forme",
  ];

  const filteredData = data.map((d, index) => (
    <th
      key={index}
      className="px-5 py-3 w-auto border-b-2 border-red-20 bg-green-200 text-left text-xs font-semibold text-gray-600 uppercase "
    >
      {d}
    </th>
  ));

  


  


  const clubs = standings.standings[0].map((clubs) => (
    <tr key={clubs.rank}>
      <td className="px-5 py-5  border-b border-gray-200 w-32 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10">
            <p>{clubs.rank}</p>
          </div>
          <div className="ml-3 w-10 ">
            <img
              className="w-10  h-10 rounded-full"
              src={clubs.team.logo}
              alt=""
            />
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 w-36 bg-white text-sm">
        <div>
           
            <p className="text-gray-900 underline cursor-pointer whitespace-no-wrap"
          >
            {clubs.team.name}
          </p>
           
          
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 w-10 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{clubs.all.played}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 w-10 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{clubs.all.win}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 w-10 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{clubs.all.draw}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 w-10 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{clubs.all.lose}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 w-10 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {clubs.all.goals.for}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 w-10 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {clubs.all.goals.against}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 w-10 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{clubs.goalsDiff}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 w-10 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{clubs.points}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 w-10 bg-white text-sm">
        <p className="text-gray-900 bg-yellow-200 py-2 px-2 whitespace-no-wrap">
          {clubs.form}
        </p>
      </td>
    </tr>
  ));

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex space-x-4 space-y-6">
          <img className=" h-24" src={standings.logo} alt={standings.name} />
          <h2 className="text-xl font-semibold leading-tight">
            {standings.name}, {standings.country}
          </h2>
          <img className=" h-7" src={standings.flag} alt={standings.name} />
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 w-full overflow-x-scroll xl:overflow-x-hidden">
          <div className="inline-block min-w-full shadow rounded-lg ">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>{filteredData}</tr>
              </thead>
              <tbody>{clubs}</tbody>
            </table>
          </div>
        </div>
      </div>
      <Scorer scorer={scorer} />
      <Assist assist={assist} />
    </div>
  );
};

export default Standings;
