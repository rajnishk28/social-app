import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://music-cart-backend-gray.vercel.app/user/signup",
        { fullName, email, password, contactNumber }
      );
      console.log("response", response);

      if (response.status === 200) {
        alert(response.data.message);
        navigate("/Home");
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Sign Up
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="Full Name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              type="text"
              id="Fullname"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your Full Name"
            />
          </div>

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
              htmlFor="Contact"
              className="block text-sm font-medium text-gray-600"
            >
              Contact
            </label>
            <input
              onChange={(e) => {
                setContactNumber(e.target.value);
              }}
              type="number"
              id="Contact"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your Contact Number"
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

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Confirm your password"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Log in
            </a>
          </p>

          {/* {isShow ? (
          <div className="bg-red-500">
            <span> {fullName + "" + email + ""}</span>
          </div>
        ) : null} */}
        </div>
      </div>
    </div>
  );
};
export default Signup;
