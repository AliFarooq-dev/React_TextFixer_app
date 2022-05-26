// import logo from './logo.svg';
// import './App.css';
import About from './Components/About';
import Navbar from './Components/navbar';
import TextArea from './Components/textarea';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {

    const [mode, setmode] = useState('light')
    const [switchTxt, setswitchTxt] = useState('Dark Mode');
    const [txtColor, settxtColor] = useState('black');
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    const toggleMode = () => {
        if (mode === 'light') { //used in navbar.js
            setmode('dark');
            setswitchTxt('Light Mode');
            settxtColor('white');
            document.body.style.backgroundColor = '#070526';
            document.body.style.color = 'white';
            document.title = 'Text utilis - Dark Mode';
            showAlert('Dark Mode is successfully enabled', 'success');
        }
        else {
            setmode('light');
            setswitchTxt('Dark Mode');
            settxtColor('black');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            document.title = 'Text utilis - Light Mode';
            showAlert('Light Mode is successfully enabled', 'success');
        }
    }
    return (
        <>
            <BrowserRouter>
                <Navbar title='Text-Fixer' About='About us' mode={mode} toggleMode={toggleMode} switchTxt={switchTxt} txtColor={txtColor} />
                <Alert alert={alert} />
                <div className='container'>
                    <Routes>
                        <Route path="/about" element={<About mode={mode} />} ></Route>
                        <Route path="/" element={<TextArea mode={mode} />} ></Route>
                    </Routes>
                    {/* <About /> */}
                </div>
            </BrowserRouter>
        </>
    )
}

export default App;