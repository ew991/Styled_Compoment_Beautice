
import './App.css';
import Navbar from './component/navbar';
import { GobalStyle } from './GlobalStyles';
import MainSlider from './component/MainSlider';
import CoreService from './component/CoreService';
import ProfessionT from './component/ProfessionTeam';
import AboutUs from './component/AboutUs';
import ContacUs from './component/ContactUs';
import Footer from './component/footer';

function App() {
  return (
    <>
      <GobalStyle></GobalStyle>
      <Navbar />
      <MainSlider />
      <CoreService />
      <AboutUs />
      <ProfessionT />
      <ContacUs />
      <Footer />
    </>

  );
}

export default App;
