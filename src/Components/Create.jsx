import React, { useState } from 'react';

const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '', // Teacher | Student | Parent
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // এখানে API/Firebase এ ডাটা পাঠানো যেতে পারে
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">
          Create New Profile
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Role Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">-- Choose --</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded hover:bg-purple-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Create;
