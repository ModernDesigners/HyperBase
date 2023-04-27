import { ProfilePostsAPI } from "../../../../../API/ProfilePostsAPI";
import { profileStoriesAPI } from "../../../../../API/profileStoriesAPI";
import "./UserLeftside.css";
export default function UserLeftside() {
  return (
    <div className="user-leftside">
      <div className="user-leftside-header">
        <h2>ფოტოები</h2>
        <h2>ყველას ნახვა</h2>
      </div>
      <div className="user-leftside-images">
        {ProfilePostsAPI.map((e) => (
          <img src={e.image} alt="" />
        ))}
      </div>
      <div className="user-leftside-stories">
        <h2>სიუჟეტები</h2>
        <div className="stories-flex">
          {profileStoriesAPI.map((e) => (
            <img src={e.image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
