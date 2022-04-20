import "./App.css";

//import components
import Home from "./components/Home/index";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
