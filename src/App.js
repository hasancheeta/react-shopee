import "./App.css";

//import components
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
