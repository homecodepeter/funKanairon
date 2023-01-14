import React, { useState } from 'react'

const Header = () => {
    const img = "https://hauzisha.co.ke/blog/wp-content/uploads/2021/12/pexels-pixabay-54581.jpg"
    const [commet, setCommet] = useState([
      {
        img: "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXJkZWR8ZW58MHx8MHx8&w=1000&q=80"
      },
      {
        img: "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2015/11/successful-black-woman_Black-Enterprise.jpg"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3aO9GL4b-TiWuR3NpwMztMljQO1yGNYDc3droBcD5BwZxdXOD2HXVUXX6l4CDE3s-Sk&usqp=CAU"
      }, 
      {
         img: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
      }
    ])
  return (
    <div className='w-[100%] relative'>
        <div className='w-[70%] rounded-md z-10 h-[300px] relative bg-[#fff] m-auto pt-6 mb-5 flex'>
            <div className='w-[440px]'>
             <h3 className='font-bold text-[40px] p-2 text-slate-500'>Kenyans Are good people who make good places.</h3>
             <p className='text-green-500 flex p-2 font-bold'>Fun<h3 className='text-black font-semibold'>Kanairo</h3></p>
             <div className='w-[200px] h-[200px] bg-slate-500 absolute z-0 top-14 -rotate-12 right-5 rounded-md'></div>
             <div className='w-[200px] h-[200px] bg-[#ccc] absolute z-0 top-14 right-[20em] rotate-12 rounded-md'></div>
            </div>
            <div className='z-40'>
           <img src={img} alt='' className='rounded-md w-[340px]' />
            </div>
        </div>
        <div className="flex justify-around">

        <div className='w-[500px] h-[300px] right-8 rounded-md mb-4 ab'>
         <img className='rounded-md' src='https://www.wantedinafrica.com/i/preview/storage/uploads/2019/09/Shopping_malls_in_Nairobi.jpg' alt='' />
        </div>
        <div className='w-[400px] h-[200px] right-8 bg-white rounded-md mb-4 flex items-center'>
           <div className='w-[300px]'>
            <h2 className='text-[20px] text-center font-semibold'>Daily Visit</h2>
            <p className='text-[60px] text-center'>1.5K</p>
           </div>
           <div>
          <h3 className='text-[20px] font-semibold'>Some of them Really Leave Some Good Commet.</h3>
          <div className="flex mt-3">
           {commet.map(res => (
            <div key={res.img}>
              <img src={res.img} alt="" className='w-[30px] h-[30px] rounded-full' />
              </div>
           ))}
           </div>
           </div>

        </div>
        </div>
    </div>
  )
}

export default Header