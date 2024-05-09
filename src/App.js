import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Horse from './pages/Horse';
import HorseShows from './pages/HorseShows';
import Owner from './pages/Owner';
import Betters from './pages/Betters';
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
    <main>
        <section>
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/horses" element={<Horse />} />
                <Route path="/betters" element={<Betters />} />
                <Route path="/horseshows" element={<HorseShows />} />
                <Route path="/owner" element={<Owner />} />
            </Routes>
        </section>
    </main>
    </BrowserRouter>
    </>
  );
}

export default App;
