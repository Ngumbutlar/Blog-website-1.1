import React from "react";
import BlogPost from "./BlogPost";
import { Link } from "react-router-dom";

const PostItem = ({
  thumbnail,
  category,
  title,
  description,
  authorId,
  postId,
}) => {
  return (
      <article className="post m-4 cursor-pointer">
        <div className="post-image w-full object-cover">
          <img src={thumbnail} alt="" />
        </div>
        <div className="post-content text-left ">
          <h3 className="text-[var(--color-purple)] font-[500] mt-3">{category}</h3>
          <h3 className="">{title}</h3>
          <p className="line-clamp-3">{description}</p>
          <div className="post-footer"></div>
        </div>
      </article>
   
  );
};

export default PostItem;
