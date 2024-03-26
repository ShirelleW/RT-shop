import React from 'react'
import styles from '../../styles/homepage.module.css'
import NavBar from './Navbar'

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <div className={styles.logo} />
            <NavBar />
        </div>
    )
}

export default Logo