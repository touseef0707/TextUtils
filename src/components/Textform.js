import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }

    const handleExtractEmailClick = () => {
        let emailArray = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        if(emailArray != null){
            setEmails(emailArray);
        } else {
            setEmails([]);
        }
        props.showAlert('Extracted Emails', 'success');
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }

    const handleClearClick = () => {
        setText('');
        setEmails([]);
        props.showAlert('Text Cleared', 'success');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied', 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra Spaces Removed', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        let words = event.target.value.split(/\s+/);
        setWordsLength(words.filter((element) => {return element.length !== 0}).length);
    }

    const [text, setText] = useState('');
    const [wordsLength, setWordsLength] = useState(0);
    const [emails, setEmails] = useState([]);


    let style = {
        backgroundColor: '#ffffff',
        color: '#000000'
    }

    if (props.mode === 'dark') {
        style = {
            backgroundColor: '#141414',
            color: '#ffffff'
        }
    }
    else if (props.mode === 'blue') {
        style = {
            backgroundColor: '#042430',
            color: '#ffffff'
        }
    }
    else if (props.mode === 'green') {
        style = {
            backgroundColor: '#043025',
            color: '#ffffff'
        }
    }
    else if (props.mode === 'grey') {
        style = {
            backgroundColor: '#43484a',
            color: '#ffffff'
        }
    }
    if (props.mode === 'light'){
        style = {
            backgroundColor: '#ffffff',
            color: '#000000'
        }
    }

    
    
    return (
        <div>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-2">
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={style}
                    id="myBox" rows="3"></textarea>
                </div>

                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtractEmailClick}>Extract Email</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div> 
            <div className="container my-2">
                <h1>Your Text Summary</h1>
                <p>Characters: {text.length}</p>
                <p>Words: {wordsLength}</p>
                <p>Reading Time: {0.008 * wordsLength} minutes</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Enter your text to preview it here'}</p>
                {emails.length > 0 && (
                        <>
                            <h3>Extracted Emails</h3>
                            <p>{emails.join(", ")}</p>
                        </>
                )}
            </div>
        </div>
  )
}
