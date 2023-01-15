import React from 'react'
import UsersView from '../components/UsersView'
import { hotals } from './hotal'

const Hotel = () => {
   
  return (
    <div className='w-[100%] pt-4 pb-4 h-[auto] bg-slate-200'>
       <UsersView />
    {hotals.map(res => (
        <div className='m-auto w-[80%]  p-2 rounded-md bg-white mb-4' key={res.id}>
         <div className='grid grid-cols-2'>
         <img src={res.image[0]} alt='' className='w-[470px] xls:w-[760px] xls:h-[500px] h-[160px] md:h-[400px] rounded-md m-auto mb-4' />
         <img src={res.image[1]} alt='' className='w-[470px] xls:w-[760px] xls:h-[500px] h-[160px] md:h-[400px] rounded-md m-auto mb-4' />
         <img src={res.image[2]} alt='' className='w-[470px] xls:w-[760px] xls:h-[500px] h-[160px] md:h-[400px] rounded-md m-auto mb-4' />
         {res.image[3] && <img src={res.image[3]} alt='' className='w-[470px] xls:w-[760px] xls:h-[500px] h-[160px] md:h-[400px] rounded-md m-auto mb-4' />}
         </div>
         <div>
             <p className='xls:text-[30px]'><a href={res.location}>More</a></p>
         <h2 className='font-semibold  xls:text-[40px]'>{res.name}</h2>
         <p className='font-semibold xls:text-[30px] text-slate-500 space-x-2 space-y-3'>
         <i className="fa-sharp fa-solid fa-location-dot xls:text-[30px] mr-2"></i>
         kenya nairobi.....
         </p>
         <div className='text-[#FFBF00]  xls:text-[30px] flex items-center'>
         <h5 className='text-black mr-2  font-semibold'>{res.rating}</h5>
         <i className="fa-sharp fa-solid  ] fa-star mr-1"></i>
         <i className="fa-sharp fa-solid   fa-star mr-1"></i>
         <i className="fa-sharp fa-solid fa-star mr-1"></i>
         <i className="fa-solid fa-star-half-stroke"></i>
         <h6 className='text-blue-400  ml-2'>{res.views}</h6>
         </div>
         </div>
        </div>
         ))}
     </div>
  )
}

export default Hotel