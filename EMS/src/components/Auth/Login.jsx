import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-200 to-green-100 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl shadow-2xl px-8 py-10 sm:px-10 md:px-12 lg:px-14">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-emerald-700">Employee Management System</h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">Please log in to continue</p>
        </div>

        {/* Login Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 border border-emerald-400 rounded-full text-gray-800 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter password"
            className="w-full px-5 py-3 border border-emerald-400 rounded-full text-gray-800 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base"
          />
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-full bg-emerald-600 text-white font-semibold text-base sm:text-lg hover:bg-emerald-700 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
