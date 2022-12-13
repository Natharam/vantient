import React, { useState } from "react";
import { FaClock, FaList, FaTeamspeak } from "react-icons/fa";
import image from "../image.jpg";

const data = [
  {
    lable: "Created",
    content: "November 28, 2022 1:06 PM"
  },
  {
    lable: "Primary tag",
    content: "Art"
  },
  {
    lable: "Secondary tag",
    content: "Hobbies"
  },
  {
    lable: "Url",
    content: "https://artpop.sg/"
  },
  {
    lable: "Have Online Membership",
    content: "Empty"
  },
  {
    lable: "Note",
    content: "Empty"
  },
  {
    lable: "Privilege",
    content: "Empty"
  },
  {
    lable: "Who has leads?",
    content: "Art"
  }
];

function DetailPageContent() {
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(data);

  const setShowHandler = () => {
    setShow(!show);
    if (show) {
      setShowData(data);
    } else setShowData(data.slice(0, 4));
  };

  return (
    <div className="w-7/12 mx-auto mt-5">
      <div className="text-left font-bold text-4xl">Art Pop Studio</div>

      <div className="flex items-center justify-start">
        <div className="flex flex-col items-left justify-start">
          {showData.map((item) => (
            <div className="flex justify-start items-center text-left">
              <div>
                {item.lable === "Created" && <FaClock />}
                {item.lable !== "Created" && item.lable !== "Who has leads?" && <FaList />}
                {item.lable === "Who has leads?" && <FaTeamspeak />}
              </div>
              <div className="ml-3">{item.lable}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-left justify-start">
          {showData.map((item) => (
            <div className="ml-5 text-left">{item.content}</div>
          ))}
        </div>
      </div>

      <div className="">
        <button onClick={() => setShowHandler()} className="focus:outline-none">
          {show ? "Show" : "Hide"} 5 properties
        </button>
      </div>
      <hr className="my-4"></hr>

      <div className="w-full h-72 mx-auto px-8 my-4">
        <img src={image} alt="im" className="h-400px w-full" />
      </div>

      <div className="my-5 text-left">
        <div>
          We are not your ordinary art jamming space. Here at Art Pop Studio, we created a creative space where you can
          express yourself through experimental art. A space to unleash your inner artist. From textured art to balloon
          splatter painting workshops, get creative and create unique art pieces through our curated art jamming
          workshops and DIY kits.
        </div>
      </div>
    </div>
  );
}

export default DetailPageContent;
