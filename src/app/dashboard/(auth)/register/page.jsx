import React from 'react'
import style from './page.module.css'
import Link from 'next/link'

const Register = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Create an Account</h1>
      <h2 className={style.subtitle}>Please sign up to see the dashboard.</h2>
      <form className={style.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={style.input}
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={style.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={style.input}
        />
        <button className={style.button}>Register</button>
      </form>
      <span className={style.or}>- OR -</span>
      <Link className={style.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  )
}

export default Register