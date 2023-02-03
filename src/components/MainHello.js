import { useState, useEffect } from "react";

import "../style/mainhello.scss";
import scroll from "../assets/images/image/scrolldown.png";

function MainHello() {
  const intro = [
    "처음을 생각하는",
    "",
    "변화에 준비되어있는",
    "",
    "안정을 추구하는",
    "",
    "계획적으로 실행하는",
    "",
  ];
  const [text, setText] = useState("");
  const [on, setOn] = useState(false);
  let [num, setNum] = useState(0);

  const onEvent = () => {
    setOn(!on);
  };

  useEffect(() => {
    const repeat = setInterval(() => {
      if (num === intro.length) num = 0;
      onEvent();
      setNum(num + 1);
      setText(intro[num]);
    }, 3000);
    return () => clearInterval(repeat);
  }, [on]);

  return (
    <div className="mainHello">
      <div className="helloBox">
        <h2>hello world!</h2>
        <p>
          <span className="line">
            <span className={"rolling " + (on ? "on" : "")}>{text}</span>
          </span>
          <span className="point">프론트엔드</span>
          개발자 입니다.
        </p>
      </div>
      <div className="circle">
        <img src={scroll} alt="scroll" />
      </div>
    </div>
  );
}

export default MainHello;
