import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.DRAWING_APP_BACKEND_URL}/login`, { email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl mb-4">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;