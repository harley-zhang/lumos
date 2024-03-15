import { FaPlus } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { IoSend } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";


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
          <button className="midBtn"><FaPlus size={25} className="plusIcon" /><span className="addBtn" >New Chat</span></button>
          <div className="upperSideBottom">
            <button className="query"><FiMessageSquare size={35} className="messageIcon" />What are the ingredients for a chicken parm?</button>
            <button className="query"><FiMessageSquare size={35} className="messageIcon" />hello</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><GoHomeFill size={35} className="listItemsIcons" />Home</div>
          <div className="listItems"><FaBookmark size={35} className="listItemsIcons" />Saved</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <FaUserCircle size={35} className="chatIcon" /><p className="txt">lorem ipsum</p>
          <LuBrainCircuit size={35} className="chatIcon" /><p className="txt">lorem ipsum</p>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="send a message" /><button className="send"><IoSend size={35} className="sendIcon" /></button>
          </div>
          <p>ChatGPT may produce inacr</p>
        </div>
      </div>
    </div>
  );
}

export default App;
