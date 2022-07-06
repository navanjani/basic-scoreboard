const Player = (props) => {
  return (
    <div className="player">
      <p>
        {props.name} (score: {props.score} ){" "}
        <button
          className="btn btn-sm"
          onClick={() => props.incrementScore(props.id)}
        >
          Add score
        </button>{" "}
        {"  "}
        <button
          className="btn btn-sm"
          onClick={() => props.deductScore(props.id)}
        >
          Deduct score
        </button>
      </p>
    </div>
  );
};

export default Player;
