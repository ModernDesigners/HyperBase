import { useEffect, useRef, useState } from "react";
import LeftBar from "../Components/LeftBar/LeftBar";
import Nav from "../Components/Nav/Nav";
import Home from "../Pages/Home/Home";
import "./App.css";
import ActiveChatHeads from "../Components/ActiveChatHeads/ActiveChatHeads";
import Chats from "../Components/Chats/Chats";
import { DarkMode } from "../Components/DarkMode/DarkMode";
import Profile from "../Pages/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import Games from "../Pages/Games/Games";

function App() {
  const darkmoder = useRef<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem("DarkMode") == "1") {
      DarkMode(true);
      darkmoder.current = true;
    }
  }, []);

  const [activeChats, setActiveChats] = useState([0]);
  const [chats, setChats] = useState<number[]>([]);
  const [focus, setFocus] = useState<number>(-1);

  return (
    <div className="App">
      <Nav darkmoder={darkmoder} />
      <div className="content">
        <LeftBar activeChats={activeChats} setActiveChats={setActiveChats} />
        <div className="containerC">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="Profile/:id" element={<Profile />} />
              <Route path="Games" element={<Games />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Chats
        setFocus={setFocus}
        chats={chats}
        setChats={setChats}
        focus={focus}
      />
      <ActiveChatHeads
        setFocus={setFocus}
        activeChats={activeChats}
        setChats={setChats}
        chats={chats}
      />
    </div>
  );
}

export default App;
