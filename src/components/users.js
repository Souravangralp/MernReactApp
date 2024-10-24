// import GetAll from '../hooks/useToken'

// const people = [
//     {
//       name: 'Leslie Alexander',
//       email: 'leslie.alexander@example.com',
//       role: 'Co-Founder / CEO',
//       imageUrl:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: '3h ago',
//       lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//       name: 'Michael Foster',
//       email: 'michael.foster@example.com',
//       role: 'Co-Founder / CTO',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: '3h ago',
//       lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//       name: 'Dries Vincent',
//       email: 'dries.vincent@example.com',
//       role: 'Business Relations',
//       imageUrl:
//         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: null,
//     },
//     {
//       name: 'Lindsay Walton',
//       email: 'lindsay.walton@example.com',
//       role: 'Front-end Developer',
//       imageUrl:
//         'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: '3h ago',
//       lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//       name: 'Courtney Henry',
//       email: 'courtney.henry@example.com',
//       role: 'Designer',
//       imageUrl:
//         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: '3h ago',
//       lastSeenDateTime: '2023-01-23T13:23Z',
//     },
//     {
//       name: 'Tom Cook',
//       email: 'tom.cook@example.com',
//       role: 'Director of Product',
//       imageUrl:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       lastSeen: null,
//     },
//   ]
  
//   export default function Example() {
//     return (
//         <div className="container ms-auto">

//         <ul role="list" className="divide-y divide-gray-100">
//             {people.map((person) => (
//             <li key={person.email} className="flex justify-between gap-x-6 py-5">
//                 <div className="flex min-w-0 gap-x-4">
//                 <img alt="" src={person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
//                 <div className="min-w-0 flex-auto">
//                     <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
//                     <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
//                 </div>
//                 </div>
//                 <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
//                 <p className="text-sm leading-6 text-gray-900">{person.role}</p>
//                 {person.lastSeen ? (
//                     <p className="mt-1 text-xs leading-5 text-gray-500">
//                     Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
//                     </p>
//                 ) : (
//                     <div className="mt-1 flex items-center gap-x-1.5">
//                     <div className="flex-none rounded-full bg-emerald-500/20 p-1">
//                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                     </div>
//                     <p className="text-xs leading-5 text-gray-500">Online</p>
//                     </div>
//                 )}
//                 </div>
//             </li>
//             ))}
//         </ul>
//       </div>

//     )
//   }

import React, { useEffect, useState } from 'react';
import { GetAll } from '../services/userClientService'; // Adjust the import path as needed
import useToken from '../hooks/useToken'; // Adjust the import path as needed
import UserTable from '../components/tables/userTable'
const UserList = () => {
  console.log('startesd');

  const { token } = useToken(); // Get the token using your hook
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
        const userData = await GetAll(token); // Pass the token to GetAll
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


// return (
//   <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
// 	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
// 	<div className="overflow-x-auto">
// 		<table className="min-w-full text-xs">
// 			<colgroup>
// 				<col />
// 				<col />
// 				<col />
// 				<col />
// 				<col />
// 				<col className="w-24" />
// 			</colgroup>
// 			<thead className="dark:bg-gray-300">
// 				<tr className="text-left">
// 					<th className="p-3">Invoice #</th>
// 					<th className="p-3">Client</th>
// 					<th className="p-3">Issued</th>
// 					<th className="p-3">Due</th>
// 					<th className="p-3 text-right">Amount</th>
// 					<th className="p-3">Status</th>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
// 					<td className="p-3">
// 						<p>97412378923</p>
// 					</td>
// 					<td className="p-3">
// 						<p>Microsoft Corporation</p>
// 					</td>
// 					<td className="p-3">
// 						<p>14 Jan 2022</p>
// 						<p className="dark:text-gray-600">Friday</p>
// 					</td>
// 					<td className="p-3">
// 						<p>01 Feb 2022</p>
// 						<p className="dark:text-gray-600">Tuesday</p>
// 					</td>
// 					<td className="p-3 text-right">
// 						<p>$15,792</p>
// 					</td>
// 					<td className="p-3 text-right">
// 						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
// 							<span>Pending</span>
// 						</span>
// 					</td>
// 				</tr>
// 			</tbody>
// 		</table>
// 	</div>
// </div>
// );

};

export default UserList;