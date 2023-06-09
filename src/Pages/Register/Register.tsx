import "./Register.css";
import rocket from "../../Images/Decorations/rocket.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userSession } from "../../Main/App";
export default function Register(props: { session: any }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const session = useContext(userSession);

  const submitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password == repeatPassword) {
      axios
        .post("http://localhost:8000/GetRegister", {
          username: username,
          surname: surname,
          mail: mail,
          password: password,
        })
        .then((res) => {
          if (res.data.affectedRows == 1) {
            session.setSession({
              id: res.data.insertId,
              loggedIn: true,
              username: username,
              surname: surname,
              mail: mail,
              password: password,
            });
            navigate("/");
          }
        });
    } else {
      alert("პაროლები არ ემთხვევა");
    }
  };
  useEffect(() => {
    if (props.session.loggedIn) navigate("/");
  }, []);
  return (
    <div className="Register">
      <div className="m-6">
        <div className="FormBlock">
          <h2>
            ანგარიშის <span>შექმნა</span>
          </h2>
          <div className="FormContent">
            <form onSubmit={(e) => submitRegister(e)}>
              <div className="FormInputRow">
                <div className="FormRow">
                  <div className="FormInputer">
                    <p>სახელი</p>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      name="username"
                    />
                  </div>
                  <div className="FormInputer">
                    <p>გვარი</p>
                    <input
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      type="text"
                      name="surname"
                    />
                  </div>
                </div>
                <div className="FormInputer">
                  <p>მეილი</p>
                  <input
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    type="text"
                    name="mail"
                  />
                </div>
                <div className="FormInputer">
                  <p>პაროლი</p>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    name="password"
                  />
                </div>
                <div className="FormInputer">
                  <p>გაიმეორეთ პაროლი</p>
                  <input
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    type="text"
                    name="repeatPassword"
                  />
                </div>
              </div>
              <button>რეგისტრაცია</button>
            </form>

            <p className="AccountP">
              უკვე გაქვთ ანგარიში?
              <span>
                <Link to="/Login">ავტორიზაცია</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="m-6">
        <div className="RocketBlock">
          <h1>
            მოგესალმებით <span>HYPERBASE</span> - ში !
          </h1>
          <p>ქართული სოციალური ქსელი</p>
          <img src={rocket} alt="Rocket" />
        </div>
      </div>
      <div className="BgWaves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgba(157, 66, 238, 0.4)"
            fillOpacity="1"
            d="M0,160L60,170.7C120,181,240,203,360,213.3C480,224,600,224,720,240C840,256,960,288,1080,282.7C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgba(157, 66, 238, 0.6)"
            fillOpacity="1"
            d="M0,288L120,293.3C240,299,480,309,720,309.3C960,309,1200,299,1320,293.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgba(157, 66, 238, 0.1)"
            fillOpacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,117.3C480,128,600,160,720,170.7C840,181,960,171,1080,165.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgba(157, 66, 238, 0.1)"
            fillOpacity="1"
            d="M0,160L60,165.3C120,171,240,181,360,197.3C480,213,600,235,720,213.3C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
