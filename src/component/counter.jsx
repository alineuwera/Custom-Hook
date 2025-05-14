import React, { useState } from 'react';
import useDocumentTitle from '../Hook/useDocumentTitle';

function Counter() {
  const [count, setCount] = useState(0);
  
  useDocumentTitle(`Count: ${count}`);
  
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-md  relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-14 -left-14 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl font-extrabold mb-8 text-center">
            Counter
          </h1>
          
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-full p-1">
                <div className="bg-gray-900 rounded-full p-6">
                  <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    {count}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setCount(count + 1)}
              className="relative py-3 px-4 overflow-hidden rounded-xl bg-gray-800 border border-gray-700 shadow-lg"
            >
              <div className="absolute inset-0  bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ease-out group-hover:w-full opacity-30 "></div>
              <span className="relative z-10 font-medium text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-white">
                Increment
              </span>
            </button>
            
            <button
              onClick={() => setCount(count - 1)}
              className=" relative py-3 px-4 overflow-hidden rounded-xl bg-gray-800 border border-gray-700 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 transition-all duration-300 ease-out group-hover:w-full opacity-30"></div>
              <span className="relative z-10 font-medium text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-white">
                Decrement
              </span>
            </button>
            
            <button
              onClick={() => setCount(0)}
              className=" relative py-3 px-4 overflow-hidden rounded-xl bg-gray-800 border border-gray-700 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300 ease-out group-hover:w-full opacity-30"></div>
              <span className="relative z-10 font-medium text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-white">
                Reset
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;