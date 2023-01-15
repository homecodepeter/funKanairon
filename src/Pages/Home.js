import React from 'react'
import Footer from '../components/footer'
import Header from '../components/Header'
import Middle from '../components/Middle'
import Contect from './Contect'
import HomeScreen from './HomeScreen'
import Hotels from './Hotels'


const Home = () => {
  return (
    <div className='bg-black overflow-x-hidden'>
    <div>
     <div>
        <Header />
     </div>

    <div className='bg-black w-[100%] overflow-x-hidden md:flex'>
     <div className='md:flex-1 w-[100%] overflow-x-hidden m-auto'>
         <HomeScreen />
         <Hotels />
     </div>
    </div>
    </div>
    <div>
     <Middle />
     <div className='w-[80%] m-auto'>
     <Contect />
     </div>
    </div>
   <Footer />
    </div>
  )
}

export default Home