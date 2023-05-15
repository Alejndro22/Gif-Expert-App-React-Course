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

    // jest function. Es un Mock (es una simulacion de la funcion)
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');

    // evaluar Mock function, que haya sido llamada, solo una vez, y con el valor del input deseado
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('no debe llamar onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
