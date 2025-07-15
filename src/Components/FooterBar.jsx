// src/components/FooterBar.jsx

import React from 'react';

const FooterBar = () => {
  return (
    <div className="text-center text-sm text-gray-600 py-4 border-t bg-white">
      © {new Date().getFullYear()} LearnLink. All rights reserved. |
      <a href="#" className="text-purple-600 hover:underline px-1">Privacy Policy</a> |
      <a href="#" className="text-purple-600 hover:underline px-1">Terms</a>
    </div>
  );
};

export default FooterBar;
