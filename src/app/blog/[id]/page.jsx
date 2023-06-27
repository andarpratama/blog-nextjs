import React from 'react';
import style from './page.module.css';
import Image from 'next/image';
import { blog } from '@/utils/blog';


async function getData(id){
  return blog.filter(item => item.id == id)[0];
}

export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = blog.filter(item => item.id == params.id)[0];
  console.log(data)
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.info}>
          <h1 className={style.title}>{data.title}</h1>
          {/* <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero,
            expedita ullam vitae pariatur, atque at dignissimos error labore
          </p> */}
          <div className={style.author}>
            <Image
              src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
              alt=''
              width={40}
              height={40}
              className={style.avatar}
            />
            <span className={style.username}>Andar Pratama</span>
          </div>
          <span className={style.date}>Jun 27, 2023</span>
        </div>
        <div className={style.imageContainer}>
          <Image src={`/images${data.image}`} alt='' fill={true} className={style.image} />
        </div>
      </div>
      <div className={style.content}>
        <p className={style.text}>{data.desc}</p>
        <p className={style.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          exercitationem enim officiis ipsam dolores! Facere molestiae rem
          facilis esse voluptatum veritatis laboriosam ducimus nobis! Nisi
          repellendus similique enim esse accusamus. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Delectus iusto doloremque obcaecati iste
          unde cupiditate quia nostrum totam, ab repellat vitae aperiam
          doloribus, commodi reiciendis error sequi, fuga at architecto?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
