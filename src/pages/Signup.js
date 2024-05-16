import React, { useState } from 'react';
import api from '../services/api';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/auth/signup', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl mb-4">Signup</h2>
            <form onSubmit={handleSignup}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Signup</button>
            </form>
        </div>
    );
};

export default Signup;