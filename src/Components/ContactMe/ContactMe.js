import React, {useState} from 'react'
import './ContactMe.css'

function ContactMe() {

  const [inputField , setInputField] = useState({
    name: '',
    phone: '',
    gmail: '',
    message: ''
})

const inputsHandler = (e) =>{
    setInputField( {[e.target.name]: e.target.value} )
}

const submitButton = () =>{
    alert("Name "+inputField.name)
}

  return (
    <div className='section'>
    <div className='aboutme-section'>
        <h2 className='heading'>CONTACT ME</h2><br/>
        <div>
            <input 
            type="text" 
            name="name" 
            onChange={inputsHandler} 
            placeholder="Enter Your  Name" 
            value={inputField.name}/>

            <br/>

            <input 
            type="text" 
            name="phone" 
            onChange={inputsHandler} 
            placeholder="Enter Your Phone Number" 
            value={inputField.phone}/>

            <br/>

            <input 
            type="gmail" 
            name="gmail" 
            onChange={inputsHandler} 
            placeholder="Enter Your  Gmail" 
            value={inputField.gmail}/>

            <br/>

            <input  className='message'
            type="message" 
            name="message" 
            onChange={inputsHandler} 
            placeholder="Enter Your  Message" 
            value={inputField.message}/>

            <br/>

            <button onClick={submitButton}>Submit Now</button>
        </div>
    </div>   
    </div> 
  )
}

export default ContactMe