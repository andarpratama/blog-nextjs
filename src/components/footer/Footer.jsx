import Image from 'next/image'
import React from 'react'
import style from './page.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={style.container} >
      <div>©2023 Andar Pratama. All rights reserved.</div>
      <div className={style.social} >
        <Link href='/' >
          <Image src="/1.png" width={22} height={22} className={style.icon} alt="Andar Pratama Facebook Account" />
        </Link>
        <Link href='/' >
          <Image src="/2.png" width={22} height={22} className={style.icon} alt="Andar Pratama Instagram Account" />
        </Link>
        <Link href='/' >
          <Image src="/3.png" width={22} height={22} className={style.icon} alt="Andar Pratama Twitter Account" />
        </Link>
        <Link href='/' >
          <Image src="/4.png" width={22} height={22} className={style.icon} alt="Andar Pratama Youtube Account" />
        </Link>
      </div>
    </div>
  )
}

export default Footer