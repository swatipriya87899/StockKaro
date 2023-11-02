import React, { useState } from 'react';
import './CustomDropdown.css'; // Import your CSS file for styling

const CustomDropdown = ({ options, selectedTicker,title }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropDownBoxVisibility, setDropDownBoxVisibility] =useState(false)

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropDownBoxVisibility(false);
    selectedTicker(option);
  };

  function toggleDropdownBox() {
    setDropDownBoxVisibility(!dropDownBoxVisibility)
  }

  return (
    <div className="custom-dropdown">
      <div className="dropdown-header">
        <div className="selected-option" onClick={()=> toggleDropdownBox()}>{selectedOption || title}</div>
        <div className="dropdown-icon">&#9662;</div>
      </div>
      <div className="dropdown-list">
        {dropDownBoxVisibility && options.map((option) => (
          <div key={option} className="dropdown-item" onClick={() => handleSelect(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
