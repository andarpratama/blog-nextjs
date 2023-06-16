import Image from 'next/image'
import React from 'react'
import style from './footer.module.css'
import Link from 'next/link'
import { socialMedia } from '@/utils/socialMedia'

const Footer = () => {
  return (
    <div className={style.container} >
      <div>©2023 Andar Pratama. All rights reserved.</div>
      <div className={style.social} >
        {
          socialMedia.map((sm)=> (
            <Link key={sm.id} href='/' >
              <Image src={sm.image} width={22} height={22} className={style.icon} alt={`Andar Pratama ${sm.title} Account`} />
            </Link>
          ))
        }
        
      </div>
    </div>
  )
}

export default Footer