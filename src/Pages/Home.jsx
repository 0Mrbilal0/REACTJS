import { Component } from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Contact from '../components/contact'
import About from '../components/about'
import Facts from '../components/facts'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Services from '../components/services'
import Testimoniaux from '../components/testimoniaux'
import Footer from '../components/footer'

const dataTypedItem = "Designer, Developer, Freelancer, Photographer, Bilal"

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Hero techs={dataTypedItem} />
                <main id='main'>
                    <About />
                    <Facts />
                    <Skills />
                    <Portfolio />
                    <Services />
                    <Testimoniaux />
                    <Contact />
                </main>
                <Footer />
            </>
        )
    }
}

export default Home