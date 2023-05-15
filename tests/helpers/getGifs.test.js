import { getGifs } from '../../src/helpers/getGifs';

describe('pruebas en getGifs()', () => {
  test('debe retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('Valorant');
    // Evaluar si no devuelve un arreglo vacio
    expect(gifs.length).toBeGreaterThan(0);
    // Evaluar que tenga la estructura requerida
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
