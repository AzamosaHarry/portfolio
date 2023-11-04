import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Design from './Design';
import Engineering from './Enginneering';
import Writer from './Writer';
import Developer from './Developer';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
