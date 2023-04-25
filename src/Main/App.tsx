import { useState } from "react";
import LeftBar from "../Components/LeftBar/LeftBar";
import Nav from "../Components/Nav/Nav";
import Home from "../Pages/Home/Home";
import "./App.css";
import ActiveChatHeads from "../Components/ActiveChatHeads/ActiveChatHeads";

function App() {
  const [activeChats, setActiveChats] = useState([0]);

  return (
    <div className="App">
      <Nav />
      <div className="content">
        <LeftBar activeChats={activeChats} setActiveChats={setActiveChats} />
        <div className="containerC">
          <Home />
        </div>
      </div>
      <ActiveChatHeads activeChats={activeChats} />
    </div>
  );
}

export default App;
