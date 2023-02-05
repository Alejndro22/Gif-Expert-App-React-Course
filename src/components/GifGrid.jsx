import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  // Use effect se utiliza para disparar efectos secundarios, en otras palabras,
  // un proceso a ejecutar cuando algo suceda

  // Cuando el arreglo de dependencias queda vacio, solo se ejecuta la primera vez que
  // se construye el componente
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <p>Hola Mundo</p>
    </>
  );
};
