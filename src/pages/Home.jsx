import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import BlogPost from '../components/BlogPost'
import Footer from '../components/Footer'
import GlobalAPI from "../Services/GlobalAPI";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() =>{
    getPost();
  }, [])
  const getPost =() => {
    GlobalAPI.getPost.then(resp=>{
      const result =resp.data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.desc,
        category: item.category,
        thumbnail:item.thumbnail,
        authorID: item.authorID
      }));
      setPost(result)
    })
  }
  return (
    <div>
        <HeroSection/>

     { post.length >0? <BlogPost posts={post}/>: null}

        <Footer/>
        
    </div>
  )
}

export default Home;