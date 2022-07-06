import { useState } from "react";

const AddPlayerForm = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    props.addPlayer(name);
    setName("");
  };

  return (
    <div>
      <h2> Add player form</h2>

      <form onSubmit={handleSubmit}>
        <label placeholder="name" value={""}>
          Your name :
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>{" "}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddPlayerForm;
