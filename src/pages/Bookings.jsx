import React, { useState } from 'react';

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState('All Bookings');

  // Sample Booking Data
  const bookings = [
    {
      id: "#BK-90234",
      lab: "City Diagnostics Center",
      branch: "Downtown Branch",
      test: "Complete Blood Count (CBC)",
      date: "Oct 24, 2023",
      time: "08:30 AM",
      status: "Pending",
      statusClass: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      id: "#BK-88512",
      lab: "Apollo Health Labs",
      branch: "Suburban Hub",
      test: "Lipid Profile Test",
      date: "Oct 21, 2023",
      time: "10:00 AM",
      status: "Confirmed",
      statusClass: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "#BK-75210",
      lab: "Global Medical Analysis",
      branch: "Medical Plaza",
      test: "Vitamin D3 Screening",
      date: "Oct 15, 2023",
      time: "07:45 AM",
      status: "Completed",
      statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-['Inter']">
      {/* Custom Styles for Colors & Icons */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        :root {
          --primary: #13ec5b;
          --primary-dark: #0fc74d;
        }
      `}</style>
     
      {/* MAIN CONTENT WRAPPER */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 gap-8">
        
        {/* SIDEBAR */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-1">
            <div className="px-3 py-4 mb-4 bg-white rounded-xl border border-slate-200">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">User Account</p>
              <p className="text-lg font-bold mt-1 text-slate-900">John Doe</p>
              <p className="text-sm text-[#0fc74d] font-medium">Premium Member</p>
            </div>
            
            <SidebarLink icon="grid_view" label="Dashboard" />
            <SidebarLink icon="calendar_today" label="My Bookings" active />
            <SidebarLink icon="description" label="Test Reports" />
            <SidebarLink icon="group" label="Family Profiles" />
            
            <div className="pt-4 mt-4 border-t border-slate-200">
              <SidebarLink icon="settings" label="Settings" />
              <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 transition-all" href="#">
                <span className="material-symbols-outlined">logout</span>
                Sign Out
              </a>
            </div>
          </div>
        </aside>

        {/* MAIN SECTION */}
        <main className="flex-1 min-w-0">
          <div className="mb-8">
            <nav className="flex mb-4 text-sm text-slate-500">
              <ol className="flex items-center space-x-2">
                <li><a className="hover:text-[#0fc74d]" href="#">Home</a></li>
                <li><span className="material-symbols-outlined text-xs">chevron_right</span></li>
                <li className="text-slate-900 font-medium">My Bookings</li>
              </ol>
            </nav>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">My Bookings</h1>
            <p className="text-slate-600">Manage your upcoming and past diagnostic appointments effortlessly.</p>
          </div>

          {/* TABS & FILTERS */}
          <div className="flex items-center justify-between mb-6 border-b border-slate-200 overflow-x-auto">
            <div className="flex gap-8 min-w-max">
              {['All Bookings', 'Upcoming', 'Completed', 'Cancelled'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm transition-colors ${
                    activeTab === tab 
                    ? 'font-bold border-b-2 border-[#0fc74d] text-[#0fc74d]' 
                    : 'font-medium text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="pb-3 hidden sm:block">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                Filter
              </button>
            </div>
          </div>

          {/* BOOKINGS TABLE (DESKTOP) */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Booking ID</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Lab Name</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Test Name</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date & Time</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {bookings.map((booking, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-slate-500">{booking.id}</td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-semibold text-slate-900">{booking.lab}</div>
                        <div className="text-xs text-slate-500">{booking.branch}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-700">{booking.test}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        {booking.date} <br/>
                        <span className="text-xs text-slate-500">{booking.time}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${booking.statusClass}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-[#0fc74d] hover:text-green-700 text-sm font-bold flex items-center gap-1 group">
                          View Details
                          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE LIST VIEW */}
            <div className="md:hidden divide-y divide-slate-100">
              {bookings.map((booking, index) => (
                <div key={index} className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-mono text-slate-500">{booking.id}</span>
                      <h3 className="text-base font-bold text-slate-900">{booking.test}</h3>
                      <p className="text-sm text-slate-600">{booking.lab}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${booking.statusClass}`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    {booking.date} • {booking.time}
                  </div>
                  <button className="w-full py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-[#0fc74d]">
                    View Booking Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* PAGINATION */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing <span className="font-medium text-slate-900">1</span> to <span className="font-medium text-slate-900">10</span> of <span className="font-medium text-slate-900">24</span> bookings
            </p>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 transition-all shadow-sm" disabled>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </main>
      </div>


    </div>
  );
};

// Sub-component for Sidebar Links
const SidebarLink = ({ icon, label, active = false }) => {
  const baseClasses = "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all border";
  const activeClasses = "bg-white shadow-sm text-[#0fc74d] border-slate-200";
  const inactiveClasses = "text-slate-600 hover:bg-white hover:shadow-sm border-transparent hover:border-slate-200";

  return (
    <a className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`} href="#">
      <span className="material-symbols-outlined">{icon}</span>
      {label}
    </a>
  );
};

export default MyBookings;