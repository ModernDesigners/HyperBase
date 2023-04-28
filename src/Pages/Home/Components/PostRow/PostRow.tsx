import { useState } from "react";
import postsAPI from "../../../../API/postsAPI";
import Post from "../../../../Components/Post/Post";
import PostBlock from "../PostBlock/PostBlock";

export default function PostRow() {
  const [post, setPost] = useState(false);
  interface IPost {
    UserID: number;
    Image: string | null;
    Description: string;
    Hearts: number;
    Comments: number;
  }
  return (
    <div className="PostRow m-10">
      <PostBlock post={post} setPost={setPost} />
      {postsAPI.map((e: IPost, i: number) => (
        <Post
          key={Math.random()}
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
