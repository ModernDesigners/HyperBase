import postsAPI from "../../../../../API/postsAPI";
import Post from "../../../../../Components/Post/Post";
import "./UserRightside.css";
interface IUser {
  ID: number;
  ProfileImage: string;
  ProfileBanner: string;
  Username: string;
  Surname: string;
  active: number;
}
[];
export default function UserRightside(props: { UserData: IUser }) {
  interface IPost {
    UserID: number;
    Image: string | null;
    Description: string;
    Hearts: number;
    Comments: number;
  }
  [];
  return (
    <div className="user-rightside m-8">
      {postsAPI.map((e: IPost, i: number) =>
        e.UserID == props.UserData.ID ? (
          <Post
            key={i}
            UserID={e.UserID}
            Image={e.Image}
            Description={e.Description}
            Hearts={e.Hearts}
            Comments={e.Comments}
          />
        ) : undefined
      )}
    </div>
  );
}
