import "./Post.css";
import user1 from "../../Images/Users/user1.png";
import post1 from "../../Images/Posts/post1.png";
import HeartIcon from "../../Images/Icons/heart.png";
import CommentIcon from "../../Images/Icons/comment.png";

export default function Post() {
  return (
    <div className="Post">
      <div className="PostUser">
        <div className="PostUserImage">
          <img src={user1} alt="user" />
        </div>
        <div className="PostUserInfo">
          <p>გიორგი</p>
          <p>კვარაცხელია</p>
        </div>
      </div>
      <p className="PostDescription">უყურეთ ახალ სერიას????? მაგრად გაასწორა</p>
      <div className="PostImage">
        <img src={post1} alt="PostImage" />
      </div>
      <div className="PostReacts">
        <div className="PostReactors PostHearts">
          <img src={HeartIcon} alt="HeartIcon" />
          <p>2.2K</p>
        </div>
        <div className="PostReactors PostComments">
          <img src={CommentIcon} alt="CommentIcon" />
          <p>192</p>
        </div>
      </div>
    </div>
  );
}
