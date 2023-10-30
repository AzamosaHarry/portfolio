import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Design from './Design';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio' element={<Home />} />
          <Route path='/portfolio/design' element={<Design />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
