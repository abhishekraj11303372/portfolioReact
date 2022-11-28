import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <div className='section' id='Portfolio'>
    <div className='aboutme-section'>
        <div className='head'><h2 className='heading'>PORTFOLIO</h2></div>
        
        <a href='https://kantan-admin.vercel.app/'><img src={require('../../Assets/images/KantanAdmin.png')} alt='KantanAdmin'/></a>
        <a href='https://github.com/abhishekraj11303372/FinancePOC'><img src={require('../../Assets/images/FinancePOC.jpg')} alt='FinancePOC'/></a>
        <a href='https://portfolio-react-rho-one.vercel.app/'><img src={require('../../Assets/images/PortfolioJP.png')} alt='PortfolioJP'/></a>
        <a href='https://portfolio-react-rho-one.vercel.app/'><img src={require('../../Assets/images/PortfolioEng.png')} alt='PortfolioEng'/></a>
        <a href='https://vr-page-abhishekraj11303372.vercel.app/'><img src={require('../../Assets/images/vr.png')} alt='vr'/></a>
        <a href='https://cssdesignsystem.vercel.app/'></a><img src={require('../../Assets/images/CssEarth.png')} alt='CssEarth'/>
    </div>   
    </div>   
  )
}

export default Portfolio