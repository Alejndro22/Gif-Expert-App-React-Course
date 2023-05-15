import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("debe cambiar el valor de la caja de texto", () => {
    // Se crea el sujeto de pruebas
    render(<AddCategory onNewCategory={() => {}} />);
    // Se extrae el input
    const input = screen.getByRole("textbox");
    // Disparamos el evento
    fireEvent.input(input, { target: { value: "Valorant" } });
    // Verificamos que se tenga el valor esperado
    expect(input.value).toBe("Valorant");
    // screen.debug();
  });
});
