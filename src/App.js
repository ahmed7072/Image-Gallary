import logo from './logo.svg';
import './App.css';
import './index.css'
import React , {useContext} from 'react';
import ImageList from './components/ImageList';
import GlobalContext from './context/GlobalContext';

function App() {
  return (
    <GlobalContext>
      
      <ImageList/>
    </GlobalContext>
  );
}

export default App;
