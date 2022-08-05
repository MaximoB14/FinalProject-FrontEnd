import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './components/navbar'
import Main from './pages/main'
function App() {
  return (
    <div className= 'Main'>
          <NavScroll />
          <Main/>

    </div>

  );
}
export default App;