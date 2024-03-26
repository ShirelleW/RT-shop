import React from 'react'
import Logo from '../Logo'
import styles from '../../../styles/homepage.module.css'
import NavBar from '../Navbar'

const Catalog = () => {
  return (
    <div className={styles.logoNavContainer}>
        <Logo />
        <NavBar />
      </div>
  )
}

export default Catalog