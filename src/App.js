import "./App.css";
import Menubar from "@/component/menubar/Menubar";
import Header from "@/component/header/Header";

function App() {
  return (
    <div className="App">
      <div className="headerArea">
        <Header />
      </div>
      <Menubar />
      <div className="ad-area">
        <img
          alt="ad"
          src="	https://ssl.pstatic.net/tveta/libs/1384/1384779/0e5dfb01e3e9a83a8316_20220513141830215.png"
        />
      </div>
      <div className="weather-area"></div>
    </div>
  );
}

export default App;
