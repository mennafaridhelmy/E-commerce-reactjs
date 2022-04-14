import React from 'react';
import { Routes , Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

// scss
import "./default.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        } />
        <Route path='/registration' element={
          <MainLayout>  
            <Registration />
          </MainLayout>
        } />
      </Routes>  
    </div>
  );
}

export default App;
