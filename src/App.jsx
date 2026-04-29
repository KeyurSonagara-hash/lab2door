import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import FindLabs from "./pages/FindLabs";
import LabDetails from "./pages/LabDetails";
import TestDetails from "./pages/TestDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookingSuccess from "./pages/BookingSuccess";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PlasmaDonation from "./pages/PlasmaDonation"; 

// ✅ Import your new Login and Signup pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { PrivacyPolicy, TermsOfService, RefundPolicy, PartnerWithUs } from './pages/LegalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* ✅ Auth Routes */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          {/* ✅ Plasma Donation Route */}
          <Route path="plasma-donation" element={<PlasmaDonation />} />

          <Route path="labs" element={<FindLabs />} />
          <Route path="lab-details" element={<LabDetails />} />
          <Route path="test-details/:id" element={<TestDetails />} />

          {/* Legal Routes */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="partner" element={<PartnerWithUs />} />

          {/* Other Pages */}
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="booking-success" element={<BookingSuccess />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;