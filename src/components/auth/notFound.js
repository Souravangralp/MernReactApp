import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D101E] flex flex-col items-center justify-center">
      <div className="text-center">
        {/* Illustration Section */}
        <div className="flex justify-center mb-6">
          <img 
            src="/path/to/your/illustration.png" 
            alt="404 Error Illustration"
            className="w-64"
          />
        </div>
        
        {/* Error Message Section */}
        <h1 className="text-4xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-gray-400 mb-6">
          Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.
        </p>
        
        {/* Button Section */}
        <a href="/" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
          Go back home
        </a>
      </div>
    </div>
  );
}
