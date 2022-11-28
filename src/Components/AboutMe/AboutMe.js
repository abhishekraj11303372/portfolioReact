import React from 'react'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className='section' id='AboutMe'>
        <div className='aboutme-section'>
            <h2 className='heading'>ABOUT ME</h2><br/>
            <p className='description'>I am always curious to learn more. Skilled in .NET Framework, C#, HTML,CSS, Core Java, Angular, Clojure, Microsoft Powerapps and Powerautomate(SharePoint). 
            Learning Japanese</p><br/>  
            <h5>| Explore |</h5><br/>
            <h5 className='icon-br'>―― \\V// ――</h5><br/>
            <div className='design'>
              <h3>DESIGN</h3>
              <p>I can design the site based on your needs and suggestions. I can also design the site from the scratch and consult you during the job.</p>
            </div>
            <div className='design'>
              <h3>DEVELOPMENT</h3>
              <p>I can design the site based on your needs and suggestions. I can also design the site from the scratch and consult you during the job.</p>
            </div>
            <div className='design'>
              <h3>MAINTENANCE</h3>
              <p>I can design the site based on your needs and suggestions. I can also design the site from the scratch and consult you during the job.</p>
            </div><br/>
            <h5 className='icon-br'>―― \\V// ――</h5><br/>
        </div>
    </div>
  )
}

export default AboutMe