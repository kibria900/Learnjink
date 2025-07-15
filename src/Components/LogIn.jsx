import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Step 1

const LogIn = () => {
  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleSignIn = () => {
    // এখানে পরে validation check করা যাবে
    navigate('/layout'); // ✅ Go to Layout route
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
      <input
        type="text"
        placeholder="Email or Phone"
        className="w-full px-4 py-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="w-full px-4 py-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* ✅ Sign In Button */}
      <button
        onClick={handleSignIn}
        className="w-full bg-purple-600 text-white font-semibold py-3 rounded hover:bg-purple-700 transition"
      >
        Sign In
      </button>

      <p className="text-center text-sm text-purple-600 mt-3 hover:underline cursor-pointer">
        Forgot your password?
      </p>

      <hr className="my-4" />

      <button className="w-full bg-gray-800 text-white font-semibold py-3 rounded hover:bg-gray-900 transition">
        Create New Profile
      </button>
    </div>
  );
};

export default LogIn;
