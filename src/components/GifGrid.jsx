// Es mejor dejar esta funcion fuera del functional component para que no se reprocese esta funcion con cada refresh
const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key==${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};

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
