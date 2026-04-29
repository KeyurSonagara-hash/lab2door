import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:5000/api/auth/profile", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(res.data);
            } catch (err) {
                console.error("Error fetching profile", err);
            }
        };
        fetchProfile();
    }, []);

    if (!user) return <div className="p-10 text-center text-xl font-bold">Loading Profile...</div>;

    return (
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-3xl border border-slate-100">
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#0052cc] rounded-full flex items-center justify-center text-white mb-4">
                    <span className="material-symbols-outlined text-5xl">person</span>
                </div>
                <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">{user.name}</h2>
                <p className="text-slate-500 font-medium mb-6">{user.email}</p>
                
                <div className="w-full space-y-4">
                    <div className="p-4 bg-slate-50 rounded-2xl flex justify-between">
                        <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Account ID</span>
                        <span className="font-black text-slate-700">#00{user.id}</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl flex justify-between">
                        <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Member Since</span>
                        <span className="font-black text-slate-700">{new Date(user.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;