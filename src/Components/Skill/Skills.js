import React from 'react'
import './Skills.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDatabase, faFilePowerpoint, faFileExcel, faFileWord } from '@fortawesome/free-solid-svg-icons'
library.add(faDatabase,faFilePowerpoint,faFileExcel,faFileWord)

function Skills() {
  return (
    <div className='section' id='Skills'>
        <div className='skill-section'>
            <h2 className='heading'>SKILLS</h2>
            <div className='using'>
              <h3>USING NOW:</h3><br />
              <div className='skill'>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "orange"}}><FontAwesomeIcon icon="fa-brands fa-html5" /></div>
                <div className='skill-label'>HTML 5</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "RGB(0,100,100)"}}><FontAwesomeIcon icon="fa-brands fa-css3-alt" /></div>
                <div className='skill-label'>CSS</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "pink"}}><FontAwesomeIcon icon="fa-brands fa-sass" /></div>
                <div className='skill-label'>SASS</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "RGB(100,100,100)"}}><FontAwesomeIcon icon="fa-brands fa-js" /></div>
                <div className='skill-label'>Javascript</div>
              </div>
              </div>
              <div className='skill'>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "purple"}}><FontAwesomeIcon icon="fa-brands fa-bootstrap" /></div>
                <div className='skill-label'>Bootstrap</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "red"}}><FontAwesomeIcon icon="fa-brands fa-git-alt" /></div>
                <div className='skill-label'>Git</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "red"}}><FontAwesomeIcon icon="fa-brands fa-angular" /></div>
                <div className='skill-label'>Angular</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "green"}}><FontAwesomeIcon icon="fa-solid fa-database" /></div>
                <div className='skill-label'>SQL Server</div>
              </div>
              </div>
            </div>
            <div className='using'>
              <h3 className='tags'>LEARNING:</h3><br />
              <div className='skill'>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "green"}}><FontAwesomeIcon icon="fa-brands fa-node-js" /></div>
                <div className='skill-label'>Node Js</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "orange"}}><FontAwesomeIcon icon="fa-brands fa-aws" /></div>
                <div className='skill-label'>AWS</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "lightblue"}}><FontAwesomeIcon icon="fa-brands fa-microsoft" /></div>
                <div className='skill-label'>Powerapps</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "skyblue"}}><FontAwesomeIcon icon="fa-brands fa-microsoft" /></div>
                <div className='skill-label'>Powerautomate</div>
              </div>
              </div>
            </div>
            <div className='using'>
              <h3>OTHER SKILLS:</h3><br />
              <div className='skill'>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "green"}}><FontAwesomeIcon icon="fa-sharp fa-solid fa-file-excel" /></div>
                <div className='skill-label'>Excel</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "blue"}}><FontAwesomeIcon icon="fa-solid fa-file-word" /></div>
                <div className='skill-label'>Word</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "orange"}}><FontAwesomeIcon icon="fa-sharp fa-solid fa-file-powerpoint" /></div>
                <div className='skill-label'>Powerpoint</div>
              </div>
              <div className='skill-block'>
                <div className='skill-icon' style={{color: "purple"}}><FontAwesomeIcon icon="fa-brands fa-microsoft" /></div>
                <div className='skill-label'>Sharepoint</div>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills