import React from 'react'
import './Home.css'
import photo from './photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, fabrands ,faaccusoft } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee , faEnvelope, faMailBulk, faSquare, faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee,faMailBulk, faEnvelope)

export default function Home() {
  return (
    <div className="container">
        
            
        <div className="left_container">
           <div className='logo'><h1><FontAwesomeIcon icon="fa-brands fa-accusoft" /></h1></div>
            <div className='intro'> Hi, I am
            <h1>Abhishek Raj</h1>
                <div className='designation'>Senior Engineer - Product Development</div>
                <div className='links'>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                <FontAwesomeIcon icon="fa-brands fa-github" />
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </div>
            </div>
            <div className='slant'>
                hi
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
