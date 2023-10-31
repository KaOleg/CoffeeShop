import React from 'react'
import Menu from '../components/Menu'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import backGround from "../images/bg.png"
import coffeeCupImg from "../images/coffeeCup.png"
function ThirdPage(props) {
  return (
    <div>
             <div className="container">
                <Menu />
            </div>
            <Header title="For your pleasure" height='260' bg={backGround}/>
            <AboutSection title="About Our Beans" image={coffeeCupImg}/>
            <Cards coffee={props.coffee}/>
            <Footer/>
    </div>
  )
}

export default ThirdPage