import React, { useEffect, useState } from 'react';
import { getAll } from '../services/userClientService'; // Adjust the import path as needed
import useToken from '../hooks/useToken'; // Adjust the import path as needed
import UserTable from '../components/tables/userTable'
const UserList = () => {
  const {token } = useToken(); // Get the token using your hook
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      console.log(token);
      if (!token) {
        setError('No token found. Please log in.');
        return;
      }
      try {
        const userData = await getAll(token); // Pass the token to GetAll
        setUsers(userData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, [token]); // Run the effect when the token changes

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {/* <h2 className="text-xl font-bold mb-4">User List</h2> */}
      <UserTable users={users} />
    </div>
  );
};

export default UserList;