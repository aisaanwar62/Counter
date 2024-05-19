//27/march/24 home task
import React, { useState } from "react";

export default function Myprogress(props) {
  const [counts, setCounts] = useState(0);
  const [counts1, setCounts1] = useState(0);
  const [counts2, setCounts2] = useState(0);
  // const [total, setTotal] = useState(0);

  function incrementCount() {
    if (counts == 0) {
      props.setInc();
    }

    setCounts(counts + 1);
  }

  function decrementCount() {
    if (counts === 1) {
      props.setDec();
    }
    if (counts > 0) setCounts(counts - 1);
  }
  function incrementCount1() {
    if (counts1 == 0) {
      // setTotal(totalCount + 1);

      props.setInc();
    }
    setCounts1(counts1 + 1);
  }

  function decrementCount1() {
    if (counts1 === 1) {
      // setTotal(totalCount - 1);

      props.setDec();
    }
    if (counts1 > 0) setCounts1(counts1 - 1);
  }
  function incrementCount2() {
    if (counts2 == 0) {
      // setTotal(totalCount + 1);

      props.setInc();
    }
    setCounts2(counts2 + 1);
  }

  function decrementCount2() {
    if (counts2 === 1) {
      // setTotal(totalCount - 1);

      props.setDec();
    }
    if (counts2 > 0) setCounts2(counts2 - 1);
  }

  return (
    <div className="w-60 ps-10 ">
      {/* <h1>Total: {total}</h1> */}

      <div>
        <h1>Click: {counts} </h1>
        <button
          className="px-3 py-2 bg-red-500 rounded shadow text-white m-4"
          onClick={() => incrementCount()}
        >
          +
        </button>
        <button
          className="px-3 py-2 bg-red-500 rounded shadow text-white"
          onClick={() => decrementCount()}
        >
          -
        </button>
      </div>
      <div>
        <h1>Click: {counts1} </h1>
        <button
          className="px-3 py-2 bg-red-500 rounded shadow text-white m-4"
          onClick={() => incrementCount1()}
        >
          +
        </button>
        <button
          className="px-3 py-2 bg-red-500 rounded shadow text-white"
          onClick={() => decrementCount1()}
        >
          -
        </button>
      </div>
      <div>
        <h1>Click: {counts2} </h1>
        <button
          className="px-3 py-2 bg-red-500 rounded shadow text-white m-4"
          onClick={() => incrementCount2()}
        >
          +
        </button>
        <button
          className="px-3 py-2 bg-red-500 rounded shadow text-white"
          onClick={() => decrementCount2()}
        >
          -
        </button>
      </div>
    </div>
  );
}
