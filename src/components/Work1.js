import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import pj1img from "../assets/images/image/pj1_img.jpg";
import pj1logo from "../assets/images/image/pj1_logo.png";
import tpj1img from "../assets/images/image/tpj1_img.png";
import tpj1logo from "../assets/images/image/tpj1_logo.png";
import tpj2img from "../assets/images/image/tpj2_img.jpg";
import tpj2logo from "../assets/images/image/tpj2_logo.svg";

import "../style/work1.scss";
function Work1() {
  const projectData = [
    {
      id: 1,
      img: pj1img,
      imgalt: "코코디자인",
      logo: pj1logo,
      logoalt: "로고",
      link: "./pj1",
      title: "1react web",
      tag: "#PC #개인프로젝트 #Swiper #Axios",
    },
    {
      id: 2,
      img: pj1img,
      imgalt: "코코디자인",
      logo: pj1logo,
      logoalt: "로고",
      link: "./pj2",
      title: "2javascript web",
      tag: "#PC #sfsd #Sasdfaser #Aasfds",
    },
    {
      id: 3,
      img: pj1img,
      imgalt: "코코디자인",
      logo: pj1logo,
      logoalt: "로고",
      link: "./pj3",
      title: "3react web1",
      tag: "#aa #개인프ss로젝트 #Sasr #Afsdf",
    },
    {
      id: 4,
      img: tpj1img,
      imgalt: "야놀자",
      logo: tpj1logo,
      logoalt: "야놀자로고",
      link: "./tpj1",
      title: "4html web team",
      tag: "#PC #팀프로젝트 #Swiper #Axios",
    },
    {
      id: 5,
      img: tpj2img,
      imgalt: "상상인증권",
      logo: tpj2logo,
      logoalt: "상상인증권로고",
      link: "./tpj2",
      title: "5javascript web team",
      tag: "#PC #팀프로젝트 #Scroll #Axios",
    },
  ];
  let [num, setNum] = useState(0);
  const [title, setTitle] = useState(projectData[num].title);
  const [tag, setTag] = useState(projectData[num].tag);
  const [link, setLink] = useState(projectData[num].link);

  const topRef = useRef([]);
  const desRef = useRef([]);
  let count = 0;

  const eventHandler = () => {
    for (let i = 0; i < topRef.current.length; i++) {
      const refvalue = topRef.current[i].offsetTop;

      if (desRef.current.offsetTop >= refvalue - 250) {
        setNum(i);
      }
      setTitle(projectData[num].title);
      setTag(projectData[num].tag);
      setLink(projectData[num].link);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      eventHandler();
      window.removeEventListener("scroll", eventHandler);
    });
  }, [num]);
  return (
    <div className="work1">
      <div className="workdes1">
        <div className="desBox" ref={desRef}>
          <h4>work</h4>
          <h3>{title}</h3>
          <p>{tag}</p>
          <Link to={link}>
            <div className="iconBox">
              <span>
                <BsArrowRight />
              </span>
            </div>
            view more
          </Link>
        </div>
      </div>
      <div className="workWrapper">
        {projectData.map((item) => (
          <div
            className="workBox1"
            key={item.id}
            ref={(item) => (topRef.current[count++] = item)}
          >
            <Link to={item.link}>
              <img src={item.img} alt={item.imgalt} className="bgimgBox" />
            </Link>
            <img src={item.logo} alt={item.logoalt} className="logoBox" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work1;
