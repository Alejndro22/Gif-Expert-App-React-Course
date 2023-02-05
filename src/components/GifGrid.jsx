import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  // No puedo usar Async en un useEffect pues es una promesa, pero se puede ejecutar
  // Una funcion desde fuera que si sea async
  const getRelatedGifs = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
  };

  useEffect(() => {
    getRelatedGifs();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {gifs.map((image) => (
          // Puedo usar spread para esparcir los properties sin tener que definir uno por uno
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
