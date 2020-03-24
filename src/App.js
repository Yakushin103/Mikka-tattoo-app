import React from 'react';
import Header from './Containers/Header'
import Carousel from './Containers/Carousel'
import About from './Containers/About'
import Local from './Containers/Local'
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <About />
      <Local />
    </div>
  );
}

export default App;
