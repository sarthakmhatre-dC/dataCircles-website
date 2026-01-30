import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import OnBoardingOne from "./pages/onBoarding/onBoarding1";
import MainLayout from "./layouts/MainLayout";
import Onboarding1 from "./pages/onBoarding/onBoarding1";
import Onboarding2 from "./pages/onBoarding/onBoarding2";
import Onboarding3 from "./pages/onBoarding/onBoarding3";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Terms from "./pages/BookADemo";
import Privacy from "./pages/DataVault";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import FeatureDetail from "./pages/FeatureDetail";
import LeadManagementPage from "./pages/Features/crm/LeadManagementPage";
import PipelineOverviewPage from "./pages/Features/crm/PipelineOverviewPage";
import TeamCollaborationPage from "./pages/Features/crm/TeamCollaborationPage";
import SmartInvoiceTrackingPage from "./pages/Features/invoicing/SmartInvoiceTrackingPage";
import PaymentIntegrationPage from "./pages/Features/invoicing/PaymentIntegrationPage";
import HeroBackground from "./components/HeroBackground";
import CustomProjects from "./pages/CustomProjects";

import BookADemo from "./pages/BookADemo";
import DataVault from "./pages/DataVault";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SecurityCompliance from "./pages/SecurityCompliance";
import LightRays from "./components/ui/LightRays";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const Frontend_Url = import.meta.env.VITE_APP_URL;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col h-full w-full justify-center items-center overflow-x-hidden overflow-y-hidden  ">
        <HeroBackground />

        {/* <div className="absolute inset-0 pointer-events-none">
          <LightRays
            raysColor="#4c8cf5" // Approximate blue from image
            raysSpeed={0.9}
            lightSpread={1.3}
            rayLength={3}
            fadeDistance={1.2}
            pulsating={true}
          />
        </div> */}

        {/* <HeroSpotlight /> */}
        <Routes>
          <Route
            path="/login"
            element={
              <Navigate to="http://localhost:5173/" replace />
            }
          />
          <Route
            path="/signup"
            element={
              <Navigate to="http://localhost:5173/" replace />
            }
          />

          <Route element={<MainLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/onboarding1" element={<Onboarding1 />} />
            <Route path="/onboarding2" element={<Onboarding2 />} />
            <Route path="/onboarding3" element={<Onboarding3 />} />
            <Route path="/home" element={<div>Home Page</div>} />
            {/* Dynamic routing for feature details */}
            {/*  <Route path="/features" element={<Features />}>
              <Route path="feature-details" element={<FeatureDetail />} />
            </Route> */}
            {/* ================================================================= */}
            {/* Kaamchalau routing done */}
            <Route path="/features" element={<Features />} />
            <Route path="/features/:slug" element={<FeatureDetail />} />

            {/* CRM  */}
            <Route
              path="/features/lead-management"
              element={<LeadManagementPage />}
            />
            <Route
              path="/features/pipeline-overview"
              element={<PipelineOverviewPage />}
            />
            <Route
              path="/features/team-collaboration"
              element={<TeamCollaborationPage />}
            />
            <Route
              path="/features/taskandfollowup"
              element={<TeamCollaborationPage />}
            />
            <Route
              path="/features/reportsandactivitylogs"
              element={<TeamCollaborationPage />}
            />

            {/* Invoicing */}
            <Route
              path="/features/smart-tracking"
              element={<SmartInvoiceTrackingPage />}
            />
            <Route
              path="/features/payment-integration"
              element={<PaymentIntegrationPage />}
            />
            {/* Kaamchalau routing done */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/book-a-demo" element={<BookADemo />} />
            <Route path="/datavault" element={<DataVault />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/security" element={<SecurityCompliance />} />
            <Route path="/custom-projects" element={<CustomProjects />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
