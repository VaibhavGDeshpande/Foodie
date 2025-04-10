import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, User } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/menu');
    } else {
      setError('Invalid credentials. Use demo/demo123');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="max-w-md w-full space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 text-center">Urbee</h1>
            <h2 className="mt-2 text-center text-xl text-gray-600">Welcome back</h2>
            <p className="text-center text-sm text-gray-500">
              Demo credentials: <span className="font-medium">demo / demo123</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-100 text-red-600 p-3 rounded text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-center text-gray-600">
            Don’t have an account? <a href="#" className="text-orange-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>

      {/* Right Panel: Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="https://mysolluna.com/wp-content/uploads/2012/02/Solluna-Blog-Content-Images-7.png" 
           // Change this to your own hosted image if needed
          alt="Food"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
