import React from 'react';
// import './App.css';

// import LandingPageCategory from './LandingPageCategory';

import Navigation from './Navigation';
import {Routes,Route} from 'react-router-dom';
import NavigationAdmin from './NavigationAdmin';



function App() {
  return (

      <Routes>

        <Route path='/nav/*' element={<Navigation/>}/>
        <Route path='/admin/*' element={<NavigationAdmin/>}/>
 
      </Routes>
   



      

   
    
  );
}

export default App;
