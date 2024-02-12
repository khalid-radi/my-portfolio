import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Certificats from './components/certificats/Certificats'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Certificats/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App