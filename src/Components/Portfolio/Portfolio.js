import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <div className='section'>
    <div className='aboutme-section'>
        <div className='head'><h2 className='heading'>PORTFOLIO</h2></div>
        
        <img src={require('../../Assets/images/KantanAdmin.png')} alt='KantanAdmin'/>
        <img src={require('../../Assets/images/FinancePOC.jpg')} alt='FinancePOC'/>
        <img src={require('../../Assets/images/PortfolioJP.png')} alt='PortfolioJP'/>
        <img src={require('../../Assets/images/PortfolioEng.png')} alt='PortfolioEng'/>
        <img src={require('../../Assets/images/vr.png')} alt='vr'/>
        <img src={require('../../Assets/images/CssEarth.png')} alt='CssEarth'/>
    </div>   
    </div>   
  )
}

export default Portfolio