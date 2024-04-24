import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Pattern from "../assets/images/Background.jpg";
import BlogPost from "./BlogPost";
import { json } from "react-router-dom";

const HeroSection = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  
  const fetchData = (value) => {
    fetch("http://localhost:8000/posts")
    .then((response) => response.json())
    .then((json) => {
      const res = json.filter((posts) => {
        return posts && posts.category && posts.title.toLowerCase().includes(value);
      })
      console.log(results);
      setResults(res)
    })
  }

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }
  return (
    <section className="bg-[var(--bg-color)] ">
      <div className="flex flex-col items-center">
        <p className="bg-[var(--color-light)] text-[var(--color-purple)] pb-2 px-4 p-2 rounded-sm md:rounded-lg cursor-pointer mt-7 text-sm">
          Our blog
        </p>
        <h1 className="text-[var(--color-primary)] mb-4 text-4xl font-[600]">
          Resources and Insigts
        </h1>
        <p className="text-[var(--color-purple)] mb-4">
          {" "}
          The latest industry news, interview, technologies, and resources.
        </p>
        <div className="bg-white shadow-sm p-3 outline-none rounded-lg  mx-[25%] flex items-center">
          <IoSearchOutline className="text-[20px] text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className=" outline-none ml-2"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div>Search Results</div>
        <ul className="m-2">
          {results?.map(({title})=><li>{title}</li>)}
        </ul>
        <div className="w-full">
          <img src={Pattern} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
