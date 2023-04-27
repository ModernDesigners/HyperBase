import "./Nav.css";
import logo from "../../Images/logo.png";
import user from "../../Images/Users/user2.png";
import search from "../../Images/Icons/nav/search.png";
import moon from "../../Images/Icons/nav/moon.png";
import settings from "../../Images/Icons/nav/settings.png";
import notifications from "../../Images/Icons/nav/notifications.png";
import cloud from "../../Images/Icons/cloudchange.png";
import support from "../../Images/Icons/support.png";
import feedback from "../../Images/Icons/feedback.png";
import logout from "../../Images/Icons/logout.png";

import { useState } from "react";
import { DarkMode } from "../DarkMode/DarkMode";

export default function Nav(props: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [navActive, setNavActive] = useState(0);
  const [profBlock, setProfBlock] = useState(false);
  const darkModeToggle = () => {
    DarkMode(!props.darkMode);
    props.setDarkMode(!props.darkMode);
  };
  return (
    <nav>
      <div className="container">
        <div className="navLogo">
          <div className="logoIcon">
            <img src={logo} alt="logo" />
          </div>
          <div className="navSearch">
            <input type="text" placeholder="მოძებნა" />{" "}
            <img src={search} alt="search" />
          </div>
        </div>
        <div className="navRoutes">
          <ul>
            <li
              onClick={() => setNavActive(0)}
              className={`${navActive == 0 ? "liActive" : ""}`}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.0942 7.3425L13.09 2.53916C11.9167 1.60416 10.0833 1.595 8.91916 2.53L2.915 7.3425C2.05333 8.03 1.53083 9.405 1.71417 10.4867L2.86917 17.3983C3.135 18.9475 4.57417 20.1667 6.14167 20.1667H15.8583C17.4075 20.1667 18.8742 18.92 19.14 17.3892L20.295 10.4775C20.46 9.405 19.9375 8.03 19.0942 7.3425ZM11.6875 16.5C11.6875 16.8758 11.3758 17.1875 11 17.1875C10.6242 17.1875 10.3125 16.8758 10.3125 16.5V13.75C10.3125 13.3742 10.6242 13.0625 11 13.0625C11.3758 13.0625 11.6875 13.3742 11.6875 13.75V16.5Z" />
              </svg>
            </li>
            <li
              onClick={() => setNavActive(1)}
              className={`${navActive == 1 ? "liActive" : ""}`}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.2625 5.24243H6.7375C4.03334 5.24243 1.83334 7.44243 1.83334 10.1466V15.2616C1.83334 17.9658 4.03334 20.1658 6.7375 20.1658H15.2625C17.9667 20.1658 20.1667 17.9658 20.1667 15.2616V10.1466C20.1667 7.44243 17.9667 5.24243 15.2625 5.24243ZM13.2917 11.0174C13.2917 10.5133 13.7042 10.1008 14.2083 10.1008C14.7125 10.1008 15.125 10.5133 15.125 11.0174C15.125 11.5216 14.7125 11.9433 14.2083 11.9433C13.7042 11.9433 13.2917 11.5399 13.2917 11.0358V11.0174ZM9.28584 14.7299C9.14834 14.8674 8.97417 14.9316 8.8 14.9316C8.62584 14.9316 8.45167 14.8674 8.31417 14.7299L7.37 13.7858L6.4625 14.6933C6.325 14.8308 6.15084 14.8949 5.97667 14.8949C5.8025 14.8949 5.62834 14.8308 5.49084 14.6933C5.36298 14.5639 5.29128 14.3893 5.29128 14.2074C5.29128 14.0255 5.36298 13.851 5.49084 13.7216L6.39834 12.8141L5.51834 11.9341C5.39048 11.8047 5.31878 11.6302 5.31878 11.4483C5.31878 11.2664 5.39048 11.0918 5.51834 10.9624C5.78417 10.6966 6.22417 10.6966 6.49 10.9624L7.37 11.8424L8.2775 10.9349C8.54334 10.6691 8.98334 10.6691 9.24917 10.9349C9.515 11.2008 9.515 11.6408 9.24917 11.9066L8.34167 12.8141L9.28584 13.7583C9.55167 14.0241 9.55167 14.4641 9.28584 14.7299ZM12.4117 13.7491C11.9075 13.7491 11.4858 13.3366 11.4858 12.8324C11.4858 12.3283 11.8892 11.9158 12.3933 11.9158H12.4117C12.9158 11.9158 13.3283 12.3283 13.3283 12.8324C13.3283 13.3366 12.925 13.7491 12.4117 13.7491ZM14.2083 15.5549C13.7042 15.5549 13.2917 15.1516 13.2917 14.6474V14.6291C13.2917 14.1249 13.7042 13.7124 14.2083 13.7124C14.7125 13.7124 15.125 14.1249 15.125 14.6291C15.125 15.1333 14.7217 15.5549 14.2083 15.5549ZM16.0233 13.7491C15.5192 13.7491 15.0975 13.3366 15.0975 12.8324C15.0975 12.3283 15.5008 11.9158 16.005 11.9158H16.0233C16.5275 11.9158 16.94 12.3283 16.94 12.8324C16.94 13.3366 16.5367 13.7491 16.0233 13.7491Z" />
                <path d="M12.5033 2.48415L12.4942 3.34581C12.487 3.73816 12.3267 4.11214 12.0475 4.3879C11.7683 4.66365 11.3924 4.81932 11 4.82165C10.8625 4.82165 10.78 4.91331 10.78 5.03248C10.78 5.15165 10.8717 5.24331 10.9908 5.24331H9.515C9.50583 5.17915 9.49667 5.10581 9.49667 5.03248C9.49667 4.20748 10.1658 3.53831 10.9817 3.53831C11.1192 3.53831 11.2108 3.44665 11.2108 3.32748L11.22 2.46581C11.2292 2.11748 11.5133 1.83331 11.8617 1.83331H11.8708C12.2283 1.83331 12.5033 2.12665 12.5033 2.48415Z" />
              </svg>
            </li>
            <li
              onClick={() => setNavActive(2)}
              className={`${navActive == 2 ? "liActive" : ""}`}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.25 20.1666H13.75C15.2717 20.1666 16.5 18.9383 16.5 17.4166V4.58331C16.5 3.06165 15.2717 1.83331 13.75 1.83331H8.25C6.72833 1.83331 5.5 3.06165 5.5 4.58331V17.4166C5.5 18.9383 6.72833 20.1666 8.25 20.1666ZM4.125 5.43581V16.5641C4.12501 16.6321 4.10991 16.6992 4.08078 16.7607C4.05165 16.8221 4.00922 16.8762 3.95658 16.9192C3.90393 16.9622 3.84238 16.993 3.77638 17.0092C3.71039 17.0255 3.6416 17.0269 3.575 17.0133C2.21833 16.7658 1.83333 15.9775 1.83333 14.0525V7.94748C1.83333 6.02248 2.21833 5.23415 3.575 4.98665C3.6416 4.97305 3.71039 4.97444 3.77638 4.99071C3.84238 5.00698 3.90393 5.03773 3.95658 5.08073C4.00922 5.12372 4.05165 5.17789 4.08078 5.2393C4.10991 5.30072 4.12501 5.36784 4.125 5.43581ZM20.1667 7.94748V14.0525C20.1667 15.9775 19.7817 16.7658 18.425 17.0133C18.1408 17.0683 17.875 16.8483 17.875 16.5641V5.43581C17.875 5.36784 17.8901 5.30072 17.9192 5.2393C17.9483 5.17789 17.9908 5.12372 18.0434 5.08073C18.0961 5.03773 18.1576 5.00698 18.2236 4.99071C18.2896 4.97444 18.3584 4.97305 18.425 4.98665C19.7817 5.23415 20.1667 6.02248 20.1667 7.94748Z" />
              </svg>
            </li>
            <li
              onClick={() => setNavActive(3)}
              className={`${navActive == 3 ? "liActive" : ""}`}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.8408 1.83331H7.15917C3.8225 1.83331 1.83333 3.82248 1.83333 7.15915V14.8316C1.83333 18.1775 3.8225 20.1666 7.15917 20.1666H14.8317C18.1683 20.1666 20.1575 18.1775 20.1575 14.8408V7.15915C20.1667 3.82248 18.1775 1.83331 14.8408 1.83331ZM14.6667 11.6875H11.6875V14.6666C11.6875 15.0425 11.3758 15.3541 11 15.3541C10.6242 15.3541 10.3125 15.0425 10.3125 14.6666V11.6875H7.33333C6.9575 11.6875 6.64583 11.3758 6.64583 11C6.64583 10.6241 6.9575 10.3125 7.33333 10.3125H10.3125V7.33331C10.3125 6.95748 10.6242 6.64581 11 6.64581C11.3758 6.64581 11.6875 6.95748 11.6875 7.33331V10.3125H14.6667C15.0425 10.3125 15.3542 10.6241 15.3542 11C15.3542 11.3758 15.0425 11.6875 14.6667 11.6875Z" />
              </svg>
            </li>
          </ul>
        </div>
        <div className="navUser">
          <div className="navButton" onClick={darkModeToggle}>
            <img src={moon} alt="moon" />
          </div>
          <div className="navButton">
            <img src={settings} alt="settings" />
          </div>
          <div className="navButton">
            <img src={notifications} alt="notifications" />
          </div>
          <div className="navProfile">
            <img
              src={user}
              alt="user"
              onClick={() => setProfBlock(!profBlock)}
            />
            <div className={`ProfileBlock${profBlock ? " PBShow" : ""}`}>
              <div className="BlockContent">
                <div className="ProfB">
                  <img src={user} alt="userProfile" />
                  <div className="ProfI">
                    <p>ლუკა</p>
                    <p>ფეხშველაშვილი</p>
                  </div>
                </div>
                <div className="Line"></div>
                <div className="BlockOptions">
                  <button className="BlockB">
                    <img src={cloud} alt="cloud" /> <p>სხვა ანგარიშები</p>
                  </button>
                  <button className="BlockB">
                    <img src={support} alt="support" /> <p>დახმარება</p>
                  </button>
                  <button className="BlockB">
                    <img src={feedback} alt="feedback" /> <p>გამოხმაურება</p>
                  </button>
                  <button className="BlockB">
                    <img src={logout} alt="logout" /> <p>გასვლა</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
