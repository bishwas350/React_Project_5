import React from 'react'
import Header from '../layout/Header'
import Banner from '../layout/Banner'
import Guarantee from '../layout/Guarantee'
import PromotionPart from '../layout/PromotionPart'
import Product_Part from '../layout/Product_Part'
import Clock from '../layout/Clock'
import SpacialPart from '../layout/SpacialPart'
import Footer from '../layout/Footer'

const Home = () => {
  return (
    <>
        
        <Banner/>
        <Guarantee/>
        <PromotionPart/>
        <Product_Part/>
        <Clock/>
        <SpacialPart/>
    </>
  )
}

export default Home