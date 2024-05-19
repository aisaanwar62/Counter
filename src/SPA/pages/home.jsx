import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold"> Resizable Collapsible: </h2>
        <divm className="flex items-center justify-center">
          <button
            className="button bg-slate-500 py-3 px-3 mt-2 rounded shadow-xl text-center mr-2"
            onClick={() => setWidth(width + 100)}
          >
            {" "}
            increase{" "}
          </button>

          <button
            className="button bg-slate-500 py-3 px-3  mt-2 rounded shadow-xl text-center"
            onClick={() => setWidth(width - 100)}
          >
            decrease
          </button>
        </divm>
      </div>

      <div className=" slider-container flex items-center justify-center mt-7">
        <div
          style={{
            width: width + "px",
          }}
        >
          <Slider {...settings}>
            <div>
              <img
                className=" block mx-auto  "
                src="goldenblue flowers.avif"
                alt="Image 1"
              />
            </div>
            <div>
              <img
                className="block  mx-auto"
                src="flowergolden.avif"
                alt="Image 2"
              />
            </div>
            <div>
              <img className="block  mx-auto" src="fb.jpg" alt="Image 3" />
            </div>

            {/* Add more images as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
