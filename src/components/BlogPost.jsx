import React, { useState } from "react";
import { DUMMY_POSTS } from "../data";
import PostItem from "./PostItem";

const BlogPost = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 sm:mt-[-250px] lg:mt-[-370px]">
      {posts.map(
        ({id ,thumbnail, category, title, desc, authorId }, index) => (
          <PostItem
            postId = {id}
            key={index}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={desc}
            authorId={authorId}
          />
        )
      )}
    </section>
  );
};

export default BlogPost;
