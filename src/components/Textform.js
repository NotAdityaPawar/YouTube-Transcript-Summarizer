import React, { useState } from 'react'
import './styles.css'

export default function Textform(props) {
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const handlecopy = () => {

        let text = document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied!", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Cleared!", "success")
    }
    const handlecleartext = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }
    
    const [text, setText] = useState('');
    let noofwords = text.split(" ").length - 1;
    return (
        <>
            <div>
                    <div className="form-group container col-md-12" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    <form className="form-inline " >

                        <input type="text"   className="form-control inlinestyle border border-warning ml-40 mb-2 col-md-6 " placeholder="Paste your Youtube Video link here" id="videolink" ></input>
                    
                        <button type="submit" class="btn btn-warning mb-2">Search</button>
                </form>

                    </div>

                <div className="form-group container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    <h3>{props.heading}</h3>
    


                    <div className="mb-3 textarea-container">
                        <textarea className="form-control " value={text} onChange={handleonchange} id="mybox" rows="8">

                        </textarea>
                        <button className="btn btn-primary btn-sm my-1 mx-1 " onClick={handlecopy}>Copy</button>

                    </div>
                    {/* <button className="btn btn-primary my-1 mx-1" onClick={handleupclick}>Convert to Uppercase</button> */}
                    {/* <button className="btn btn-primary my-1 mx-1" onClick={handleloclick}> Convert to Lowercase</button> */}
                    {/* <button className="btn btn-primary my-1 mx-1" onClick={handlecopy}> Copy</button> */}
                    <button className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}> Remove Extra spaces</button>
                    <button className="btn btn-primary my-1 mx-1" onClick={handlecleartext}>Clear Text</button>
                </div>
                <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    <h3>Your Text Summary</h3>

                    <p>{noofwords} words and {text.length} characters</p>
                    <p>{0.008 * noofwords} Minutes reading time</p>
                    <h3>Preview</h3>

                    <p>{text.length === 0 ? "Enter some text to preview it here" : text}</p>

                </div>

            </div>
        </>

    )
}
