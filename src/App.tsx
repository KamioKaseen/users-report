import React from 'react';  
import { SearchField, UserCard, UserCardSkeleton } from "@components";  
import './App.scss';  
import useFetchUsers from './api';

const App: React.FC = () => {  
  const { data: users, loading, error } = useFetchUsers();

  return (  
    <div className="container">  
      <SearchField />  

      <main className="users-container">  
        {!loading && (  
          <>  
            {[...Array(9)].map((_, index) => (  
              <UserCardSkeleton key={index} />  
            ))}  
          </>  
        )}  
        {error && <p>Error: {error}</p>}  
        {users.length > 0 ? (  
          users.map((user) => (  
            <UserCard   
              key={user.email}
              {...user}   
            />  
          ))  
        ) : (  
          <p>No users found</p>  
        )}  
      </main>  
    </div>  
  );  
};  

export default App;  