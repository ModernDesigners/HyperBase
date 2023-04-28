import { useEffect, useState } from "react";
import LeftBar from "../Components/LeftBar/LeftBar";
import Nav from "../Components/Nav/Nav";
import Home from "../Pages/Home/Home";
import "./App.css";
import ActiveChatHeads from "../Components/ActiveChatHeads/ActiveChatHeads";
import Chats from "../Components/Chats/Chats";
import { DarkMode } from "../Components/DarkMode/DarkMode";
import Profile from "../Pages/Profile/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("DarkMode") == "1") {
      DarkMode(true);
      setDarkMode(true);
    }
  }, []);

  const [activeChats, setActiveChats] = useState([0]);
  const [chats, setChats] = useState<number[]>([]);
  const [focus, setFocus] = useState<number>(-1);

  return (
    <div className="App">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="content">
        <LeftBar activeChats={activeChats} setActiveChats={setActiveChats} />
        <div className="containerC">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="Profile/:id" element={<Profile />} />
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
