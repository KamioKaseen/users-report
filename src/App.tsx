import React, { useState } from 'react';  
import './App.scss';  
import { SearchField, UserCard, UserCardSkeleton, UserModal } from "@components";  
import useFetchUsers from './api';

interface User {
  name: string;
  phone: string;
  email: string;
  hireDate: string;
  position: string;
  department: string;
}

const App: React.FC = () => {  
  const { data: apiUsers, loading, error } = useFetchUsers()
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Меняю название полей
  const users = apiUsers.map(user => ({
    ...user,
    hireDate: user.hire_date,
    position: user.position_name,
  }));

  return (  
    <div className="container">  
      <SearchField />

      <main className="users-container">  
        {loading && (  
          <>  
            {[...Array(9)].map((_, index) => (  
              <UserCardSkeleton key={index} />  
            ))}  
          </>  
        )}  

        {users.length > 0 && (  
          users.map((user) => (  
            <UserCard   
              key={user.email}
              {...user}   
              onSelect={(userData) => setSelectedUser(userData)}
            />  
          ))  
        )}

        {error && <p>Ошибка: {error}</p>}  
      </main>  

      {/* Если данные юзера подтянулись через клик по карточкe, то отображаем модальное окно */}
      {selectedUser && (
        <UserModal 
          isOpen={!!selectedUser}
          onClose={() => setSelectedUser(null)}
          {...selectedUser}
        />
      )}
    </div>  
  );  
};  

export default App;  