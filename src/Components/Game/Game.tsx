import "./Game.css";
import rating from "../../Images/Icons/rating.png";
import medal from "../../Images/Icons/medal.png";
import favorite from "../../Images/Icons/favorite.png";
interface GameTypes {
  image: string;
  ratingQuantity: number;
  medalQuantity: number;
}
export default function Game({
  image,
  medalQuantity,
  ratingQuantity,
}: GameTypes) {
  return (
    <div className="game">
      <img className="game-image" src={image} alt="" />
      <div className="game-info">
        <div className="game-info-leftside">
          <div>
            <img src={rating} alt="" />
            <p>{ratingQuantity}</p>
          </div>
          <div>
            <img src={medal} alt="" />
            <p>{medalQuantity}</p>
          </div>
        </div>
        <img className="game-favorite" src={favorite} alt="" />
      </div>
    </div>
  );
}
