import "./App.css";
import Saidbar from "./components/RightSaidbarContent/Saidbar";
import SaibarImg1 from "../src/components/assets/Images/saidbar-img1.png";
import SaibarImg2 from "../src/components/assets/Images/saidbar-img2.png";
import SaibarImg3 from "../src/components/assets/Images/saidbar-img3.png";
import SaibarImg4 from "../src/components/assets/Images/saidbar-img4.png";
import SaibarImg5 from "../src/components/assets/Images/saidbar-img5.png";
import SaibarImg6 from "../src/components/assets/Images/saidbar-img6.png";
import SaibarImg7 from "../src/components/assets/Images/saidbar-img7.png";
import SaibarImg8 from "../src/components/assets/Images/saidbar-img8.png";
import { useState } from "react";
import Main from "./components/MainContent/Main";
// import Header from "./components/Header/Header";

function App() {
  const [contents, setContents] = useState([
    { img: `${SaibarImg1}`, title: "Overwiew" },
    { img: `${SaibarImg2}`, title: "Tickets" },
    { img: `${SaibarImg3}`, title: "Ideas" },
    { img: `${SaibarImg4}`, title: "Contacts" },
    { img: `${SaibarImg5}`, title: "Agents" },
    { img: `${SaibarImg6}`, title: "Articles" },
    { img: `${SaibarImg7}`, title: "Settings" },
    { img: `${SaibarImg8}`, title: "Subscription" },
  ]);

  const data = [
    {name: "Unresolved",number: 60},
    {name: "Overdue",number: 16},
    {name: "Open",number: 43},
    {name: "On hold",number: 64},
  ];

  return (
    <>
      <div className="app">
        <Saidbar contents={contents} />
        <Main data={data}/>
      </div>
    </>
  );
}

export default App;
