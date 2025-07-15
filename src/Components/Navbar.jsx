import React, { useState, useEffect } from 'react';
import {
  FaUser,
  FaChalkboardTeacher,
  FaClipboardList,
  FaSignOutAlt,
  FaHome,
  FaSearch,
  FaBars,
  FaComments,
  FaBell,
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaUsers,
  FaCheckCircle,
  FaChair,
  FaListAlt,
  FaBookOpen,
  FaCog,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed left-0 right-0 top-0 h-16 bg-gray-100 shadow-sm flex items-center justify-between px-4 md:px-6 z-40">
        <div className="flex items-center gap-4">
          <button
            className="text-indigo-700 text-xl hover:text-indigo-900"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
          <h1 className="text-xl font-semibold text-indigo-700">LearnLink</h1>
        </div>

        {/* Center Search */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-[500px] bg-white shadow-sm">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search classes, teachers, results..."
              className="flex-grow outline-none text-sm text-gray-700 placeholder:text-gray-400"
            />
            <select className="ml-3 px-2 py-1 text-sm bg-gray-100 border border-gray-300 rounded focus:outline-none">
              <option value="">All Locations</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <IconWithTooltip icon={<FaComments />} label="Chat" />
          <IconWithTooltip icon={<FaBell />} label="Notification" />
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border-2 border-indigo-500"
          />
        </div>
      </div>

      {/* Mobile Search */}
      {isMobile && (
        <div className="mt-16 px-4 py-2 bg-white shadow z-30 fixed w-full">
          <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 w-full">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-sm w-full"
            />
            <select className="ml-2 text-sm bg-gray-100 border border-gray-300 rounded px-1 py-1">
              <option value="">All</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white text-gray-800 shadow-lg z-30
          transform transition-all duration-500 ease-in-out
          ${isMobile
            ? mobileOpen
              ? 'translate-x-0 w-64'
              : '-translate-x-full w-64'
            : collapsed
            ? 'w-20'
            : 'w-64'}
          overflow-hidden
        `}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Sidebar Nav */}
          <div className="mt-4 space-y-2 px-2">
            <NavItem icon={<FaHome />} label="Home" to="/" collapsed={collapsed || (isMobile && !mobileOpen)} />
            <NavItem icon={<FaUsers />} label="Home Teachers" to="/home-teachers" collapsed={collapsed || (isMobile && !mobileOpen)} />
            <NavItem icon={<FaUsers />} label="Batch Teachers" to="/batch-teachers" collapsed={collapsed || (isMobile && !mobileOpen)} />
            <NavItem icon={<FaListAlt />} label="Result" to="/result" collapsed={collapsed || (isMobile && !mobileOpen)} />
            <NavItem icon={<FaBookOpen />} label="Exam" to="/exam" collapsed={collapsed || (isMobile && !mobileOpen)} />
            <NavItem icon={<FaCalendarAlt />} label="Teachers Routing" to="/routing" collapsed={collapsed || (isMobile && !mobileOpen)} />
            <NavItem icon={<FaMoneyCheckAlt />} label="Teachers Payment" to="/payment" collapsed={collapsed || (isMobile && !mobileOpen)} />
            <NavItem icon={<FaCheckCircle />} label="Teachers Presence" to="/presence" collapsed={collapsed || (isMobile && !mobileOpen)} />
            <NavItem icon={<FaChair />} label="Seating Plan" to="/seating" collapsed={collapsed || (isMobile && !mobileOpen)} />
            <NavItem icon={<FaCog />} label="Settings" to="/settings" collapsed={collapsed || (isMobile && !mobileOpen)} />
          </div>

          {/* Sidebar Logout */}
          <div className="px-2 mb-6">
            <button className="w-full flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white transition">
              <FaSignOutAlt />
              {!(collapsed || (isMobile && !mobileOpen)) && (
                <span className="text-sm">Logout</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Sidebar NavLink Item
const NavItem = ({ icon, label, to, collapsed }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `
        flex items-center gap-3 px-3 py-2 rounded transition-all duration-200 ease-in-out
        ${isActive ? 'bg-indigo-100 text-indigo-700 font-semibold' : 'hover:bg-gray-200 text-gray-800'}
      `
    }
  >
    <div className="text-lg">{icon}</div>
    {!collapsed && <span className="text-sm font-medium whitespace-nowrap">{label}</span>}
  </NavLink>
);

// Topbar Tooltip
const IconWithTooltip = ({ icon, label }) => (
  <div className="relative group cursor-pointer">
    <div className="text-xl hover:text-indigo-600 transition">{icon}</div>
    <div className="absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap z-50">
      {label}
    </div>
  </div>
);

export default Navbar;
