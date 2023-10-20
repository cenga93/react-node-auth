import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const HomeComponent: React.FC = () => {
   return (
      <div className='home-container'>
         <h1>Home page</h1>
         <Link to={'/register'}>Register page</Link>
      </div>
   );
};

export default HomeComponent;
