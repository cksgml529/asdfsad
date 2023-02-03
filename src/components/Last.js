import "../style/last.scss";

import laptop from "../assets/images/image/laptop.png";
import laptopf from "../assets/images/image/laptop_frame.png";
import { useEffect, useRef, useState } from "react";

function Last() {
  const [posL, setPosL] = useState(0);
  const [posR, setPosR] = useState(0);
  const txtWRef = useRef();
  const WBoxRef = useRef();
  const txtSRef = useRef();
  const SBoxRef = useRef();
  let txt = [];
  let txt1 = [];

  const reTxt = () => {
    txt.forEach((item) => item.parentNode.removeChild(item));
    txt = [];
    txt1 = [];
    const width = Math.ceil(txtWRef.current.clientWidth);
    const times = Math.ceil(window.innerWidth / width);
    const widthS = Math.ceil(txtSRef.current.clientWidth);
    const timesS = Math.ceil(window.innerWidth / widthS);
    for (let i = 0; i < times + 1; i++) {
      const clone = txtWRef.current.cloneNode(true);
      WBoxRef.current.append(clone);
      txt.push(clone);
    }
    for (let i = 0; i < timesS + 1; i++) {
      const clone1 = txtSRef.current.cloneNode(true);
      txtSRef.current.parentNode.prepend(clone1);
      txt1.push(clone1);
    }
  };

  useEffect(() => {
    const rolling = setInterval(() => {
      reTxt();
      setPosL(posL - 13);
      WBoxRef.current.style.transform = `translateX(${posL}px)`;
      setPosR(posR + 13);
      SBoxRef.current.style.transform = `translateX(${posR}px)`;
    }, 100);
    return () => clearInterval(rolling);
  }, [posL]);

  return (
    <div className="last">
      <div className="textBox">
        <div className="WBox" ref={WBoxRef}>
          <p ref={txtWRef}>front-end&nbsp;</p>
        </div>
        <div className="SBox" ref={SBoxRef}>
          <p className="stroke" ref={txtSRef}>
            front-end&nbsp;
          </p>
        </div>
      </div>

      <div className="imgBox">
        <img src={laptop} alt="laptop" className="laptop" />
        <img src={laptopf} alt="laptop_frame" className="frame" />
      </div>
    </div>
  );
}

export default Last;
