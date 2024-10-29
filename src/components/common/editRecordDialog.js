import React, { useState, useEffect } from 'react';

const EditDialog = ({ show, user, onSave, onClose }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  useEffect(() => {
    if (user) {
      setEditedUser({ ...user });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedUser); 
  };

  if (!show) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 border-red-50">
      <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-2">Edit : {editedUser.firstname}</h3>
        <div className="mb-4">
          <label className="block mb-2 text-sm">First name</label>
          <input
            type="text"
            name="firstname"
            value={editedUser.firstname || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Last name</label>
          <input
            type="text"
            name="lastname"
            value={editedUser.lastname || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={editedUser.email || ''}
            readOnly={true}
            // onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Phone</label>
            <input
              type="text"
              name="phone"
              value={editedUser.phone || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-800 dark:text-gray-100"
              onInput={(e) => {
                // Allow only numeric input and limit to 12 characters
                const input = e.target.value.replace(/[^0-9]/g, '');
                e.target.value = input.length <= 12 ? input : input.slice(0, 12);
              }}
              placeholder="Enter your phone number"
            />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="ms-2 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
            // className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
