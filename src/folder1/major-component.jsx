//27/march class task
import React from "react";
import ContactUs from "./contact-us";
import User from "./user";
import Myprogress from "./myprogress";
import Home from "./home";
import UserDetail from "./userdetail";
import Form from "./form";

export default function MajorComponent(props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="bg-blue-300 p-20 flex flex-col items-center justify-center">
        {/* <h1 className="font-bold p-4 bg-red-200">Rate: {props.count}</h1> */}
        <p>
          {props.pageNumber === 1 && <Home />}
          {props.pageNumber === 2 && (
            <Myprogress
              setInc={() => {
                props.setTotalInc(); //28/march/hmoe task
              }}
              setDec={() => {
                props.setTotaldec();
              }}
            />
          )}
          {props.pageNumber === 3 && <ContactUs />}
          {props.pageNumber === 4 && <UserDetail />}
          {props.pageNumber === 5 && <Form />}
        </p>
      </div>
    </div>
  );
}
