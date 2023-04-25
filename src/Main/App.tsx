import LeftBar from "../Components/LeftBar/LeftBar";
import Nav from "../Components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <div className="containerC">
          <LeftBar />
        </div>
      </div>
    </div>
  );
}

export default App;
