import { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

const compareScore = (playerA, playerB) => {
  return playerB.score - playerA.score;
};
const compareName = (playerA, playerB) => {
  return playerA.name.localeCompare(playerB.name);
};

const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  //   console.log(players);

  const [sortby, setSortBy] = useState("score");

  const changeSorting = (event) => {
    setSortBy(event.target.value);
  };

  const playersSorted = [...players].sort(
    sortby === "score" ? compareScore : compareName
  );

  //   callback function for increment score

  const incrementScore = (id) => {
    console.log(id);
    const newPlayersArray = players.map((player) => {
      if (player.id === id) {
        return { ...player, score: player.score + 1 };
      } else {
        return player;
      }
    });
    setPlayers(newPlayersArray);
  };

  //   deduct score
  const deductScore = (id) => {
    console.log(id);
    const newPlayersArray = players.map((player) => {
      if (player.id === id) {
        return { ...player, score: player.score - 1 };
      } else {
        return player;
      }
    });
    setPlayers(newPlayersArray);
  };

  //   Reset scores

  const resetScores = () => {
    const newPlayersArray = players.map((player) => {
      return {
        ...player,
        score: 0,
      };
    });
    setPlayers(newPlayersArray);
  };

  //{ id: 1, name: "Violeta", score: 11 },
  // ...{ id: 1, name: "Violeta", score: 11 },
  //result: id: 1, name: "Violeta", score: 11
  // [ ...player ]

  // Add Player via form
  
  const addPlayer = (name) => {
    console.log(" add new player with name :", name);

    setPlayers([...players, { id: players.length + 1, name: name, score: 0 }]);
  };

  return (
    <div className="scoreboard">
      <p>
        Sort order : {""}
        <select onChange={changeSorting} value={sortby}>
          <option value={"score"}> Sort by score</option>
          <option value={"name"}> Sort by name</option>
        </select>
      </p>
      <button onClick={resetScores}> Reset </button>

      <h1> Scoreboard </h1>
      <ul>
        {/* {players
          ? players.map((player, index) => (
              <li key={player.id}>
                <Player name={player.name} score={player.score} />
              </li>
            ))
          : ""} */}
        {players
          ? playersSorted.map((player, index) => (
              <li key={player.id}>
                <Player
                  id={player.id}
                  name={player.name}
                  score={player.score}
                  incrementScore={incrementScore}
                  deductScore={deductScore}
                />
              </li>
            ))
          : ""}
      </ul>

      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
};

export default Scoreboard;
