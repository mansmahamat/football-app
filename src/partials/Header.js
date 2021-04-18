/* eslint-disable react/prop-types */
import React from "react";

const Header = ({ handleClick }) => {
  const league = {
    "Ligue 1 🇫🇷": 61,
    "Ligue 2 🇫🇷": 62,
    "Serie A 🇮🇹": 135,
    "Bundesliga 🇩🇪": 78,
    "Premier Leage 🇬🇧": 39,
    "Primera Division 🇪🇸": 140,
    "Primeira Liga 🇵🇹": 94,
    "Eredivise 🇳🇱": 88,
  };

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
            </button>
          </div>
          <nav className="flex overflow-auto space-x-12">
            {Object.keys(league).map(function (key) {
              return (
                <div
                  key={key}
                  onClick={() => handleClick(league[key])}
                  className="relative"
                >
                  {/* Key: {key}, Value: {league[key]} */}
                  <button
                    value={league[key]}
                    type="button"
                    className="text-gray-500 outline-none group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
                    aria-expanded="false"
                  >
                    <span>{key}</span>
                  </button>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
