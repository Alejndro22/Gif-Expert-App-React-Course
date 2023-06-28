import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category, onDeleteCategory }) => {
  const { gifs, isLoading } = useFetchGifs(category);
  const onRemovePressed = () => {
    onDeleteCategory(category);
  };

  return (
    <>
      <div className='GridHeading'>
        <h3>{category}</h3>
        <button onClick={onRemovePressed}>Delete</button>
      </div>

      {isLoading && <h2>Cargando...</h2>}

      <div className='card-grid'>
        {gifs.map((image) => (
          // Puedo usar spread para esparcir los properties sin tener que definir uno por uno
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
