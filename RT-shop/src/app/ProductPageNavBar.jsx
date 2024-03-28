import React from 'react'
import styles from '../../styles/homepage.module.css'
import Link from 'next/link'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

const ProductPageNavBar = () => {
    return (
        <div className={styles.productPageNavBar}>
            <Link href='/'> HOME |</Link>
            <Link href='/deals'> DAILY DEALS |</Link>
            <Link href='/cart'> <ShoppingBagTwoToneIcon /> </Link>
        </div>
      )
}

export default ProductPageNavBar