import React from 'react';

/**
 * Lab2Door Cart Page Component
 * Preserves all original styles, dark mode support, and layout.
 */

const CartPage = () => {
  // Mock data for the cart items based on your HTML
  const cartItems = [
    {
      id: 1,
      title: "Complete Blood Count (CBC)",
      lab: "Thyrocare Labs",
      price: 25.00,
      icon: "biotech",
      includesHomeCollection: true
    },
    {
      id: 2,
      title: "Vitamin D (25-OH)",
      lab: "Healthians",
      price: 40.00,
      icon: "science",
      includesHomeCollection: true
    }
  ];

  return (
    <div className="font-display bg-[#f6f7f8] dark:bg-[#101722] text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          
          <Header />

          <main className="flex-1 px-4 lg:px-20 py-8 lg:py-12">
            <div className="max-w-6xl mx-auto">
              
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
                <a className="hover:text-[#0f55bd] transition-colors" href="#">Home</a>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-slate-900 dark:text-white font-medium">Cart</span>
              </nav>

              <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-10 tracking-tight">Your Selection</h1>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                
                {/* Left Column: Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}

                  <div className="pt-6">
                    <a className="inline-flex items-center gap-2 text-[#0f55bd] font-bold hover:underline" href="#">
                      <span className="material-symbols-outlined">arrow_back</span>
                      Continue Browsing Tests
                    </a>
                  </div>
                </div>

                {/* Right Column: Order Summary */}
                <aside className="lg:sticky lg:top-28">
                  <OrderSummary />
                  
                  {/* Help Box */}
                  <div className="mt-6 p-4 bg-[#0f55bd]/5 rounded-xl border border-[#0f55bd]/10 flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#0f55bd]">support_agent</span>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Need assistance?</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Our medical experts are available 24/7 to help with your test selection.</p>
                      <a className="text-[#0f55bd] text-xs font-bold mt-2 inline-block hover:underline" href="#">Chat with us</a>
                    </div>
                  </div>
                </aside>

              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

// --- Sub-components ---

const Header = () => (
  <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-20 py-4 sticky top-0 z-50">
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-3 text-[#0f55bd]">
        <div className="size-8">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_535)">
              <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
            </g>
            <defs>
              <clipPath id="clip0_6_535"><rect fill="white" height="48" width="48"></rect></clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-slate-900 dark:text-white text-xl font-extrabold leading-tight tracking-tight">Lab2Door</h2>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-[#0f55bd] transition-colors" href="#">Home</a>
        <a className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-[#0f55bd] transition-colors" href="#">Tests</a>
        <a className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-[#0f55bd] transition-colors" href="#">Labs</a>
        <a className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-[#0f55bd] transition-colors" href="#">About</a>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 border border-slate-200 dark:border-slate-700">
        <span className="material-symbols-outlined text-slate-500 text-lg">search</span>
        <input className="bg-transparent border-none focus:ring-0 text-sm w-40 dark:text-white" placeholder="Search tests..." type="text" />
      </div>
      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span className="absolute top-1 right-1 bg-[#0f55bd] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
      </button>
      <div className="h-8 w-8 rounded-full bg-[#0f55bd]/10 border border-[#0f55bd]/20 overflow-hidden">
        <img className="w-full h-full object-cover" alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4uC4j7Bg_kYbwmg9yQEiZMFn8bdS2_BlGj5UG536cmf_x6HUCuCngivsTdC-NbaC4bc_tIiKOok-jj4PErdB__IHF5uOOvC_p1-ZJtai7cgC9p16IJfOFuK4E2-ZAKZCK1ogGomGpt21tHv2XXB9N0s4EcCwbTxxXiii1ggLrDdsLdL4P4dbFwn-WFcO5nkD9VPGbkR5mjxhmm-qVilTvMnYBHkwCDz2qIUxWB1Rzfx0Kj3JIOEywSYIlv272xv6HuWYNZf2xGtZZ" />
      </div>
    </div>
  </header>
);

const CartItem = ({ item }) => (
  <div className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#0f55bd]/30 transition-all shadow-sm">
    <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-[#0f55bd]/5 rounded-xl border border-[#0f55bd]/10 text-[#0f55bd]">
      <span className="material-symbols-outlined text-4xl">{item.icon}</span>
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">{item.title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">local_hospital</span> {item.lab}
          </p>
        </div>
        <p className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        {item.includesHomeCollection && (
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
            <span className="material-symbols-outlined text-sm">check_circle</span> Includes Home Collection
          </div>
        )}
        <button className="text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
          <span className="material-symbols-outlined text-lg">delete</span> Remove
        </button>
      </div>
    </div>
  </div>
);

const OrderSummary = () => (
  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl p-8">
    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>
    <div className="space-y-4 mb-6">
      <div className="flex justify-between text-slate-600 dark:text-slate-400">
        <span>Subtotal (2 items)</span>
        <span>$65.00</span>
      </div>
      <div className="flex justify-between text-slate-600 dark:text-slate-400">
        <span>Collection Fees</span>
        <span className="text-emerald-600 font-medium">FREE</span>
      </div>
      <div className="pt-4">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Promo Code</label>
        <div className="flex gap-2">
          <input 
            className="flex-1 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-[#0f55bd] focus:border-[#0f55bd] text-sm uppercase px-3 py-2 outline-none dark:text-white" 
            placeholder="LABSAVE10" 
            type="text" 
          />
          <button className="bg-[#0f55bd]/10 text-[#0f55bd] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#0f55bd]/20 transition-all">Apply</button>
        </div>
      </div>
      <div className="flex justify-between text-emerald-600 font-medium">
        <span>Discount (10%)</span>
        <span>-$6.50</span>
      </div>
    </div>
    <div className="border-t border-slate-100 dark:border-slate-800 pt-6 mb-8">
      <div className="flex justify-between items-end">
        <span className="text-slate-900 dark:text-white font-bold">Total Amount</span>
        <div className="text-right">
          <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">$58.50</p>
          <p className="text-[10px] text-slate-400 uppercase mt-1">Includes all taxes</p>
        </div>
      </div>
    </div>
    <button className="w-full bg-[#0f55bd] hover:bg-[#0f55bd]/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#0f55bd]/25 flex items-center justify-center gap-2 group">
      Proceed to Checkout
      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
    </button>
    <div className="mt-6 flex items-center justify-center gap-4 opacity-50">
      <span className="material-symbols-outlined text-lg">encrypted</span>
      <span className="text-xs font-medium uppercase tracking-widest">Secure Payment</span>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-6 lg:px-20">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="col-span-2 md:col-span-1">
        <div className="flex items-center gap-2 text-[#0f55bd] mb-6">
          <div className="size-6">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className="font-extrabold text-slate-900 dark:text-white">Lab2Door</span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          Empowering your health journey with convenient at-home diagnostic services and transparent pricing.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Services</h4>
        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
          <li><a className="hover:text-[#0f55bd] transition-colors" href="#">All Tests</a></li>
          <li><a className="hover:text-[#0f55bd] transition-colors" href="#">Health Packages</a></li>
          <li><a className="hover:text-[#0f55bd] transition-colors" href="#">Lab Partners</a></li>
          <li><a className="hover:text-[#0f55bd] transition-colors" href="#">Home Collection</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
          <li><a className="hover:text-[#0f55bd] transition-colors" href="#">About Us</a></li>
          <li><a className="hover:text-[#0f55bd] transition-colors" href="#">Careers</a></li>
          <li><a className="hover:text-[#0f55bd] transition-colors" href="#">Contact</a></li>
          <li><a className="hover:text-[#0f55bd] transition-colors" href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Connect</h4>
        <div className="flex gap-4">
          <SocialIcon path="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          <SocialIcon path="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400">
      © 2024 Lab2Door Diagnostic Services. All rights reserved.
    </div>
  </footer>
);

const SocialIcon = ({ path }) => (
  <a className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-[#0f55bd] hover:text-white transition-all cursor-pointer" href="#">
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
      <path d={path}></path>
    </svg>
  </a>
);

export default CartPage;