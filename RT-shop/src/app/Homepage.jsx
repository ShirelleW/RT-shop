import React from 'react'
import Link from 'next/link'
import { Card } from '@mui/material'
import styles from '../../styles/homepage.module.css'

const Homepage = () => {
    return (
        <div>
            <div className={styles.logoContainerHome}>
                <Link href="/catalog" className={styles.viewCatalog}> View Our Full Catalog {">>>"} </Link>
            </div>
            <div className={styles.catalogPreview}>
                <Card >
                    hello
                </Card>
            </div>
        </div>

    )
}

export default Homepage