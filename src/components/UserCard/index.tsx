import './styles.scss';
import { ReactComponent as Phone } from "@/assets/icons/phone.svg";
import { ReactComponent as Mail } from "@/assets/icons/mail.svg";

interface UserCardProps {
  name: string;
  phone: string;
  email: string;
  hireDate: string;
  position: string;
  department: string;
  onSelect: (userData: Omit<UserCardProps, 'onSelect'>) => void;
}

export default function UserCard({
  name, 
  phone, 
  email,  
  hireDate, 
  position, 
  department,
  onSelect
}: UserCardProps) {

  // Получаем данные текущего юзера для модалки
  const userData = {
    name, 
    phone, 
    email, 
    hireDate, 
    position, 
    department,
  };

  return (
    <div className="user-card" onClick={() => onSelect(userData)}>
      <h2 className='user-card__title'>{name}</h2>

      <div className="user-card__contacts">
        <div className="user-card__icons-container">
          <Phone width={24} height={24}/>
          <a href={`tel:${phone}`} onClick={(e) => e.stopPropagation()}>{phone}</a>  
        </div>
        
        <div className="user-card__icons-container">
          <Mail width={24} height={24}/>
          <a href={`mailto:${email}`} onClick={(e) => e.stopPropagation()}>{email}</a>  
        </div>
      </div>
    </div>
  )
}
