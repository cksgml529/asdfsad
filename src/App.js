import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Contact from "./layout/Contact";

import "./assets/style/style.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
