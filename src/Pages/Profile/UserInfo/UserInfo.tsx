import "./UserInfo.css";
import profilePic from "../../../Images/Users/user1.png";
import heart from "../../../Images/Icons/heart.png";
import friends from "../../../Images/Icons/friends.png";
import user from "../../../Images/Icons/user.png";
export default function UserInfo() {
  return (
    <div className="user-info">
      <div className="user-cover"></div>
      <div className="user-flex-info">
        <div className="user-leftside-info">
          <img src={profilePic} alt="" />
          <h2>გიორგი კავარცხელია</h2>
        </div>
        <div className="user-rightside-info">
          <div className="public-info">
            <div>
              <img src={heart} alt="" />
              <p>12.7K</p>
            </div>
            <div>
              <img src={friends} alt="" />
              <p>12.7K</p>
            </div>
          </div>
          <div className="friend">
            <h3>მეგობარი</h3>
            <img src={user} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
