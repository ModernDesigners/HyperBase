import { GamesAPI } from "../../../API/GamesAPI";
import PopularGame from "./PopularGame";
import leftArrow from "../../../Images/Icons/leftArrow.png";
import rightArrow from "../../../Images/Icons/rightArrow.png";
import "./PopularGames.css";
export default function PopularGames() {
  return (
    <div className="popular-games">
      <div className="games-header">
        <h2>დღის თამაშები</h2>
        <div>
          <img src={leftArrow} alt="" />
          <img src={rightArrow} alt="" />
        </div>
      </div>
      <div className="popular-games-flex">
        {GamesAPI.popularGames.map((e, i: number) => (
          <PopularGame
            key={i}
            image={e.image}
            title={e.title}
            genre={e.genre}
          />
        ))}
      </div>
    </div>
  );
}
