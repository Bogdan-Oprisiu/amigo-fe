import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"/>
        <Route path="/Authentication" element={<Authentication/>}/>
      </Routes>
    </div>
  );
}

export default App;
