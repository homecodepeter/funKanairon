import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga';

const Nevbar = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
     ReactGA.pageview(window.location.pathname);
  }, [])

  return (
    <div className='bg-black'>
           <div className='block h-[80px] flex justify-around items-center md:hidden'> 
           <label className='text-green-500 ml-7 flex'>Fun<h3 className='text-white font-semibold'>Kanairo</h3></label>
           <i onClick={() => setShow(true)} className="fa-solid fa-bars text-[20px] text-white"></i>
           </div>
           {/* {show && ( */}
        <div className={`${show ? "h-[300px] block items-center justify-center  w-[100%] overflow-hidden grid fixed top-0 bg-slate-500" : "hidden" } md:relative  md:bg-black md:h-[60px]  md:flex items-center justify-center md:justify-between z-50`}>
         <i onClick={() => setShow(false)} className="fa-solid fa-xmark md:hidden text-[30px] text-orange-400"></i>
            <ul className='h-[140px] grid justify-center md:flex items-center'>
            <label className='text-green-500 ml-7 flex'>Fun<h3 className='text-white font-semibold'>Kanairo</h3></label>
                <li className='text-white ml-5 md:ml-14'><Link to="/">Home</Link></li>
                <li className='text-white ml-5'><Link to="/malls">Malls</Link></li>
                <li className='text-white ml-5'><Link to="/hotels">Hotels</Link></li>
            </ul>
            <button className='text-green-400 mr-7 ml-4 border-2 pr-12 pl-12 rounded-md pt-2 pb-2 border-emerald-500'><Link to="/contect">CONTACT</Link></button>
        </div>
           {/* )} */}
    </div>
  )
}

export default Nevbar