import React from 'react'
import style from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { blog } from '@/utils/blog'

const Blog = () => {
  const data = blog;

  return (
    <div className={style.mainContainer} >
      {
        data.map((item) => (
          <Link href={`/blog/${item.id}`} className={style.container} key={item.id} >
            <div className={style.imgContainer}>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className={style.image}
              />
            </div>
            <div className={style.content}>
              <h1 className={style.title}>{item.title}</h1>
              <p className={style.desc}>{item.desc}</p>
            </div>
          </Link>
        )) 
      }
      
    </div>
  )
}

export default Blog