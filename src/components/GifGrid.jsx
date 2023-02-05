import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  // No se deberia ejecutar nunca una funcion dentro de un functional component pues se llama con cada refresh, pero
  // por el momento quedara asi
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <p>Hola Mundo</p>
    </>
  );
};
