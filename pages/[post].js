import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as fs from 'fs'

export const post = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <>
    
      <style jsx>
        {`
          .bp {
            padding: 50px 30px;
          }
          .bp h1 {
            font-size: 48px;
            font-weight: bold;
          }
        `}
      </style>
      <div className="bp">
        <h1>{blog && blog.title}!!!</h1>
        <br />
        <br />
        <hr />
        <br />
        <p>{blog && blog.content}</p>
        <br />
        <br />
        <span>{blog && blog.author}</span>
      </div>
    </>
  );
};
export async function getStaticPaths(){
  return {
    paths: [
      {params: {post: 'how-to-be-a-back-end-developer'}},
      {params: {post: 'how-to-be-front-end-developer'}},
      {params: {post: 'how-to-learnCoding'}},
      {params: {post: 'how-to-learnFlask'}},
      {params: {post: 'how-to-learnJs'}},
      {params: {post: 'how-to-learnNext'}}
    ],
    fallback: true
  };
}
export  async function getStaticProps(context) {
      const {post} = context.params;

      let myBlog = await fs.promises.readFile(`blogdata/${post}.json`,'utf-8')
        return{
          props: {myBlog: JSON.parse(myBlog)},
        }
      }
    
export default post;

