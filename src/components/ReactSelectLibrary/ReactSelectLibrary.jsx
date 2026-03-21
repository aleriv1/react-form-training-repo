import Select from "react-select";

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

  return (
    <>
      <h2>ReactSelectLibrary</h2>
      <Select options={productOptions} defaultValue={productOptions[0]} />

      <Select
        isMulti
        options={colorOptions}
        defaultValue={[colorOptions[0], colorOptions[1]]}
      />
    </>
  );
};
