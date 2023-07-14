import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import Sidebar from './components/Sidebar/Sidebar';

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
    <div className='wrapper'>
    <div className='col-2'>
        <Navbar />
        <main className='content'>
          <AppRouter />
        </main>
      </div>
      <div className='col-1'>
        <Sidebar />
      </div>
    </div>
     
    </BrowserRouter>
  );
};

export default App;