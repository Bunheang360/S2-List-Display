import React from "react";
import Card from "./components/card.jsx";
import { AVAILABLE_CARDS } from "./data.js";


function App() {
  return (
    <>
      <header>
        <h1>Football Player</h1> 
        <p>Check out these legend!!!</p>
      </header>
      <main>
        <div className="card-container">
          {AVAILABLE_CARDS.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;