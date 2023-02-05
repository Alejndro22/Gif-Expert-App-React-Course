import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories
    setCategories((categories) => {
      return [inputValue, ...categories];
    });
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Busca gifs"
        value={inputValue}
        // Como recibo el event puedo no mandarle nada, pues es el primer valor por defecto
        // onChange={(e) => onInputChange(e)}
        onChange={onInputChange}
      />
    </form>
  );
};
