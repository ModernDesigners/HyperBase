import "./Post.css";
import HeartIcon from "../../Images/Icons/heart.png";
import CommentIcon from "../../Images/Icons/comment.png";
import usersAPI from "../../API/usersAPI";

interface IPost {
  UserID: number;
  Image: string;
  Description: string;
  Hearts: number;
  Comments: number;
}

export default function Post({
  UserID,
  Image,
  Description,
  Hearts,
  Comments,
}: IPost) {
  const UserData = usersAPI.filter((e) => e.ID == UserID)[0];

  return (
    <div className="Post">
      <div className="PostUser">
        <div className="PostUserImage">
          <img src={UserData.ProfileImage} alt="user" />
        </div>
        <div className="PostUserInfo">
          <p>{UserData.Username}</p>
          <p>{UserData.Surname}</p>
        </div>
      </div>
      <p className="PostDescription">{Description}</p>
      <div className="PostImage">
        <img src={Image} alt="PostImage" />
      </div>
      <div className="PostReacts">
        <div className="PostReactors PostHearts">
          <img src={HeartIcon} alt="HeartIcon" />
          <p>{Hearts}</p>
        </div>
        <div className="PostReactors PostComments">
          <img src={CommentIcon} alt="CommentIcon" />
          <p>{Comments}</p>
        </div>
      </div>
    </div>
  );
}
