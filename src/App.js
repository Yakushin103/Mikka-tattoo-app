import React, {useState} from 'react';
import Header from './Containers/Header'
import Carousel from './Containers/Carousel'
import About from './Containers/About'
import Local from './Containers/Local'
import './App.scss';
import 'antd/dist/antd.css';

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <div className="App">
      <Header
      theme={theme}
      setTheme={setTheme}
      />
      <Carousel 
      theme={theme}
      />
      <About
      theme={theme}
      />
      <Local
      theme={theme}
      />
    </div>
  );
}

export default App;
