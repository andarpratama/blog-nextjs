import React from 'react';
import style from './page.module.css';
import Image from 'next/image';

const BlogPost = ({ params }) => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.info}>
          <h1 className={style.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            voluptatem?`
          </h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero,
            expedita ullam vitae pariatur, atque at dignissimos error labore
            incidunt excepturi? Dicta, itaque natus? Blanditiis dolores
            asperiores modi dignissimos dolorum?
          </p>
          <div className={style.author}>
            <Image
              src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
              alt=''
              width={40}
              height={40}
              className={style.avatar}
            />
            <span className={style.username}>Username</span>
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            fill={true}
            className={style.image}
          />
        </div>
      </div>
      <div className={style.content}>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          architecto debitis non beatae sequi iste eius assumenda esse quibusdam
          tempora facilis aperiam unde tempore harum libero, culpa quis quod
          vero.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
