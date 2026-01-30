import { Link } from "react-router-dom";
import { useState } from "react";

export default function Onboarding3() {
  const [selectedPurpose, setSelectedPurpose] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const purposes = [
    "Task Management",
    "Team Collaboration",
    "Finance Tracking",
    "CRM Dashboard",
    "Client Projects",
  ];

  const roles = [
    "Founder",
    "Developer",
    "Designer",
    "Marketer",
    "Project Manager",
    "Other",
  ];

  return (
    <div className="flex">
      {/* LEFT SIDE empty */}
      <div className="hidden lg:block w-1/2 bg-[#f5f6f8]"></div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <h1 className="text-xl font-semibold mb-6">DataCircles</h1>

          {/* Progress */}
          <div className="flex justify-center gap-5 mb-3">
            <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              1
            </span>
            <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              2
            </span>
            <span className="w-6 h-6 bg-dcprimary text-white rounded-full flex items-center justify-center">
              3
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-snug">
            Set up your smart workspace
          </h2>
          <p className="mt-1 text-gray-600">
            Pick what you're building. We’ll customize features for you.
          </p>

          {/* OPTIONS */}
          <div className="mt-8 text-left space-y-8">
            {/* Purpose selection */}
            <div>
              <p className="font-medium mb-1">
                What will you mainly use DataCircles for?
              </p>
              <div className="flex flex-wrap gap-2">
                {purposes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedPurpose(item)}
                    className={`
                      px-4 py-2 rounded-full text-sm border transition 
                      ${
                        selectedPurpose === item
                          ? "bg-dcprimary text-white border-dcprimary"
                          : "bg-dcbg text-dctext hover:bg-dcprimary-light border-gray-300"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Role selection */}
            <div>
              <p className="font-medium mb-2">What describes your role?</p>
              <div className="flex flex-wrap gap-2">
                {roles.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedRole(item)}
                    className={`
                      px-4 py-2 rounded-full text-sm border transition
                      ${
                        selectedRole === item
                          ? "bg-dcprimary text-white border-dcprimary"
                          : "bg-dcbg text-dctext hover:bg-dcprimary-light border-gray-300"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Continue */}
            <Link to="/home">
              <button
                className="w-full bg-dcprimary hover:bg-dcprimary-hover text-white py-3 rounded-lg mt-1 disabled:opacity-50"
                disabled={!selectedPurpose || !selectedRole}
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
