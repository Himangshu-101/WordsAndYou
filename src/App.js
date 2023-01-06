import React, {useState} from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import './App.css';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';


function App() {
    // }
    const [Mode, setMode] = useState('light');
    const [alert, setAlert] = useState();
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2300);
    }
    const toggleMode = () => {
        if(Mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#343a40';
            showAlert("Dark Mode has been enabled", "success");
            document.title = 'Words&You | Dark Mode';
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has been enabled", "success");
            document.title = 'Words&You | Light Mode';
        }
    }

    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar mode={Mode} toggleMode={toggleMode}/> 
                <Alert alert={alert}/>
                <Routes> 
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<TextForm showAlert={showAlert} heading="Please enter your text" mode={Mode} toggleMode={toggleMode}/>} />
                    {/* <About></About> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;
