import React from "react";
export default function LoginForm() {
    return (
      <div className="p-8 bg-white shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Hello!</h2>
        <input type="email" placeholder="Enter email" className="w-full p-3 border rounded-md mb-3" />
        <input type="password" placeholder="Enter password" className="w-full p-3 border rounded-md mb-3" />
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="#" className="text-blue-600 text-sm">Forgot password?</a>
        </div>
        <button className="w-full bg-blue-700 text-white py-3 rounded-md">Log in</button>
      </div>
    );
  }
  