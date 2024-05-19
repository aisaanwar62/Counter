//28/march/24 class task

import React, { useState } from "react";

export default function ContactUs() {
  const [state, setState] = useState("");
  const [newState, setNewstate] = useState(false);
  const [texts, setTexts] = useState([]);
  const [pendingStatus, setPendingStatus] = useState([]);

  // const displayText = () => {
  //   return (
  //     <div className="row items-center justify-center w-full h-full">
  //       {texts.map((text, index) => (
  //         <div key={index} className="flex items-center justify-center gap-2 ">
  //           <p className="p-3 border rounded shadow-md w-fix ">{text}</p>
  //           <div className="bg-red-500 p-2  border rounded shadow-md  row items-center justify-center">
  //             <button>Edit</button>/<button>Pending</button>
  //           </div>
  //           <button className="bg-red-500 p-2  border rounded shadow-md">
  //             Delete
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  const handleEdit = (index) => {
    const editedText = prompt("Enter the edited text:", texts[index]);
    if (editedText !== null) {
      const updatedTexts = [...texts];
      updatedTexts[index] = editedText;
      setTexts(updatedTexts);
    }
  };

  const handlePending = (index) => {
    const updatedPendingStatus = [...pendingStatus];
    updatedPendingStatus[index] = true;
    setPendingStatus(updatedPendingStatus);
  };

  const handleDelete = (index) => {
    const updatedTexts = [...texts];
    updatedTexts.splice(index, 1);
    setTexts(updatedTexts);
  };

  const displayText = () => {
    return (
      <div className="row items-center justify-center w-full h-full">
        {texts.map((text, index) => (
          <div key={index} className="flex items-center justify-center gap-2">
            <p className="p-3 border rounded shadow-md w-fix">{text}</p>
            <div
              className={`bg-${
                pendingStatus[index] ? "green" : "red"
              }-500 p-2 border rounded shadow-md row items-center justify-center`}
            >
              {pendingStatus[index] ? (
                "Completed"
              ) : (
                <>
                  <button onClick={() => handleEdit(index)}>Edit</button>/
                  <button onClick={() => handlePending(index)}>Pending</button>
                </>
              )}
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 p-2 border rounded shadow-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  };
  const handleClick = () => {
    setTexts([...texts, state]);
    setNewstate(true);
    setState("");
  };

  return (
    <div>
      <h2 className="text-center font-bold mt-3">Contact Us</h2>
      <div className="row mt-3">
        <input
          className="border rounded shadow-md p-2"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        <button
          className="bg-green-500 p-2 ml-2 border rounded shadow-md "
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      {newState && displayText()}{" "}
      {/* Render displayText only if newState is true */}
    </div>
  );
}
// import React, { useState } from "react";

// export default function ContactUs() {
//   const [state, setState] = useState("");
//   const [texts, setTexts] = useState([]);

//   const handleAddButtonClick = () => {
//     if (state.trim() !== "") {
//       setTexts([...texts, state]);
//       setState(""); // Clear the input field after adding text
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-center font-bold mt-3">Contact Us</h2>
//       <div className="row mt-3">
//         <input
//           className="border rounded shadow-md p-2"
//           value={state}
//           onChange={(event) => setState(event.target.value)}
//         />
//         <button
//           className="bg-green-500 p-2 ml-2 border rounded shadow-md"
//           onClick={handleAddButtonClick}
//         >
//           Add
//         </button>
//       </div>
//       {/* Display entered texts */}
//       {texts.map((text, index) => (
//         <div key={index} className="row mt-3">
//           <p className="p-2 border rounded shadow-md">{text}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
