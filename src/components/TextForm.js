import React, {useState} from 'react'


export default function TextForm(props) {

const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
}

const handleLowClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
}

const handleClearClick = () => {
    let newText = ''
    setText(newText)
}

const handleCopyClick = () => {
    const textarea = document.getElementById("myBox")
    let newText = text
    textarea.select()
    navigator.clipboard.writeText(newText);
    console.log("Copied to Clipboard.");   
}

const handleInvClick = () => {
    let newText = text
    let result = ''
    for(let i = 0; i < newText.length; i++) {
        if(i % 2 === 0) {
            result += newText[i].toUpperCase()
        }
        else {
            result += newText[i].toLowerCase()
        }
    }
    setText(result)
    // console.log("Copied to Clipboard.");   
}


const handleOnChange = (event) => {
    setText(event.target.value)
}

const [text, setText] = useState('')

  return (
    <>
    <div className='container'>
        <h4>{props.heading}</h4>
            <div className="mb-3">
                <textarea class="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
	        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-secondary mx-2 my-2" onClick={handleLowClick}>Lowercase</button>
            <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handleInvClick}>Inverse Case</button>
            <button className="btn btn-outline-success mx-2 my-2" onClick={handleCopyClick}>Copy</button>
    </div>

    <div className="container">
        <h3>Your text summary: </h3>
        <p>Your text have <b>{text.split(" ").length} words</b> and <b>{text.length} characters</b>.</p>
        <p>On average, this text can be read in: {0.008 * text.split(" ").length} minutes(approx).</p>
        <h3>Preview</h3>
        <p small id='preview'>{text.trim() ? text : <i>No text entered</i>}</p>
    </div>
    </>
  )
}