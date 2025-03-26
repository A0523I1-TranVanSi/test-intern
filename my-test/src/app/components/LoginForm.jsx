"use client";
import { useState, useEffect } from "react";
import React from "react";

export default function AuthForm() {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isForgotPassword ? (
        <ForgotPasswordForm onBack={() => setIsForgotPassword(false)} />
      ) : (
        <LoginForm onForgotPassword={() => setIsForgotPassword(true)} />
      )}
    </div>
  );
}

function LoginForm({ onForgotPassword }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const timeout = 3000; // 3 giây

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), timeout);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleLogin = () => {
    if (!email.includes("@")) {
      setMessage("⚠️ Email không hợp lệ!");
      setIsSuccess(false);
      return;
    }
    if (password.length < 6) {
      setMessage("🔒 Mật khẩu phải có ít nhất 6 ký tự!");
      setIsSuccess(false);
      return;
    }

    setMessage("✅ Đăng nhập thành công!");
    setIsSuccess(true);

  };

  return (
    <div className="p-8 bg-white shadow-md rounded-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      {message && (
        <p className={`mt-3 text-center font-semibold ${isSuccess ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
      <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-md mb-3" />
      <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border rounded-md mb-3" />
      <div className="flex justify-between items-center mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" /> Remember me
        </label>
        <button onClick={onForgotPassword} className="text-blue-600 text-sm">
          Forgot password?
        </button>
      </div>
      <button onClick={handleLogin} className="w-full bg-blue-700 text-white py-3 rounded-md">Log in</button>
    </div>
  );
}

function ForgotPasswordForm({ onBack }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleForgotPassword = () => {
    if (!email.includes("@")) {
      setMessage("⚠️ Email không hợp lệ!");
      setIsSuccess(false);
      return;
    }

    setMessage("📩 Kiểm tra email của bạn để đặt lại mật khẩu!");
    setIsSuccess(true);

    setTimeout(() => {
      console.log(`Gửi link reset password đến: ${email}`);
    }, 1000);
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
      <p className="text-gray-600 text-center mb-4">Nhập email của bạn để nhận liên kết đặt lại mật khẩu.</p>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-md mb-3" />
      <button onClick={handleForgotPassword} className="w-full bg-blue-700 text-white py-3 rounded-md">Send Reset Link</button>

      {message && (
        <p className={`mt-3 text-center font-semibold ${isSuccess ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}

      <div className="mt-4 text-center">
        <button onClick={onBack} className="text-blue-600 text-sm">
          ← Back to Login
        </button>
      </div>
    </div>
  );
}
