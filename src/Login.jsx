import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { auth } from './firebase'; // Assuming you've set up Firebase authentication

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            // Sign in with phone number and password
            await auth.signInWithEmailAndPassword(phoneNumber, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <form onSubmit={handleLogin} style={{ width: '25rem', padding: '2rem', backgroundColor: '#FFFFFF', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login</h2>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '0.5rem' }}>Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #CBD5E0', borderRadius: '0.375rem', outline: 'none', transition: 'border-color 0.3s', }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid #CBD5E0', borderRadius: '0.375rem', outline: 'none', transition: 'border-color 0.3s', }}
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#4F46E5', color: '#FFFFFF', borderRadius: '0.375rem', cursor: 'pointer', transition: 'background-color 0.3s', }}>Login</button>
            </form>
            {error && <div style={{ marginTop: '1rem', color: '#E53E3E', textAlign: 'center' }}>{error}</div>}
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                Not a user? <span onClick={onShowRegistration} style={{ color: '#4F46E5', cursor: 'pointer' }}>Register</span>
            </div>
        </main>
    );
};

export default Login;
