import React from 'react'
import Logo from '../Logo'
import NavBar from '../Navbar'
import Link from 'next/link'
import { Card } from '@mui/material'
import { itemsInStock } from '@/CatalogItems'
import styles from '../../../styles/homepage.module.css'

const Catalog = () => {

  return (
    <div className={styles.catalog}>
      <div className={styles.logoNavContainer}>
        <Logo />
        <NavBar />
      </div>
      <div className={styles.catalogContent}>
        {
          itemsInStock.map((item) =>
            <Card variant="outlined" key={item.name} className={styles.itemCard}>
              <h2>{item.name}</h2>
              <h4 className={styles.itemDescription}>{item.description}</h4>
              <Link
                href={`/catalog/${item.id}`}
              >
                About
              </Link>
            </Card>
          )
        }
      </div>
    </div>
  )
}

export default Catalog