import React, { useState } from 'react';

const LabProfileDetails = () => {
  const [activeTab, setActiveTab] = useState('Available Tests');
  const [searchQuery, setSearchQuery] = useState('');

  const tests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      resultsIn: "12h",
      homeCollection: true,
      oldPrice: "$45.00",
      price: "$29.00",
      icon: "bloodtype",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    {
      id: 2,
      name: "Lipid Profile",
      resultsIn: "24h",
      fasting: true,
      price: "$35.00",
      icon: "biotech",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      id: 3,
      name: "Thyroid Profile (T3, T4, TSH)",
      resultsIn: "24h",
      homeCollection: true,
      oldPrice: "$60.00",
      price: "$49.00",
      icon: "monitoring",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      id: 4,
      name: "COVID-19 RT-PCR Test",
      resultsIn: "6h",
      rapid: true,
      price: "$25.00",
      icon: "coronavirus",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
    }
  ];

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101722] font-['Inter',sans-serif] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      <div className="relative flex flex-col w-full overflow-x-hidden">
        

        <main className="flex flex-1 justify-center py-6">
          <div className="layout-content-container flex flex-col max-w-[1024px] flex-1 px-4 md:px-10">
            
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap gap-2 py-2 mb-4">
              <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-[#0f55bd]" href="#">Home</a>
              <span className="text-slate-400 text-sm">/</span>
              <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-[#0f55bd]" href="#">Labs in New York</a>
              <span className="text-slate-400 text-sm">/</span>
              <span className="text-slate-900 dark:text-white text-sm font-semibold">City Diagnostics Center</span>
            </nav>

            {/* Lab Header Section */}
            <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                <div className="flex flex-col md:flex-row gap-6">
                  <div 
                    className="bg-slate-200 dark:bg-slate-800 rounded-xl min-h-[140px] w-full md:w-[140px] bg-center bg-cover border border-slate-100 dark:border-slate-700" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1JG_dmRS5ZhGPNZpxno0EEdYLIu8IenvAbKpBR_M1hyzkD2gJaGMiJ0zqoGcQOn-4nJf2xc-zmFl1LVuC2UWo4_fO-zA99to7Xmq8l5CDYq3IsLH-Ki_FmbPQBD0eRXG1NrgkgrwetLKNc85ct2ZKLZqY_UNN1Cy2rkrQJsCgoiKUDPy8C2eEH9hdb2IIGGxiSeyfnh-Pe1xVPZnE2c20QbXDUWueEtX7Ue1qNKzJZsUkrVRmYE2aGguKSSK3Nmkp_x1VkpTz25BD")' }}
                  ></div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <h1 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">City Diagnostics Center</h1>
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
                        <span className="material-symbols-outlined text-[14px]">verified</span> Accredited
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-yellow-500 fill-current text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="font-bold text-slate-900 dark:text-white">4.8</span>
                        <span className="text-sm">(1,250 reviews)</span>
                      </div>
                      <span className="hidden sm:inline text-slate-300">|</span>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-lg">location_on</span>
                        <span className="text-sm">123 Health Ave, Medical District, NY</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                        <span className="material-symbols-outlined text-[#0f55bd] text-lg">schedule</span>
                        <p className="text-sm font-medium">Open until 9:00 PM</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                        <span className="material-symbols-outlined text-[#0f55bd] text-lg">call</span>
                        <p className="text-sm font-medium">+1 234 567 8900</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                  <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                    <span className="material-symbols-outlined text-xl">share</span>
                    <span>Share</span>
                  </button>
                  <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-[#0f55bd] text-white font-bold shadow-lg shadow-[#0f55bd]/20 hover:bg-[#0f55bd]/90 transition-all">
                    <span className="material-symbols-outlined text-xl">bookmark</span>
                    <span>Save Lab</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Tabs Navigation */}
            <div className="border-b border-slate-200 dark:border-slate-800 mb-6 bg-white dark:bg-slate-900 rounded-t-xl px-2 overflow-x-auto">
              <div className="flex min-w-max">
                {['Available Tests', 'About Lab', 'Reviews', 'Gallery'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative flex flex-col items-center justify-center pb-4 pt-5 px-6 transition-all ${
                      activeTab === tab ? 'text-[#0f55bd]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    <span className={`text-sm tracking-wide uppercase ${activeTab === tab ? 'font-extrabold' : 'font-bold'}`}>
                      {tab}
                    </span>
                    {activeTab === tab && (
                      <div className="absolute bottom-0 h-1 w-full bg-[#0f55bd] rounded-t-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Available Tests Section (Conditional Content) */}
            {activeTab === 'Available Tests' && (
              <div className="flex flex-col gap-6">
                {/* Search and Filter Row */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="relative w-full md:max-w-md">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-1 focus:ring-[#0f55bd] transition-all text-sm outline-none dark:text-white" 
                      placeholder="Search for blood test, COVID-19, etc." 
                      type="text" 
                    />
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      <span className="material-symbols-outlined text-xl">filter_list</span>
                      Filter
                    </button>
                    <div className="flex bg-slate-50 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                      <button className="px-3 py-1.5 bg-white dark:bg-slate-700 shadow-sm rounded-lg text-[#0f55bd]">
                        <span className="material-symbols-outlined text-xl">view_list</span>
                      </button>
                      <button className="px-3 py-1.5 text-slate-400">
                        <span className="material-symbols-outlined text-xl">grid_view</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Test List */}
                <div className="flex flex-col gap-3">
                  {tests.map((test) => (
                    <div 
                      key={test.id} 
                      className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-md hover:border-[#0f55bd]/30 transition-all gap-4"
                    >
                      <div className="flex gap-5 items-center">
                        <div className={`w-14 h-14 ${test.bgColor} rounded-xl flex items-center justify-center ${test.color}`}>
                          <span className="material-symbols-outlined text-3xl">{test.icon}</span>
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-slate-900 dark:text-white font-bold text-lg group-hover:text-[#0f55bd] transition-colors">
                            {test.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-1">
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">timer</span> Results in {test.resultsIn}</span>
                            {test.homeCollection && <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">home</span> Home collection available</span>}
                            {test.fasting && <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">no_meals</span> Fasting required</span>}
                            {test.rapid && <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">bolt</span> Rapid service</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full sm:w-auto gap-8">
                        <div className="text-right">
                          {test.oldPrice && <p className="text-slate-400 text-xs line-through">{test.oldPrice}</p>}
                          <p className="text-slate-900 dark:text-white font-black text-xl">{test.price}</p>
                        </div>
                        <button className="h-12 px-8 bg-[#0f55bd]/10 text-[#0f55bd] hover:bg-[#0f55bd] hover:text-white font-bold rounded-xl transition-all flex items-center justify-center">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More */}
                <div className="flex justify-center mt-4">
                  <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    View All 250+ Tests
                    <span className="material-symbols-outlined text-xl">expand_more</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab !== 'Available Tests' && (
              <div className="py-20 text-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">info</span>
                <p className="text-slate-500">Section for "{activeTab}" content is under development.</p>
              </div>
            )}
          </div>
        </main>

        {/* Footer Section */}
       
      </div>
    </div>
  );
};

export default LabProfileDetails;