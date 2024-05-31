import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#B0BEC5]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-[#FF7F50] text-white font-bold py-2 px-4 rounded-md w-full">
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-[#FF7F50] font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;