import newsAPI from "../../../../API/newsAPI";

export default function NewsRow() {
  return (
    <div className="NewsRow m-2">
      <h2>სიახლეები</h2>
      <div className="Line"></div>
      <div className="NewsCards">
        {newsAPI.map((e: string, i: number) => (
          <div key={i} className="NewsCard">
            <img src={e} alt="NewsCard" />
          </div>
        ))}
      </div>
    </div>
  );
}
