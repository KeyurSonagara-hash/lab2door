  import React from 'react';
  import { Link } from "react-router-dom";

  const Lab2DoorAbout = () => {
    return (
      <div className="bg-[#f6f8f6] dark:bg-[#102216] text-[#111813] dark:text-slate-100 font-['Inter',_sans-serif]">
        {/* 
            Note: Ensure you have Tailwind CSS and Google Fonts/Material Symbols 
            loaded in your index.html or global CSS.
        */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
            
            .medical-gradient {
              background: radial-gradient(circle at 50% 50%, rgba(19, 236, 91, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
            }
            .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }
          `}
        </style>



        <main>
          {/* Mission Section */}
          <section className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-slate-900/50">
            <div className="absolute inset-0 medical-gradient"></div>
            <div 
              className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFFpBFzXC76EWc__dzhUBQJeDM8zNeOkcQMMKZAIazQSZelEUO6gqSAyPwqPjTPI1_CAggesOj4otnS_NXoQp-N6C0LOB6ScwZfvJmYAXKMRSfp1haKEphiRrWyqEmul5ZCrXrkOXFdMiHGcDtOHAiTbHnrN4ggNlTVxZE-MN0ieDAWn6euxQr26OxM4r0oOT4PrrpRAS2dZ0R1MEUdsqFAiIyjIkT2yVtIEKcJuI1sh0fm6QABhXxCvQJL_bOfDIpHzSqwP-3rynf')" }}
            ></div>
            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#13ec5b]/10 text-[#13ec5b] text-xs font-bold tracking-widest uppercase mb-6">Our Mission</span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-slate-900 dark:text-white">
                To make healthcare diagnostics <span className="text-[#13ec5b] italic">transparent</span>, affordable, and accessible to every home.
              </h1>
              <p className="text-lg md:text-xl text-[#61896f] max-w-2xl mx-auto leading-relaxed">
                We are bridging the gap between world-class diagnostic laboratories and patients through technology, logistics, and a commitment to quality care.
              </p>
            </div>
          </section>

          {/* The Platform Journey (Zig-Zag) */}
          <section className="py-24 bg-[#f6f8f6] dark:bg-[#102216]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The Platform Journey</h2>
                <p className="text-[#61896f]">Revolutionizing diagnostics with home collection services.</p>
              </div>
              <div className="space-y-32">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                  <div className="flex-1 order-2 md:order-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#13ec5b] text-[#111813] font-black text-lg">1</span>
                      <h3 className="text-2xl font-bold">Discover Labs</h3>
                    </div>
                    <p className="text-lg text-[#61896f] leading-relaxed mb-6">
                      Gone are the days of limited choices. Search and compare hundreds of top-rated diagnostic labs nearby based on price, rating, and specialization.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-[#13ec5b]">check_circle</span> 100% Verified Partners</li>
                      <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-[#13ec5b]">check_circle</span> Real-time Pricing Comparison</li>
                    </ul>
                  </div>
                  <div className="flex-1 order-1 md:order-2 w-full">
                    <div className="aspect-video rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-2xl group">
                      <img 
                          alt="Laboratory search" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAeH2kFO_3r6luySCQuySEQ30AQQgaY5irZDJWBsZ9VbbRuLXtLMTWKQMoRunjHgdKsS3krZJraNQLT5aWWdgbGFliVM4Te2bgO5LoE-I8IKqoubQYik8gACow9iCgvbo_X37ano2_nZtRYE2hs_Ayj4Op62fFujQ1-zcQgjlrJdNPWg1g9wCgrSalBUZpiZdoa5ZR6J8A6mmjwEy2Fh0I_c5lDLyn34O142pcs9nSs-swtJOUT_tHCIB-I-bN834t6VM6Bl88Yniz" 
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                  <div className="flex-1 w-full">
                    <div className="aspect-video rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-2xl group">
                      <img 
                          alt="Sample collection" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdekrnHtTd3F18M9uNXcHvkuF1Rmek-rQWLvQiI_tBokW0uqDcDmLyWgj-xkqJv9-4nyjY4jMJnBXCI4J03AzY6dL4hozb_ZBSx4zEcRxAkhFqv3AtJ7jj93qL4Joklg6LQ-HJdbxUiRw2ge1HSo0OSEt2XrYyux1i9UJIdBeypeOK2frdqNQUkfdgSFIhn6bZUNXp2bnYJtrap2cNDiKcZAp31_B8dLrl4LzBRMZ1Z1INIsnkzbHvz41TbzPwRLpOq922h3SoLWtr" 
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#13ec5b] text-[#111813] font-black text-lg">2</span>
                      <h3 className="text-2xl font-bold">Book a Test</h3>
                    </div>
                    <p className="text-lg text-[#61896f] leading-relaxed mb-6">
                      Schedule a professional sample collection at your convenience. Our certified phlebotomists come to your home, ensuring a safe and painless experience.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-[#13ec5b]">check_circle</span> Flexible Time Slots</li>
                      <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-[#13ec5b]">check_circle</span> Contactless Service Options</li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                  <div className="flex-1 order-2 md:order-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#13ec5b] text-[#111813] font-black text-lg">3</span>
                      <h3 className="text-2xl font-bold">Digital Results</h3>
                    </div>
                    <p className="text-lg text-[#61896f] leading-relaxed mb-6">
                      Access your certified medical reports digitally on our secure platform. Share them instantly with your doctor or store them for future reference.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-[#13ec5b]">check_circle</span> Secure HIPAA Compliant Storage</li>
                      <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-[#13ec5b]">check_circle</span> Trends and Insights Tracking</li>
                    </ul>
                  </div>
                  <div className="flex-1 order-1 md:order-2 w-full">
                    <div className="aspect-video rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-2xl group">
                      <img 
                          alt="Digital reports" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmt6GoFhNwEFjTryzK82TmUi1C6pXWI-O8PHxLkHsIojCCBBFU8EIKgGVlghI10HzmmbR0AEK9tqR5vl9HFsVywl70bQcbEX0xWFO-QzkE8S9n0rAYlaJRy3glFp32K1kvrrR4Cuj4GJG1HEPCzVJi_k6R4sdC2Bg6JLbpzREijW4R2CAAv1Fg0xmIBmWUaeQpxPM_k7wZFHl8Zc8rPZyh9ew3oOw_LjAr51Nsn24rS5ihLz2Nd0ZsyjPygH2s6YqUbrsjmKjo5dsy" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Benefits */}
          <section className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-2xl">
                  <h2 className="text-4xl font-black mb-4 tracking-tight">Why families trust Lab2Door</h2>
                  <p className="text-[#61896f] text-lg">We prioritize your health and comfort with every single test we facilitate.</p>
                </div>
                <button className="bg-[#13ec5b]/10 text-[#13ec5b] font-bold px-8 py-4 rounded-xl hover:bg-[#13ec5b] hover:text-[#111813] transition-all">View All Services</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-10 rounded-3xl border border-[#dbe6df] dark:border-slate-800 bg-[#f6f8f6] dark:bg-[#102216] hover:border-[#13ec5b]/50 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-[#13ec5b]/20 flex items-center justify-center mb-8 group-hover:bg-[#13ec5b] transition-all">
                    <span className="material-symbols-outlined text-[#111813] text-3xl">home_health</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Home Convenience</h3>
                  <p className="text-[#61896f] leading-relaxed">No more queues or travel. Professional phlebotomists collect samples from the comfort of your living room.</p>
                </div>
                <div className="p-10 rounded-3xl border border-[#dbe6df] dark:border-slate-800 bg-[#f6f8f6] dark:bg-[#102216] hover:border-[#13ec5b]/50 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-[#13ec5b]/20 flex items-center justify-center mb-8 group-hover:bg-[#13ec5b] transition-all">
                    <span className="material-symbols-outlined text-[#111813] text-3xl">verified_user</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
                  <p className="text-[#61896f] leading-relaxed">We only partner with NABL and ISO certified laboratories to ensure clinical-grade accuracy for your reports.</p>
                </div>
                <div className="p-10 rounded-3xl border border-[#dbe6df] dark:border-slate-800 bg-[#f6f8f6] dark:bg-[#102216] hover:border-[#13ec5b]/50 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-[#13ec5b]/20 flex items-center justify-center mb-8 group-hover:bg-[#13ec5b] transition-all">
                    <span className="material-symbols-outlined text-[#111813] text-3xl">payments</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Transparent Pricing</h3>
                  <p className="text-[#61896f] leading-relaxed">No hidden costs or extra charges. Compare lab prices upfront and save up to 40% on diagnostic tests.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Trust / Certification Logos */}
          <section className="py-20 border-t border-[#dbe6df] dark:border-slate-800 bg-white dark:bg-[#102216]">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#61896f] mb-12">Certified & Recognized By</p>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
                <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                  <span className="material-symbols-outlined text-5xl">health_metrics</span>
                  <span className="font-black text-xl tracking-tighter">NABL</span>
                </div>
                <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                  <span className="material-symbols-outlined text-5xl">inventory_2</span>
                  <span className="font-black text-xl tracking-tighter">ISO 9001</span>
                </div>
                <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                  <span className="material-symbols-outlined text-5xl">clinical_notes</span>
                  <span className="font-black text-xl tracking-tighter">CAP ACCREDITED</span>
                </div>
                <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                  <span className="material-symbols-outlined text-5xl">award_star</span>
                  <span className="font-black text-xl tracking-tighter">HIPAA</span>
                </div>
              </div>
            </div>
          </section>
        </main>

       
      </div>
    );
  };

  export default Lab2DoorAbout;