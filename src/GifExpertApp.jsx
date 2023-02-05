import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((categos) => [newCategory, ...categos]);
    // otra forma es usando el callback de setState (igual que WebDev)
  };

  const onRemoveCategory = (removeCategory) => {
    setCategories((categos) =>
      categos.filter((item) => item !== removeCategory)
    );
    // otra forma es usando el callback de setState (igual que WebDev)
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          onDeleteCategory={(value) => onRemoveCategory(value)}
        />
      ))}
    </>
  );
};
