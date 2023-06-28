import React from 'react'
import {Product} from './product'
import { PRODUCTS } from '../product'

export function Shop() {
  return (
    <div className='shop container mt-5'>
      <div className='shopTitle d-flex justify-content-center'>
        <h1 className='tittle-product-cards'>Trending plants</h1>
      </div>
      <div className='products row mt-5 g-3'>
          {PRODUCTS.map((product) =>
            <Product key={product.id} data={product} />
          )}
      </div> 
    </div>
  )
}
