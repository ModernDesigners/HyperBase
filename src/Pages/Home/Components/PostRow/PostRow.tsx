import { useState } from "react";
import postsAPI from "../../../../API/postsAPI";
import Post from "../../../../Components/Post/Post";
import PostBlock from "../PostBlock/PostBlock";

export interface IPost {
  UserID: number;
  Image: string | null;
  Description: string;
  Hearts: number;
  Comments: number;
}
export default function PostRow() {
  const [getPosts, setPosts] = useState<IPost[]>(postsAPI);

  return (
    <div className="PostRow m-10">
      <PostBlock post={getPosts} setPost={setPosts} />

      {getPosts.map((e: IPost) => (
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
