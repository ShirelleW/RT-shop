'use client'

import React from 'react'
import { useAppSelector } from '@/lib/hooks';
import styles from '../../styles/homepage.module.css'
import Link from 'next/link'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

const ProductPageNavBar = () => {

    const { count } = useAppSelector(state => state.cart)
    return (
        <div className={styles.productPageNavBar}>
            <div className={styles.shoppingTotal}>
                <Link href='/cart'><ShoppingBagTwoToneIcon /> </Link>
                <p id={styles.cartTotal}>{count}</p>
            </div>
            <Link href='/cart'>CART |</Link>
            <Link href='/'> HOME |</Link>
            <Link href='/deals'> DAILY DEALS |</Link>
        </div>
    )
}

export default ProductPageNavBar