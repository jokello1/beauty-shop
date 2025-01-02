import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services/:serviceId" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

