import React from 'react'
import { Link } from 'react-router-dom'
import Avatar  from '../assets/avatar/avatar1.jpg'

const PostAuthor = () => {
  return (
    <Link>
        <div>
           {Avatar}
        </div>
        <div>
            <h5>By: Author</h5>
            <small>Justnow</small>
        </div>
    </Link>
  )
}

export default PostAuthor