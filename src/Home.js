import React from 'react'
import './Home.css'
import photo from './photo.png'

export default function Home() {
  return (
    <div className="container">
        <div className="left_container">

             Hi, I am 
            <h1>Abhishek Raj</h1>
        </div>
        <div className='right_container'> 
            <h3>About me Skills  Portfolio CONTACT ME</h3>
            <img className='my_image' src={photo} />
        </div>
  </div>
  )
}
