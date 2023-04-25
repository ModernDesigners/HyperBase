import groupsAPI from "../../API/groupsAPI";
import user from "../../Images/Users/user1.png";
import "./LeftBar.css";
import Promo1 from "../../Images/Promotions/promo1.png";
import Promo2 from "../../Images/Promotions/promo2.png";
import Promo3 from "../../Images/Promotions/promo3.png";
import Promo4 from "../../Images/Promotions/promo4.png";
import Promo5 from "../../Images/Promotions/promo5.png";
import Promo6 from "../../Images/Promotions/promo6.png";
export default function LeftBar() {
  return (
    <div className="LeftBar">
      <h2>ჯგუფები</h2>
      <div className="GroupsRow">
        {groupsAPI.map((e: string, i: number) => (
          <div key={i} className="GroupIcon">
            <img src={e} />
          </div>
        ))}
      </div>
      <div className="Line"></div>
      <h2>აქტივი</h2>
      <div className="ActiveRow">
        <div className="ActiveCard">
          <div className="CardImage">
            <img src={user} alt="user" />
          </div>
          <div className="CardInfo">
            <p>გიორგი</p>
            <p>კვარაცხელია</p>
          </div>
        </div>
        <div className="ActiveCard">
          <div className="CardImage">
            <img src={user} alt="user" />
          </div>
          <div className="CardInfo">
            <p>გიორგი</p>
            <p>კვარაცხელია</p>
          </div>
        </div>
        <div className="ActiveCard">
          <div className="CardImage">
            <img src={user} alt="user" />
          </div>
          <div className="CardInfo">
            <p>გიორგი</p>
            <p>კვარაცხელია</p>
          </div>
        </div>
        <div className="ActiveCard">
          <div className="CardImage">
            <img src={user} alt="user" />
          </div>
          <div className="CardInfo">
            <p>გიორგი</p>
            <p>კვარაცხელია</p>
          </div>
        </div>
        <div className="ActiveCard">
          <div className="CardImage">
            <img src={user} alt="user" />
          </div>
          <div className="CardInfo">
            <p>გიორგი</p>
            <p>კვარაცხელია</p>
          </div>
        </div>
      </div>
      <div className="Line"></div>
      <h2>შემოთავაზებები</h2>
      <div className="Promotions">
        <div className="Promotion">
          <img src={Promo1} alt="Promotion" />
        </div>
        <div className="Promotion">
          <img src={Promo2} alt="Promotion" />
        </div>
        <div className="Promotion">
          <img src={Promo3} alt="Promotion" />
        </div>
        <div className="Promotion">
          <img src={Promo4} alt="Promotion" />
        </div>
        <div className="Promotion">
          <img src={Promo5} alt="Promotion" />
        </div>
        <div className="Promotion">
          <img src={Promo6} alt="Promotion" />
        </div>
      </div>
    </div>
  );
}
