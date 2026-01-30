import { Link } from "react-router-dom";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function Onboarding2() {
  return (
    <div className="flex">
      {/* LEFT SIDE empty */}
      <div className="hidden lg:block w-1/2 bg-[#f5f6f8]"></div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10">
        <div className="max-w-md w-full text-center">
          <h1 className="text-xl font-semibold mb-6">DataCircles</h1>

          {/* Progress */}
          <div className="flex justify-center gap-5 mb-6">
            <span className="w-6 h-6 bg-gray-300 rounded-full">1</span>
            <span className="w-6 h-6 bg-blue-600 rounded-full">2</span>
            <span className="w-6 h-6 bg-gray-300 rounded-full">3</span>
          </div>

          <h2 className="text-2xl font-bold leading-snug">
            Create your space to work smarter
          </h2>
          <p className="mt-2 text-gray-600">
            Organize your tasks, files, and team in one place.
          </p>

          {/* FORM */}
          <div className="mt-8 space-y-4">
            <button className="w-full border rounded-lg py-3 text-sm text-gray-700">
              + Add Image
            </button>

            <input
              className="w-full border rounded-lg p-3 text-sm"
              placeholder="Workspace Name"
            />

            <input
              className="w-full border rounded-lg p-3 text-sm"
              placeholder="Address"
            />

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Your State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mh">Maharashtra</SelectItem>
                <SelectItem value="gj">Gujarat</SelectItem>
                <SelectItem value="ka">Karnataka</SelectItem>
              </SelectContent>
            </Select>

            <Link to="/onboarding3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
