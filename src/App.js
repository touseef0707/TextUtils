import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const [mode, setMode] = useState('light');

  const handleToggleMode = (e) => {
    setMode(e.target.value);

    if (e.target.value === 'dark') {
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
      showAlert("Dark Mode has been enabled", "success");
    }
    else if (e.target.value === 'light') {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success");
    }
    else if (e.target.value === 'blue') {
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = '#ffffff';
      showAlert("Blue Mode has been enabled", "success");
    }
    else if (e.target.value === 'green') {
      document.body.style.backgroundColor = 'rgb(4 55 48)';
      document.body.style.color = '#ffffff';
      showAlert("Green Mode has been enabled", "success");
    }
    else if (e.target.value === 'grey') {
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = '#ffffff';
      showAlert("Grey Mode has been enabled", "success");
    }
  }

  return (
    <Router>
      <Navbar title='TextUtils' mode={mode} handleToggleMode={handleToggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/TextUtils" element={<Textform heading="Word & Character Counter, Remove Extra Spaces, Convert to Uppercase, Lowercase" mode={mode} showAlert={showAlert}/>} />
          <Route exact path="/home" element={<Textform heading="Word & Character Counter, Remove Extra Spaces, Convert to Uppercase, Lowercase" mode={mode} showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;