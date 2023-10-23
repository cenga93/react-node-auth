import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import UserContext from '../../Context/UserContext';

const HomeComponent: React.FC = () => {
   const navigate = useNavigate();

   const [user, setUser] = useState({
      firstname: '',
      lastname: '',
   });

   const { getUser, logout } = useContext(UserContext);

   useEffect(() => {
      const isAuthenticated = localStorage.getItem('authUser') === 'true';

      if (isAuthenticated) {
         getUser().then((data: { firstname: string; lastname: string }) => setUser(data));
      }
   }, [getUser]);

   const handleLogout = async () => {
      await logout();
      navigate('/register');
   };

   return (
      <div className='home-container'>
         {user?.firstname && user?.lastname ? (
            <div>
               <h1>
                  Welcome {user.firstname} {user.lastname}
               </h1>
               <button onClick={handleLogout}>Logout</button>
            </div>
         ) : (
            <div>
               <h1>Home page</h1>
               <Link to={'/register'}>Register page</Link>
            </div>
         )}
      </div>
   );
};

export default HomeComponent;
