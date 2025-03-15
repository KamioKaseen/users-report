import './styles.scss';
import { ReactComponent as Phone } from "@/assets/icons/phone.svg";
import { ReactComponent as Mail } from "@/assets/icons/mail.svg";

export default function temp() {
  return (
    <div className="user-card">
      <h2 className='user-card__title'>Евгения Савченко</h2>

      <div className="user-card__contacts">
        <div className="user-card__icons-container">
          <Phone width={24} height={24}/>
          <a href="tel:+1234567890">+7 (918) 078-17-05</a>  
        </div>
        
        <div className="user-card__icons-container">
          <Mail width={24} height={24}/>
          <a href="mailto:example@example.com">yysavchenk@mail.ru</a>  
        </div>
      </div>
    </div>
  )
}
