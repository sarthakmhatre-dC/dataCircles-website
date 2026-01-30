import { Link } from "react-router-dom";

export default function Onboarding1() {
  return (
    <div className="flex">
      {/* LEFT SIDE (empty for now) */}
      <div className="hidden lg:block w-1/2 bg-[#f5f6f8] "></div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <div className="max-w-md w-full text-center">
          <h1 className="text-xl font-semibold mb-6">DataCircles</h1>

          {/* Progress */}
          <div className="flex justify-center gap-5 mb-6">
            <span className="w-6 h-6 bg-blue-600 rounded-full">1</span>
            <span className="w-6 h-6 bg-gray-300 rounded-full">2</span>
            <span className="w-6 h-6 bg-gray-300 rounded-full">3</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold leading-snug">
            Getting to know you helps us serve you better.
          </h2>
          <p className="mt-2 text-gray-600">
            Knowing you better helps us tailor your experience.
          </p>

          {/* FORM */}
          <div className="mt-8 space-y-4 text-left">
            {/* First Name + Last Name */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-sm text-gray-600">First name</label>
                <input
                  type="text"
                  className="w-full mt-1 border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Alexander"
                />
              </div>

              <div className="w-1/2">
                <label className="text-sm text-gray-600">Last name</label>
                <input
                  type="text"
                  className="w-full mt-1 border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Jhoe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="w-full mt-1 border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="alexanderjhoe@mail.com"
              />
            </div>
          </div>

          <Link to="/onboarding2">
            {/* Button */}
            <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
