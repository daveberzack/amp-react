import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {

  return (
    <div id="home">
      <ul>
        <Link to="/city/atlanta"> Atlanta </Link>
      </ul>
    </div>
  );

}

export default Home;
