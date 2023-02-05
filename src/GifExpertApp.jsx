import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories(["Valorant", ...categories]);
    // otra forma es usando el callback de setState (igual que WebDev)
  };

  return (
    <>
      {/* Tituto */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories} />
      {/* Listado de items (gifs) */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        {/* <li>ABC</li> */}
      </ol>
      {/* List item */}
    </>
  );
};
