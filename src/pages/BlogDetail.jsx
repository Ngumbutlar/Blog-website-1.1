import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalAPI from "../Services/GlobalAPI";
import PostAuthor from "../components/PostAuthor";
import Footer from "../components/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    console.log("id", id);
    getBlogById();
  }, []);

  const getBlogById = () => {
    GlobalAPI.getPostById(id).then((resp) => {
      const item = resp.data;
      const result = {
        id: item.id,
        title: item.title,
        description: item.desc.introduction,
        content: item.desc.content,
        category: item.category,
        thumbnail: item.thumbnail,
        authorID: item.authorID,
      };
      console.log("Result", result);
      setPost(result);
    });
  };
  return (
    <div>
      <h2 className="bg-white shadow-lg fixed mb-5 top-0 p-4 w-full bg-blur text-left font-bold text-lg">
        Post Detail
      </h2>
      <div className="text-left px-6 md:px-20 lg:px-56 mt-20">
        <h3 className="text-[var(--color-purple)] font-[500] text-sm mt-3">
          {post.category}
        </h3>
        <h3 className="text-[23px] font-bold ">{post.title} </h3>
        <div><PostAuthor/></div>
        <img className="my-5 w-full" src={post.thumbnail} alt="" />
        <h3 className="font-bold ">{post.description} </h3>
        <p className="mt-3">{post.content} </p>
      </div>
      <div>
          <Footer/>
        </div>
    </div>
  );
};

export default BlogDetail;
