import React from 'react'

export const Productsale = (props) => {
    const { productName, productPrice, productImg } = props.data;
  return (
<div className='buy-card col-lg-3 col-md-4 col-sm-6 col-6  '>
    <div className="justify-content-center d-flex flex-column h-100 " style={{ border: "20px solid rgb(255, 252, 252)", borderRadius: "8px", boxShadow: "0px 8px 23px 0px #506B5221", backgroundColor:"white" }}>
      <img src={productImg} alt='/' className=''/>
      <p className='mb-1 mt-3 productname'>{productName}</p>
      <div className='price-product d-flex align-items-center' style={{gap:"10px"}}>
      <p className='m-0 productprice '>${productPrice}</p>
      <p className='saleprice mb-0'>$ 450</p>
      </div>
      <button className='buybutton'>Buy</button>
      
    </div>
    </div>
  )
}


