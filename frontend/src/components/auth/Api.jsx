import axios from "axios";
import React, { useState } from "react";

const Api = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    setData(response.data);
  };

  return (
    <div className="p-20">
      <button
        onClick={getData}
        className="bg-teal-700 text-white font-semibold rounded text-2xl px-6 active:scale-110"
      >
        Get Data
      </button>
      <div className="p-5 bg-gray-900 text-white font text-2xl">
        {data.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3"
            >
              <img className="h-40" src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Api;
