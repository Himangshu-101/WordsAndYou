import React, {useState} from 'react';

// import About from './Components/About';

import Navbar from './Components/navbar';
import './App.css';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import './Components/'

function App() {
    // const [MyStyle, setMyStyle] = useState
    // ({
    //     color: 'black',
    //     background: 'white',
    //     border: '1px solid white'
    // })

    // const [btnText, setbtnText] = useState("Enable Dark Mode");

    // const toggleDark = ()=>{
    //     if(MyStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             background: 'white',
    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             background: 'black',
    //             border: '1px solid white'
    //         })            
    //         setbtnText("Enable Light Mode");
    //     }
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
            // phaltumi like toggling texts
                // setInterval(() => {
                //     document.title = 'Words&You is Amazing OK ?';
                // }, 2000);
                // setInterval(() => {
                //     document.title = 'Install Words&You NOW';
                // }, 1200);
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has been enabled", "success");
            document.title = 'Words&You | Light Mode';
        }
    }


    return (
        <>
        <Navbar mode={Mode} toggleMode={toggleMode}/>
        <div className="container my-2">   
            <Alert alert={alert}/>
            <TextForm showAlert={showAlert} heading="Please enter your text" mode={Mode} toggleMode={toggleMode}/>
            {/* <About></About> */}
        </div>
        </>
    );
}


export default App;
