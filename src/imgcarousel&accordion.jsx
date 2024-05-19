// 4 / april / 24;
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function ImgCarouselAccordion() {
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-blue-500">Ayesha Anwar</h1>
        <h2 className="font-bold"> Resizable Collapsible: </h2>
        <button
          className="button bg-slate-500 py-3 px-3 mt-4 rounded shadow-xl text-center mr-2"
          onClick={() => setWidth(width + 100)}
        >
          {" "}
          increase{" "}
        </button>

        <button
          className="button bg-slate-500 py-3 px-3  mt-4 rounded shadow-xl text-center"
          onClick={() => setWidth(width - 100)}
        >
          decrease
        </button>
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
                className=" block w-full  "
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
      <div className="mt-7 mb-20 flex items-center justify-center">
        <div>
          <Accordion>
            <AccordionSummary>
              <Typography>Accordion Title 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Title1 xyz</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography>Accordion Title 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Title2 abc</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ImgCarouselAccordion;
