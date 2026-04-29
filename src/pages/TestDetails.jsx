import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TestDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Destructure testData from location state
  const { testData } = location.state || {};

  // Scroll to top whenever this page is opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- REPAIRED DYNAMIC IMAGE ENGINE ---
  const getTestImage = (title) => {
    const t = title?.toLowerCase() || "";
    
    // Standardized links using the same source parameters as the working images
    
    // 1. Blood / CBC / Hemoglobin
    if (t.includes('blood') || t.includes('cbc') || t.includes('hemoglobin') || t.includes('iron')) 
      return "https://images.unsplash.com/photo-1697192156499-d85cfe1452c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    // 2. Thyroid
    if (t.includes('thyroid') || t.includes('tsh') || t.includes('t3') || t.includes('t4')) 
      return "https://images.unsplash.com/photo-1714925240743-133f909952b9?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    // 3. Diabetes / Sugar (Working Source)
    if (t.includes('sugar') || t.includes('diabetes') || t.includes('glucose') || t.includes('hba1c')) 
      return "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&q=80&w=1000";
    
    // 4. Full Body Checkups
    if (t.includes('full body') || t.includes('checkup') || t.includes('profile')) 
      return "https://images.unsplash.com/photo-1559265053-e26116164bde?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    // 5. Kidney / Liver (Working Source)
    if (t.includes('kidney') || t.includes('liver') || t.includes('lft') || t.includes('kft') || t.includes('renal')) 
      return "https://images.unsplash.com/photo-1579152276503-311e9f291079?auto=format&fit=crop&q=80&w=1000";
    
    // 6. Vitamin / Nutrition
    if (t.includes('vitamin') || t.includes('d3') || t.includes('b12') || t.includes('calcium'))
      return "https://images.unsplash.com/photo-1616671285430-b38407459f21?auto=format&fit=crop&q=80&w=1000";

    // 7. Heart / Lipid
    if (t.includes('heart') || t.includes('lipid') || t.includes('cholesterol'))
      return "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000";

    // 8. Allergy / Fever
    if (t.includes('allergy') || t.includes('fever') || t.includes('infection'))
      return "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1000";
    
    // Global fallback
    return "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000";
  };

  const handleBookNow = (customPrice = null) => {
    if (testData) {
      const orderItem = {
        ...testData,
        price: customPrice ? `₹${customPrice}` : testData.price,
        bookingDate: new Date().toLocaleDateString()
      };
      const existingCart = JSON.parse(localStorage.getItem('labCart')) || [];
      existingCart.push(orderItem);
      localStorage.setItem('labCart', JSON.stringify(existingCart));
      navigate('/checkout');
    }
  };

  if (!testData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#0b111a]">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-black uppercase italic">No Test Selected</h2>
          <button onClick={() => navigate('/')} className="bg-[#0f55bd] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl transition-all active:scale-95">
            Go To Home
          </button>
        </div>
      </div>
    );
  }

  const labs = [
    { name: "Metropolis Healthcare", initial: "ML", dist: "2.4 km", rating: "4.8", price: testData.price.replace('₹', '') },
    { name: "Quest Diagnostics", initial: "QL", dist: "3.1 km", rating: "4.6", price: (parseInt(testData.price.replace('₹', '')) + 45) },
    { name: "LabCorp Clinical", initial: "LC", dist: "1.8 km", rating: "4.9", price: (parseInt(testData.price.replace('₹', '')) + 80) },
  ];

  return (
    <div className="bg-[#fdfdfe] dark:bg-[#0b111a] font-display text-slate-900 dark:text-slate-100 min-h-screen pb-24 transition-all">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 dark:bg-slate-900/50 -skew-x-12 translate-x-32 hidden lg:block"></div>
        
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <nav className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                <span className="cursor-pointer hover:text-[#0f55bd]" onClick={() => navigate('/')}>Home</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-[#0f55bd]">Package Details</span>
              </nav>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic">
                  {testData.title.split(' ')[0]} <br/>
                  <span className="text-[#0f55bd] not-italic">{testData.title.split(' ').slice(1).join(' ')}</span>
                </h1>
                
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex flex-col border-l-4 border-[#0f55bd] pl-4">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Reports In</span>
                    <span className="font-black text-xl">{testData.time}</span>
                  </div>
                  <div className="flex flex-col border-l-4 border-emerald-500 pl-4">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Availability</span>
                    <span className="font-black text-xl">Instant Pickup</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-bold uppercase text-[12px] tracking-wide">
                {testData.desc} This diagnostic profile ensures comprehensive monitoring of vital health markers.
              </p>

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => handleBookNow()}
                  className="px-12 py-6 bg-[#0f55bd] text-white rounded-[2rem] font-black text-2xl shadow-2xl shadow-[#0f55bd]/40 hover:-translate-y-1 transition-all active:scale-95"
                >
                  BOOK NOW — {testData.price}
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0f55bd]/20 to-transparent rounded-[4rem] blur-2xl"></div>
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border-[12px] border-white dark:border-slate-800 shadow-2xl">
                <img 
                  className="h-full w-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                  src={getTestImage(testData.title)} 
                  alt={testData.title} 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1532187875460-12849844b360?auto=format&fit=crop&q=80&w=1000"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl">
                   <div className="flex items-center justify-between text-white">
                     <div>
                       <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Facility Status</p>
                       <p className="text-2xl font-black italic">Lab2Door Verified</p>
                     </div>
                     <span className="material-symbols-outlined text-4xl text-emerald-400">verified</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST BADGES --- */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'biotech', label: 'NABL Certified', sub: 'ISO Verified' },
              { icon: 'home_health', label: 'Home Pickup', sub: 'Free Expert' },
              { icon: 'history_edu', label: 'E-Reports', sub: 'Fast Delivery' },
              { icon: 'encrypted', label: 'Secure Labs', sub: 'Confidential' }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl flex items-center gap-4">
                <span className="material-symbols-outlined text-[#0f55bd] text-3xl">{item.icon}</span>
                <div>
                  <p className="font-black text-sm uppercase leading-none">{item.label}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.sub}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* --- TEST INFO SECTION --- */}
      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter italic">Included <span className="text-[#0f55bd]">Parameters</span></h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Complete Blood Profile', 'Critical Biomarkers', 'Secondary Markers', 'Health Indicators', 'Specialized Analysis'].map((param, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border-l-4 border-slate-200 dark:border-slate-700 hover:border-[#0f55bd] transition-all">
                    <span className="font-black text-slate-700 dark:text-slate-200 uppercase text-[12px]">{param}</span>
                    <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-[#0f55bd] text-white relative overflow-hidden">
               <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-[12rem] opacity-10">medical_information</span>
               <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                 <span className="material-symbols-outlined text-4xl">inventory</span>
                 Instructions
               </h3>
               <div className="grid sm:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase text-blue-200 tracking-widest">Preparation</p>
                    <p className="text-xl font-bold leading-snug uppercase">{testData.precautions}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase text-blue-200 tracking-widest">Service Method</p>
                    <p className="text-xl font-bold leading-snug uppercase">Certified At-Home Sample Collection.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-[3rem] p-10 border-2 border-slate-100 dark:border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-black mb-8 italic">CHECKOUT <span className="text-[#0f55bd]">HUB</span></h3>
              <div className="space-y-6 mb-10">
                 <div className="flex justify-between font-bold uppercase text-[12px] tracking-widest">
                    <span className="text-slate-400">Base Price</span>
                    <span>{testData.price}</span>
                 </div>
                 <div className="flex justify-between font-bold uppercase text-[12px] tracking-widest text-emerald-500">
                    <span>Pickup Fee</span>
                    <span>FREE</span>
                 </div>
                 <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-end">
                    <span className="font-black text-xl italic uppercase">Payable</span>
                    <span className="text-4xl font-black text-[#0f55bd] leading-none">{testData.price}</span>
                 </div>
              </div>
              <button 
                onClick={() => handleBookNow()}
                className="w-full bg-[#0f55bd] text-white py-6 rounded-2xl font-black text-xl hover:shadow-xl transition-all uppercase active:scale-95"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROVIDER COMPARISON --- */}
      <section className="bg-slate-50 dark:bg-slate-900/30 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
           <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
             <div>
               <h2 className="text-5xl font-black uppercase italic tracking-tighter">Nearby <span className="text-[#0f55bd]">Partners</span></h2>
               <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em] mt-2">Verified Accredited Laboratories</p>
             </div>
             <div className="h-px flex-grow mx-8 bg-slate-200 dark:bg-slate-800 hidden lg:block"></div>
           </div>

           <div className="grid lg:grid-cols-3 gap-8">
              {labs.map((lab, i) => (
                <div key={i} className="group bg-white dark:bg-slate-900 p-10 rounded-[3rem] border-2 border-transparent hover:border-[#0f55bd] transition-all duration-500 shadow-sm hover:shadow-2xl">
                   <div className="flex justify-between items-start mb-10">
                      <div className="w-20 h-20 bg-[#0f55bd] text-white rounded-3xl flex items-center justify-center font-black text-3xl rotate-3 group-hover:rotate-0 transition-transform">
                        {lab.initial}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-black text-2xl">₹{lab.price}</span>
                        <div className="flex items-center gap-1 text-amber-500">
                           <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                           <span className="text-sm font-black text-slate-900 dark:text-white">{lab.rating}</span>
                        </div>
                      </div>
                   </div>
                   <h4 className="text-2xl font-black mb-1 group-hover:text-[#0f55bd] transition-colors uppercase italic">{lab.name}</h4>
                   <p className="text-slate-400 font-bold text-[10px] uppercase mb-10 flex items-center gap-2">
                     <span className="material-symbols-outlined text-sm">near_me</span> {lab.dist} away
                   </p>
                   <button 
                     onClick={() => handleBookNow(lab.price)}
                     className="w-full py-5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black group-hover:bg-[#0f55bd] group-hover:text-white transition-all uppercase text-[12px] tracking-widest"
                   >
                     Select Lab
                   </button>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default TestDetails;