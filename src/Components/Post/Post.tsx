import "./Post.css";
import usersAPI from "../../API/usersAPI";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [postLikes, setPostLikes] = useState(Hearts);
  const [likeToggle, setLikeToggle] = useState(false);
  const UserData = usersAPI.filter((e) => e.ID == UserID)[0];

  const getLiked = () => {
    if (likeToggle) setPostLikes(postLikes - 1);
    else setPostLikes(postLikes + 1);
    setLikeToggle(!likeToggle);
  };
  return (
    <div className="Post">
      <Link to={"/Profile/" + UserData.ID}>
        <div className="PostUser">
          <div className="PostUserImage">
            <img src={UserData.ProfileImage} alt="user" />
          </div>
          <div className="PostUserInfo">
            <p>{UserData.Username}</p>
            <p>{UserData.Surname}</p>
          </div>
        </div>
      </Link>
      <p className="PostDescription">{Description}</p>
      <div className="PostImage">
        <img src={Image} alt="PostImage" />
      </div>
      <div className="PostReacts">
        <div
          className={`PostReactors PostHearts${likeToggle ? " PostLiked" : ""}`}
          onClick={getLiked}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.96 2.06812C9.75334 2.06812 8.67334 2.65478 8.00001 3.55478C7.6561 3.09399 7.20951 2.71971 6.6957 2.46164C6.18189 2.20358 5.61499 2.06884 5.04001 2.06812C2.99334 2.06812 1.33334 3.73478 1.33334 5.79478C1.33334 6.58812 1.46001 7.32145 1.68001 8.00145C2.73334 11.3348 5.98001 13.3281 7.58668 13.8748C7.81334 13.9548 8.18668 13.9548 8.41334 13.8748C10.02 13.3281 13.2667 11.3348 14.32 8.00145C14.54 7.32145 14.6667 6.58812 14.6667 5.79478C14.6667 3.73478 13.0067 2.06812 10.96 2.06812Z" />
          </svg>

          <p>{postLikes}</p>
        </div>
        <div className="PostReactors PostComments">
          <svg
            width="21"
            height="21"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.3333 1.33325H4.66666C2.82666 1.33325 1.33333 2.81992 1.33333 4.65325V9.30659C1.33333 11.1399 2.82666 12.6266 4.66666 12.6266H5.66666C5.84666 12.6266 6.08666 12.7466 6.19999 12.8933L7.19999 14.2199C7.63999 14.8066 8.35999 14.8066 8.79999 14.2199L9.79999 12.8933C9.92666 12.7266 10.1267 12.6266 10.3333 12.6266H11.3333C13.1733 12.6266 14.6667 11.1399 14.6667 9.30659V4.65325C14.6667 2.81992 13.1733 1.33325 11.3333 1.33325ZM5.33333 7.99992C4.95999 7.99992 4.66666 7.69992 4.66666 7.33325C4.66666 6.96659 4.96666 6.66659 5.33333 6.66659C5.69999 6.66659 5.99999 6.96659 5.99999 7.33325C5.99999 7.69992 5.70666 7.99992 5.33333 7.99992ZM7.99999 7.99992C7.62666 7.99992 7.33333 7.69992 7.33333 7.33325C7.33333 6.96659 7.63333 6.66659 7.99999 6.66659C8.36666 6.66659 8.66666 6.96659 8.66666 7.33325C8.66666 7.69992 8.37333 7.99992 7.99999 7.99992ZM10.6667 7.99992C10.2933 7.99992 9.99999 7.69992 9.99999 7.33325C9.99999 6.96659 10.3 6.66659 10.6667 6.66659C11.0333 6.66659 11.3333 6.96659 11.3333 7.33325C11.3333 7.69992 11.04 7.99992 10.6667 7.99992Z" />
          </svg>

          <p>{Comments}</p>
        </div>
      </div>
    </div>
  );
}
