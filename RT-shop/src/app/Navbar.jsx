import React from 'react'
import styles from '../../styles/homepage.module.css'
import Link from 'next/link'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Link href='/cart'><ShoppingBagTwoToneIcon /> </Link>
      <Link href='/cart'>CART |</Link>
      <Link href='/'> HOME |</Link>
      <Link href='/deals'> DAILY DEALS |</Link>
    </div>
  )
}

export default NavBar
