import { useState } from "react";
import Select from "react-select/base";

export const ReactSelectLibrary = () => {
  const productOptions = [
    { value: "tv", label: "Tv" },
    { value: "smartphone", label: "Smartphone" },
    { value: "laptop", label: "Laptop" },
  ];

  const colorOptions = [
    { value: "black", label: "Black" },
    { value: "silver", label: "Silver" },
    { value: "white", label: "White" },
  ];

  const [selectedProtduct, setSelectedProtduct] = useState("tv");
  const [selectedColors, setSelectedColors] = useState(["black", "slivers"]);
  const onSelectedProductChange = ({ target }) => {
    setSelectedProtduct(target.value);
  };
  const onSelectedColorsChange = ({ target }) => {
    const newSelectedColors = [...target.selectedOptions].map(
      (selectedTarget) => selectedTarget.value,
    );
    setSelectedColors(newSelectedColors);
    // setSelectedColors(target.value);
  };
  return (
    <>
      <h2>ReactSelectLibrary</h2>
      <select value={selectedProtduct} onChange={onSelectedProductChange}>
        <option value="tv">TV</option>
        <option value="smartphone">Smartphone</option>
        <option value="laptop">Laptop</option>
      </select>

      <select
        multiple={true}
        value={selectedColors}
        onChange={onSelectedColorsChange}
      >
        <option value="black">Black</option>
        <option value="silver">Silver</option>
        <option value="white">White</option>
      </select>
      <hr />
    </>
  );
};
