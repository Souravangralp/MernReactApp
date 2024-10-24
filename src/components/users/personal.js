export default function PersonalInformation() {
    return (
      <div className="flex-1 p-8 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold mb-4">Account</h2>
        <div className="flex space-x-4 mb-8">
          <div>
            <img
              src="https://via.placeholder.com/100"
              alt="avatar"
              className="rounded-full w-24 h-24"
            />
            <button className="mt-2 bg-gray-700 px-4 py-2 rounded-md">
              Change avatar
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-gray-400">Use a permanent address where you can receive mail.</div>
          </div>
        </div>
  
        <form className="space-y-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-400 mb-2">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-400 mb-2">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring"
              />
            </div>
          </div>
  
          <div>
            <label className="block text-gray-400 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring"
            />
          </div>
  
          <div>
            <label className="block text-gray-400 mb-2">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring"
              placeholder="example.com/janesmith"
            />
          </div>
  
          <div>
            <label className="block text-gray-400 mb-2">Timezone</label>
            <select className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring">
              <option>Pacific Standard Time</option>
              <option>Central Standard Time</option>
              <option>Eastern Standard Time</option>
            </select>
          </div>
        </form>
      </div>
    );
};