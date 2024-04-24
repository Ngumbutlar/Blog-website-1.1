import React from 'react'
import { Link } from 'react-router-dom'
import Avatar  from '../assets/avatar/avatar2.jpg'

const PostAuthor = () => {
  return (
    <div className='flex items-center mt-5'> 
        <div className='w-[40px]'>
           <img src={Avatar} alt="" className='rounded-full' />
        </div>
        <div className='ml-2'>
            <h5 className='font-bold text-[12px]'>Olivia Rhye</h5>
            <small className='font-grey-400 text-[10px]'>Jan 12 2023</small>
        </div>
    </div>
    
  )
}

export default PostAuthor