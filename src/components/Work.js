import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import WorkDes from "./WorkDes";
import WorkList from "./WorkList";

import pj1img from "../assets/images/image/pj1_img.jpg";
import pj1logo from "../assets/images/image/pj1_logo.png";
import tpj1img from "../assets/images/image/tpj1_img.png";
import tpj1logo from "../assets/images/image/tpj1_logo.png";
import tpj2img from "../assets/images/image/tpj2_img.jpg";
import tpj2logo from "../assets/images/image/tpj2_logo.svg";

import "../style/work.scss";

function Work() {
  const projectData = [
    {
      id: 1,
      img: pj1img,
      imgalt: "코코디자인",
      logo: pj1logo,
      logoalt: "로고",
      link: "./pj1",
    },
    {
      id: 2,
      img: pj1img,
      imgalt: "코코디자인",
      logo: pj1logo,
      logoalt: "로고",
      link: "./pj2",
    },
    {
      id: 3,
      img: pj1img,
      imgalt: "코코디자인",
      logo: pj1logo,
      logoalt: "로고",
      link: "./pj3",
    },
    {
      id: 4,
      img: tpj1img,
      imgalt: "야놀자",
      logo: tpj1logo,
      logoalt: "야놀자로고",
      link: "./tpj1",
    },
    {
      id: 5,
      img: tpj2img,
      imgalt: "상상인증권",
      logo: tpj2logo,
      logoalt: "상상인증권로고",
      link: "./tpj2",
    },
  ];

  const boxs = document.querySelectorAll(".workBox");
  const [top, setTop] = useState([]);

  const topValue = () => {
    for (let i = 1; i < boxs.length; i++) {
      const topA = boxs[i].offsetTop;
      console.log(topA);
    }
  };
  topValue();
  return (
    <div className="work">
      {/* <Work1 /> */}
      <WorkDes />
      <div className="workList">
        {projectData.map((item) => (
          <div className="workBox" key={item.id}>
            <Link to={item.link}>
              <img src={item.img} alt={item.imgalt} className="bgimgBox" />
            </Link>
            <img src={item.logo} alt={item.logoalt} className="logoBox" />
          </div>
        ))}
      </div>
      {/* <WorkList /> */}
    </div>
  );
}

export default Work;
