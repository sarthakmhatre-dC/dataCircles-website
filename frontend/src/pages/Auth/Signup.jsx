// src/pages/Signup.jsx
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      {/* LEFT SIDE – 50% –  */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-4 bg-blue-100 rounded-xl">
        <div className="relative max-w-2xl w-full">
          {/* Real image with rounded corners + shadow */}
          <img
            src="/assets/dashboard1.png"
            alt="Dashboard preview"
            className="w-full h-auto rounded-2xl shadow-2xl object-fit border border-blue-400 p-2"
          />

          {/* Optional caption below image */}
          <div className="absolute -bottom-8 left-0 right-0 text-center">
            {/* in case we want to add some text */}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-16 bg-white">
        {/* 🔹 Top heading outside the form */}
        <div className="flex flex-row gap-2 px-2 mb-4 h-7 justify-center  ">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-7 mx-auto mb-10 bg-black rounded-4xl "
          />
          <h1 className=" text-2xl font-semibold text-black  px-2 mb-4 h-7 justify-center ">
            DataCircles
          </h1>
        </div>

        {/* 🔹 Inner container for the login card */}
        <div className="w-full max-w-sm space-y-8 mx-auto ">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              Create your account{" "}
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Start your free trial today
            </p>
          </div>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition"
              required
            />
            <input
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition"
              required
            />
            <Link
              to="/onboarding1"
              className="text-sm text-blue-600 hover:underline"
            >
              <button className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg transition text-sm hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-blue-2">
                Sign up free
              </button>
            </Link>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                or continue with
              </span>
            </div>
          </div>

          <button className="w-full border border-gray-300 py-2 rounded-xl flex justify-center items-center gap-3">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              {/* Google icon */}
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-600">
            If you have an account?{" "}
            <Link
              to="https://datacircles.netlify.app/login"
              className="text-indigo-600 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
