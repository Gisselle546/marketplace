import React, { useState } from 'react'
import { BiDollar } from 'react-icons/bi';
import { GiMoneyStack } from 'react-icons/gi';
import { DropdownContainer, DropdownHeader, DropdownList, DropdownItem } from './Select.style'

type Props = {
  type: string;
}

function Select({type}: Props) {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const options  = [  { value: 'option1', label: '$250,000' },  { value: 'option2', label: '$500,000' },  { value: 'option3', label: '$750,000+' },];

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedOption ? selectedOption.label : type}
        <span>{type==='Min' ? <BiDollar style={{verticalAlign: 'middle'}} size={20}/> : <GiMoneyStack  style={{verticalAlign: 'middle'}} size={20}/>}</span>
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