import './styles.scss';
import { ReactComponent as SearchIcon } from "@/assets/icons/search.svg";

export default function SearchField() {
  return (
    <div className="search-field">
      <input className="search-field__input"/>

      <SearchIcon 
        className="search-field__icon"
        width={20} 
        height={20}
      />
    </div>
  )
}
