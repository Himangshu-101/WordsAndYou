import React, {useState} from 'react'

export default function TextForm(props){
    const [text, setText] = useState("");

    //function to convert text into lowercase/uppercase
    const convertToLower = ()=>{
        // console.log("Uppercase was clicked" + " " + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text was transformed to uppercase", "success");
    }

    const convertToUpper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text was transformed to lowercase", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }

    const handleClickClear = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text was cleared", "success");
    }

    //function to remove extra spaces
    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces were removed", "success");
    }


    //Some bug is there in Copy Text function

    //function to copy text
    // const copyText = () =>{
    //     var text = document.getElementById("myBox");
    //     text.select();
    //     text.setSelectionRange(0, 9999);
    //     navigator.clipboard.writeText(text.value);
    //     props.showAlert("Copied to Clipboard");
    // }

    // text = newText;                  Wrong way to change texts
    return(
        <>
        <div className='container'>
            <h1 className={`text-${props.mode === 'light'?'dark':'light'}`} style={{WebkitUserSelect:'none', textAlign:'center', margin:'1em'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'?'grey':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={convertToUpper}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={convertToLower}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClickClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            {/* <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button> */}
        </div>
        <div className='container my-3' style={{WebkitUserSelect:'none'}}>
            <h3 className={`text-${props.mode === 'light'?'dark':'light'}`}>Your text summary</h3>
            <p className={`text-${props.mode === 'light'?'dark':'light'}`}>{text.split(" ").length} words and {text.length} characters</p>
            <p className={`text-${props.mode === 'light'?'dark':'light'}`}>{0.008* text.split(" ").length}Minutes read</p>
            <h3 className={`text-${props.mode === 'light'?'dark':'light'}`}>Preview</h3>
            <p className={`text-${props.mode === 'light'?'dark':'light'}`}>{text}</p>
        </div>
        </>
    )
}