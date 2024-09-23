import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import CSS for styling
import home from "../../../assets/home/Home Button 2.png"

const HomeIcon = () => {
  return (
    <Link to="/" className="home-icon">
      <img src={home} className="home-icon"></img>
    </Link>
  );
};

export default HomeIcon;