import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="/about" className="image avatar"><img src={avatar} alt="" /> </a>
                    <h1><strong>Clint Earl</strong>, I am a <br />
                    Full-Stack Developer. I'm here to<br />
                    show off some of my projects.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
