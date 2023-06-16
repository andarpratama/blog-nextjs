import React from 'react'
import style from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={style.container}>
      <h1 className={style.selectTitle} >Choose a gallery</h1>
      <div className={style.items}>
        <Link href='/portfolio/illustration' style={{background: "url('/illustration.png')"}} className={style.item} >
          <span className={style.title} >Illustration</span>
        </Link>
        <Link href='/portfolio/website' style={{background: "url('/websites.jpg')"}} className={style.item} >
          <span className={style.title} >Website</span>
        </Link>
        <Link href='/portfolio/applications' style={{background: "url('/apps.jpg')"}} className={style.item} >
          <span className={style.title} >Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio