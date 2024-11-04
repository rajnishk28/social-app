import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://music-cart-backend-gray.vercel.app/user/login",
        {
          email, 
          password,
        }
      );
      console.log("response is ", response);

      if (response.status === 200) {
        alert(response.data.message);
        navigate("/Home");
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={LoginSubmitHandler}
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Do Not have an account?{" "}
          <a href="/" className="text-indigo-600 hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
