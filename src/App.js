import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inner from './pages/Inner/Inner';
import Education from './components/Education/index';
import Experience from './components/Experience/index';
import Skills from './components/Skills/index';
import Portfolio from './components/Portfolio/index';
import Adress from './components/Address/index';
import Feedback from './components/Feedback/index';

function App() {
  return (
    <div className="App" data-testid="app-component">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inner" element={<Inner />} />
          <Route path='/education' element={<Education/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Adress/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
