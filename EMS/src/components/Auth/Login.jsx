import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('❌ Please fill in both fields.', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
      return;
    }

    handleLogin(email, password);

    toast.success('✅ Login submitted!', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'colored',
    });

    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-200 to-green-100 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl shadow-2xl px-8 py-10">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-emerald-700">Employee Management System</h1>
          <p className="text-gray-600 mt-2 text-sm">Please log in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 border border-emerald-400 rounded-full bg-white text-gray-800 text-sm"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="w-full px-5 py-3 border border-emerald-400 rounded-full bg-white text-gray-800 text-sm"
          />
          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
          >
            Log In
          </button>
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
