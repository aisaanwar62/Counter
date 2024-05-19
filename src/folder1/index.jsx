//27/march/24 class task
import React, { useState } from "react";
import Navbar from "./navbar";
import MajorComponent from "./major-component";
import Form from "./form";
import RateButton from "./rate-button";
import Myprogress from "./myprogress";

export default function MainComponent() {
  const [count, setCount] = useState(0);
  const [totalCount, setTotal] = useState(0);

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="h-screen">
      <Navbar
        setPage={(argu) => setPageNumber(argu)}
        overallCount={totalCount}
      />
      {/* {pageNumber === 1 && <Home count={count} />}
      {pageNumber === 2 && <MyProgress count={count} />}
      {pageNumber === 3 && <ContactUs count={count} />} */}

      <MajorComponent
        pageNumber={pageNumber}
        count={count}
        setTotalInc={() => setTotal(totalCount + 1)}
        setTotaldec={() => setTotal(totalCount - 1)}
      />

      <RateButton countSet={() => setCount(count + 1)} />
      <h1 className="font-bold p-4 bg-red-200 text-center">Rate: {count}</h1>
    </div>
  );
}
