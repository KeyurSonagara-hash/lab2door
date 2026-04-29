import React, { useState } from 'react';

const FindLabsPage = () => {
  // Mock data for labs to keep the code clean
  const labsData = [
    {
      id: 1,
      name: "City Health Diagnostics",
      address: "452 Broadway, New York, NY 10013",
      rating: "4.9",
      testCount: "250+",
      price: "45.00",
      icon: "local_hospital"
    },
    {
      id: 2,
      name: "Apex Advanced Labs",
      address: "128 5th Ave, New York, NY 10011",
      rating: "4.7",
      testCount: "180+",
      price: "39.00",
      icon: "medical_services"
    },
    {
      id: 3,
      name: "Metro Pathological Center",
      address: "880 Lex Ave, New York, NY 10065",
      rating: "4.8",
      testCount: "400+",
      price: "55.00",
      icon: "science"
    },
    {
      id: 4,
      name: "Sunrise Wellness Labs",
      address: "210 W 96th St, New York, NY 10025",
      rating: "4.5",
      testCount: "120+",
      price: "32.00",
      icon: "health_and_safety"
    }
  ];

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101722] font-['Inter'] text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen">
      
      {/* Header / Sticky Nav */}
    
      {/* Top Search Section */}
      <section className="bg-white dark:bg-[#101722] border-b border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">Test or Lab Name</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0f55bd] transition-colors">search</span>
                <input 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-[#0f55bd]/20 transition-all outline-none dark:text-white" 
                  placeholder="Search for MRI, Blood Test, or Lab name..." 
                  type="text" 
                />
              </div>
            </div>
            <div className="w-full md:w-64">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">Location</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0f55bd] transition-colors">location_on</span>
                <select className="w-full pl-12 pr-10 py-3.5 bg-slate-50 dark:bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-[#0f55bd]/20 transition-all outline-none appearance-none cursor-pointer dark:text-white">
                  <option>New York, NY</option>
                  <option>Brooklyn, NY</option>
                  <option>Jersey City, NJ</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
              </div>
            </div>
            <button className="w-full md:w-auto px-10 py-3.5 bg-[#0f55bd] text-white rounded-xl font-bold hover:bg-[#0f55bd]/90 transition-all shadow-md">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Filters (25%) */}
          <aside className="w-full lg:w-1/4 space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0f55bd]">filter_list</span>
                Filters
              </h3>

              {/* Location Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Location</h4>
                <div className="space-y-3">
                  <FilterCheckbox label="Within 5 miles" checked />
                  <FilterCheckbox label="Within 10 miles" />
                  <FilterCheckbox label="Home Pickup Available" />
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Rating</h4>
                <div className="space-y-3">
                  <RatingOption stars={4} label="4.0+" />
                  <RatingOption stars={3} label="3.0+" />
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Price Range</h4>
                <input className="w-full accent-[#0f55bd] mb-2" type="range" />
                <div className="flex justify-between text-xs font-bold text-slate-500">
                  <span>$20</span>
                  <span>$500+</span>
                </div>
              </div>

              {/* Toggle Section */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold">Home Collection</h4>
                    <p className="text-xs text-slate-500">Samples collected at home</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#0f55bd]"></div>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Lab Results Grid (75%) */}
          <div className="w-full lg:w-3/4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">128 Labs found in New York</h2>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500">Sort by:</span>
                <select className="bg-transparent border-none font-bold text-[#0f55bd] focus:ring-0 cursor-pointer">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {labsData.map((lab) => (
                <LabCard key={lab.id} {...lab} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0f55bd] text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-colors font-bold">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-colors font-bold">3</button>
              <span className="px-2 text-slate-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-colors font-bold">Next</button>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

// Helper Components
const FilterCheckbox = ({ label, checked = false }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <input defaultChecked={checked} className="rounded border-slate-300 text-[#0f55bd] focus:ring-[#0f55bd]" type="checkbox" />
    <span className="text-sm font-medium group-hover:text-[#0f55bd] transition-colors">{label}</span>
  </label>
);

const RatingOption = ({ stars, label }) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div className="flex text-amber-400">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`material-symbols-outlined ${i < stars ? 'fill-[1]' : ''}`} style={{ fontVariationSettings: `'FILL' ${i < stars ? 1 : 0}` }}>star</span>
      ))}
    </div>
    <span className="text-xs font-bold text-slate-400">{label}</span>
  </div>
);

const LabCard = ({ name, address, rating, testCount, price, icon }) => (
  <div className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 hover:shadow-xl hover:shadow-[#0f55bd]/5 transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="bg-[#0f55bd]/5 p-3 rounded-xl group-hover:bg-[#0f55bd]/10 transition-colors">
        <span className="material-symbols-outlined text-[#0f55bd] text-3xl">{icon}</span>
      </div>
      <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-lg">
        <span className="material-symbols-outlined text-amber-500 text-sm fill-[1]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="text-xs font-bold text-amber-700 dark:text-amber-400">{rating}</span>
      </div>
    </div>
    <h3 className="text-lg font-bold mb-1 group-hover:text-[#0f55bd] transition-colors">{name}</h3>
    <p className="text-sm text-slate-500 flex items-center gap-1 mb-4">
      <span className="material-symbols-outlined text-sm">location_on</span>
      {address}
    </p>
    <div className="flex items-center gap-4 py-4 border-y border-slate-50 dark:border-slate-800 mb-6">
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tests</p>
        <p className="text-sm font-bold">{testCount} Available</p>
      </div>
      <div className="w-px h-8 bg-slate-100 dark:bg-slate-800"></div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Starts at</p>
        <p className="text-sm font-bold text-[#0f55bd]">${price}</p>
      </div>
    </div>
    <button className="w-full py-3 bg-slate-50 dark:bg-slate-800 group-hover:bg-[#0f55bd] group-hover:text-white rounded-xl text-sm font-bold transition-all">
      View Details
    </button>
  </div>
);

const SocialLink = ({ icon }) => (
  <a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0f55bd] transition-colors text-white" href="#">
    <span className="material-symbols-outlined text-sm">{icon}</span>
  </a>
);

const FooterLink = ({ text }) => (
  <a className="hover:text-[#0f55bd] transition-colors cursor-pointer" href="#">{text}</a>
);

export default FindLabsPage;