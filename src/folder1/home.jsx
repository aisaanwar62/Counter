//27/march class task
import React from "react";

export default function Home() {
  return (
    //1/april/24 class and home task
    <div className=" relative border p-20">
      <div className="flex  w-full h-full gap-2">
        <div className="border absolute top-2 left-6  bg-blue-400 px-12 py-5"></div>
        <div className="border absolute top-2 right-6 bg-red-400 px-12 py-5"></div>
      </div>

      <div className="row border mt-3">
        <div className="flex items-center justify-between w-full h-full gap-1 ">
          <div className="border bg-blue-600 px-5 py-5 m-1"></div>
          <div className="border bg-blue-500 px-5 py-5 m-1"></div>
          <div className="border bg-blue-400 px-5 py-5 m-1"></div>
        </div>
        <div className="border bg-blue-300 m-1 h-10 w-10"></div>
        <div className="flex items-center justify-between w-full h-full gap-1 ">
          <div className="border bg-blue-200 px-5 py-5 m-1"></div>
          <div className="border bg-blue-100 px-5 py-5 m-1"></div>
          <div className="border bg-blue-50 px-5 py-5 m-1"></div>
        </div>
      </div>

      <div className=" flex mt-3 gap-8">
        <div className="border absolute bottom-2 left-1 bg-blue-700 px-12 py-5"></div>
        <div className="border absolute bottom-2 right-1 bg-red-300 px-12 py-5"></div>
      </div>
    </div>
  );
}
