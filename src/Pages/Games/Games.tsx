import { GamesAPI } from "../../API/GamesAPI";
import Game from "../../Components/Game/Game";
import leftArrow from "../../Images/Icons/leftArrow.png";
import rightArrow from "../../Images/Icons/rightArrow.png";
import "./Games.css";
import PopularGames from "./PopularGames/PopularGames";
export default function Games() {
  return (
    <div className="games">
      <PopularGames />
      <div className="games-main">
        <div className="games-header">
          <h2>დღის თამაშები</h2>
          <div>
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className="games-flex">
          {GamesAPI.gamesOfDay.map((e, i) => (
            <Game
              key={i}
              image={e.image}
              ratingQuantity={e.rating}
              medalQuantity={e.medal}
            />
          ))}
        </div>
      </div>

      <div className="games-main">
        <div className="games-header">
          <h2>დღის თამაშები</h2>
          <div>
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className="games-flex">
          {GamesAPI.sport.map((e, i) => (
            <Game
              key={i}
              image={e.image}
              ratingQuantity={e.rating}
              medalQuantity={e.medal}
            />
          ))}
        </div>
      </div>

      <div className="games-main">
        <div className="games-header">
          <h2>დღის თამაშები</h2>
          <div>
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className="games-flex">
          {GamesAPI.strategy.map((e, i) => (
            <Game
              key={i}
              image={e.image}
              ratingQuantity={e.rating}
              medalQuantity={e.medal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
