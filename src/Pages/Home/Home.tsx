import NewsRow from "./Components/NewsRow/NewsRow";
import PostRow from "./Components/PostRow/PostRow";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <PostRow />
      <NewsRow />
    </div>
  );
}
