import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Authentication from './pages/Authentication';
import { AuthContext } from './context/auth_context/AuthProvider'
import { useContext, useEffect } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./components/ResetPassword"; // Adjust the path according to your file structure


function App() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(auth);

  // useEffect(() => {
  //   // If the user is not authenticated, navigate to the Authentication page
  //   if (!auth || !auth.isAuthenticated && location.pathname !== '/ForgotPassword') {
  //     navigate('/Authentication');
  //   }
  // }, [auth, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/*{auth && auth.isAuthenticated && (*/}
          <>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Settings" element={<Settings />} />
          </>
        {/*)}*/}
      </Routes>
    </div>
  );
}

export default App;
