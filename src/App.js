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
    </div>
  );
}

export default App;
