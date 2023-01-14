import React from 'react'
import { hotals } from './hotal'

const Hotels = () => {
  return (
    <div className='overflow-auto w-[100%] scrollbar-hide pt-4 pb-4 h-[100vh]'>
    {hotals.map(res => (
        <div className='m-auto w-[480px] p-2 rounded-md bg-white mb-4' key={res.id}>
         <div className='grid grid-cols-2'>
         <img src={res.image[0]} alt='' className='w-[220px] h-[200px] rounded-md m-auto mb-4' />
         <img src={res.image[1]} alt='' className='w-[220px] h-[200px] rounded-md m-auto mb-4' />
         <img src={res.image[2]} alt='' className='w-[220px] h-[200px] rounded-md m-auto mb-4' />
         {res.image[3] && <img src={res.image[3]} alt='' className='w-[220px] h-[200px] rounded-md m-auto mb-4' />}
         </div>
         <div>
             <p><a href={res.location}>More</a></p>
         <h2 className='font-semibold'>{res.name}</h2>
         <p className='font-semibold text-slate-500 space-x-2 space-y-3'>
         <i className="fa-sharp fa-solid fa-location-dot mr-2"></i>
         kenya nairobi.....
         </p>
         <p className='text-[#FFBF00] flex items-center'>
         <h5 className='text-black mr-2 font-semibold'>{res.rating}</h5>
         <i class="fa-sharp fa-solid fa-star mr-1"></i>
         <i class="fa-sharp fa-solid fa-star mr-1"></i>
         <i class="fa-sharp fa-solid fa-star mr-1"></i>
         <i class="fa-solid fa-star-half-stroke"></i>
         <h6 className='text-blue-400 ml-2'>{res.views}</h6>
         </p>
         </div>
        </div>
         ))}
     </div>
  )
}

export default Hotels