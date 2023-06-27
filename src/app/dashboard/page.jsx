"use client"

import React, { useEffect, useState } from 'react'
import style from './page.module.css'
import Image from "next/image";
import { blog } from '@/utils/blog';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    setData(blog)
    setIsLoading(false)
  }, []);

  console.log(data)

  return ( 
    <div className={style.container}>
        <div className={style.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={style.post} key={post.id}>
                  <div className={style.content} >
                    <div className={style.imgContainer}>
                      <Image src={`/images${post.image}`} alt="" width={200} height={100} />
                    </div>
                    <h2 className={style.postTitle}>{post.title}</h2>
                  </div>
                  <span
                    className={style.delete}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={style.new}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={style.input} />
          <input type="text" placeholder="Desc" className={style.input} />
          <input type="text" placeholder="Image" className={style.input} />
          <textarea
            placeholder="Content"
            className={style.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={style.button}>Send</button>
        </form>
      </div>
  )
}

export default Dashboard