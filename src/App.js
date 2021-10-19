import logo from './logo.svg';
import './App.css';

import TopSection from './components/topSection';
import KnowEachOther from './components/knowEachOther';
import AboutUs from './components/aboutUs';
import Interior from './components/interior';
import Portfolio from './components/portfolio';
import Interested from './components/interested';
import Clients from './components/clients';
import ContactUs from './components/contactUs';

const urlApi = 'http://localhost:8055';

function App() {
  return (
    <div className="App">
      <TopSection apiUrl={urlApi}></TopSection>
      <KnowEachOther apiUrl={urlApi}></KnowEachOther>
      <AboutUs apiUrl={urlApi}></AboutUs>
      <Interior apiUrl={urlApi}></Interior>
      <Portfolio apiUrl={urlApi}></Portfolio>
      <Interested apiUrl={urlApi}></Interested>
      <Clients apiUrl={urlApi}></Clients>
      <ContactUs apiUrl={urlApi}></ContactUs>
    </div>
  );
}

export default App;
