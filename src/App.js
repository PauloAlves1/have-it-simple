import React from 'react';
import './global.css';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';

const App = () => (
  <div className="App">
    <Sidebar />
    <Home />
  </div>
);

export default App;
