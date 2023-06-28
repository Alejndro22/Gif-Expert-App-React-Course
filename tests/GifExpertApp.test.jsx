import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  test('Verificar que al agregar una categoria no repetida sea exitoso', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'League of Legends' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
  });

  test('Verificar que al agregar una categoria repetida no sea exitoso', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'Valorant' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
  });
});
