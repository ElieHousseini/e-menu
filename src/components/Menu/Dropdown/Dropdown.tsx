// Dropdown.tsx
import React, { useState } from "react";
import styles from './Dropdown.module.css'

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  defaultOption: Option;
  onSelect: (option: Option) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const option = options.find((option) => option.value === value) || defaultOption;
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <select value={selectedOption.value} onChange={handleSelect} className={styles.dropdown}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
