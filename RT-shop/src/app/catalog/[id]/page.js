'use client'

import React, { useState } from 'react'
import { itemsInStock } from '@/CatalogItems'
import { FormControl, InputLabel, Select, MenuItem, Button, dialogClasses } from '@mui/material'
import Image from 'next/image'
import styles from '../../../../styles/homepage.module.css'
import ProductPageNavBar from '@/app/ProductPageNavBar'

const IndividualProduct = ({ params }) => {

  const [size, setSize] = useState('')
  const [numOfItemsSelected, setNumOfItemsSelected] = useState(1)
  const product = itemsInStock.filter(item => item.id == params.id)[0]
  const sizesAvailable = product.size.filter((item) => item.count > 0)

  const handleSizeSelect = (e) => {
    setSize(e.target.value)
  }

  const handleAdd = () => {
    setNumOfItemsSelected((prev) => prev + 1)
  }

  const handleDecrease = () => {
    setNumOfItemsSelected((prev) => prev == 0 ? 0 : prev - 1)
  }

  return (
    <div className={styles.productPageContainer}>
      <ProductPageNavBar />

      <div className={styles.individualProductContainer}>
        <div className={styles.productInfo}>
          <h1 id={styles.productName}>{product.name}</h1>
          <h2 id={styles.productDesc}>{product.description}</h2>
          <div className={styles.imageCartControl}>
            <Image
              src='/be-good-light-grey.png'
              alt=''
              width={250}
              height={290} />
            <h4 id={styles.productPrice}>{product.price}</h4>
            <div className={styles.sizeIncDecBtn}>
              <FormControl className={styles.sizeSelector}>
                <InputLabel id="size-label">Size</InputLabel>
                <Select
                  labelId="size-label"
                  id="size-select"
                  defaultValue={size ?? ''}
                  label="Size"
                  onChange={(e) => handleSizeSelect(e)}
                >
                  {
                    sizesAvailable.map((product) => {
                      return (
                        <MenuItem key={product.size} value={product.size}>{product.size}</MenuItem>
                      )
                    })
                  }
                </Select>
              </FormControl>
              <div className={styles.incDecAddBtns}>
                <Button id={styles.addToCartBtn} variant="outlined">ADD {numOfItemsSelected >= 1 && numOfItemsSelected} TO CART</Button>
                <Button variant="contained" onClick={handleDecrease}>-</Button>
                <Button variant="contained" onClick={handleAdd}>+</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualProduct