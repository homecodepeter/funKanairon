import React from 'react'

const Middle = () => {
    const img = "https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg"
    const img2 = "https://www.murhotels.com/cache/40/b3/40b3566310d686be665d9775f59ca9cd.jpg"
    const img3 = "http://www.hotelcarina.com.tr/images/slider-main1.jpg"
  return (
    <div className='w-[100%] h-auto pb-14'>
        <div className='w-[80%] m-auto h-[400px] mt-5 relative pt-10 flex justify-between'>
            <div className='img  z-20 mt-8'>
            <div className='w-[400px] h-[300px] z-0 absolute rounded-md bg-slate-100'></div>
             <img src={img} alt='' 
             className='w-[400px] h-[300px] rotate-45 rounded-md'
             />
            </div>
            <div className=''>
            <img src={img2} alt='' 
             className='w-[400px] h-[300px]  rounded-md'
             />
            </div>
        </div>
        <div className='w-[80%] h-[340px] bg-slate-400 rounded-md  m-auto mt-[5em]'>
          <img src={img3} alt='' 
          className='rounded-md w-[100%] h-[100%]'
          />
        </div>
    </div>
  )
}

export default Middle