// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { cardData } from "./data/cardData";
function App() {
  // console.log(cardData);
  const cards = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        image={card.image}
        stars={card.stars}
        reviewCount={card.reviewCount}
        location={card.location}
        title={card.title}
        alt={card.alt}
        price={card.price}
        openSpots={card.openSpots}
      />
    );
  });
  console.log(cards);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards">{cards}</div>
    </>
  );
}

export default App;
