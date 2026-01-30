// src/pages/Login.jsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      {/* LEFT SIDE – 50% – Your dashboard screenshot */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-4 bg-blue-100 rounded-xl">
        <div className="relative max-w-2xl w-full">
          <img
            src="/assets/dashboard1.png" // ← keep same or change to login-specific
            alt="Dashboard preview"
            className="w-full h-auto rounded-2xl shadow-3xl object-fit border border-blue-400 p-2 "
          />
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
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-base text-gray-600">
              Log in to your account
            </p>
          </div>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition h-10"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition h-10"
              required
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <Input type="checkbox" className="mr-2 w-4" />
                Remember me
              </label>
              <a className="text-sm text-blue-500 hover:underline" href="#">
                Forgot password?
              </a>
            </div>

            {/*  bg-blue-500 text-white hover:bg-blue-900  */}
            <Link to="/onboarding1">
              <Button className="w-full  py-3 rounded-lg text-sm  focus:ring-2 focus:ring-blue-500 focus:ring-blue-2 bg-dcprimary hover:bg-dcprimary-hover text-white border-accent">
                Log in
              </Button>
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
            Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
