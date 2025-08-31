import React, { useState, useEffect } from "react";

export default function CountdownTimer() {

    const [time,setTime]= useState(100);

    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
        let timer;

        if(isRunning && time > 0){
          timer =  setInterval(()=>{
              setTime(prev=>prev-1)
            },1000)
        }
    })



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">⏳ Countdown Timer</h1>

     
      <div className="text-5xl font-mono mb-6">10s</div>

     
      <div className="space-x-4">
        <button
         
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Start
        </button>

        <button
         
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
        >
          Pause
        </button>

        <button
         
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
