import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState('');
    const onChange = (event) => {

        setText(event.target.value);
    }
    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = () => {
        setText('');
    }
    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const clearSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }
    // const firstUpperCase = () => {

    //     let Text = text.split(' ').filter((element) =>{return element.charAt(0).toUpperCase + element.slice(1).toLowerCase  });
    //     setText(Text);
    // }
    return (
        <>
            <div>
                <div className="mb- 3 " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <label htmlFor="my-box" className="form-label  my-9"> <h3>Text Area - let allow to Analze your text</h3></label>
                    <textarea className="form-control" id="myBox" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#4f81a9', color: props.mode === 'light' ? 'black' : 'white' }} onChange={onChange} rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={upperCase}>Ccnvert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={lowerCase}>Ccnvert to lowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={clearText}>Clear txt</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={copyText}>Copy txt</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={clearSpace}>Clear Extra Spaces</button>
                {/* <button disabled = {text.length===0} className="btn btn-primary mx-1" onClick={firstUpperCase}>first UpperCase</button> */}


            </div>
            <h2 className='my-2'>Summary of Text</h2>
            <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words, {text.length} Characters</p>
            <p>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
            <h3>Preview of Enter text</h3>
            <p>{text.length > 0 ? text : 'Enter text in the above area to preview'}</p>
        </>
    )
}