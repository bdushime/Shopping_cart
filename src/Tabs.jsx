import React, { useState } from "react";

export default function Tabs() {
 
    const [isActive, setIsActive] = useState('Home')


  return (
    <div className="p-6">
      <div className="flex space-x-4 border-b">
        <button
          onClick={()=>setIsActive("Home")}
          className={`py-2 px-4 ${
            isActive === "Home" ? "text-green-500" : "text-gray-500"
          }
            `}
        >
          Home
        </button>

        <button
          
          onClick={()=>setIsActive("Profile")}
          className={`py-2 px-4 ${
            isActive === "Profile" ? "text-green-500" : "text-gray-500"
          }
            `}
        >
          Profile
        </button>

        <button
          onClick={()=>setIsActive("Settings")}
          className={`py-2 px-4 ${
            isActive === "Settings" ? "text-green-500" : "text-gray-500"
          }
            `}
        >
          Settings
        </button>
      </div>

      <div className="mt-6">
        {isActive === "Home" && <p>Welcome to my home</p>}
        {isActive === "Profile" && <p>Welcome to my profile</p>}
        {isActive === "Settings" && <p>Welcome to my settings</p>}
      </div>
    </div>
  );
}
