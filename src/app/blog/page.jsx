import React from 'react'
import style from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={style.mainContainer} >
      <Link href='/blog/testid1' className={style.container} >
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.desc}>test</p>
        </div>
      </Link>
      <Link href='/blog/testid2' className={style.container} >
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.desc}>test</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog