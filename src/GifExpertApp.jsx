import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    setCategories((categos) => [newCategory, ...categos]);
    // otra forma es usando el callback de setState (igual que WebDev)
  };

  return (
    <>
      {/* Tituto */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

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
