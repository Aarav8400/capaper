import React from 'react'
import Footer_Top from '../components/Footer_Top'

const Contact = () => {
  return (
    <div className='h-[100vh]'>
        <h1 className='font-bold text-2xl text-center mt-10'><span className='text-red-500'>Contact</span> Us</h1>
        <p className='text-center'>Connect with us for Best Service</p>
        <Footer_Top/>
        <div className='mt-20'>
            <form action="" className='border-gray-200 p-10 '>
                <div className='flex items-center justify-center gap-10'>
                    <input type="text" placeholder='name' className='input input-bordered w-full max-w-xs'/>
                    <input type="text" placeholder='mobile' className='input input-bordered w-full max-w-xs'/>
                    <input type="text" placeholder='email' className='input input-bordered w-full max-w-xs' />
                </div>
                <div className='flex items-center justify-center  w-[70vw] '>

                <textarea className="textarea textarea-bordered w-full element_center " placeholder="Bio"></textarea>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact