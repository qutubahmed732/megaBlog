import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header, Footer } from './Interface/index.js';
import authService from './appwrite/auth.js';
import { loginUser, logout } from './Redux-store/features/authSlice.js';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(loginUser({ userData }));
        else dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="site-loader">
        <div className="loader-mark">B</div>
        <p>Loading BlogHouse</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col site-shell">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
