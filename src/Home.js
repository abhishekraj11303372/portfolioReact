import React from 'react'
import './Home.css'
import photo from './photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faFacebook,faEnvelope)

export default function Home() {
  return (
    <div className="container">
        
            
        <div className="left_container">
           <div className='logo'><h1><FontAwesomeIcon icon="fa-brands fa-accusoft" /></h1></div>
            <div className='intro'> Hi, I am
            <h1>Abhishek Raj</h1>
                <div className='designation'>Senior Engineer - Product Development</div>
                <div className='links'>
                <a href="mailto:abhishekraj1130@gmail.com"><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
                <a href="https://github.com/abhishekraj11303372" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                <a href="https://www.linkedin.com/in/abhishek-raj-08784350/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                <a href="https://www.facebook.com/abhishekinvisible" target="_blank"><FontAwesomeIcon icon="fa-brands fa-facebook-square" /></a>
                </div>
            </div>
            <div className='slant'>
                
            </div>
        </div>
        <div className='right_container'> 
        
            <div className='navbar' >
                <button className='nav_a'>About me</button>
                <button className='nav_a'>Skills</button>
                <button className='nav_a'>Portfolio</button>
                <button className='nav_b'>CONTACT ME</button>
            </div>
            <img className='my_image' src={photo} alt='My Photo'/>
            
        </div>
  </div>
  )
}
