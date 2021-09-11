import React, { useContext, useState } from "react";
import "./post.css";
import PostCard from "./PostCard";
import { PostContext } from "../../../PostContext";

export default function Post() {

  const {post}= useContext(PostContext);

  return (
    <div>
      {post.map((monpost) => {
        return <PostCard key={monpost.id} monPost={monpost} />;
      })}
    </div>
  );
}
