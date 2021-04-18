/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Scorer = ({ assist }) => {
  const data = [
    "Joueur",
    "Passes D",
    "Passes clés",
    "Pénalty",
    "Matchs",
    "Minutes",
    "Club",
  ];

  const filteredData = data.map((d, index) => (
    <th
      key={index}
      className="px-5 py-3 w-auto border-b-2 border-red-200 bg-green-200 text-left text-xs font-semibold text-gray-600 uppercase "
    >
      {d}
    </th>
  ));

  const assistData = assist.slice(0, 5).map((assist) => (
    <tr key={assist.player.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className=" h-16 w-16">
            <img
              className="h-14 w-14 rounded-full"
              src={assist.player.photo}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {assist.player.firstname} {assist.player.lastname},{" "}
              {assist.player.age} ans
            </div>
            <div className="text-sm mt-4 text-gray-500">
              Moyenne
              <span className=" ml-2 py-2 px-1 border-2 border-green-600 rounded-full">
                {(
                  Math.round(assist.statistics[0].games.rating * 100) / 100
                ).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4  whitespace-nowrap">
        <div className="text-sm text-gray-900">
          <span className="px-2 w-10 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {assist.statistics[0].goals.assists}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 w-6 whitespace-nowrap">
      {assist.statistics[0].passes.key}
      </td>
      <td className="px-6 py-4 w-10 whitespace-nowrap text-sm text-gray-500">
        {assist.statistics[0].penalty.scored}
      </td>
      <td className="px-6 py-4 w-10 whitespace-nowrap text-sm text-gray-500">
        {assist.statistics[0].games.appearences}
      </td>
      <td className="px-6 py-4 w-10 whitespace-nowrap text-sm text-gray-500">
        {assist.statistics[0].games.minutes}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <img
          className=" object-cover w-20 rounded-full"
          src={assist.statistics[0].team.logo}
          alt=""
        />
      </td>
    </tr>
  ));

  return (
    <div className="-mx-4 flex flex-col justify-center sm:-mx-8 px-4 sm:px-8 py-4 w-full overflow-x-scroll xl:overflow-x-hidden">
        <h2 className="flex justify-center my-4 text-xl">Meilleurs passeurs</h2>
      <table className="">
        <thead className="bg-gray-50">
          <tr>{filteredData}</tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {assistData}
        </tbody>
      </table>
    </div>
  );
};

export default Scorer;
