import React from 'react'
import style from './page.module.css'
import Link from 'next/link';

const Login = () => {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>Please sign in to see the dashboard.</h2>

      <form className={style.form}>
        <input
          type="text"
          placeholder="Email"
          required
          autoComplete='off'
          className={style.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={style.input}
        />
        <button className={style.button}>Login</button>
      </form>
      <button
        className={style.button + " " + style.google}
      >
        Login with Google
      </button>
      <span className={style.or}>- OR -</span>
      <Link className={style.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  )
}

export default Login