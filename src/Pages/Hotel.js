import React from 'react'
import { hotals } from './hotal'

const Hotel = () => {
    const img = "https://images.trvl-media.com/lodging/3000000/2810000/2806800/2806792/e6b9af56.jpg?impolicy=resizecrop&rw=670&ra=fit"
    const img1 = "https://image-tc.galaxy.tf/wijpeg-870jz1zi2k2tqxvlnxc8c77sc/nsh-garden-suite-106.jpg?width=1600&height=1066"
  return (
    <div className='w-[100%] pt-4 pb-4 h-[auto] bg-slate-200'>
        <div className='w-[80%] md:h-[350px] md:flex rounded-md bg-black m-auto mt-5 mb-6'>
            <h3 className='font-semibold pt-8 md:md:text-[43px] p-4 text-green-400 md:w-[400px]'>Your Welcome To Most Popular Malls In Kenya</h3>
          <img src={img} alt='' className='w-[280px] hidden xl:block pt-5 h-[300px] rounded-md' />
          <img src={img1} alt='' className='w-[280px] m-auto md:m-2 h-[200px] md:mr-3 pb-4 md:ml-4 pt-5 xl:h-[300px] rounded-md' />
        </div>
    {hotals.map(res => (
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

export default Hotel