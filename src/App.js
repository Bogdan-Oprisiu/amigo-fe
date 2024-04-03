import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Authentication from './pages/Authentication';
import {AuthContext, authReducer} from './context/auth_context/AuthProvider'
import { useContext, useEffect } from 'react';

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
      <Routes>
        <Route path="/" />
        <Route path="/Authentication" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
