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

const useFetchUsers = () => {  
  const [data, setData] = useState<User[]>([]);  
  const [loading, setLoading] = useState<boolean>(true);  
  const [error, setError] = useState<string | null>(null);  

  useEffect(() => {  
    const fetchUsers = async () => {  
      setLoading(true);  
      setError(null);  
      
      try {  
        const response = await fetch('http://[::1]:3000');  

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
  }, []);  

  return { data, loading, error };
};  

export default useFetchUsers;  