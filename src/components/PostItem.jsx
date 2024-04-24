import React from "react";
import PostAuthor from "./PostAuthor";
import { useNavigate } from "react-router-dom";

const PostItem = ({
  thumbnail,
  category,
  title,
  description,
  authorId,
  postId,
}) => {
  const navigate =useNavigate();
  return (
      <article className="post m-4 cursor-pointer bg-white p-4 shadow-lg" onClick={() =>navigate('blog-detail/' + postId)}>
        <div className="post-image w-full object-cover">
          <img src={thumbnail} alt="" />
        </div>
        <div className="post-content text-left ">
          <h3 className="text-[var(--color-purple)] font-[500] text-sm mt-3">{category}</h3>
          <h3 className=" font-bold text-lg mt-3">{title}</h3>
          <p className="line-clamp-3 text-gray-400 mt-3">{description}</p>
          <div className="post-footer">
            <PostAuthor/>
          </div>
        </div>
      </article>
   
  );
};

export default PostItem;
