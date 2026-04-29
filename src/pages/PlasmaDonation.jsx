import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, Users, ClipboardList, 
  ChevronRight, ChevronDown, MapPin, 
  Search, AlertCircle, CheckCircle2,
  Clock, ShieldCheck
} from 'lucide-react';

const PlasmaDonation = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: '', group: '', phone: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    if(formData.name && formData.group) {
      setIsRegistered(true);
      setTimeout(() => setIsRegistered(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans pb-20">
      <main>
        {/* Professional Header Section */}
        <section className="relative bg-white pt-12 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0052cc] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <ShieldCheck size={14} /> Medical Grade Security
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
                Be the reason <br /> 
                <span className="text-red-600">life goes on.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed max-w-md mb-10">
                Your plasma donation helps patients with rare diseases and immune deficiencies. Join our verified donor network.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('reg-form').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#111827] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#0052cc] transition-all shadow-xl active:scale-95"
                >
                  Register as Donor
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white border border-slate-200 text-slate-700 px-10 py-4 rounded-2xl font-bold hover:border-[#0052cc] transition-all"
                >
                  Find a Center
                </button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-blue-100/50 rounded-[4rem] rotate-3 scale-95"></div>
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white w-full max-w-lg">
                <img 
                  src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Clinical Care" 
                  className="w-full h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Stats Grid */}
        <section className="px-6 -mt-12 relative z-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard icon={<Users />} label="Active Donors" value="14,200+" />
            <StatCard icon={<Heart fill="currentColor" />} label="Successful Lives" value="52.8k" isPrimary />
            <StatCard icon={<Clock />} label="Fast Response" value="15 Min" />
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 mt-24">
          <div className="lg:col-span-2 space-y-20">
            <CampSearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <BenefitsSection />
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <div id="reg-form" className="sticky top-28">
              {isRegistered ? (
                <div className="bg-green-50 border border-green-100 p-10 rounded-[2.5rem] text-center animate-fadeIn">
                  <CheckCircle2 className="text-green-500 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-green-900">Registration Success!</h3>
                  <p className="text-sm text-green-700 mt-2">Our team will contact you shortly.</p>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-50">
                  <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <AlertCircle className="text-red-500" size={20} /> Donor Intake Form
                  </h3>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <input 
                      required
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm outline-none ring-1 ring-slate-100 focus:ring-2 focus:ring-[#0052cc]"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <select 
                      required
                      className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm outline-none ring-1 ring-slate-100"
                      onChange={(e) => setFormData({...formData, group: e.target.value})}
                    >
                      <option value="">Blood Group</option>
                      <option>A+</option><option>B+</option><option>O+</option><option>AB+</option>
                    </select>
                    <button className="w-full bg-[#0052cc] text-white font-black py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all">
                      Register Now
                    </button>
                  </form>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

// --- Reusable Professional Components ---

const StatCard = ({ icon, label, value, isPrimary }) => (
  <div className={`p-8 rounded-3xl shadow-lg flex flex-col items-center border ${isPrimary ? 'bg-red-600 text-white border-transparent scale-105' : 'bg-white text-slate-800 border-slate-50'}`}>
    <div className={`${isPrimary ? 'text-white/30' : 'text-red-500'} mb-3`}>{icon}</div>
    <h3 className="text-3xl font-black">{value}</h3>
    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{label}</p>
  </div>
);

const CampSearchSection = ({ searchTerm, setSearchTerm }) => {
  const camps = [
    { id: 1, name: "City Care Center", dist: "1.2km", status: "Open Now" },
    { id: 2, name: "Red Cross Lab", dist: "3.5km", status: "Closing Soon" }
  ].filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-black tracking-tight">Donation Hubs</h2>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
          <input 
            type="text"
            placeholder="Filter centers..."
            className="pl-12 pr-6 py-3 bg-white border border-slate-100 rounded-full text-sm focus:ring-2 ring-blue-50 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {camps.map(camp => (
          <div key={camp.id} className="p-6 bg-white rounded-3xl border border-slate-100 hover:border-[#0052cc] transition-all cursor-pointer group">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-slate-800">{camp.name}</h4>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><MapPin size={12}/> {camp.dist}</p>
              </div>
              <span className="text-[9px] font-black px-2 py-1 bg-green-50 text-green-600 rounded-md uppercase">{camp.status}</span>
            </div>
            <button className="mt-6 text-[#0052cc] text-xs font-black flex items-center gap-1 group-hover:gap-2 transition-all">
              Book Slot <ChevronRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const BenefitsSection = () => (
  <div className="bg-slate-50 p-12 rounded-[3rem]">
    <h2 className="text-2xl font-black mb-8">Why Donate?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex gap-4">
        <div className="w-10 h-10 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <ClipboardList className="text-blue-500" size={18} />
        </div>
        <div>
          <h5 className="font-bold text-sm">Free Health Check</h5>
          <p className="text-xs text-slate-500 mt-1">Get a complimentary screening for vital signs and protein levels.</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-10 h-10 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <CheckCircle2 className="text-red-500" size={18} />
        </div>
        <div>
          <h5 className="font-bold text-sm">Verified Experience</h5>
          <p className="text-xs text-slate-500 mt-1">Join a community of 14,000+ verified donors in India.</p>
        </div>
      </div>
    </div>
  </div>
);

export default PlasmaDonation;