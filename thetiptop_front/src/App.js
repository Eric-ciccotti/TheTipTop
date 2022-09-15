import './App.css';
import NavBar from './components/layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Section from './components/layout/Section';


import Footer from './components/layout/Footer';
import Accueil from './components/pages/Accueil';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Contact from './components/pages/Contact';
import Erreur404 from './components/pages/Erreur404';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="/home" element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Erreur404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
