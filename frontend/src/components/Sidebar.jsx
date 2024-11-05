import React from "react";

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-white border-r p-5">
        <div className="flex flex-col items-center">
          <img
            className="h-10 w-10"
            src="https://example.com/twitter-logo.png" // Replace with your actual PNG URL
            alt="Rajnish Logo"
          />
          <span className="text-lg font-semibold mt-2">Profile</span>
        </div>

        <nav className="mt-10">
          <a
            href="#"
            className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <img
              src="https://example.com/home-icon.png" // Replace with your actual PNG URL
              alt="Home"
              className="w-6 h-6"
            />
            <span className="ml-3">Home</span>
          </a>

          <a
            href="#"
            className="flex items-center p-2 mt-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <img
              src="https://example.com/explore-icon.png" // Replace with your actual PNG URL
              alt="Explore"
              className="w-6 h-6"
            />
            <span className="ml-3">Explore</span>
          </a>

          <a
            href="#"
            className="flex items-center p-2 mt-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <img
              src="https://example.com/notifications-icon.png" // Replace with your actual PNG URL
              alt="Notifications"
              className="w-6 h-6"
            />
            <span className="ml-3">Notifications</span>
          </a>

          <a
            href="#"
            className="flex items-center p-2 mt-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <img
              src="https://example.com/messages-icon.png" // Replace with your actual PNG URL
              alt="Messages"
              className="w-6 h-6"
            />
            <span className="ml-3">Messages</span>
          </a>

          <a
            href="#"
            className="flex items-center p-2 mt-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <img
              src="https://example.com/bookmarks-icon.png" // Replace with your actual PNG URL
              alt="Bookmarks"
              className="w-6 h-6"
            />
            <span className="ml-3">Bookmarks</span>
          </a>

          <a
            href="#"
            className="flex items-center p-2 mt-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <img
              src="https://example.com/lists-icon.png" // Replace with your actual PNG URL
              alt="Lists"
              className="w-6 h-6"
            />
            <span className="ml-3">Lists</span>
          </a>

          <a
            href="#"
            className="flex items-center p-2 mt-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <img
              src="https://example.com/profile-icon.png" // Replace with your actual PNG URL
              alt="Profile"
              className="w-6 h-6"
            />
            <span className="ml-3">Profile</span>
          </a>

          <a
            href="#"
            className="flex items-center p-2 mt-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <img
              src="https://example.com/more-icon.png" // Replace with your actual PNG URL
              alt="More"
              className="w-6 h-6"
            />
            <span className="ml-3">More</span>
          </a>
        </nav>

        <button className="mt-5 w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
          Tweet
        </button>

        <div className="flex items-center mt-6">
          <img
            className="h-10 w-10 rounded-full"
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="User Avatar"
          />
          <div className="ml-3">
            <p className="text-gray-800">Rajnish</p>
            <p className="text-gray-500">@rajnish</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
