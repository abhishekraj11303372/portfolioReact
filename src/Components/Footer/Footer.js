import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope,faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope,faAngleDoubleUp)

function Footer() {
  return (
    <div className='footer'>
        <div><a href="#top"><FontAwesomeIcon icon="fas fa-angle-double-up" /><p>BACK TO TOP</p></a></div>
        <div className='icons'>
          <FontAwesomeIcon className='icon' icon="fa-brands fa-facebook" />
          <FontAwesomeIcon className='icon' icon="fa-brands fa-instagram" />
          <FontAwesomeIcon className='icon' icon="fa-brands fa-linkedin" />
          <FontAwesomeIcon className='icon' icon="fa-solid fa-envelope" />
        </div>
        <div><b>@2022 Abhishek Raj</b> All Rights Reseved</div>
    </div>
  )
}

export default Footer