import "./Nav.css";
import logo from "../../Images/logo.png";
import user from "../../Images/Users/user2.png";
import search from "../../Images/Icons/nav/search.png";
import cloud from "../../Images/Icons/cloudchange.png";
import support from "../../Images/Icons/support.png";
import feedback from "../../Images/Icons/feedback.png";
import logout from "../../Images/Icons/logout.png";

import { useEffect, useState } from "react";
import { DarkMode } from "../DarkMode/DarkMode";
import { Link, useLocation } from "react-router-dom";

export default function Nav(props: {
  darkmoder: React.MutableRefObject<boolean>;
  session: boolean;
  setSession: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [navActive, setNavActive] = useState(-1);
  const [profBlock, setProfBlock] = useState(false);
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setNavActive(0);
        break;
      case "/Games":
        setNavActive(1);
        break;

      default:
        break;
    }
    if (location.pathname.includes("Profile")) setNavActive(-1);
  });

  const darkModeToggle = () => {
    DarkMode(!props.darkmoder.current);
    props.darkmoder.current = !props.darkmoder.current;
  };
  return (
    <nav>
      <div className="container">
        <div className="navLogo">
          <Link to="/">
            <div className="logoIcon">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          {props.session ? (
            <div className="navSearch">
              <input type="text" placeholder="მოძებნა" />
              <img src={search} alt="search" />
            </div>
          ) : undefined}
        </div>
        {props.session ? (
          <>
            <div className="navRoutes">
              <ul>
                <Link to="/">
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
                </Link>
                <Link to="/Games">
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
                </Link>

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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.3527 10.62C14.246 10.44 13.946 10.16 13.1993 10.2933C12.786 10.3667 12.366 10.4 11.946 10.38C11.1969 10.346 10.4623 10.1621 9.78552 9.83922C9.10876 9.5163 8.50366 9.06091 8.00601 8.5C7.13935 7.53333 6.60601 6.27333 6.59935 4.91333C6.59935 4.15333 6.74601 3.42 7.04601 2.72666C7.33935 2.05333 7.13268 1.7 6.98601 1.55333C6.83268 1.4 6.47268 1.18666 5.76601 1.48C3.03935 2.62666 1.35268 5.36 1.55268 8.28666C1.75268 11.04 3.68601 13.3933 6.24601 14.28C6.86665 14.4965 7.51589 14.6201 8.17268 14.6467C8.27935 14.6533 8.38601 14.66 8.49268 14.66C10.726 14.66 12.8193 13.6067 14.1393 11.8133C14.586 11.1933 14.466 10.8 14.3527 10.62Z" />
                </svg>
              </div>
              <div className="navButton">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.4 6.14727C12.1933 6.14727 11.7 5.29394 12.3 4.24728C12.6466 3.64061 12.44 2.86728 11.8333 2.52061L10.68 1.86061C10.1533 1.54728 9.47331 1.73394 9.15998 2.26061L9.08665 2.38728C8.48665 3.43394 7.49998 3.43394 6.89331 2.38728L6.81998 2.26061C6.74811 2.1346 6.6519 2.02413 6.53695 1.93565C6.42199 1.84717 6.29059 1.78243 6.15038 1.74521C6.01017 1.70799 5.86396 1.69902 5.72026 1.71883C5.57655 1.73864 5.43822 1.78684 5.31331 1.86061L4.15998 2.52061C3.55331 2.86728 3.34665 3.64728 3.69331 4.25394C4.29998 5.29394 3.80665 6.14727 2.59998 6.14727C1.90665 6.14727 1.33331 6.71394 1.33331 7.41394V8.58727C1.33331 9.28061 1.89998 9.85394 2.59998 9.85394C3.80665 9.85394 4.29998 10.7073 3.69331 11.7539C3.34665 12.3606 3.55331 13.1339 4.15998 13.4806L5.31331 14.1406C5.83998 14.4539 6.51998 14.2673 6.83331 13.7406L6.90665 13.6139C7.50665 12.5673 8.49331 12.5673 9.09998 13.6139L9.17331 13.7406C9.48665 14.2673 10.1666 14.4539 10.6933 14.1406L11.8466 13.4806C12.4533 13.1339 12.66 12.3539 12.3133 11.7539C11.7066 10.7073 12.2 9.85394 13.4066 9.85394C14.1 9.85394 14.6733 9.28727 14.6733 8.58727V7.41394C14.6698 7.07793 14.5343 6.75677 14.2961 6.51979C14.0579 6.28281 13.736 6.14901 13.4 6.14727ZM7.99998 10.1673C6.80665 10.1673 5.83331 9.19394 5.83331 8.00061C5.83331 6.80728 6.80665 5.83394 7.99998 5.83394C9.19331 5.83394 10.1666 6.80728 10.1666 8.00061C10.1666 9.19394 9.19331 10.1673 7.99998 10.1673Z" />
                </svg>
              </div>
              <div className="navButton">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.8933 9.66003L12.2266 8.55336C12.0866 8.30669 11.96 7.84003 11.96 7.56669V5.88002C11.9592 5.13605 11.7478 4.4075 11.3502 3.77867C10.9526 3.14985 10.3851 2.64644 9.71332 2.32669C9.54186 2.02225 9.29178 1.76945 8.98921 1.59472C8.68664 1.41998 8.3427 1.32971 7.99332 1.33336C7.26665 1.33336 6.61332 1.72669 6.26665 2.34669C4.96665 2.99336 4.06665 4.33336 4.06665 5.88002V7.56669C4.06665 7.84003 3.93998 8.30669 3.79998 8.54669L3.12665 9.66003C2.85998 10.1067 2.79998 10.6 2.96665 11.0534C3.12665 11.5 3.50665 11.8467 3.99998 12.0134C5.29332 12.4534 6.65332 12.6667 8.01332 12.6667C9.37332 12.6667 10.7333 12.4534 12.0266 12.02C12.4933 11.8667 12.8533 11.5134 13.0266 11.0534C13.2 10.5934 13.1533 10.0867 12.8933 9.66003ZM9.88665 13.34C9.74645 13.7281 9.49017 14.0637 9.15262 14.301C8.81507 14.5384 8.41263 14.666 7.99998 14.6667C7.47332 14.6667 6.95332 14.4534 6.58665 14.0734C6.37332 13.8734 6.21332 13.6067 6.11998 13.3334C6.20665 13.3467 6.29332 13.3534 6.38665 13.3667C6.53998 13.3867 6.69998 13.4067 6.85998 13.42C7.23998 13.4534 7.62665 13.4734 8.01332 13.4734C8.39332 13.4734 8.77332 13.4534 9.14665 13.42C9.28665 13.4067 9.42665 13.4 9.55998 13.38L9.88665 13.34Z" />
                </svg>
              </div>
              <div className="navProfile">
                <img
                  src={user}
                  alt="user"
                  onClick={() => setProfBlock(!profBlock)}
                />
                <div className={`ProfileBlock${profBlock ? " PBShow" : ""}`}>
                  <div className="BlockContent">
                    <Link to="/Profile/3">
                      <div className="ProfB">
                        <img src={user} alt="userProfile" />
                        <div className="ProfI">
                          <p>ლუკა</p>
                          <p>ფეხშველაშვილი</p>
                        </div>
                      </div>
                    </Link>
                    <div className="Line"></div>
                    <div className="BlockOptions">
                      <button className="BlockB">
                        <img src={cloud} alt="cloud" /> <p>სხვა ანგარიშები</p>
                      </button>
                      <button className="BlockB">
                        <img src={support} alt="support" /> <p>დახმარება</p>
                      </button>
                      <button className="BlockB">
                        <img src={feedback} alt="feedback" />{" "}
                        <p>გამოხმაურება</p>
                      </button>
                      <button
                        className="BlockB"
                        onClick={() => props.setSession(false)}
                      >
                        <img src={logout} alt="logout" /> <p>გასვლა</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="navUser">
            <div className="navButton" onClick={darkModeToggle}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.3527 10.62C14.246 10.44 13.946 10.16 13.1993 10.2933C12.786 10.3667 12.366 10.4 11.946 10.38C11.1969 10.346 10.4623 10.1621 9.78552 9.83922C9.10876 9.5163 8.50366 9.06091 8.00601 8.5C7.13935 7.53333 6.60601 6.27333 6.59935 4.91333C6.59935 4.15333 6.74601 3.42 7.04601 2.72666C7.33935 2.05333 7.13268 1.7 6.98601 1.55333C6.83268 1.4 6.47268 1.18666 5.76601 1.48C3.03935 2.62666 1.35268 5.36 1.55268 8.28666C1.75268 11.04 3.68601 13.3933 6.24601 14.28C6.86665 14.4965 7.51589 14.6201 8.17268 14.6467C8.27935 14.6533 8.38601 14.66 8.49268 14.66C10.726 14.66 12.8193 13.6067 14.1393 11.8133C14.586 11.1933 14.466 10.8 14.3527 10.62Z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
