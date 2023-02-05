import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

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
