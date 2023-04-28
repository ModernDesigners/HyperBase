import postsAPI from "../../../../../API/postsAPI";
import { profileStoriesAPI } from "../../../../../API/profileStoriesAPI";
import "./UserLeftside.css";
interface IUser {
  ID: number;
  ProfileImage: string;
  ProfileBanner: string;
  Username: string;
  Surname: string;
  active: number;
}
[];
export default function UserLeftside(props: { UserData: IUser }) {
  return (
    <div className="user-leftside m-4">
      <div className="user-leftside-header">
        <h2>ფოტოები</h2>
        <h2>ყველას ნახვა</h2>
      </div>
      <div className="user-leftside-images">
        {postsAPI.map((e, i: number) =>
          e.UserID == props.UserData.ID && e.Image !== null ? (
            <img key={i} src={e.Image} alt="post" />
          ) : undefined
        )}
      </div>
      <div className="user-leftside-stories">
        <h2>სიუჟეტები</h2>
        <div className="stories-flex">
          {profileStoriesAPI.map((e: { image: string }, i: number) => (
            <div key={i} className="story-block">
              <img src={e.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
