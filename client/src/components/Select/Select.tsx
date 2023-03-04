import React, { useState } from 'react'
import { BiDollar } from 'react-icons/bi';
import { GiMoneyStack } from 'react-icons/gi';
import { DropdownContainer, DropdownHeader, DropdownList, DropdownItem } from './Select.style'
import { useAppSelector, useAppDispatch  } from '@/redux/hooks';
import {paramsValue, getRealEstateData} from '@/redux/reducer/location';

type Props ={
  type: string
  value: any
}

function Select({type, value}: Props) {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const params = useAppSelector(paramsValue)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useAppDispatch();
  const optionSale  = [  { value: '250,000', label: '$250,000' },  { value: '500,000', label: '$500,000' },  { value: '750,000', label: '$750,000+' }, { value: '1,250,000', label: '$1,250,000' }];
  const optionRent = [  { value: '800', label: '$800' }, {value: '1,800', label: '$1,800'}, {value: '2,500', label: '$2,500'}, {value: '4,000', label: '$4,000'}] 
  
  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    value(option, type)
    setIsDropdownOpen(false);
  };

  const options =  params.type==='rent' ? optionRent : optionSale;

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedOption ? selectedOption.label : type}
        <span>{type==='Min' ? <BiDollar style={{verticalAlign: 'middle'}} size={20}/> : <GiMoneyStack  style={{verticalAlign: 'middle'}} size={20}/>}</span>
      </DropdownHeader>
      {isDropdownOpen && (
        <DropdownList>
          {options.map((option: {value: string, label: string}) => (
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