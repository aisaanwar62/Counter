//27/march/24 class work
import React from "react";

export default function RateButton(props) {
  return (
    <div className="relative">
      <button
        // className="absolute bottom-14 right-1/2 px-3 py-2 bg-red-500 rounded shadow text-white item-center justify-center"
        className="absolute  left-20 px-3 py-2 bg-red-500 rounded shadow text-white "
        onClick={() => props.countSet()}
      >
        Rate
      </button>
    </div>
  );
}
// const RateButton = ({ count, setCount, setSub }) => {
//   return (
//     <div className="flex items-center gap-4">
//       <p>The count is: {count}</p>
//       <div className="flex items-center gap-4">
//         <button
//           className="bg-lime-600 rounded shadow text-white px-2 py-1"
//           onClick={() => setCount(count + 1)}
//         >
//           +
//         </button>
//         <button
//           className="bg-red-600 rounded shadow text-white px-2 py-1"
//           onClick={() => setSub(count === 0 ? 0 : count - 1)}
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RateButton;
