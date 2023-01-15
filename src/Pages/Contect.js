import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contect = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_f6uu49c', 'template_svt14zm', form.current, 'yFVdbpgs4XPVUWsmB')
        .then((result) => {
            console.log(result.text);
            console.log("Message Send")
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='md:w-[50%] overflow-hidden w-[100%] bg-slate-500 m-auto block mt-8 p-4 rounded-md'>
      <h2 className='font-semibold text-[20px] text-green-400 mb-4'>Share With Us Your Opinion</h2>
        <form ref={form} onSubmit={sendEmail} className="block">
      <label className='font-semibold text-[16px]'>Name</label>
      <input className='w-[100%] mb-4 h-[40px] bg-[#e7e6e6] border border-inherit outline-none rounded-md pl-2' type="text" name="user_name" />
      <label className='font-semibold text-[16px]'>Email</label>
      <input className='w-[100%] mb-4 h-[40px] bg-[#e7e6e6] border border-inherit outline-none rounded-md pl-2' type="email" name="user_email" />
      <label className='font-semibold text-[16px]'>Message</label>
      <textarea name="message" className='w-[100%] bg-[#e7e6e6] h-[100px] outline-none rounded-sm pl-2' />
      <input className='w-[100%] mb-4 h-[40px] bg-orange-300 font-semibold mt-5 rounded-md pl-2 cursor-pointer' type="submit" value="Send" />
    </form>
    </div>
  )
}

export default Contect