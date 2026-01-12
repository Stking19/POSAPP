"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiLogOut,
  FiHelpCircle,
} from "react-icons/fi";

export default function NavBar() {

  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <div className="w-full h-17 flex pr-3 justify-between items-center sticky top-0 bg-white z-10 px-2">
      <div className="w-70 h-[63%] bg-white rounded-md flex">
        <input
          type="text"
          className="w-[85%] h-full rounded-l-md border border-gray-200 pl-4 focus:outline-none text-sm"
          placeholder="Search"
        />
        <button className="w-[15%] h-full text-gray-400 text-xl cursor-pointer border border-gray-200 border-l-0 rounded-r-md flex items-center justify-center">
          <FiSearch />
        </button>
      </div>
      <div className="w-43 h-[63%] flex gap-2 items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl text-gray-500">
          <FiUser />
        </div>
        <div className="flex gap-1 items-center text-gray-500 cursor-pointer" onClick={handleClick}>
          <p className="text-sm font-bold">Administrator</p>
          <span>
            <FiChevronDown />
          </span>
          { clicked && (<div className="w-70 h-45 bg-white flex flex-col justify-center p-2.5 gap-1 px-5 shadow-md rounded-md absolute top-17 right-1">
            <div className="w-max h-max flex gap-1 items-center">
              <span>
                <FiUser />
              </span>
              <p className="w-50 h-8 rounded-sm flex items-center px-1.5 hover:bg-gray-50">Profile</p>
            </div>
            <div className="w-max h-max flex gap-1 items-center">
              <FiSettings />
              <p className="w-50 h-8 rounded-sm flex items-center px-1.5 hover:bg-gray-50">Account Settings</p>
            </div>
            <div className="w-max h-max flex gap-1 items-center">
              <FiHelpCircle />
              <p className="w-50 h-8 rounded-sm flex items-center px-1.5 hover:bg-gray-50">Help & Support</p>
            </div>
            <p className="w-max h-max flex gap-1 items-center mt-2.5 text-red-400" onClick={() =>router.push("/")}>
              <FiLogOut />
              Logout
            </p>
          </div>)}
          
        </div>
      </div>
    </div>
  );
}
