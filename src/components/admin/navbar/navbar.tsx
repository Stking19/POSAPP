'use client';

import { FiSearch, FiChevronDown, FiUser } from 'react-icons/fi';



export default function NavBar() {
  return (
    <div className="w-full h-17 flex pr-3 justify-between items-center">
      <div className="w-70 h-[63%] bg-white rounded-md flex">
        <input
          type="text"
          className="w-[85%] h-full rounded-l-md border border-gray-200 pl-4 focus:outline-none text-sm"
          placeholder='Search'
        />
        <button className="w-[15%] h-full text-gray-400 text-xl cursor-pointer border border-gray-200 border-l-0 rounded-r-md flex items-center justify-center">
            <FiSearch />
        </button>
      </div>
      <div className='w-43 h-[63%] flex gap-2 items-center'>
        <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl text-gray-500'><FiUser /></div>
        <div className='flex gap-1 items-center text-gray-500 cursor-pointer'><p className='text-sm font-bold'>Administrator</p><span><FiChevronDown /></span></div>
      </div>
    </div>
  );
}
