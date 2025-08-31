import React, { useState } from "react";

export default function Tabs() {
 
    const [isActive, setIsActive] = useState('Home')


  return (
    <div className="p-6">
      <div className="flex space-x-4 border-b">
        <button
          onClick={()=>setIsActive("Home")}
          className={`py-2 px-4 ${
            activeTab === "Home" ? "text-green-500" : "text-gray-500"
          }
            `}
        >
          Home
        </button>

        <button
          
          onClick={()=>setIsActive("Home")}
          className={`py-2 px-4 ${
            activeTab === "Profile" ? "text-green-500" : "text-gray-500"
          }
            `}
        >
          Profile
        </button>

        <button
        
          className={`py-2 px-4 ${
            activeTab === "Settings" ? "text-green-500" : "text-gray-500"
          }
            `}
        >
          Settings
        </button>
      </div>

      <div className="mt-6">
       
      </div>
    </div>
  );
}
