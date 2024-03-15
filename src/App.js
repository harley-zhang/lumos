import { FaPlus } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <LuBrainCircuit size={35} className="logo" />
            <span className="brand">LumosAI</span>
          </div>
          <button className="midBtn"><FaPlus size={25} className="plus" /><span className="addBtn" >New Chat</span></button>
          <div className="upperSideBottom">
            <button className="query"><FiMessageSquare size={35} className="messageSquare" />What are the ingredients for a chicken parm?</button>
            <button className="query"><FiMessageSquare size={35} className="messageSquare" />hello</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><GoHomeFill size={35} className="listItemsIcons" />Home</div>
          <div className="listItems"><FaBookmark size={35} className="listItemsIcons" />Saved</div>
        </div>
      </div>
      <div className="main">
      </div>
    </div>
  );
}

export default App;
