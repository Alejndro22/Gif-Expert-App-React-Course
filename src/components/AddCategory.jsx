import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const finalInput = inputValue.trim();
    if (finalInput.length <= 1) return;
    // setCategories((categories) => {
    //   return [inputValue, ...categories];
    // });
    onNewCategory(finalInput);
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

// Debe ser obligatorio que se envie la funcion onNewCategory
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
