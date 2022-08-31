import React from "react";

const Checkbox = (props) => {
  const { details, checked, handleOnCheckedChange } = props;

  return details.map((detail) => (
    <p key={detail.id}>
      <input
        type="checkbox"
        id={detail.id}
        name={detail.name}
        value={detail.id}
        checked={checked[detail.id]}
        onChange={() => handleOnCheckedChange(detail.id)}
      />
      <label>{detail.name}</label>
    </p>
  ));
};

export default Checkbox;
