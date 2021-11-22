import { useState } from "react";
import "./styles.css";
var showSet = {
  Anime: [
    { name: "AttackOnTitan", rating: "4.5/5" },
    { name: "Deathnote", rating: "4/5" }
  ],
  FantasyDrama: [
    { name: "GameOfThrones", rating: "4.5/5" },
    { name: "Vikings", rating: "3.5/5" },
    { name: "Last Hour", rating: "3/5" }
  ],
  Drama: [
    { name: "PeakyBlinders", rating: "4.5/5" },
    { name: "PrisonBreak", rating: "3.5/5" },
    { name: "MoneyHeist", rating: "4/5" },
    { name: "Suits", rating: "3.5/5" }
  ]
};
export default function App() {
  const [show, showset] = useState("Anime");
  function clickhandler(show) {
    console.log("clciked", show);
    showset(show);
  }

  return (
    <div className="App">
      <h1 className="heading-title">🎥GoodWatch</h1>
      <h4>
        Select from below genere to view my favourite series and rating given by
        me!!
      </h4>
      <div>
        {Object.keys(showSet).map((show) => (
          <button onClick={() => clickhandler(show)}> {show}</button>
        ))}
      </div>
      <hr></hr>
      <div>
        <ul>
          {showSet[show].map((showname) => (
            <li>
              <div style={{ fontSize: "larger" }}>{showname.name}</div>
              <p>{showname.rating}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
