import React from 'react';
const users = [
  {
    id: 1,
    name: 'Sadia Jahan',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Rakib Hasan',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 3,
    name: 'Farzana Ahmed',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 4,
    name: 'Nayeem Rahman',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
];

const LeftContent = () => {
  return (
    <div className="w-full max-w-md">
      {/* Website title and description */}
      <div className="mb-6">
        <h1 className="text-indigo-700 text-5xl font-extrabold mb-3 tracking-tight">LearnLink</h1>
        <p className="text-lg text-gray-700 font-medium">
          Connect students, verified teachers, and parents in one platform.
          Teachers share daily class updates, so everyone stays informed.
        </p>
      </div>

      {/* User list */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recently Joined</h2>
        <ul className="space-y-3">
          {users.map(user => (
            <li key={user.id} className="flex items-center gap-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full border border-indigo-300"
              />
              <span className="font-medium text-gray-800">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftContent;
