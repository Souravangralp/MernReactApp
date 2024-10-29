import React, { useEffect, useState } from 'react';
import { getAll, deleteUser, update } from '../services/userClientService'; // Adjust the import path as needed
import useToken from '../hooks/useToken'; // Adjust the import path as needed
import ConfirmDeleteDialog from '../components/common/confirmDeleteDialog';
import EditDialog from '../components/common/editRecordDialog';

const UserList = () => {
  const [selectedUser, setSelectedUser] = useState(null); // To track the user selected for deletion
  const [showDialog, setShowDialog] = useState(false);    // To control the dialog visibility
  const [showEditDialog, setShowEditDialog] = useState(false);
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

  const handleDeleteClick = (user) => {
    setSelectedUser(user);  // Store the user to be deleted
    setShowDialog(true);     // Show the confirmation dialog
  };

  const handleEditClick = (user) => {
    console.log(user);
    setSelectedUser(user);
    setShowEditDialog(true);
  };

  const handleSaveEdit = async (updatedUser) => {
    console.log('User updated:', updatedUser);
    var result = await update(updatedUser, token);
    console.log(result);
    const userData = await getAll(token); // Pass the token to GetAll
    setUsers(userData);
    setShowEditDialog(false);
  };

  const handleDeleteConfirm = async () => {
    console.log(`Deleting user: ${selectedUser.id}`);
    var result = await deleteUser(selectedUser.id, token);
    // Perform your delete logic here, e.g., API call to delete user
    console.log(result);
    const userData = await getAll(token); // Pass the token to GetAll
    setUsers(userData);
    setShowDialog(false);  // Close the dialog
  };

  const handleCloseDialog = () => {
    setShowDialog(false);  // Close the dialog without deleting
  };
  
  const handleCloseEditDialog = () => {
    setShowEditDialog(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Sno</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                  <p>{user.id || 'N/A'}</p>
                </td>
                <td className="p-3">
                  <p>{(user.firstname + ' ' + user.lastname) || 'N/A'}</p>
                </td>
                <td className="p-3">
                  <p>{user.email || 'N/A'}</p>
                </td>
                <td className="p-3">
                  <p>{user.phone || 'N/A'}</p>
                </td>
                <td>
                    <button
                    onClick={() => handleEditClick(user)}
                    className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(user)} // Trigger the dialog with the selected user
                    className="ms-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirm Delete Dialog */}
      <ConfirmDeleteDialog
        show={showDialog}
        user={selectedUser}
        onDelete={handleDeleteConfirm}
        onClose={handleCloseDialog}
      />

      {/* Edit Dialog */}
      <EditDialog
        show={showEditDialog}
        user={selectedUser}
        onSave={handleSaveEdit}
        onClose={handleCloseEditDialog}
      />
    </div>
  );
};

export default UserList;