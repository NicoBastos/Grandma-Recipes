import React from "react";
import classes from "./App.module.css";
import useGetRecipes from "./hooks/getRecipes";
import getFetcher from "./hooks/fetcher";
import useSWR from "swr";

const App = () => {
  // const { recipes, isLoading, isError } = useGetRecipes(100);
  const { data, error } = useSWR(`/api/recipes/`, getFetcher);
  if (error) throw error;
  console.log(data, "asdf");
  const recipes = data.map((recipe) => {
    return { title: recipe.title, description: recipe.description };
  });
  return (
    <div>
      {/* {aaa.map((recipe) => (
        <tr>
          <td>{recipe.title}</td>
        </tr>
      ))} */}
    </div>
  );
};

export default App;
