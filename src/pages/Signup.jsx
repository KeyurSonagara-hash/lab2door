import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sending data to your backend port 5000
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            alert(res.data.message);
            navigate('/login'); // Move to login page after success
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Create Account</h2>
                <input className="w-full p-2 mb-4 border rounded" type="text" placeholder="Full Name" 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                <input className="w-full p-2 mb-4 border rounded" type="email" placeholder="Email" 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                <input className="w-full p-2 mb-6 border rounded" type="password" placeholder="Password" 
                    onChange={(e) => setFormData({...formData, password: e.target.value})} required />
                <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;