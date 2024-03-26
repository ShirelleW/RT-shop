import React from 'react'
import styles from '../../styles/homepage.module.css'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className={styles.navBar}>
        <Link href='/'> HOME |</Link>
        <Link href='/deals'> DAILY DEALS |</Link>
        <Link href='/cart'> CART </Link>
    </div>
  )
}

export default NavBar