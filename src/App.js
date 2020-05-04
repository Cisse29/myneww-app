import React from 'react';
import Header from "./Components/header/header"
import Info from "./Components/info/info"
import Suggest from "./Components/suggest/suggest"
import Quizz from "./Components/quizz/quizz"
import Hg from "./Components/hg/hg"
import Health from './Components/health/health'
import './App.css';



function App() {
  return (

    <div className="App">
     <Header />
     <Info />
     <div className="box1">
      <Suggest />
      <Hg />
     </div>
     <div className="box2">
     <Quizz />
     <Health />
     </div>

    </div>
    
  );
}

export default App;
