import React, { useState } from "react";

import "./App.css";
import Dropdown from "./components/Dropdown";
import Checkbox from "./components/Checkbox";
import RadioButton from "./components/RadioButton";

const App = () => {
  const details = [
    { id: 0, name: "max", age: 22 },
    { id: 1, name: "sam", age: 25 },
    { id: 2, name: "mosh", age: 28 },
  ];
  const [dropdown, setDropdown] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [radiobutton, setRadiobutton] = useState(false);

  const [value, setValue] = useState();

  const [checkedState, setCheckedState] = useState(
    new Array(details.length).fill(false)
  );

  const [selectedState, setSelectedState] = useState(
    new Array(details.length).fill(false)
  );

  const handleDropdownChange = (event) => {
    //console.log('event>> ', event.target)
    let selectedId = event.target.value;
    setValue(details[selectedId]);
  };

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const handleRadiobbuttonChange = (position) => {
    const updatedSelectedState = selectedState.map((item, index) =>
      index === position ? !item : false
    );
    setSelectedState(updatedSelectedState);
  };

  return (
    <div className="App">
      <button className="btn" onClick={() => setDropdown(!dropdown)}>
        Dropdown
      </button>
      <button className="btn" onClick={() => setCheckbox(!checkbox)}>
        Checkbox
      </button>
      <button
        className="btn"
        onClick={() => setRadiobutton(!radiobutton)}
      >
        RadioButton
      </button>
      {dropdown && (
        <div>
          <Dropdown
            details={details}
            value={value}
            onChange={handleDropdownChange}
          />
          {value && (
            <p>
              you have selected {value.name} having id {value.id} whose age is {value.age} years.
            </p>
          )}
        </div>
      )}

      {checkbox && (
        <div>
          <h2>Checkbox</h2>
          <Checkbox
            details={details}
            checked={checkedState}
            handleOnCheckedChange={handleCheckboxChange}
          />
          {checkedState?.map((ele, index) => {
            if (ele) {
              return (
                <p key={index}>
                  you have selected {details[index].name} having id{" "}
                  {details[index].id} whose age is {details[index].age} years.
                </p>
              );
            }
            return null;
          })}
        </div>
      )}

      {radiobutton && (
        <div>
          <h2>RadioButton</h2>
          <RadioButton
            details={details}
            checked={selectedState}
            handleOnSelectedChange={handleRadiobbuttonChange}
          />
          {selectedState?.map((ele, index) => {
            if (ele) {
              return (
                <p key={index}>
                  you have selected {details[index].name} having id{" "}
                  {details[index].id} whose age is {details[index].age} years.
                </p>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default App;

