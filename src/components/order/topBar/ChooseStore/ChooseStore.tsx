import React from "react";
import Select from "react-select";
import "./ChooseStore.scss";
const options = [
  { value: "All stores", label: "All stores" },
  { value: "Mudita store", label: "Mudita store" },
  { value: "Aloha store", label: "Aloha store" },
  { value: "Dynasty store", label: "Dynasty store" },
];

const MyComponent: React.FC = () => {
  return (
    <div className="_select-store">
      <Select options={options} />
    </div>
  );
};

export default MyComponent;
