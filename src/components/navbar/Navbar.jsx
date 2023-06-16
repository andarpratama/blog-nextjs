import Link from 'next/link'
import React from 'react'
import style from './navbar.module.css'
import { links } from '@/utils/menu'
import Badge from '../Badge/Badge'


const Navbar = () => {
  return (
    <div className={style.container} >
      <Link className={style.logo} href='/' >Andar Pratama</Link>
      <div className={style.links} >
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={style.link} >
            {link.title}
          </Link>
        ))}
        <button className={style.logout} >Logout</button>
      </div>
      <button className={style.mobile} url="/portfolio" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
    </div>
  )
}

export default Navbar