import React, { useState } from 'react'
import { DropdownContainer, DropdownHeader, DropdownList, DropdownItem } from './Select.style'

function Select() {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const options  = [  { value: 'option1', label: 'Option 1' },  { value: 'option2', label: 'Option 2' },  { value: 'option3', label: 'Option 3' },];

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedOption ? selectedOption.label : 'Min'}
        <span>{isDropdownOpen ? '▲' : '▼'}</span>
      </DropdownHeader>
      {isDropdownOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}
export default Select;