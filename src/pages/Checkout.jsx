import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  
  const [cartItem, setCartItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState('form'); 
  const [utr, setUtr] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: 'Male',
    phone: '',
    email: '',
    address: ''
  });

  const [collectionType, setCollectionType] = useState('Home');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('08:00 - 09:00 AM');
  const [paymentMethod, setPaymentMethod] = useState('Online');

  // Dynamic Date Generation
  const [availableDates, setAvailableDates] = useState([]);
  const timeSlots = [
    '08:00 - 09:00 AM', '09:00 - 10:00 AM', 
    '10:00 - 11:00 AM', '11:00 - 12:00 PM', 
    '12:00 - 01:00 PM', '05:00 - 06:00 PM'
  ];

  useEffect(() => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      days.push({
        day: d.toLocaleDateString('en-US', { weekday: 'short' }),
        date: d.getDate()
      });
    }
    setAvailableDates(days);
    setSelectedDate(days[0].date);

    const existingCart = JSON.parse(localStorage.getItem('labCart')) || [];
    if (existingCart.length > 0) {
      setCartItem(existingCart[existingCart.length - 1]);
    }
    setLoading(false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;
    if (name === 'fullName') filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
    if (name === 'phone') filteredValue = value.replace(/\D/g, '').slice(0, 10);
    if (name === 'age') filteredValue = value.replace(/\D/g, '').slice(0, 3);

    setFormData({ ...formData, [name]: filteredValue });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!/^[a-zA-Z\s]{3,}$/.test(formData.fullName.trim())) newErrors.fullName = "Use only letters (min 3 chars)";
    const ageNum = parseInt(formData.age);
    if (!formData.age || ageNum < 1 || ageNum > 120) newErrors.age = "Enter a valid age (1-120)";
    if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = "Enter valid 10-digit number";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";
    if (collectionType === 'Home' && formData.address.trim().length < 10) newErrors.address = "Detailed address required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmBooking = () => {
    if (validateForm()) {
      if (paymentMethod === 'Online') {
        setCurrentStep('payment');
      } else {
        finalizeOrder("CASH");
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const finalizeOrder = (txId) => {
    if (paymentMethod === 'Online' && txId.length !== 12) {
        alert("Verification Failed: Please enter the 12-digit UTR number from your payment receipt.");
        return;
    }

    const finalOrder = {
      patient: formData,
      test: cartItem,
      appointment: { type: collectionType, date: selectedDate, slot: selectedSlot, emergency: isEmergency },
      total: totalPrice
    };
    console.log("Order Confirmed:", finalOrder);
    alert(`Success! ${isEmergency ? "Emergency Team notified." : ""}`);
    localStorage.removeItem('labCart');
    navigate('/');
  };

  if (loading || !cartItem) return <div className="min-h-screen bg-[#f6f7f8] dark:bg-[#101722]" />;

  const basePrice = parseInt(cartItem.price.replace(/[^\d]/g, ''));
  const emergencyFee = isEmergency ? 150 : 0;
  const totalPrice = basePrice + 20 + emergencyFee;

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#0b111a] font-display text-slate-900 dark:text-slate-100 min-h-screen pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Progress Tracker */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <span className="bg-[#0f55bd] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                {currentStep === 'form' ? 'Step 02' : 'Step 03'}
            </span>
            <div className="h-1 flex-grow bg-slate-200 dark:bg-slate-800 rounded-full">
               <div className={`h-full bg-[#0f55bd] transition-all duration-500 ${currentStep === 'form' ? 'w-[66%]' : 'w-full'}`}></div>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black italic uppercase tracking-tighter">
            {currentStep === 'form' ? <>Confirm <span className="text-[#0f55bd]">Booking</span></> : <>Complete <span className="text-[#0f55bd]">Payment</span></>}
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            
            {currentStep === 'form' ? (
              <>
                {/* Emergency Add-on */}
                <div onClick={() => setIsEmergency(!isEmergency)} className={`p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all flex items-center justify-between ${isEmergency ? 'border-amber-500 bg-amber-500/5' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isEmergency ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                      <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <div>
                      <h3 className="font-black uppercase text-sm italic">Emergency Collection</h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Priority sample pickup within 45 mins (+₹150)</p>
                    </div>
                  </div>
                  <span className={`material-symbols-outlined text-3xl ${isEmergency ? 'text-amber-500' : 'text-slate-300'}`}>
                    {isEmergency ? 'toggle_on' : 'toggle_off'}
                  </span>
                </div>

                {/* Patient Info Section */}
                <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                  <h2 className="text-2xl font-black mb-8 flex items-center gap-3 uppercase italic">
                    <span className="material-symbols-outlined text-[#0f55bd]">person_edit</span> Patient Info
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase text-slate-400 ml-2">Full Name</label>
                      <input name="fullName" value={formData.fullName} onChange={handleInputChange} className={`w-full bg-slate-50 dark:bg-slate-800/50 border-2 rounded-2xl p-4 outline-none ${errors.fullName ? 'border-red-500' : 'border-transparent'}`} placeholder="Enter patient name" type="text" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase text-slate-400 ml-2">Age</label>
                      <input name="age" value={formData.age} onChange={handleInputChange} className={`w-full bg-slate-50 dark:bg-slate-800/50 border-2 rounded-2xl p-4 outline-none ${errors.age ? 'border-red-500' : 'border-transparent'}`} placeholder="Years" type="text" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="text-xs font-black uppercase text-slate-400 ml-2 block mb-3">Gender Selection</label>
                        <div className="flex gap-3">
                            {['Male', 'Female', 'Other'].map((item) => (
                                <button key={item} onClick={() => setFormData({...formData, gender: item})} className={`flex-1 py-4 rounded-2xl font-black text-sm transition-all border-2 ${formData.gender === item ? 'border-[#0f55bd] bg-[#0f55bd]/5 text-[#0f55bd]' : 'border-transparent bg-slate-50 dark:bg-slate-800/50'}`}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-slate-400 ml-2">Contact Number</label>
                        <input name="phone" value={formData.phone} onChange={handleInputChange} className={`w-full bg-slate-50 dark:bg-slate-800/50 border-2 rounded-2xl p-4 outline-none ${errors.phone ? 'border-red-500' : 'border-transparent'}`} placeholder="10 Digit Number" type="text" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-slate-400 ml-2">Email</label>
                        <input name="email" value={formData.email} onChange={handleInputChange} className={`w-full bg-slate-50 dark:bg-slate-800/50 border-2 rounded-2xl p-4 outline-none ${errors.email ? 'border-red-500' : 'border-transparent'}`} placeholder="example@mail.com" type="email" />
                    </div>
                    <div className="md:col-span-2 space-y-1">
                      <label className="text-xs font-black uppercase text-slate-400 ml-2">Full Address</label>
                      <textarea name="address" value={formData.address} onChange={handleInputChange} className={`w-full bg-slate-50 dark:bg-slate-800/50 border-2 rounded-2xl p-4 outline-none ${errors.address ? 'border-red-500' : 'border-transparent'}`} rows="3" placeholder="Street, Landmark, City..."></textarea>
                    </div>
                  </div>
                </section>

                {/* Scheduling Section */}
                <section className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                   <div className="flex justify-between items-center mb-10">
                      <h2 className="text-2xl font-black uppercase italic flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#0f55bd]">calendar_month</span> Schedule
                      </h2>
                      <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                        <button onClick={() => setCollectionType('Home')} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${collectionType === 'Home' ? 'bg-white shadow-md text-[#0f55bd]' : 'text-slate-400'}`}>Home</button>
                        <button onClick={() => setCollectionType('Visit')} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${collectionType === 'Visit' ? 'bg-white shadow-md text-[#0f55bd]' : 'text-slate-400'}`}>Lab Visit</button>
                      </div>
                   </div>
                   <div className="grid md:grid-cols-2 gap-10">
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Select Date</p>
                        <div className="grid grid-cols-7 gap-2">
                           {availableDates.map((d) => (
                             <button key={d.date} onClick={() => setSelectedDate(d.date)} className={`flex flex-col items-center py-3 rounded-xl transition-all ${selectedDate === d.date ? 'bg-[#0f55bd] text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-800'}`}>
                               <span className="text-[9px] font-black uppercase opacity-60">{d.day}</span>
                               <span className="text-sm font-black">{d.date}</span>
                             </button>
                           ))}
                        </div>
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Available Slots</p>
                         <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((slot) => (
                                <button key={slot} onClick={() => setSelectedSlot(slot)} className={`py-3 px-2 rounded-xl text-[10px] font-black border-2 transition-all ${selectedSlot === slot ? 'border-[#0f55bd] text-[#0f55bd] bg-[#0f55bd]/5' : 'border-transparent bg-slate-50 dark:bg-slate-800'}`}>{slot}</button>
                            ))}
                         </div>
                      </div>
                   </div>
                </section>
              </>
            ) : (
              /* QR Payment Section */
              <section className="bg-white dark:bg-slate-900 p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl text-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-black italic uppercase tracking-tighter">Scan to <span className="text-[#0f55bd]">Pay</span></h2>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">GPay, PhonePe, or Paytm</p>
                </div>
                
                <div className="inline-block p-6 bg-white rounded-3xl shadow-inner border border-slate-100 mb-8">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=LAB_ID@upi%26am=${totalPrice}%26tn=LAB_BOOKING`} alt="QR Code" className="w-52 h-52" />
                </div>

                <div className="max-w-sm mx-auto space-y-6">
                    <div className="text-left space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Transaction ID (12 Digit UTR)</label>
                        <input 
                            type="text" 
                            value={utr} 
                            onChange={(e) => setUtr(e.target.value.replace(/\D/g, '').slice(0, 12))} 
                            className="w-full bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl font-mono text-center font-black tracking-widest border-2 border-transparent focus:border-[#0f55bd] outline-none" 
                            placeholder="0000 0000 0000" 
                        />
                    </div>

                    <div className="flex gap-4">
                        <button onClick={() => setCurrentStep('form')} className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl text-[10px] font-black uppercase">Cancel</button>
                        <button onClick={() => finalizeOrder(utr)} className="flex-[2] py-4 bg-[#0f55bd] text-white rounded-2xl text-[10px] font-black uppercase shadow-lg shadow-[#0f55bd]/20">Verify & Confirm</button>
                    </div>
                </div>
              </section>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border-2 border-slate-100 dark:border-slate-800 shadow-2xl">
                <h3 className="text-xl font-black mb-6 italic uppercase">Order <span className="text-[#0f55bd]">Summary</span></h3>
                <div className="flex items-start gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-12 h-12 bg-[#0f55bd]/10 rounded-xl flex items-center justify-center text-[#0f55bd]">
                    <span className="material-symbols-outlined">biotech</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-sm uppercase leading-tight">{cartItem.title}</h4>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase italic">{cartItem.time} Result</p>
                  </div>
                  <span className="font-black text-sm">{cartItem.price}</span>
                </div>

                <div className="py-6 space-y-4">
                   <div className="flex justify-between text-xs font-bold uppercase">
                      <span className="text-slate-400">Platform Fee</span>
                      <span>₹20.00</span>
                   </div>
                   {isEmergency && (
                     <div className="flex justify-between text-xs font-black uppercase text-amber-500">
                        <span>Emergency Add-on</span>
                        <span>₹150.00</span>
                     </div>
                   )}
                   <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-end">
                      <span className="text-sm font-black uppercase italic">To Pay</span>
                      <span className="text-4xl font-black text-[#0f55bd] leading-none tracking-tighter">₹{totalPrice}</span>
                   </div>
                </div>

                {currentStep === 'form' && (
                  <>
                    <div className="space-y-3 mb-8">
                      {['Online', 'Cash'].map(method => (
                        <button key={method} onClick={() => setPaymentMethod(method)} className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all ${paymentMethod === method ? 'bg-[#0f55bd] text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-800 text-slate-400'}`}>
                          <span className="text-xs font-black uppercase">{method === 'Online' ? 'Pay Online (QR)' : 'Pay at Home'}</span>
                          <span className="material-symbols-outlined text-sm">{paymentMethod === method ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                        </button>
                      ))}
                    </div>
                    <button onClick={handleConfirmBooking} className="w-full bg-[#0f55bd] text-white py-6 rounded-2xl font-black text-xl hover:shadow-2xl hover:-translate-y-1 transition-all uppercase italic tracking-tighter">
                      {paymentMethod === 'Online' ? 'Next: Payment' : 'Confirm Order'}
                    </button>
                  </>
                )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;