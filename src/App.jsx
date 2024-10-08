import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { cardData } from "./data/cardData";
function App() {
  const cards = cardData.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards">{cards}</div>
      <Footer />
    </>
  );
}

export default App;
