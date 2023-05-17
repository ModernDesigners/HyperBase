import { createContext, useEffect, useRef, useState } from "react";
import LeftBar from "../Components/LeftBar/LeftBar";
import Nav from "../Components/Nav/Nav";
import Home from "../Pages/Home/Home";
import "./App.css";
import ActiveChatHeads from "../Components/ActiveChatHeads/ActiveChatHeads";
import Chats from "../Components/Chats/Chats";
import { DarkMode } from "../Components/DarkMode/DarkMode";
import Profile from "../Pages/Profile/Profile";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Games from "../Pages/Games/Games";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const userSession = createContext<any>({});

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const darkmoder = useRef<boolean>(false);
  const [session, setSession] = useState({
    id: 1,
    loggedIn: true,
    username: "ლუკა",
    surname: "ფეხშველაშვილი",
    mail: "battelerx@gmail.com",
    password: "TESTVIEW",
  });

  useEffect(() => {
    if (localStorage.getItem("DarkMode") == "1") {
      DarkMode(true);
      darkmoder.current = true;
    }
  }, []);
  useEffect(() => {
    if (
      session.loggedIn == false &&
      location.pathname != "/Login" &&
      location.pathname != "/Register"
    ) {
      navigate("/Login");
    }
  }, [session]);

  const [activeChats, setActiveChats] = useState([0]);
  const [chats, setChats] = useState<number[]>([]);
  const [focus, setFocus] = useState<number>(-1);

  return (
    <div className="App">
      <userSession.Provider
        value={{ session: session, setSession: setSession }}
      >
        <Nav darkmoder={darkmoder} session={session} setSession={setSession} />
        <div className="content">
          {session.loggedIn ? (
            <LeftBar
              activeChats={activeChats}
              setActiveChats={setActiveChats}
            />
          ) : undefined}
          <div className="containerC">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="Profile/:id" element={<Profile />} />
                <Route path="Games" element={<Games />} />
                <Route path="Login" element={<Login session={session} />} />
                <Route
                  path="Register"
                  element={<Register session={session} />}
                />
              </Route>
            </Routes>
          </div>
        </div>
        {session.loggedIn ? (
          <Chats
            setFocus={setFocus}
            chats={chats}
            setChats={setChats}
            focus={focus}
          />
        ) : undefined}

        {session.loggedIn ? (
          <ActiveChatHeads
            setFocus={setFocus}
            activeChats={activeChats}
            setChats={setChats}
            chats={chats}
          />
        ) : undefined}
      </userSession.Provider>
    </div>
  );
}

export default App;
