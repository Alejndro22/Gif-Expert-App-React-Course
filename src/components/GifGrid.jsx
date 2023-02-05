import { useEffect, useState } from "react";
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
      <ol>
        {gifs.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};
