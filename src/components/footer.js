import React from 'react'

const Footer = () => {
  return (
    <div className='mt-6'>
      <div className='border-1 flex justify-around items-center border-t-2 border-gray-200 border-t-gray-100 h-[40px] w-[100%]'>
      <label className='text-orange-400 ml-7 flex'>Fun<h3 className='text-white font-semibold'>Kanairo</h3></label>
     <div className='flex items-center'>
      <i className="fa-solid fa-copyright text-white"></i>
      <h3 className='text-white ml-2 font-semibold'>copyright</h3>
     </div>
      </div>
    </div>
  )
}

export default Footer