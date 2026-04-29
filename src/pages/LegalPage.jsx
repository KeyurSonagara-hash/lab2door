import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LegalLayout = ({ title, lastUpdated, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-[#fcfdfe] dark:bg-[#0f1723] text-slate-900 dark:text-slate-100 font-sans pb-20">
      <header className="pt-32 pb-12 px-6 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0f1723]">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#0052cc] transition-colors mb-8">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Go Back
          </button>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-4 italic">{title}</h1>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#0052cc]"></span>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Last Updated: {lastUpdated || 'April 2026'}</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-16">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
          {children}
        </div>

        <div className="mt-20 p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-2">Still have questions?</h3>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Our legal team is here to clarify any doubts.</p>
          </div>
          <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-[#111827] text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-[#0052cc] transition-all shadow-xl">
            Contact Support
          </button>
        </div>
      </main>
    </div>
  );
};

export const PrivacyPolicy = () => (
  <LegalLayout title="Privacy Policy">
    <section>
      <h2 className="text-2xl font-black uppercase mb-4">1. Data Collection</h2>
      <p className="font-bold text-slate-600 dark:text-slate-400 leading-relaxed uppercase text-[12px] tracking-wide">
        At Lab2Door, we collect personal information such as name, contact details, and health data solely to provide accurate diagnostic services.
      </p>
    </section>
  </LegalLayout>
);

export const TermsOfService = () => (
  <LegalLayout title="Terms of Service">
    <section>
      <h2 className="text-2xl font-black uppercase mb-4">1. Use of Service</h2>
      <p className="font-bold text-slate-600 dark:text-slate-400 leading-relaxed uppercase text-[12px] tracking-wide">
        By booking a test with Lab2Door, you agree to provide accurate health history. Our platform acts as a bridge between labs and patients.
      </p>
    </section>
  </LegalLayout>
);

export const RefundPolicy = () => (
  <LegalLayout title="Refund Policy">
    <section>
      <h2 className="text-2xl font-black uppercase mb-4">1. Cancellation</h2>
      <p className="font-bold text-slate-600 dark:text-slate-400 leading-relaxed uppercase text-[12px] tracking-wide">
        Cancellations made 24 hours before the scheduled collection time are eligible for a full refund.
      </p>
    </section>
  </LegalLayout>
);

export const PartnerWithUs = () => (
  <LegalLayout title="Partner With Us">
    <section>
      <h2 className="text-2xl font-black uppercase mb-4">For Laboratories</h2>
      <p className="font-bold text-slate-600 dark:text-slate-400 leading-relaxed uppercase text-[12px] tracking-wide">
        Partner your NABL-accredited lab with Lab2Door to receive high-volume bookings and logistics support.
      </p>
    </section>
  </LegalLayout>
);