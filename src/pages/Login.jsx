import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            // Save the token so the user stays logged in
            localStorage.setItem('token', res.data.token);
            alert("Welcome back!");
            navigate('/'); // Redirect to Home or Dashboard
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="p-8 bg-white shadow-md rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Login</h2>
                <input className="w-full p-2 mb-4 border rounded" type="email" placeholder="Email" 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                <input className="w-full p-2 mb-6 border rounded" type="password" placeholder="Password" 
                    onChange={(e) => setFormData({...formData, password: e.target.value})} required />
                <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">Login</button>
            </form>
        </div>
    );
};

export default Login;