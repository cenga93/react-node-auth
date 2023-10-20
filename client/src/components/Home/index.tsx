import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './style.scss';
import UserContext from '../../Context/UserContext';

const HomeComponent: React.FC = () => {
   const navigate = useNavigate();
   const location = useLocation();

   const [user, setUser] = useState({
      firstname: '',
      lastname: '',
   });

   const { getUser, logout } = useContext(UserContext);

   useEffect(() => {
      console.log(location.pathname);
      // console.log(history.name);
      // getUser().then((data: any) => setUser(data));
   }, []);

   const handleLogout = async () => {
      await logout();
      navigate('/register');
   };

   return (
      <div className='home-container'>
         {user ? (
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
