import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';

function App() {
    const [showRegistration, setShowRegistration] = useState(false);

    const handleShowRegistration = () => {
        setShowRegistration(true);
    };

    const handleShowLogin = () => {
        setShowRegistration(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {!showRegistration ? (
                <Login onShowRegistration={handleShowRegistration} />
            ) : (
                <Registration onShowLogin={handleShowLogin} />
            )}
        </div>
    );
}

export default App;
