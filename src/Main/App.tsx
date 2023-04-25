import LeftBar from "../Components/LeftBar/LeftBar";
import Nav from "../Components/Nav/Nav";
import Home from "../Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <LeftBar />
        <div className="containerC">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
