import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import "../style/workdes.scss";

function WorkDes({ top }) {
  const workData = [
    {
      id: 1,
      title: "react web",
      tag: "#PC #개인프로젝트 #Swiper #Axios",
      link: "./pj1",
    },
    {
      id: 2,
      title: "javascript web",
      tag: "#PC #개인프로젝트 #Swiper #Axios",
      link: "./tpj1",
    },
    {
      id: 3,
      title: "react web",
      tag: "#PC #개인프로젝트 #Swiper #Axios",
      link: "./tpj2",
    },
    {
      id: 4,
      title: "html web team",
      tag: "#PC #팀프로젝트 #Swiper #Axios",
      link: "./pj",
    },
    {
      id: 5,
      title: "javascript web team",
      tag: "#PC #팀프로젝트 #Scroll #Axios",
    },
  ];
  const titleRef = useRef();
  const tagRef = useRef();
  const [title, setTitle] = useState(workData[0].title);
  const [tag, setTag] = useState(workData[0].tag);
  const [link, setLink] = useState(workData[0].link);

  return (
    <div className="workDes">
      <div className="workBox">
        <h4>work</h4>
        <h3 ref={titleRef}>{title}</h3>
        <p ref={tagRef}>{tag}</p>
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
  );
}

export default WorkDes;
