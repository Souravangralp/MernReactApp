import React from 'react';

const UserTable = ({ users }) => {
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
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

    
    // <div className="overflow-x-auto">
    //   <table className="min-w-full border-collapse border border-gray-200">
    //     <thead>
    //       <tr className="bg-gray-100">
    //         <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Sno</th>
    //         <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">First Name</th>
    //         <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Last Name</th>
    //         <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
    //         <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
    //         <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Active</th>
    //         <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Created At</th>
    //         <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Updated At</th>
    //         <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {users.map(user => (
    //         <tr key={user.id} className="hover:bg-gray-50">
    //           <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{user.id || 'N/A'}</td>
    //           <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{user.firstname || 'N/A'}</td>
    //           <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{user.lastname || 'N/A'}</td>
    //           <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{user.email}</td>
    //           <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{user.phone || 'N/A'}</td>
    //           <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{user.isActive ? 'Yes' : 'No'}</td>
    //           <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{new Date(user.createdAt).toLocaleString()}</td>
    //           <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{new Date(user.updatedAt).toLocaleString()}</td>
    //           <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
    //           <button class="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
    //             Edit
    //           </button>
    //           <button class="ms-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
    //             Delete
    //           </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default UserTable;