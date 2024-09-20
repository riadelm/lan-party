import React from 'react';
import './loading.css'; // Import the CSS for styling // Replace with your actual loading gif path

const LoadingScreen = ({ loadingGif, color='white', width='100px' }) => {
    return (
        <div className="loading-screen" style={{ backgroundColor: color }}>
            <img src={loadingGif} alt="Loading..." className="loading-gif" style={{ width: width }}/>
        </div>
    );
};

export default LoadingScreen;