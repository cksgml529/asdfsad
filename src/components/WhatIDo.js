import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper";
import lisence from "../assets/images/icon/whatido_lisence.png";
import flow from "../assets/images/icon/whatido_flow.png";

import "../style/whatIDo.scss";

function WhatIDo() {
  const int1 = ["Hello, my name is"];
  const int2 = ["chan hee"];
  const [intro1, setIntro1] = useState(int1);
  const [intro2, setIntro2] = useState(int2);
  const [pos, setPos] = useState(0);
  const [txtCon, setTxtCon] = useState([]);
  const rollingRef = useRef();
  const reTxtRef = useRef();
  let txt = [];

  const reTxt = () => {
    txt.forEach((item) => item.parentNode.removeChild(item));
    txt = [];
    const width = Math.ceil(reTxtRef.current.clientWidth);
    const times = Math.ceil(window.innerWidth / width);
    for (let i = 0; i < times + 1; i++) {
      const clone = reTxtRef.current.cloneNode(true);
      reTxtRef.current.parentNode.appendChild(clone);
      txt.push(clone);
    }
  };

  useEffect(() => {
    const rolling = setInterval(() => {
      reTxt();
      setPos(pos - 10);
      rollingRef.current.style.transform = `translateX(${pos}px)`;
    }, 100);
    return () => clearInterval(rolling);
  }, [pos]);
  // useEffect(() => {
  //   const rolling = setInterval(() => {
  //     reTxt();
  //     setPos(pos - 10);
  //     rollingRef.current.style.transform = `translateX(${pos}px)`;
  //   }, 100);
  //   return () => clearInterval(rolling);
  // }, [pos]);
  return (
    <div className="whatido">
      <div className="introBox" ref={rollingRef}>
        <h3 ref={reTxtRef}>
          {intro1} <span>{intro2}&nbsp;</span>
        </h3>
        {txtCon}
      </div>
      <div className="textBox">
        <p>
          SQLD / 정보처리기사
          <span className="strong">자격증 취득 </span>
          <span className="imgBox">
            <img src={lisence} alt="lisence" />
          </span>
          에 힘쓰겠습니다
        </p>
        <p>
          <span className="imgBox">
            <img src={flow} alt="flow" />
          </span>
          흘러가는 새로운 변화에도 빠르게 적응하겠습니다.
        </p>
        <p>성공적인 프로젝트를 위해 서슴치않고 도전하겠습니다.</p>
        <p className="line">일당백 사원이 되겠습니다.</p>
      </div>
    </div>
  );
}

export default WhatIDo;
