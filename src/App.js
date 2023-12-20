import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Design from './pages/Design/Design';
import Engineering from './pages/Engineering/Enginneering';
import Writer from './pages/Writer/Writer';
import Developer from './pages/Developer/Developer';
import Story from './pages/Story/Story';
import Contact from './pages/Contact/Contact';
import Insight from './pages/Insight/Insight';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio' element={<Home />} />
          <Route path='/portfolio/design' element={<Design />} />
          <Route path='/portfolio/engineering' element={<Engineering />} />
          <Route path='/portfolio/writer' element={<Writer />} />
          <Route path='/portfolio/developer' element={<Developer />} />
          <Route path='/portfolio/story' element={<Story />} />
          <Route path='/portfolio/contact' element={<Contact />} />
          <Route path='/portfolio/insight' element={<Insight />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
