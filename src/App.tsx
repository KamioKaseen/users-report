import { useEffect, useState } from 'react';  
import './App.scss';  
import { SearchField, UserCard, UserCardSkeleton, UserModal } from "@components";  
import useFetchUsers from './api/api';
import { useDebounce } from './hooks/useDebounce';

interface User {
  name: string;
  phone: string;
  email: string;
  hireDate: string;
  position: string;
  department: string;
}

const App: React.FC = () => {  
  const [usersList, setUsersList] = useState<User[]>([]);
  const [targetUser, setTargetUser] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Дебаунс для того, чтобы фильтрация срабатывала не на каждый символ
  const debouncedUser = useDebounce(targetUser, 500);

  const { data: apiUsers, loading, error } = useFetchUsers(debouncedUser);

  // Для автоматического обновления списка пользователей
  useEffect(() => {
    // Преобразуем в CamelCase
    const users = apiUsers.map(user => ({
      ...user,
      hireDate: user.hire_date,
      position: user.position_name,
    }));

    // Добавляем в состояние
    setUsersList(users);
  }, [apiUsers])

  return (  
    <div className="container">  
      <SearchField setTargetUser={setTargetUser} />
      <main>
        <div className="users-container">  
          {loading && (
            <>
              {[...Array(9)].map((_, index) => (
                <UserCardSkeleton key={index} />
              ))}
            </>
          )}

          {!loading && usersList.length > 0 && (
            usersList.map((user) => (
              <UserCard
                key={user.email}
                {...user}
                onSelect={(userData) => setSelectedUser(userData)}
              />
            ))
          )}
        </div>

        {error && <p className='users-container__error'>Ошибка: {error}</p>}

        {!error && !loading && usersList.length === 0 && (
          <p className='users-container__error'>Пользователь не найден</p>
        )}
      </main>
    
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
