import React, { useEffect, useState } from "react";
import { Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react";
export default function InputItem() {
  const [input, setInput] = useState("");

  const [requirement, setRequirement] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    digit: false,
  });

  useEffect(() => {
    setRequirement({
      length: input.length > 8,
      uppercase: /[A-Z]/.test(input),
      lowercase: /[a-z]/.test(input),
      digit: /[0-9]/.test(input),
    });
  },[input]);
  console.log(input);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg  w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-1 text-center">Create Password</h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Enter a secure password
        </p>

        <div className="mb-4 relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
          >
            eye
          </button>
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-2">Password Requirements</p>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center gap-2">
              {requirement.length ? (<CheckCircle2 size={16} className="text-green-500" />):( <XCircle size={16} className="text-red-500" />)}
              <span className={"text-gray-500"}>At least 8 characters</span>
            </li>
            <li className="flex items-center gap-2">
              {requirement.uppercase ? (<CheckCircle2 size={16} className="text-green-500" />):( <XCircle size={16} className="text-red-500" />)}
              Contains uppercase character
            </li>

            <li className="flex items-center gap-2">
              {requirement.lowercase ? (<CheckCircle2 size={16} className="text-green-500" />):( <XCircle size={16} className="text-red-500" />)}
              Contains lowercase character
            </li>
            <li className="flex items-center gap-2">
             {requirement.digit ? (<CheckCircle2 size={16} className="text-green-500" />):( <XCircle size={16} className="text-red-500" />)}
              Contains a digit
            </li>
          </ul>
        </div>

        <button
          className="w-full $
             bg-gray-400
           text-white py-2 rounded-lg "
        >
          Submit
        </button>
      </div>
    </div>
  );
}
