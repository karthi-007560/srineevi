import React from 'react'
import Head from './Head'
import Top from './Top'
import Video from './Video'
import Product from './Product'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Review from './Review'
import Carous from './Carousel'


export default function Home() {
  return (
    <div>
      <Top/>
      <Head />  
      <Video/> 
      <About/> 
      <Carous/>
      <Product/> 
      <Service/>  
      <Review/>
      <Contact/>
    </div>
  )
}
