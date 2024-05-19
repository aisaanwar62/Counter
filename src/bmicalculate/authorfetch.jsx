//3/april/24
import React, { useState, useEffect } from "react";

function Score() {
  const [state, setState] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const getUserData = async () => {
    const data = await fetch("https://type.fit/api/quotes");
    const result = await data.json();
    console.log(result);
    setState(result);
  };
  useEffect(() => {
    getUserData();
  }, []);
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % state.length);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="font-bold text-blue-400">Ayesha Anwar</h1>
      <div className="border border-black relative flex flex-col items-center justify-center space-y-4 p-5 bg-slate-200">
        {state.length > 0 && (
          <div className="border p-4 space-y-3 mb-4">
            <p className="font-bold">"{state[currentIndex].text}"</p>
            <p className=" text-center italic font-normal text-blue-500  bg-gray-200 gap-1">
              {state[currentIndex].author.split(",")[0]}
            </p>
          </div>
        )}
        <div className="absolute bottom-2 right-2 ">
          <button
            className="bg-green-400 px-4 py-2 rounded shadow-md"
            onClick={handleNextClick}
            disabled={state.length === 0 || currentIndex === state.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Score;
