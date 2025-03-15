import './styles.scss';
import { ReactComponent as Phone } from "@/assets/icons/phone.svg";
import { ReactComponent as Mail } from "@/assets/icons/mail.svg";



export default function UserCard({name, phone, email}) {
  return (
    <div className="user-card">
      <h2 className='user-card__title'>{name}</h2>

      <div className="user-card__contacts">
        <div className="user-card__icons-container">
          <Phone width={24} height={24}/>
          <a href="tel:+1234567890">{phone}</a>  
        </div>
        
        <div className="user-card__icons-container">
          <Mail width={24} height={24}/>
          <a href="mailto:example@example.com">{email}</a>  
        </div>
      </div>
    </div>
  )
}
