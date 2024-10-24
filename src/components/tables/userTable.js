import React from 'react';

const UserTable = ({ users }) => {
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
                {/* <p className="dark:text-gray-600">Friday</p> */}
              </td>
              <td className="p-3">
                <p>{user.phone || 'N/A'}</p>
                {/* <p className="dark:text-gray-600">Tuesday</p> */}
              </td>
              <td>
              <button class="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                    Edit
                  </button>
                  <button class="ms-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    Delete
                  </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;