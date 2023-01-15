import React from 'react'

const UsersView = () => {
    const img = "https://i0.wp.com/nairobifashionhub.co.ke/wp-content/uploads/2018/01/Nairobi-Fashion-Hub-shopping-mall-kenya-Top-20.jpg?fit=870%2C481&ssl=1"
    const img1 = "https://fastly.4sqi.net/img/general/600x600/515066643_ggHfBvvfINCCTFCT2b6l6-MBj5zOOHYfnkfrTmXznyA.jpg"
  return (
    <div className='w-[80%] md:h-[350px] md:flex rounded-md bg-black m-auto mt-5 mb-6'>
    <h3 className='font-semibold pt-8 md:md:text-[43px] p-4 text-green-400 xls:text-orange-400 md:w-[400px]'>Your Welcome To Most Popular Malls In Kenya</h3>
  <img src={img} alt='' className='w-[280px] xls:w-[600px] hidden xl:block pt-5 h-[300px] rounded-md' />
  <img src={img1} alt='' className='w-[280px] xls:w-[600px] m-auto md:m-2 h-[200px] md:mr-3 pb-4 md:ml-4 pt-5 xl:h-[300px] rounded-md' />
</div>
  )
}

export default UsersView