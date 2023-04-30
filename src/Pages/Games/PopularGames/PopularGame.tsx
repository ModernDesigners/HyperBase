import "./PopularGames.css";
interface PopularGameTypes {
  image: string;
  title: string;
  genre: string;
}
export default function PopularGame({ title, image, genre }: PopularGameTypes) {
  return (
    <div className="popular-game">
      <img src={image} alt="" />
      <div className="popular-game-info">
        <h3>{title}</h3>
        <p>{genre}</p>
      </div>
    </div>
  );
}
