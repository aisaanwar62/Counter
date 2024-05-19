//3/april/24
import React, { useState } from "react";

function Calculate() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const calculateBMI = () => {
    const heightInMeters = height / 100; //cm to m
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));

    // Adjust BMI categories based on age and gender
    let bmiCategory = "";
    if (gender === "male") {
      if (age >= 18) {
        if (bmiValue < 18.5) {
          bmiCategory = "Underweight";
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
          bmiCategory = "Normal";
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
          bmiCategory = "Overweight";
        } else {
          bmiCategory = "Obese";
        }
      } else {
        // Adjust BMI categories for male children or teenagers
        if (age < 18 && bmiValue < 18.5) {
          bmiCategory = "Underweight (Teenager)";
        } else if (age < 18 && bmiValue >= 18.5 && bmiValue <= 24.9) {
          bmiCategory = "Normal (Teenager)";
        } else if (age < 18 && bmiValue >= 25 && bmiValue <= 29.9) {
          bmiCategory = "Overweight (Teenager)";
        } else if (age < 18 && bmiValue >= 30) {
          bmiCategory = "Obese (Teenager)";
        }
      }
    } else if (gender === "female") {
      if (age < 18) {
        // Adjust BMI categories for female children or teenagers
        if (bmiValue < 18.5) {
          bmiCategory = "Underweight (Teenager)";
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
          bmiCategory = "Normal (Teenager)";
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
          bmiCategory = "Overweight (Teenager)";
        } else {
          bmiCategory = "Obese (Teenager)";
        }
      } else {
        // Adjust BMI categories for adult females
        if (bmiValue < 18.5) {
          bmiCategory = "Underweight";
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
          bmiCategory = "Normal";
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
          bmiCategory = "Overweight";
        } else {
          bmiCategory = "Obese";
        }
      }
    }

    setBMI({
      value: bmiValue.toFixed(2),
      category: bmiCategory,
    });

    setShowForm(false); // Hide the input form after calculating BMI
  };

  const handleReset = () => {
    setAge("");
    setGender("");
    setWeight("");
    setHeight("");
    setBMI(null);
    setShowForm(true); // Show the input form when resetting
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="font-bold text-green-500 text-xl m-4">Ayesha Anwar</h1>
      {showForm ? (
        <div className="border border-black relative items-center justify-center space-y-4 p-12 bg-blue-200">
          <h1 className="text-center font-bold text-blue-500">
            BMI Calculator
          </h1>
          <div>
            <label>Age : </label>
            <input
              type="number"
              value={age}
              placeholder="Enter age"
              className="border rounded shadow-md p-2 w-full"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label>Gender : </label>
            <select
              value={gender}
              placeholder="select gender"
              className="border rounded shadow-md p-2 w-full"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="child">Child</option>
            </select>
          </div>
          <div>
            <label>Weight (kg): </label>
            <input
              type="number"
              value={weight}
              placeholder="Enter your weight in kg"
              className="border rounded shadow-md p-2 w-full"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm): </label>
            <input
              type="number"
              value={height}
              placeholder="Enter your height in cm"
              className="border rounded shadow-md p-2 w-full mb-2"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="absolute bottom-2 right-2 ">
            <button
              className="border  rounded bg-green-200 shadow-md text-center p-2  "
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>
          </div>
        </div>
      ) : (
        <div className="border border-black relative items-center justify-center  p-12 bg-blue-200">
          <div>
            <h3 className="text-center font-bold">Your BMI Score:</h3>
            <div className="border bg-blue-300 mt-1 mb-4 p-2">
              <p>BMI: {bmi.value}</p>
              <p>Category: {bmi.category}</p>
            </div>
          </div>
          {/* <p>
            BMI Categories:
            <br />
            <strong>Underweight:</strong> {"<"} 18.5
            <br />
            <strong>Normal:</strong> 18.5 - 24.9
            <br />
            <strong>Overweight:</strong> 25 - 29.9
            <br />
            <strong>Obese:</strong> {"<"} 30
          </p> */}
          <div className="absolute bottom-2 right-2 ">
            <button
              className="border rounded bg-green-200 shadow-md text-center p-2"
              onClick={handleReset}
            >
              Back to Form
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculate;
