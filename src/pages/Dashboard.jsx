import React, { useState } from 'react';

const Dashboard = () => {
  // Mock data for the table
  const [bookings] = useState([
    {
      id: 1,
      labName: "City Diagnostics",
      branch: "Downtown Branch",
      testName: "Full Body Checkup",
      date: "Oct 24, 2023",
      status: "Scheduled",
      statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      hasReport: false
    },
    {
      id: 2,
      labName: "Metro Labs",
      branch: "Express Center",
      testName: "COVID-19 PCR",
      date: "Oct 20, 2023",
      status: "Processing",
      statusColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
      hasReport: false
    },
    {
      id: 3,
      labName: "Health Plus",
      branch: "Westside Clinic",
      testName: "Blood Sugar Test",
      date: "Oct 15, 2023",
      status: "Completed",
      statusColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
      hasReport: true
    },
    {
      id: 4,
      labName: "Wellness Lab",
      branch: "Main Square",
      testName: "Lipid Profile",
      date: "Oct 12, 2023",
      status: "Completed",
      statusColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
      hasReport: true
    }
  ]);

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#111921] font-['Inter',sans-serif] text-slate-900 dark:text-slate-100 antialiased flex flex-col min-h-screen">
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#111921]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-[#308ce8]">
                <span className="material-symbols-outlined text-3xl font-bold">biotech</span>
                <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Lab2Door</h1>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                {['Home', 'Labs', 'Tests', 'About'].map((item) => (
                  <a key={item} className="text-sm font-medium hover:text-[#308ce8] transition-colors" href="#">{item}</a>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                <input 
                  className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-[#308ce8]/50 outline-none transition-all" 
                  placeholder="Search tests..." 
                  type="text" 
                />
              </div>
              <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#111921]"></span>
              </button>
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
                <div className="w-8 h-8 rounded-full bg-[#308ce8]/10 flex items-center justify-center overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxnqW9NKZC8De7z3l4QXE2tDzL4RnYOm3GTWu3fmnA9wRpmjmr5JIn1EBq-Wjecadl_x51uKeZu3s2Vhfmh0tBnTSA1C3Qgm0KN2qIvey-ZrYrXFs03HctVPQkF1ZcxULne-4G3HI2S7tAIUZTX4Ef8oM1nUCReCD9FT1grbmMu980ksNuvxZpadXOA-FiiSoamoaiO7IXchTq4rOn2oHTvGTBN8sjUWE_Es_GHnjgCopOw6SrmipKc2IFoDRe9lki4Fb0wyGlkbFs" alt="Profile" />
                </div>
                <span className="hidden lg:block text-sm font-semibold">Alex Johnson</span>
              </div>
              <button className="md:hidden p-2 text-slate-500">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="hidden md:flex flex-col w-64 shrink-0 space-y-2">
          <div className="px-3 mb-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">User Account</p>
          </div>
          <nav className="space-y-1">
            <SidebarLink icon="dashboard" label="Dashboard" active />
            <SidebarLink icon="calendar_month" label="My Bookings" />
            <SidebarLink icon="description" label="Reports" />
            <SidebarLink icon="person" label="Profile" />
            <hr className="my-4 border-slate-200 dark:border-slate-800"/>
            <SidebarLink icon="logout" label="Logout" danger />
          </nav>
          
          {/* Support Card */}
          <div className="mt-auto p-4 rounded-xl bg-[#308ce8]/5 border border-[#308ce8]/10">
            <p className="text-xs font-semibold text-[#308ce8] mb-1">Need Help?</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Get in touch with our support team 24/7.</p>
            <button className="w-full py-2 bg-white dark:bg-slate-800 text-[#308ce8] text-xs font-bold rounded-lg border border-[#308ce8]/20 hover:bg-[#308ce8] hover:text-white transition-all">
              Contact Support
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 space-y-8 min-w-0">
          
          {/* Welcome Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h2>
            <p className="text-slate-500 dark:text-slate-400">Welcome back, Alex. Here's what's happening with your health tests.</p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard label="Total Bookings" value="12" icon="event_available" trend="+20%" trendUp />
            <StatCard label="Upcoming Tests" value="02" icon="timer" subValue="Today" theme="orange" />
            <StatCard label="Reports Available" value="08" icon="lab_profile" trend="-5%" trendUp={false} theme="emerald" />
          </div>

          {/* Recent Bookings Table */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Bookings</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm font-medium border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">View All</button>
                <button className="px-4 py-2 text-sm font-bold bg-[#308ce8] text-white rounded-lg hover:bg-[#308ce8]/90 transition-all">Book New Test</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lab Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Test Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {bookings.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">{item.labName}</span>
                          <span className="text-xs text-slate-500">{item.branch}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{item.testName}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{item.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.statusColor}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {item.hasReport ? (
                          <button className="px-3 py-1 bg-[#308ce8]/10 text-[#308ce8] text-xs font-bold rounded hover:bg-[#308ce8] hover:text-white transition-all">
                            Download Report
                          </button>
                        ) : (
                          <button className="text-slate-400 hover:text-[#308ce8] transition-colors">
                            <span className="material-symbols-outlined">more_vert</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-[#0a0f14] text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-3xl text-[#308ce8]">biotech</span>
                <span className="text-xl font-bold">Lab2Door</span>
              </div>
              <p className="text-sm leading-relaxed">Making quality diagnostic care accessible from the comfort of your home. Trusted by over 10,000 users.</p>
            </div>
            
            <FooterColumn title="Quick Links" links={['Find Labs', 'Popular Tests', 'Book a Collection', 'For Labs']} />
            <FooterColumn title="Company" links={['About Us', 'Careers', 'Terms of Service', 'Privacy Policy']} />
            
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a className="hover:text-[#308ce8] transition-colors" href="#">Help Center</a></li>
                <li><a className="hover:text-[#308ce8] transition-colors" href="#">Safety Guides</a></li>
                <li><a className="hover:text-[#308ce8] transition-colors" href="#">Contact Us</a></li>
                <li className="flex items-center gap-2 mt-4 text-white">
                  <span className="material-symbols-outlined text-xl">phone</span>
                  <span className="text-sm">1-800-LABS-2-U</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs">© 2023 Lab2Door Diagnostics Private Limited. All rights reserved.</p>
            <div className="flex gap-4">
              {['public', 'forum', 'share'].map((icon) => (
                <a key={icon} className="hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Helper Components ---

const SidebarLink = ({ icon, label, active = false, danger = false }) => (
  <a className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
    active ? 'bg-[#308ce8] text-white shadow-lg shadow-[#308ce8]/20' : 
    danger ? 'text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10' : 
    'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800'
  }`} href="#">
    <span className="material-symbols-outlined">{icon}</span>
    <span className="font-medium">{label}</span>
  </a>
);

const StatCard = ({ label, value, icon, trend, trendUp, subValue, theme = "primary" }) => {
  const themes = {
    primary: "bg-[#308ce8]/10 text-[#308ce8]",
    orange: "bg-orange-100 text-orange-600",
    emerald: "bg-emerald-100 text-emerald-600",
  };

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{label}</span>
        <span className={`p-2 rounded-lg ${themes[theme]}`}>
          <span className="material-symbols-outlined text-xl">{icon}</span>
        </span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-900 dark:text-white">{value}</span>
        {trend && (
          <span className={`${trendUp ? 'text-emerald-500' : 'text-red-500'} text-xs font-bold flex items-center`}>
            {trend} <span className="material-symbols-outlined text-xs">{trendUp ? 'trending_up' : 'trending_down'}</span>
          </span>
        )}
        {subValue && <span className="text-slate-400 text-xs font-bold">{subValue}</span>}
      </div>
    </div>
  );
};

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-white font-bold mb-4">{title}</h4>
    <ul className="space-y-2 text-sm">
      {links.map((link) => (
        <li key={link}>
          <a className="hover:text-[#308ce8] transition-colors" href="#">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Dashboard;