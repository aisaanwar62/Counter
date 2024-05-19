//4/april/24
import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=96f37c8a9398d95149b9bd97efcb1fe3&units=metric`
      );
      setWeatherData(response.data);
      setError(null); // Clear any previous error if request succeeds
    } catch (error) {
      // Handle errors here
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message); // Set error message from server response
      } else if (error.request) {
        // The request was made but no response was received
        setError("Request failed. Please check your internet connection.");
      } else {
        // Something happened in setting up the request that triggered an error
        setError("An unexpected error occurred. Please try again later.");
      }
      setWeatherData(null); // Clear weather data if request fails
    }
  };

  useEffect(() => {
    // Fetch weather data when city or country changes
    if (city && country) {
      fetchData();
    }
  }, [city, country]);

  const handleSearch = () => {
    // Trigger fetching data when search button is clicked
    if (city && country) {
      fetchData();
    }
  };

  return (
    <div className="  flex flex-col items-center justify-center w-full h-screen">
      <h1 className="mb-2 font-bold text-lg text-center text-orange-400">
        Ayesha Anwar
      </h1>
      <div className="border border-black p-6">
        <div className="flex flex-col items-center justify-center">
          {" "}
          <img
            src="istockphoto-.jpg"
            alt="Weather Icon"
            className="w-10 h-10  opacity-100 "
          />
          <h1 className="font-bold text-center text-blue-600 text-xl mb-2">
            WEATHER
          </h1>
        </div>

        <div className="p-4">
          {/* <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-400 p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-gray-400 p-2 mr-2"
          /> */}
          <input
            type="text"
            placeholder="Enter city country"
            value={`${city},${country}`}
            onChange={(e) => {
              const [newCity, newCountry] = e.target.value
                .split(",")
                .map((items) => items.trim(""));
              setCity(newCity);
              setCountry(newCountry);
            }}
            className="border border-gray-400 p-2 mr-2"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
        {weatherData && (
          <div class="flex flex-col justify-center mt-4">
            <div class="flex items-center justify-between ">
              <div class="border rounded border-gray-400 p-7 m-1 w-full h-full relative">
                <div className="absolute top-2 left-2">
                  <img
                    src="temperature-three-quarters-solid.svg"
                    alt="Weather Icon"
                    className="w-7 h-7  opacity-30 "
                  />
                </div>
                <p className="w-full mt-1">{weatherData.main.temp}°C</p>
                <h1 className="w-full  font-bold text-blue-400">Temperature</h1>
              </div>
              <div className="border rounded border-gray-400 p-7 m-1 w-full h-full relative">
                <div className="absolute top-2 left-2">
                  <img
                    src="wind-solid.svg"
                    alt="Wind"
                    className="w-7 h-7 fill-blue opacity-30 "
                  />
                </div>
                <p className="w-full mt-1">{weatherData.wind.speed} m/s</p>
                <h1 className="w-full font-bold text-blue-400">Wind</h1>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="border rounded border-gray-400 p-7 m-1 w-full h-full relative">
                <div className="absolute top-2 left-2">
                  <img
                    src="droplet-solid.svg"
                    alt="Weather Icon"
                    className="w-7 h-7 text-blue-500 opacity-30 "
                  />
                </div>
                <p className="w-full mt-1">{weatherData.main.humidity}%</p>
                <h1 className="w-full font-bold text-blue-400">Humidity</h1>
              </div>
              <div className="border rounded border-gray-400 p-7 m-1 w-full h-full relative">
                <div className="absolute top-2 left-2">
                  <img
                    src="barometer.png"
                    alt="Wind"
                    className="w-8 h-8 text-blue-500 opacity-50 "
                  />
                </div>
                <p className="w-full mt-1">{weatherData.main.pressure} hPa</p>
                <h1 className="w-full font-bold text-blue-400">Pressure</h1>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="border rounded border-gray-400 p-7 m-1 w-full h-full relative">
                <div className="absolute top-2 left-2">
                  <img
                    src="sunrise.png"
                    alt="Wind"
                    className="w-8 h-8 text-blue-500 opacity-100"
                  />
                </div>
                <p class="w-full mt-2">
                  {new Date(
                    weatherData.sys.sunrise * 1000
                  ).toLocaleTimeString()}
                </p>
                <h1 className="w-full font-bold text-blue-400">Sunrise</h1>
              </div>
              <div className="border rounded border-gray-400 p-7 m-1 w-full h-full relative">
                <div className="absolute top-2 left-2">
                  <img
                    src="sunset.png"
                    alt="Wind"
                    className="w-8 h-8 text-blue-500 opacity-100 "
                  />
                </div>
                <p className="w-full mt-2">
                  {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
                </p>
                <h1 className="w-full font-bold text-blue-400">Sunset</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
