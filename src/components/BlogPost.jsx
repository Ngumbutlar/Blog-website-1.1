import React from "react";
import { useNavigate } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";

const BlogPost = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <section className="posts relative z-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 mt-[-130px] md:mt-[-250px] lg:mt-[-370px]">
      {posts.map((item) => (
        <article
          className="post m-4 cursor-pointer bg-white p-4 shadow-lg"
          onClick={() => navigate("blog-detail/" + item.id)}
        >
          <div className="post-image w-full object-cover">
            <img src={item.thumbnail} alt="" />
          </div>
          <div className="post-content text-left ">
            <h3 className="text-[var(--color-purple)] font-[500] text-sm mt-3">
              {item.category}
            </h3>
            <h3 className=" font-bold text-lg mt-3">{item.title}</h3>
            <p className="line-clamp-3 text-gray-400 mt-3">
              {item.description.introduction}
            </p>
            <div className="post-footer">
              <PostAuthor />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default BlogPost;
