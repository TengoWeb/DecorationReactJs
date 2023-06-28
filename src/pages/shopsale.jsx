import React from 'react'
import { PRODUCTSSALE } from '../productSALE'
import  {Productsale} from '../pages/productsale'

export function Shopsale() {
  return (
    <div className='shop container mt-5'>
      <div className='shopTitle d-flex justify-content-center'>
        <h1 className='tittle-product-cards'>Hot Sale</h1>
      </div>
      <div className='products row mt-5 g-3'>
          {PRODUCTSSALE.map((product) =>
            <Productsale key={product.id} data={product} />
          )}
      </div> 
    </div>
  )
}
