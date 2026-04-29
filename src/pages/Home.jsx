import React, { useState, useRef } from 'react'; // STEP 1: Added useRef
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  // STEP 2: Create a reference for the booking section
  const bookingSectionRef = useRef(null);

  // STEP 3: Create the scroll function
  const scrollToBooking = () => {
    bookingSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  const categories = ["All", "Blood", "Thyroid", "Diabetes", "Vitamin", "Heart", "Liver", "Kidney"];

  const allTests = [
    { id: 1, icon: "bloodtype", title: "CBC (Complete Blood Count)", desc: "Monitors overall health and detects wide range of disorders.", price: "₹499", color: "bg-blue-500/10 text-blue-600", category: "Blood", precautions: "No fasting required.", sample: "Blood", time: "24 Hours" },
    { id: 2, icon: "monitoring", title: "Thyroid Profile (T3, T4, TSH)", desc: "Essential to check thyroid function and hormone levels.", price: "₹799", color: "bg-orange-500/10 text-orange-600", category: "Thyroid", precautions: "Early morning sample preferred.", sample: "Blood", time: "24 Hours" },
    { id: 3, icon: "water_drop", title: "Diabetes Screening (HbA1c)", desc: "Average blood sugar levels for the past 2-3 months.", price: "₹599", color: "bg-red-500/10 text-red-600", category: "Diabetes", precautions: "No fasting required.", sample: "Blood", time: "12 Hours" },
    { id: 4, icon: "sunny", title: "Vitamin D (25-Hydroxy)", desc: "Crucial for bone health and immune system function.", price: "₹899", color: "bg-yellow-500/10 text-yellow-600", category: "Vitamin", precautions: "Fasting not required.", sample: "Blood", time: "36 Hours" },
    { id: 5, icon: "favorite", title: "Lipid Profile (Cholesterol)", desc: "Checks for heart health and cardiovascular risk.", price: "₹699", color: "bg-pink-500/10 text-pink-600", category: "Heart", precautions: "9-12 hours fasting.", sample: "Blood", time: "24 Hours" },
    { id: 6, icon: "biotech", title: "Liver Function Test (LFT)", desc: "Assesses how well your liver is working.", price: "₹649", color: "bg-emerald-500/10 text-emerald-600", category: "Liver", precautions: "Fasting for 8 hours.", sample: "Blood", time: "24 Hours" },
    { id: 7, icon: "opacity", title: "Kidney Function Test (KFT)", desc: "Measures creatinine and urea to check kidney health.", price: "₹749", color: "bg-purple-500/10 text-purple-600", category: "Kidney", precautions: "Avoid high-protein meals.", sample: "Blood", time: "24 Hours" },
    { id: 8, icon: "medication", title: "Iron Studies", desc: "Measures iron levels and storage ability.", price: "₹699", color: "bg-sky-500/10 text-sky-600", category: "Blood", precautions: "Morning sample best.", sample: "Blood", time: "24 Hours" }
  ];

  const filteredTests = allTests.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || test.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBooking = (test) => {
    navigate(`/test-details/${test.id}`, { state: { testData: test } });
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] dark:bg-[#0f1723] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#0052cc]/20">
      
      <main className="pt-6">
        
        {/* --- HERO SECTION --- */}
        <section className="relative py-12 lg:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0052cc] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0052cc]"></span>
                </span>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live: 50+ Phlebotomists Nearby</p>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] mb-8 tracking-tighter">
                Health Checkup <br /> <span className="text-[#0052cc] italic">Simplified.</span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold">
                NABL certified labs brought to your doorstep. Get accurate results within 24 hours.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {/* STEP 4: Changed navigate to scrollToBooking */}
                <button 
                  onClick={scrollToBooking} 
                  className="px-10 py-5 bg-[#0052cc] text-white font-black rounded-2xl shadow-xl shadow-[#0052cc]/30 hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest"
                >
                  Start Booking <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </button>
                <button className="px-10 py-5 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white font-black rounded-2xl hover:bg-slate-50 transition-all uppercase text-xs tracking-widest shadow-sm">
                  Full Body Packages
                </button>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-xl relative">
              <div className="relative rounded-[4rem] overflow-hidden aspect-square shadow-2xl border-[12px] border-white dark:border-slate-800 z-10">
                <img 
                  alt="Laboratory Professional" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1612278247769-af223a6e7d7f?q=80&w=1170&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SEARCH & CATEGORY FILTER --- */}
        {/* STEP 5: Added ref and scroll-mt-20 to ensure it doesn't hit the very top of the screen */}
        <section 
          ref={bookingSectionRef} 
          className="relative z-30 px-6 -mt-16 scroll-mt-20"
        >
          <div className="max-w-5xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-4 border border-white dark:border-slate-800 space-y-4">
            <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                <span className="absolute inset-y-0 left-6 flex items-center text-[#0052cc]">
                    <span className="material-symbols-outlined">search</span>
                </span>
                <input 
                    className="w-full pl-16 pr-6 py-5 rounded-2xl border-none bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#0052cc] outline-none font-bold text-sm" 
                    placeholder="Search for tests (e.g. CBC, Liver, Sugar)..." 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                </div>
                <button className="px-12 py-5 bg-[#111827] text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-[#0052cc] transition-all active:scale-95">
                Search Test
                </button>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {categories.map((cat) => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap
                        ${activeCategory === cat ? 'bg-[#0052cc] text-white shadow-lg shadow-[#0052cc]/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
          </div>
        </section>

        {/* --- TEST GRID SECTION --- */}
        <section className="py-32 bg-slate-50/50 dark:bg-[#0f1723]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter uppercase">Popular <span className="text-[#0052cc]">Screenings</span></h2>
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em]">Top picked by healthcare experts</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredTests.length > 0 ? filteredTests.map((test) => (
                <div key={test.id} className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col relative overflow-hidden">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${test.color} shadow-inner`}>
                    <span className="material-symbols-outlined text-2xl">{test.icon}</span>
                  </div>
                  <h3 className="text-xl font-black mb-2 uppercase leading-tight group-hover:text-[#0052cc] transition-colors">{test.title}</h3>
                  <p className="text-[11px] font-bold text-slate-400 mb-10 uppercase tracking-widest line-clamp-2 leading-relaxed">{test.desc}</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-sm text-green-500">schedule</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{test.time} Report</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl group-hover:bg-[#0052cc]/5 transition-colors">
                      <span className="text-2xl font-black text-slate-900 dark:text-white">{test.price}</span>
                      <button onClick={() => handleBooking(test)} className="p-3 bg-[#111827] dark:bg-slate-700 text-white rounded-xl hover:bg-[#0052cc] transition-all">
                        <span className="material-symbols-outlined text-sm">shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full py-20 text-center">
                    <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">search_off</span>
                    <p className="font-black text-slate-400 uppercase tracking-widest">No tests found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* --- HOW IT WORKS --- */}
        <section className="py-32 bg-white dark:bg-slate-900 relative border-y border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-black uppercase tracking-tighter italic">Process <span className="text-[#0052cc]">Flow</span></h2>
              <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px] mt-2">Zero hassle home collection</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <StepItem number="01" icon="biotech" title="Select" desc="Add tests to your secure cart" />
              <StepItem number="02" icon="calendar_month" title="Schedule" desc="Pick any 1-hour time slot" />
              <StepItem number="03" icon="person_pin_circle" title="Collection" desc="Professional phlebotomist visit" />
              <StepItem number="04" icon="verified_user" title="Results" desc="NABL verified digital reports" />
            </div>
          </div>
        </section>

      </main>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(-5%); }
            50% { transform: translateY(0); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

const StepItem = ({ number, icon, title, desc }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="relative mb-10">
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#0052cc] rounded-full flex items-center justify-center text-xs font-black text-white shadow-xl z-10 border-4 border-white dark:border-slate-900 group-hover:scale-110 transition-transform">
            {number}
        </div>
        <div className="w-28 h-28 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] flex items-center justify-center text-slate-400 group-hover:bg-[#0052cc]/10 group-hover:text-[#0052cc] transition-all duration-500 border border-slate-100 dark:border-slate-700 shadow-sm">
          <span className="material-symbols-outlined text-5xl">{icon}</span>
        </div>
    </div>
    <h4 className="font-black text-xl mb-3 uppercase tracking-tighter">{title}</h4>
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-8 leading-relaxed opacity-70">{desc}</p>
  </div>
);

export default Home;