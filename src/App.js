import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Design from './Design';
import Engineering from './Enginneering';
import Writer from './Writer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio' element={<Home />} />
          <Route path='/portfolio/design' element={<Design />} />
          <Route path='/portfolio/engineering' element={<Engineering />} />
          <Route path='/portfolio/writer' element={<Writer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
