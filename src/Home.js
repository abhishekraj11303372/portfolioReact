import React,{ Suspense, useState } from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import './Home.css'
import photo from './photo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faFacebook,faEnvelope)

const translationsEn = {
    welcome: "Hi , I am",
    "sample-text": " <bold>Abhishek Raj</bold>",
    changed: "Senior Engnieer - Product Development",
    aboutButton: "About Me",
    skillsButton:"Skills",
    portfolioButton:"Portfolio",
    contactButton:"Contact Me",
    optionEn:"English",
    optionJp:"Japanese",
  };
  
  const translationsJp = {
    welcome: "こんにちは、私は",
    "sample-text": "<bold>アビシェク　レージ</bold>",
    changed: "シニアエンジニア-製品開発",
    aboutButton: "私について",
    skillsButton:"スキル",
    portfolioButton:"ポートフォリオ",
    contactButton:"私に連絡して",
    optionEn:"英語",
    optionJp:"日本語",
  };

  i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      jp: { translation: translationsJp },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });


export default function Home() {

    const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setCount((previousCount) => previousCount + 1);
  };

  return (
<Suspense fallback={"Loading..."}>
    <div className="container">
        
            
        <div className="left_container">
           <div className='logo'><h1><FontAwesomeIcon icon="fa-brands fa-accusoft" /></h1></div>
            <div className='intro'> 
                <span>
                {t("welcome")}
                </span>
                <div className='name'>
                  <Trans components={{ bold: <strong />, italic: <i /> }}>
              sample-text
            </Trans>
            </div>
                
                <div className='designation'><p>{t("changed")}</p></div>
                <div className='links'>
                <a href="mailto:abhishekraj1130@gmail.com"><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
                <a href="https://github.com/abhishekraj11303372" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                <a href="https://www.linkedin.com/in/abhishek-raj-08784350/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                <a href="https://www.facebook.com/abhishekinvisible" target="_blank"><FontAwesomeIcon icon="fa-brands fa-facebook-square" /></a>
                <select name="language" onChange={onChange}>
            <option value="en">{t("optionEn")}</option>
            <option value="jp">{t("optionJp")}</option>
          </select>
                </div>
            </div>
            <div className='slant'>
                
            </div>
        </div>
        <div className='right_container'> 
        
            <div className='navbar' >
                <button className='nav_a'>{t("aboutButton")}</button>
                <button className='nav_a'>{t("skillsButton")}</button>
                <button className='nav_a'>{t("portfolioButton")}</button>
                <button className='nav_a'>{t("contactButton")}</button>
            </div>
            <img className='my_image' src={photo} alt='My Photo'/>
            
        </div>
  </div>
</Suspense>
  )
}
