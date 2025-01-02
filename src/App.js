import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import StatisticsSection from './components/StatisticsSection';
import StepsSection from './components/StepsSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Outlet } from 'react-router';

function App() {
  return (
        <div className='w-screen h-screen bg-grey-100'>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </div>
      )
}

export default App;
