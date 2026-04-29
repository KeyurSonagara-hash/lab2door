import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'Support Inquiry',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting Lab2Door. We will get back to you shortly.');
    setFormData({ fullName: '', email: '', subject: 'Support Inquiry', message: '' });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#f6f8f6] dark:bg-[#102216] text-slate-900 dark:text-slate-100 antialiased font-['Inter']">
      
      {/* ✅ FIXED: Style tag now uses dangerouslySetInnerHTML to avoid JSX errors */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap');
        .material-symbols-outlined { 
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; 
        }
      ` }} />

      <div className="relative flex min-h-screen flex-col">
        <main className="flex-grow">
          
          {/* Hero Title */}
          <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black tracking-tight lg:text-5xl">Contact Us</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Have questions about our home collection services or diagnostic tests? Our team is ready to assist you.</p>
            </div>
          </section>

          {/* Contact Cards */}
          <section className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border bg-white p-8 dark:bg-slate-900/50 hover:border-[#13ec5b] transition-colors">
                <h3 className="text-lg font-bold">Call Us</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Mon-Sat, 8am - 8pm</p>
                <p className="mt-4 font-bold text-[#13ec5b]">+1 (800) 123-4567</p>
              </div>
              <div className="rounded-2xl border bg-white p-8 dark:bg-slate-900/50 hover:border-[#13ec5b] transition-colors">
                <h3 className="text-lg font-bold">Email Us</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Reply within 2 hours</p>
                <p className="mt-4 font-bold text-[#13ec5b]">support@lab2door.com</p>
              </div>
              <div className="rounded-2xl border bg-white p-8 dark:bg-slate-900/50 hover:border-[#13ec5b] transition-colors">
                <h3 className="text-lg font-bold">Visit Us</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Headquarters</p>
                <p className="mt-4 font-bold text-[#13ec5b]">123 Health Ave</p>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="rounded-3xl bg-white p-8 dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none border border-transparent focus:border-[#13ec5b] transition-all" required />
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none border border-transparent focus:border-[#13ec5b] transition-all" required />
                <select name="subject" value={formData.subject} onChange={handleInputChange} className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none border border-transparent focus:border-[#13ec5b] transition-all">
                  <option>Support Inquiry</option>
                  <option>Billing Question</option>
                  <option>Partner with Us</option>
                </select>
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 outline-none border border-transparent focus:border-[#13ec5b] transition-all" rows="4" required />
                <button type="submit" className="w-full bg-[#13ec5b] hover:bg-[#11d652] active:scale-[0.98] transition-all p-4 rounded-xl font-bold text-slate-900 shadow-lg shadow-[#13ec5b]/20">Send Message</button>
              </form>
            </div>
          </section>

          {/* Image & Trust Section */}
          <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
            <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1200" 
                alt="Lab Professional" 
                className="h-full w-full object-cover brightness-75 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent p-12">
                <div className="text-center">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter sm:text-4xl">Your Health, Our Priority</h3>
                  <div className="mt-6 flex flex-wrap justify-center gap-8">
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="material-symbols-outlined text-[#13ec5b]">verified</span>
                      <span className="text-xs font-bold uppercase tracking-widest">NABL Certified</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="material-symbols-outlined text-[#13ec5b]">home_health</span>
                      <span className="text-xs font-bold uppercase tracking-widest">Safe Home Collection</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="material-symbols-outlined text-[#13ec5b]">bolt</span>
                      <span className="text-xs font-bold uppercase tracking-widest">Fast Reports</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default ContactPage;