import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import MainData from './MainData'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainData/>
        <Footer/>
      </BrowserRouter>
    </>)
}

export default App