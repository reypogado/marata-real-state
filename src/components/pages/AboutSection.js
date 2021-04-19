import React from 'react'
import '../css/AboutSection.css'
import girl1 from '../../assets/girl1.png'

export default function AboutSection() {
    return (
        <div className={'about-main-section'} id={'about'}>
            <div className={'about-section-content'}>
                 <div className={'about-me'}>
                    <h1>Marata</h1>
                 </div>
                 <div className={'about-my-image'}>
                    <img src={girl1}/>
                 </div>
            </div>
        </div>
    )
}
