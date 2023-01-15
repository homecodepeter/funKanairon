import React from 'react'
import { malls } from './api'

const Malls = () => {
    const img = "https://i0.wp.com/nairobifashionhub.co.ke/wp-content/uploads/2018/01/Nairobi-Fashion-Hub-shopping-mall-kenya-Top-20.jpg?fit=870%2C481&ssl=1"
    const img1 = "https://fastly.4sqi.net/img/general/600x600/515066643_ggHfBvvfINCCTFCT2b6l6-MBj5zOOHYfnkfrTmXznyA.jpg"
  return (
    <div className='w-[100%] pt-4 pb-4 h-[auto] bg-slate-200'>
        <div className='w-[80%] md:h-[350px] md:flex rounded-md bg-black m-auto mt-5 mb-6'>
            <h3 className='font-semibold pt-8 md:md:text-[43px] p-4 text-orange-400 md:w-[400px]'>Your Welcome To Most Popular Malls In Kenya</h3>
          <img src={img} alt='' className='w-[280px] hidden xl:block pt-5 h-[300px] rounded-md' />
          <img src={img1} alt='' className='w-[280px] m-auto md:m-2 h-[200px] md:mr-3 pb-4 md:ml-4 pt-5 xl:h-[300px] rounded-md' />
        </div>
    {malls.map(res => (
        <div className='m-auto w-[80%]  p-2 rounded-md bg-white mb-4' key={res.id}>
         <div className='grid grid-cols-2'>
         <img src={res.image[0]} alt='' className='w-[470px] h-[160px] md:h-[400px] rounded-md m-auto mb-4' />
         <img src={res.image[1]} alt='' className='w-[470px] h-[160px] md:h-[400px] rounded-md m-auto mb-4' />
         <img src={res.image[2]} alt='' className='w-[470px] h-[160px] md:h-[400px] rounded-md m-auto mb-4' />
         {res.image[3] && <img src={res.image[3]} alt='' className='w-[470px] h-[160px] md:h-[400px] rounded-md m-auto mb-4' />}
         </div>
         <div>
             <p><a href={res.location}>More</a></p>
         <h2 className='font-semibold'>{res.name}</h2>
         <p className='font-semibold text-slate-500 space-x-2 space-y-3'>
         <i className="fa-sharp fa-solid fa-location-dot mr-2"></i>
         kenya nairobi.....
         </p>
         <div className='text-[#FFBF00] flex items-center'>
         <h5 className='text-black mr-2 font-semibold'>{res.rating}</h5>
         <i className="fa-sharp fa-solid fa-star mr-1"></i>
         <i className="fa-sharp fa-solid fa-star mr-1"></i>
         <i className="fa-sharp fa-solid fa-star mr-1"></i>
         <i className="fa-solid fa-star-half-stroke"></i>
         <h6 className='text-blue-400 ml-2'>{res.views}</h6>
         </div>
         </div>
        </div>
         ))}
     </div>
  )
}

export default Malls