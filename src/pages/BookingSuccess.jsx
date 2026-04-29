import React from 'react';

const BookingConfirmation = () => {
  // Custom styles for Material Symbols to match the original CSS
  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
  };

  return (
    <div className="bg-[#f6f8f6] dark:bg-[#102216] font-['Inter',_sans-serif] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#102216]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#11d452] text-3xl" style={iconStyle}>
                  biotech
                </span>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Lab2Door</span>
              </div>
              <Link to="/" className="text-sm font-medium hover:text-[#0052cc] transition-colors">
    Home
  </Link>

  <Link to="/labs" className="text-sm font-medium hover:text-[#0052cc] transition-colors">
    Find Labs
  </Link>

  <Link to="/test-details" className="text-sm font-medium hover:text-[#0052cc] transition-colors">
    Tests
  </Link>

  <Link to="/about" className="text-sm font-medium hover:text-[#0052cc] transition-colors">
    About
  </Link>

  <Link to="/contact" className="text-sm font-medium hover:text-[#0052cc] transition-colors">
    Contact
  </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" style={iconStyle}>
                  search
                </span>
                <input 
                  className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-full text-sm focus:ring-2 focus:ring-[#11d452] w-64 outline-none" 
                  placeholder="Search tests..." 
                  type="text" 
                />
              </div>
              <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined" style={iconStyle}>notifications</span>
              </button>
              <div className="h-8 w-8 rounded-full bg-[#11d452]/20 flex items-center justify-center overflow-hidden border border-[#11d452]/30">
                <img 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtH2WC8oU8vyU-eYb7bq3v18D4CMZzr7X-QyJFqrfEstu7DjyLpeTPnqOZG_Bx-6eaZoA8x5EIw38jmMrsprNSyhdlYGHY4PpjqPZHlytqj6IHS4GJuEySMaO882uUUFkzJwzhNNNNbx2LrZ6B58xIT3sRWF-WaSm7nCIWOcj4lBcPUyNlnH3txK22qWnnQDUVy_2wp7cL1z5CweILODQRBJvPJ7O2uJv6dtHty6EWWaGJp_S1QItiZAO97pfvDJISdd-HYOOfFdtC" 
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center py-12 px-4">
        {/* Success Banner */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#11d452]/10 rounded-full mb-6">
            <span className="material-symbols-outlined text-[#11d452] text-5xl font-bold" style={iconStyle}>
              check_circle
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Booking Confirmed Successfully!</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Your health checkup is scheduled. We've sent a confirmation email with all the details to your registered address.
          </p>
        </div>

        {/* Booking Information Card */}
        <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-6 mb-6">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Booking ID</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">#L2D-984210</p>
              </div>
              <div className="px-3 py-1 bg-[#11d452]/10 text-[#11d452] rounded-full text-xs font-bold">CONFIRMED</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-slate-400 mt-0.5" style={iconStyle}>apartment</span>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Lab Name</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">City Diagnostic Center</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-slate-400 mt-0.5" style={iconStyle}>science</span>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Test Package</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Full Body Checkup Gold</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-slate-400 mt-0.5" style={iconStyle}>calendar_today</span>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Appointment Date</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Oct 24, 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-slate-400 mt-0.5" style={iconStyle}>schedule</span>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Time Slot</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">08:00 AM - 09:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps Utility Section */}
            <div className="mt-10 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#11d452] text-xl" style={iconStyle}>info</span>
                Important Next Steps
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-[#11d452] rounded-full"></span>
                  Our phlebotomist will call you 30 mins before arrival.
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-[#11d452] rounded-full"></span>
                  Please keep a valid ID proof ready for verification.
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-[#11d452] rounded-full"></span>
                  Fast for 10-12 hours prior to the sample collection.
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons Footer */}
          <div className="px-6 py-6 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#11d452] hover:bg-[#11d452]/90 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-[#11d452]/20">
              <span className="material-symbols-outlined text-xl" style={iconStyle}>download</span>
              Download Receipt
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 font-bold py-3 px-6 rounded-xl transition-all">
              <span className="material-symbols-outlined text-xl" style={iconStyle}>list_alt</span>
              View All Bookings
            </button>
          </div>
        </div>

        {/* Help Section */}
        <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
          Need help? <a className="text-[#11d452] font-medium hover:underline" href="#">Contact our support team</a> or call +1 (800) LAB-DOOR
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 px-4 border-t border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-[#11d452] text-3xl" style={iconStyle}>biotech</span>
              <span className="text-xl font-bold tracking-tight text-white">Lab2Door</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              India's most trusted home diagnostic service. Reliable results from certified labs delivered right to your doorstep.
            </p>
            <div className="flex gap-4">
              <a className="hover:text-[#11d452] transition-colors" href="#">
                <span className="material-symbols-outlined" style={iconStyle}>public</span>
              </a>
              <a className="hover:text-[#11d452] transition-colors" href="#">
                <span className="material-symbols-outlined" style={iconStyle}>alternate_email</span>
              </a>
              <a className="hover:text-[#11d452] transition-colors" href="#">
                <span className="material-symbols-outlined" style={iconStyle}>share</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-[#11d452] transition-colors" href="#">Book a Test</a></li>
              <li><a className="hover:text-[#11d452] transition-colors" href="#">Health Packages</a></li>
              <li><a className="hover:text-[#11d452] transition-colors" href="#">Find Labs</a></li>
              <li><a className="hover:text-[#11d452] transition-colors" href="#">For Corporates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-[#11d452] transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-[#11d452] transition-colors" href="#">Track Booking</a></li>
              <li><a className="hover:text-[#11d452] transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-[#11d452] transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Download App</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-slate-900 p-3 rounded-lg border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors group">
                <span className="material-symbols-outlined text-2xl" style={iconStyle}>phone_iphone</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase text-slate-500 leading-none">Download on the</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#11d452] transition-colors">App Store</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-900 p-3 rounded-lg border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors group">
                <span className="material-symbols-outlined text-2xl" style={iconStyle}>ad_units</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase text-slate-500 leading-none">Get it on</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#11d452] transition-colors">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-900 mt-12 pt-8 text-center text-xs text-slate-500">
          © 2023 Lab2Door Diagnostics Private Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default BookingConfirmation;