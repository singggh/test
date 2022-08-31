import React from "react";

const Dropdown = (props) => {
const { value, details, onChange } = props;

  return (
    <label>
     <h2>Dropdown</h2>
      <select value={value} onChange={onChange}>
        <option>--Select One--</option>
        {details.map((detail) => (
          <option key={detail.id} value={detail.id}>{detail.name}</option>
        ))}
      </select>
    </label>
   
  );
};

export default Dropdown;
