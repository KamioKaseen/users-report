import React from 'react';
import './styles.scss';
import { ReactComponent as SearchIcon } from "@/assets/icons/search.svg";

interface SearchFieldProps {
  setTargetUser: (value: string) => void;
}

export default function SearchField({ setTargetUser }: SearchFieldProps) {

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTargetUser(value)
  }
  
  return (
    <div className="search-field">
      <input 
        type="search"
        className="search-field__input"
        onChange={handleInputValue}
      />

      <SearchIcon 
        className="search-field__icon"
        width={20} 
        height={20}
      />
    </div>
  )
}
