import "./App.css";
import React, { useState } from "react";

function App() {
  const [newItem, setNewItems] = useState("");
  const [radio, setRadio] = useState("");

  const [items, setItems] = useState([
    { name: "Buy Shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" },
  ]);

  const itemNodes = items.map((item, index) => {
    return (
      <li key={index} className={item.priority}>
        <span>{item.name}</span>
      </li>
    );
  });

  const handleInputChange = (event) => {
    setNewItems(event.target.value);
  };

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
  };

  const saveNewItem = (event) => {
    event.preventDefault();
    const newItemArray = [...items];
    newItemArray.push({ name: newItem, priority: radio });
    setItems(newItemArray);
    setNewItems("");
    setRadio("");
  };

  return (
    <div className="App">
      <h1>To-do's</h1>
      <form onSubmit={saveNewItem}>
        <label htmlFor="new-item"></label>
        <input
          type="text"
          id="new-item"
          value={newItem}
          onChange={handleInputChange}
        />
        <label>
          High
          <input
            type="radio"
            name="priority"
            value="high"
            id="high-radio"
            onChange={handleRadioChange}
            checked={radio === "high"}
            required
          />
        </label>
        <label>
          Low
          <input
            type="radio"
            name="priority"
            value="low"
            id="low-radio"
            onChange={handleRadioChange}
            checked={radio === "low"}
          />
        </label>
        <input type="submit" value="Save item" />
      </form>
      <ul>{itemNodes}</ul>
    </div>
  );
}

export default App;
