import ReactDOM from 'react-dom';  
import './styles.scss'; 
import { ReactComponent as CloseIcon } from "@/assets/icons/close.svg";
import { useEffect } from 'react';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  phone: string;
  email: string;
  hireDate: string;
  position: string;
  department: string;
}

export default function UserModal({ 
  isOpen, 
  onClose,
  name, 
  phone, 
  email,  
  hireDate, 
  position, 
  department,
}: UserModalProps) {  
  useEffect(() => {  
    if (isOpen) {  
      document.body.style.overflow = 'hidden';
    } else {  
      document.body.style.overflow = 'unset';
    }  

    return () => {  
      document.body.style.overflow = 'unset'; 
    };  
  }, [isOpen]);  

  if (!isOpen) return null;  
 
  return ReactDOM.createPortal(  
    <div className="backdrop" onClick={onClose}>  
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__user-name">
          {name}
        </h2>  

        <div className="modal__content">
          <div className="modal__row">
            <p className="modal--font-black">Телефон:</p>  
            <p className="modal--font-gray">{phone}</p>
          </div>

          <div className="modal__row">
            <p className="modal--font-black">Почта:</p>  
            <p className="modal--font-gray">{email}</p>
          </div>

          <div className="modal__row">
            <p className="modal--font-black">Дата приема:</p>  
            <p className="modal--font-gray">{hireDate}</p>
          </div>

          <div className="modal__row">
            <p className="modal--font-black">Должность:</p>  
            <p className="modal--font-gray">{position}</p>
          </div>

          <div className="modal__row">
            <p className="modal--font-black">Подразделение:</p>  
            <p className="modal--font-gray">{department}</p>
          </div> 
        </div>

        <div>
          <p className="modal--font-black">Дополнительная информация:</p>  
          <p className="modal--font-gray modal--mt">Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>
        </div>
        
        <button className="modal__close" onClick={onClose}>
          <CloseIcon width={20} height={20} />
        </button>
      </div>  
    </div>,  
    document.getElementById('portal-root')!  
  );  
};  

