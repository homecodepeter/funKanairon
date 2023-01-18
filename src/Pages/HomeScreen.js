import React from 'react'
import { malls } from './api'

const HomeScreen = () => {

  return (
    <div className='w-[90%] overflow-x-hidden mdl:w-[85%] lg:w-[80%] grid m-auto lg:grid-cols-2 xls:grid-cols-3 pt-4 pb-4'>
        {malls.map(res => (
       <div className='m-auto md:w-[700px] md:gap-3 lg:w-[480px] p-2 rounded-md bg-white mb-4' key={res.id}>
        <div className='grid md:grid-cols-2'>
        <img src={res.image[0]} alt='' 
        className='lg:w-[220px] w-[300px] h-[230px] md:block hidden lg:h-[200px] rounded-md m-auto mb-4' />
        <img src={res.image[1]} alt='' 
        className='lg:w-[220px] w-[300px] h-[230px] lg:h-[200px] rounded-md m-auto mb-4' />
        <img src={res.image[2]} alt='' 
        className='lg:w-[220px] hidden lg:h-[200px] rounded-md m-auto mb-4' />
        {res.image[3] && <img src={res.image[3]} alt='' className='lg:w-[220px] hidden lg:h-[200px] rounded-md m-auto mb-4' />}
        </div>
        <div>
            <p><a href={res.location}>More</a></p>
        <h2 className='font-semibold'>{res.name}</h2>
        <p className='font-semibold text-slate-500 space-x-2 space-y-3'>
        <i className="fa-sharp fa-solid fa-location-dot mr-2"></i>
        kenya nairobi.....
        </p>
        <div className='text-[#FFBF00] flex items-center'>
        <span className='text-black mr-2 font-semibold'>{res.rating}</span>
        <i className="fa-sharp fa-solid fa-star mr-1"></i>
        <i className="fa-sharp fa-solid fa-star mr-1"></i>
        <i className="fa-sharp fa-solid fa-star mr-1"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
        <span className='text-blue-400 ml-2'>{res.views}</span>
        </div>
        </div>
       </div>
        ))}
    </div>
  )
}

export default HomeScreen