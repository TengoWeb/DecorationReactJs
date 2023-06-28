import React from 'react'
import './footer.css'
import footerlogo from '../../assets/footer.logo.png'
import badge from '../../assets/Compant Badge.png'
import facebook from '../../assets/Facebook (3).png'
import twitter from '../../assets/Twitter.png'
import insta from '../../assets/isnta.png'
import visa from '../../assets/visa.png'
import master from '../../assets/master.png'
import rupay from '../../assets/ruplay.png'
import amex from '../../assets/amex.png'

export function Footer() {
  return (
    <>
    <div className='fooder holder bg-success'>
        <div className='container  justify-content-center d-flex'>
            <div className="row pt-5 pb-5 align-items-center d-flex justify-content-center">
                <div className="col-xxl-8 col-xl-12 col-xl-12">
                    <div className='row g-xl-5 d-flex gap-xxl-5'>
                        <div className="col-xxl-4 col-xl-3 col-md-3 flex-start  justify-content-start align-items-start">
                            <img src={footerlogo} alt='/' style={{width:"80%", height:"50%"}}/>
                        </div>
                        <div className="footer-ln1 col-xxl-2 col-xl-3 col-md-3" style={{}}>
                            <a href='/'className='fw-bold'>Quick Links</a>
                            <br></br>
                            <br></br>
                            <a href='/'>About Us</a><br></br>
                            <a href='/'>Bulk Order</a><br></br>
                            <a href='/'>Gifts</a><br></br>
                            <a href='/'>Organic Garden</a>
                        </div>
                        <div className="footer-ln1 col-xxl-2 col-xl-3 col-md-3">
                        <a href='/' className='fw-bold'>Legal</a>
                            <br></br><br></br>
                            <a href='/'>T&S</a><br></br>
                            <a href='/'>Privacy Policy</a><br></br>
                            <a href='/'>Returns</a><br></br>
                            <a href='/'>shipping</a><br></br>
                            <a href='/'>Cancellation</a><br></br>
                        </div>
                        <div className="footer-ln1 col-xxl-2 col-xl-3 col-md-3">
                        <a href='/'className='fw-bold'>Support</a>
                            <br></br><br></br>
                            <a href='/'>FAQs</a><br></br>
                            <a href='/'>Contact Us</a><br></br>
                        </div>
                    </div>
                </div>



                <div className="col-xxl-4 col-xl-12">
                    <div className="row">
                        <div className="col-xxl-6 d-flex align-items-center justify-content-center">
                            <img src={badge} alt='/'/>
                        </div>
                        <div className="col-xxl-6">
                            <div className='last-holder'>
                                <p className='text-light d-flex justify-content-center'>© 2021 Plan A Plant All Rights Reserved</p>
                                <div className='soc-icon-holder md-justify-content-center' style={{display:'flex', gap:"16px", marginTop:"48px"}}>
                                    <img src={facebook} alt='/'/>
                                    <img src={twitter} alt='/'/>
                                    <img src={insta} alt='/'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='footer-bottom' >
        <div className="container ">
            <div className="footer-bottom-content justify-content-center align-items-center p-2" style={{gap:"48px"}}>
                <p className='m-0 footer-text'>We facilitate your payments through trusted gateways</p>
                <div className='paying-items d-flex ' style={{gap:"25px"}}>
                    <img src={visa} alt='/'/> 
                    <img src={master} alt='/'/> 
                    <img src={rupay} alt='/'/> 
                    <img src={amex} alt='/'/> 
                </div>
            </div>
        </div>
    </div>
    </>
  )
}


