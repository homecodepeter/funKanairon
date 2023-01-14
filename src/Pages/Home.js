import React from 'react'
import Footer from '../components/footer'
import Header from '../components/Header'
import Middle from '../components/Middle'
import Contect from './Contect'
import HomeScreen from './HomeScreen'
import Hotels from './Hotels'


const Home = () => {
  return (
    <div className='bg-black'>
    <div>
     <div>
        <Header />
     </div>

    <div className='bg-black flex'>
     <div className='w-[320px] flex items-center justify-center'>
    <h1 className='text-white text-[30px]'>Ads on this side</h1>
     </div>
     <div className='flex-1'>
         <HomeScreen />
     </div>
     <div className='w-[320px] flex items-center justify-center'>
    <h2 className='text-white text-[30px]'>Another add maybe</h2>
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