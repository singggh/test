import React from 'react'

const RadioButton = (props) => {
    const { details, checked, handleOnSelectedChange } = props;
  return details.map((detail) => (
    <p key={detail.id}>
      <input
        type="radio"
        id={detail.id}
        name={detail.name}
        value={detail.name}
        checked={checked[detail.id]}
        onChange={() => handleOnSelectedChange(detail.id)}
      />
      <label>{detail.name}</label>
    </p>
  ));
}

export default RadioButton
