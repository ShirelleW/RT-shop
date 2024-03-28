import React from 'react'
import styles from '../../styles/homepage.module.css'
import Link from 'next/link'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
        <Link href='/'> HOME |</Link>
        <Link href='/deals'> DAILY DEALS |</Link>
        <Link href='/cart'> <ShoppingBagTwoToneIcon /> </Link>
    </div>
  )
}

export default NavBar
