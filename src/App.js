import "./App.css";

//import components
import Home from "./components/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
    </div>
  );
}

export default App;
