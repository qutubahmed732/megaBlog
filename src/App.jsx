import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Header, Footer } from "./components/index.js";

import authService from './appwrite/auth.js';
import { loginUser, logout } from "./store/features/authSlice.js";
import { Outlet } from 'react-router-dom';


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const imgRef = useRef(null)

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(loginUser({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
