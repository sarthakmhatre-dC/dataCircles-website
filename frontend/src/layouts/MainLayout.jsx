import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";

export default function MainLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col overflow-y-hidden mt-24 sm:mt-30 md:mt-38 lg:mt-45">
        {/* Global Header */}
        <Header />
        {/* <HeroBackground /> */}

        {/* Main Content */}
        <main className="flex-1 w-screen overflow-x-hidden h-screen ">
          <Outlet />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </>
  );
}
