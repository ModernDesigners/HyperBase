import { ProfilePostsAPI } from "../../../../../API/ProfilePostsAPI";
import Post from "../../../../../Components/Post/Post";
import "./UserRightside.css";

export default function UserRightside() {
  return (
    <div className="user-rightside">
      {ProfilePostsAPI.map((e) => (
        <Post
          UserID={0}
          Image={e.image}
          Description={""}
          Hearts={0}
          Comments={0}
        />
      ))}
    </div>
  );
}
