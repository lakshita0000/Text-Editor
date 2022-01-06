import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=> {
console.log("Uppercase was clicked" + text);
let newText= text.toUpperCase();
setText(newText);
    }
    const handleLowClick = ()=> {
        console.log("Lowercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
            }
            const handleClearClick = ()=> {
                console.log("ClearText was clicked" + text);
                let newText= '';
                setText(newText);
                    }
                        const capitalFirstLetter = ()=>{
                            let words = text.split(" ")
                           let uppercaseword = ' ';
                            words.forEach(element => {
                               uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
                            });
                            setText(uppercaseword)
                        }
                        const handleCopy = ()=>{
                            console.log("I am copy");
                            var text=document.getElementById("mybox")
                            text.select()
                            navigator.clipboard.writeText(text.value)
                        }
                        const handleExtraSpaces = ()=>{

                            let newText=text.split(/[ ]+/)
                            setText(newText.join(" "))
                        }
                        
                        
                       
    const handleOnChange = (event)=> {
        console.log("handleOnChange was clicked");
        setText(event.target.value);
            }
            
    const [text, setText] = useState("Enter text here");
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
              <div className="mb-3">
  
        <textarea className="form-control" value={text} id="mybox" rows="8" onChange={handleOnChange}></textarea>
          </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Covert to Lowecase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={capitalFirstLetter}>Capitalize character of every word</button>
           
        </div>
        <div className="container my-3" >
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
             <p>{0.08* text.split(" ").length} Minutes read</p>
 
                   <h2>Preview</h2>
                     <p>{text}</p>

                       </div>
                  </>
    )
}
