import { useState, useEffect } from 'react';  

interface User {  
  address: string;  
  department: string;  
  email: string;  
  hire_date: string;  
  name: string;  
  phone: string;  
  position_name: string;  
}

const URL = import.meta.env.VITE_API_BASE_URL;

// Хотел реализовать что-то по типу хуков TanStack Query
// чтобы можно было получить состояния запросов
const useFetchUsers = (nameQuery?: string) => {  
  const [data, setData] = useState<User[]>([]);  
  const [loading, setLoading] = useState<boolean>(true);  
  const [error, setError] = useState<string | null>(null);  

  useEffect(() => {  
    const fetchUsers = async () => {  
      setLoading(true);  
      setError(null);  

      try {  
        const url = nameQuery   
          ? `${URL}?term=${encodeURIComponent(nameQuery)}`  
          : `${URL}`;

        const response = await fetch(url);  

        if (!response.ok) {  
          throw new Error(`HTTP error! status: ${response.status}`);  
        }  

        const users: User[] = await response.json();  
        setData(users);  
      } catch (err) {  
        setError((err as Error).message);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchUsers();  
  }, [nameQuery]);

  return { data, loading, error };  
};  

export default useFetchUsers;  