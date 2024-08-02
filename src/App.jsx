import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


const App = () =>{
  //creating the inline style object
  const darkMode ={
    backgroundColor: 'black',
    color: 'white'
  }
};

const lightMode = {
  backgroundColor: 'white',
  color: 'black'
}

//creating the stylemode for the differenrt states
const [styleMode, setStyleMode] = useState(lightMode);

//adding mode for switching button's event handler
const toggleStyleMode = () => {
  setStyleMode(prevMode => (prevMode === lightMode ? darkMode: lightMode));
}

const App1 = () =>{
return (
  <div style={styleMode}>
    <button onClick={toggleStyleMode}>
      Toggle Mode
    </button>
<Header styleMode={styleMode}/>
<Content styleMode={styleMode}/>
<Footer styleMode={styleMode}/>
  </div>
)
}
// const App3 = () => {
//   return (
//     <>App</>
//   );
// }

export default App;
