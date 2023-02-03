import { useState } from "react";

const [xy, setXY] = useState({ x: 0, y: 0 });
const mouseHandler = (e) => {
  setXY({ x: e.clientX, y: e.clientY });
};
export mouseHandler;