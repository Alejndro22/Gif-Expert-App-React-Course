import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en componenete <GifGrid />', () => {
  const category = 'Valorant';

  test('debe mostar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe mostrar items (2 en este caso) cuando se cargan gifs con el customHook useFetchGifs', () => {
    const gifs = [
      {
        id: 'abcde',
        title: 'Valorant',
        url: 'https://valorantgifs/valo.gif',
      },
      {
        id: 'abcdefg',
        title: 'Valorant2',
        url: 'https://valorantgifs/valo2.gif',
      },
    ];

    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
