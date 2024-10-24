// import { Link } from 'react-router-dom';
// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="h-screen bg-gray-900 text-white flex flex-col w-64">
//       <div className="flex items-center justify-center h-16">
//         {/* <span className="text-2xl font-bold">Tailwind UI</span> */}
//       </div>
//       <div className="flex-1 px-4 space-y-2">
//         <ul>
//           <li className="py-2 px-4 hover:bg-gray-700 rounded-md">
//             <Link>Projects</Link>
//           </li>
//           <li className="py-2 px-4 hover:bg-gray-700 rounded-md">Deployments</li>
//           <li className="py-2 px-4 hover:bg-gray-700 rounded-md">Activity</li>
//           <li className="py-2 px-4 hover:bg-gray-700 rounded-md">Domains</li>
//           <li className="py-2 px-4 hover:bg-gray-700 rounded-md">Usage</li>
//           <li className="py-2 px-4 hover:bg-gray-700 rounded-md">Settings</li>
//         </ul>
//         <div className="pt-4">
//           <h4 className="text-gray-400">Your teams</h4>
//           <ul>
//             <li className="py-2 px-4 hover:bg-gray-700 rounded-md">Planetaria</li>
//             <li className="py-2 px-4 hover:bg-gray-700 rounded-md">Protocol</li>
//             <li className="py-2 px-4 hover:bg-gray-700 rounded-md">Tailwind Labs</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AccountInfo = () => {
//   return (
//     <div className="flex-1 p-8 bg-gray-800 text-white">
//       <h2 className="text-2xl font-bold mb-4">Account</h2>
//       <div className="flex space-x-4 mb-8">
//         <div>
//           <img
//             src="https://via.placeholder.com/100"
//             alt="avatar"
//             className="rounded-full w-24 h-24"
//           />
//           <button className="mt-2 bg-gray-700 px-4 py-2 rounded-md">
//             Change avatar
//           </button>
//         </div>
//         <div className="flex flex-col space-y-2">
//           <div className="text-gray-400">Use a permanent address where you can receive mail.</div>
//         </div>
//       </div>

//       <form className="space-y-6">
//         <div className="flex space-x-4">
//           <div className="flex-1">
//             <label className="block text-gray-400 mb-2">First Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="block text-gray-400 mb-2">Last Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-gray-400 mb-2">Email Address</label>
//           <input
//             type="email"
//             className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-400 mb-2">Username</label>
//           <input
//             type="text"
//             className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring"
//             placeholder="example.com/janesmith"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-400 mb-2">Timezone</label>
//           <select className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring">
//             <option>Pacific Standard Time</option>
//             <option>Central Standard Time</option>
//             <option>Eastern Standard Time</option>
//           </select>
//         </div>
//       </form>
//     </div>
//   );
// };

// const SettingsPage = () => {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <AccountInfo />
//     </div>
//   );
// };

// export default SettingsPage;


import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed if you're using Link
import PersonalInformation from './personal'
const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('personal');
  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex">
      <div className="h-screen bg-gray-900 text-white flex flex-col w-64">
        <div className="flex items-center justify-center h-16">
          {/* Title or logo can go here */}
        </div>
        <div className="flex-1 px-4 space-y-2">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700 rounded-md" onClick={() => handleSelect('Personal')}>
              Personal
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 rounded-md" onClick={() => handleSelect('Deployments')}>
              Deployments
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 rounded-md" onClick={() => handleSelect('Activity')}>
              <Link to="/activity">Activity</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 rounded-md" onClick={() => handleSelect('Domains')}>
              <Link to="/domains">Domains</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 rounded-md" onClick={() => handleSelect('Usage')}>
              <Link to="/usage">Usage</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 rounded-md" onClick={() => handleSelect('Settings')}>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
          <div className="pt-4">
            <h4 className="text-gray-400">Your teams</h4>
            <ul>
              <li className="py-2 px-4 hover:bg-gray-700 rounded-md">Planetaria</li>
              <li className="py-2 px-4 hover:bg-gray-700 rounded-md">Protocol</li>
              <li className="py-2 px-4 hover:bg-gray-700 rounded-md">Tailwind Labs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 bg-gray-800">
        {selectedItem === 'Personal' && <PersonalInformation />}
        {selectedItem === 'Deployments' && <DeploymentComponent />}
        {selectedItem === 'Activity' && <ActivityComponent />}
        {selectedItem === 'Domains' && <DomainComponent />}
        {selectedItem === 'Usage' && <UsageComponent />}
        {selectedItem === 'Settings' && <SettingsComponent />}
        {/* Add more components as needed */}
      </div>
    </div>
  );
};

// const PersonalInformation = () => <div>Personal</div>;
const DeploymentComponent = () => <div>Your Deployments Content</div>;
const ActivityComponent = () => <div>Your Activity Content</div>;
const DomainComponent = () => <div>Your Domains Content</div>;
const UsageComponent = () => <div>Your Usage Content</div>;
const SettingsComponent = () => <div>Your Settings Content</div>;

export default Sidebar;
