import React from "react";
import classes from "./App.module.css";
import axios from "axios";
const App = () => {
  const recipe = {
    title: "Paella Valenciana",
    description: "Typical spanish paella, made with rabbit",
    ingredients: {
      "chicken breast": "2 pounds" 
    }
  };

  const handleClick = async () => {
    return axios
      .post("http://localhost:5000/api/recipes/", recipe)
      .then((res) => {
        console.log(res.data);
        return { ...res.data };
      })
      .catch((error) => {
        throw error;
      });
  };
  return (
    <div className={classes.App}>
      <button onClick={handleClick}>request</button>
    </div>
  );
};

export default App;
