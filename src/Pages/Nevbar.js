import React from 'react'
import { Link } from 'react-router-dom'

const Nevbar = () => {
  return (
    <div className='bg-black'>
        <div className='h-[60px] flex items-center justify-between'>
            <ul className='h-[60px] flex items-center'>
                <label className='text-green-500 ml-7 flex'>Fun<h3 className='text-white font-semibold'>Kanairo</h3></label>
                <li className='text-white ml-14'><Link to="/">Home</Link></li>
                <li className='text-white ml-5'><Link to="/malls">Malls</Link></li>
                <li className='text-white ml-5'><Link to="/about">About Us</Link></li>
                <li className='text-white ml-5'><Link to="/hotels">Hotels</Link></li>
            </ul>
            <button className='text-green-400 mr-7 border-2 pr-12 pl-12 rounded-md pt-2 pb-2 border-emerald-500'><Link to="/contect">CONTACT</Link></button>
        </div>
    </div>
  )
}

export default Nevbar