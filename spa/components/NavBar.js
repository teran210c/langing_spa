import React from 'react';

function NavBar() {
  return (
    <nav className="bg-[#111101] shadow shadow-gray-300 w-full px-0 md:px-0">
      <div className="h-16 mx-auto container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <div className="text-[#96986c] w-full md:w-auto">
          <ul className="flex font-semibold justify-between">
            <li className="px-4 py-2 hover:text-[#5b5f35]"><a href="#">Dashboard</a></li>
            <li className="px-4 py-2 hover:text-[#5b5f35]"><a href="#">Search</a></li>
            <li className="px-4 py-2 hover:text-[#5b5f35]"><a href="#">Explore</a></li>
            <li className="px-4 py-2 hover:text-[#5b5f35]"><a href="#">About</a></li>
            <li className="px-4 py-2 hover:text-[#5b5f35]"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <button className="px-2 py-2 bg-[#96986c] hover:bg-[#5b5f35] text-[#54582f ] flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;