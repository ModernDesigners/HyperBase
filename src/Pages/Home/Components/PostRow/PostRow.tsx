import postsAPI from "../../../../API/postsAPI";
import Post from "../../../../Components/Post/Post";

export default function PostRow() {
  interface IPost {
    UserID: number;
    Image: string;
    Description: string;
    Hearts: number;
    Comments: number;
  }
  return (
    <div className="PostRow m-10">
      {postsAPI.map((e: IPost, i: number) => (
        <Post
          key={i}
          UserID={e.UserID}
          Image={e.Image}
          Description={e.Description}
          Hearts={e.Hearts}
          Comments={e.Comments}
        />
      ))}
    </div>
  );
}
