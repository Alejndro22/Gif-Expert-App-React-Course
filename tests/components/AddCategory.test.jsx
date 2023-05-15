import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  test('debe cambiar el valor de la caja de texto', () => {
    // Se crea el sujeto de pruebas
    render(<AddCategory onNewCategory={() => {}} />);
    // Se extrae el input
    const input = screen.getByRole('textbox');
    // Disparamos el evento
    fireEvent.input(input, { target: { value: 'Valorant' } });
    // Verificamos que se tenga el valor esperado
    expect(input.value).toBe('Valorant');
    // screen.debug();
  });

  test('debe llamar onNewCategory si el input no esta vacio (o con solo una letra)', () => {
    const inputValue = 'Valorant';

    //TODO
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');
  });
});
