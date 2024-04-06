import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Authentication from './pages/Authentication';
import { AuthContext } from './context/auth_context/AuthProvider'
import { useContext, useEffect } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NavBar from './nav_bar/NavigationBar.js';

function App() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(auth);

  useEffect(() => {
    // If the user is not authenticated, navigate to the Authentication page
    if (!auth || !auth.isAuthenticated) {
      navigate('/Authentication');
    }
  }, [auth, navigate]);

  return (
    <div className="App">
      {auth && auth.isAuthenticated && <NavBar /> }
      <Routes>
        <Route path="/Authentication" element={<Authentication />} />
        {auth && auth.isAuthenticated && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Settings" element={<Settings />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
