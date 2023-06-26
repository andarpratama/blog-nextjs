import React from 'react'
import style from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { getPortfolioByCategory } from '@/utils/portfolio'

const Category = ({params}) => {
  const data = getPortfolioByCategory(params.category)
  return (
    <div className={style.container} >
      <h1 className={style.catTitle} >{params.category}</h1>
      {
        data.map((item) => (
          <div className={style.item} key={item.id} >
            <div className={style.content}>
              <h1 className={style.title} >{item.title}</h1>
              <p className={style.desc} >{item.desc}</p>
              <Button text="See more" url="#" />
            </div>
            <div className={style.imgContainer}>
              <Image 
                className={style.img}
                fill={true} 
                src={item.image}
                alt='/'
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Category