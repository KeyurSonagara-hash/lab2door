import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTestClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("test-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("test-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-[#080d14] pt-24 pb-12 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Logo Section */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-10 h-10 bg-[#0052cc] rounded-xl text-white shadow-lg shadow-[#0052cc]/20">
                <span className="material-symbols-outlined font-bold text-xl">biotech</span>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase dark:text-white">
                Lab<span className="text-[#0052cc]">2</span>Door
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-[13px] font-bold leading-relaxed uppercase tracking-wide">
              Providing premium NABL-certified diagnostic services at your doorstep. Fast, accurate, and 100% secure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-slate-900 dark:text-white mb-8 uppercase text-[11px] tracking-[0.3em]">Services</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={handleTestClick} className="text-[12px] font-black uppercase tracking-widest text-slate-500 hover:text-[#0052cc] transition-all">
                  All Lab Tests
                </button>
              </li>
              <li><Link to="/about" className="text-[12px] font-black uppercase tracking-widest text-slate-500 hover:text-[#0052cc] transition-all">About Our Lab</Link></li>
              <li><Link to="/contact" className="text-[12px] font-black uppercase tracking-widest text-slate-500 hover:text-[#0052cc] transition-all">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal Section - FIXED LINKS */}
          <div>
            <h4 className="font-black text-slate-900 dark:text-white mb-8 uppercase text-[11px] tracking-[0.3em]">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-[12px] font-black uppercase tracking-widest text-slate-500 hover:text-[#0052cc] transition-all">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-[12px] font-black uppercase tracking-widest text-slate-500 hover:text-[#0052cc] transition-all">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="text-[12px] font-black uppercase tracking-widest text-slate-500 hover:text-[#0052cc] transition-all">Refund Policy</Link></li>
              <li><Link to="/partner" className="text-[12px] font-black uppercase tracking-widest text-slate-500 hover:text-[#0052cc] transition-all">Partner with Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
            <h4 className="font-black text-slate-900 dark:text-white mb-4 uppercase text-[11px] tracking-[0.3em]">Stay Updated</h4>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full px-5 py-4 rounded-xl border-none bg-white dark:bg-slate-800 text-xs font-bold outline-none" placeholder="EMAIL ADDRESS" type="email" />
              <button className="w-full py-4 bg-[#111827] dark:bg-[#0052cc] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#0052cc] transition-all shadow-lg shadow-black/10">
                Join Network
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 dark:border-slate-900">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">© 2026 Lab2Door Diagnostics. Crafted for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;