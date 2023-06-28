import React from 'react'
import {Shopsale} from './shopsale'
import { Shop } from './shop'
import { Link } from 'react-router-dom'
import './mainlanding.css'
import banner from '../assets/Hero Banner.png'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import firstcircle from '../assets/firstcircle.png'
import secondcircle from '../assets/secondcircle.png'
import thirdcicle  from '../assets/third.png'
import fourthcircle from '../assets/fourth.png'
import fifthcircle from '../assets/fifth.png'
import sixcircle from '../assets/sixth.png'
import sellingcard1 from '../assets/selling1.png'
import sellingcard2 from '../assets/selling2.png'
import sellingcard3 from '../assets/selling3.png'
import garden from '../assets/garden.png'
import celeb1 from '../assets/celeb1.png'
import celeb2 from '../assets/celeb2.png'
import celeb3 from '../assets/celeb3.png'
import celeb4 from '../assets/celeb4.png'
import celeb5 from '../assets/celeb5.png'
import celeb6 from '../assets/celeb6.png'
import celeb7 from '../assets/celeb7.png'

export function Mainlanding() {
  return (
    <div className='mainladningholder' >
       
        <img src={banner} alt='/' style={{ objectPosition:"center", width:"100%"}}/> 
        
      <div className='container circleholder'>
         <a href='/'><p className='d-flex justify-content-end' style={{color:"#3B823E"}}>See All </p></a>
       
        <div className='row firstsectionimgholder g-1'>
            
            <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 align-items-center justify-content-center d-flex flex-column circleitems'>
                <img src={firstcircle} alt='/' />
                <h6 className='d-flex'>BONSAI</h6>
            </div>
           
            <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6  align-items-center justify-content-center d-flex flex-column circleitems'>
            <img src={secondcircle} alt='/' />
                <h6>CACTUS</h6>
            </div>
            
            <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6  align-items-center justify-content-center d-flex flex-column circleitems'>
            <img src={thirdcicle} alt='/' />
                <h6>CREEPER</h6>
            </div>
            <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 align-items-center justify-content-center d-flex flex-column circleitems'>
            <img src={fourthcircle} alt='/' />
                <h6>SUCCULENTS</h6>
            </div>
            <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 align-items-center justify-content-center d-flex flex-column circleitems'>
            <img src={fifthcircle} alt='/' />
                <h6>SEEDS</h6>
            </div>
            <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 align-items-center justify-content-center d-flex flex-column circleitems'>
            <img src={sixcircle} alt='/' />
                <h6>GIFTING</h6>
            </div>
        </div>
      </div>


    <div className='section-second'>
        <div className="container mt-5 ">
            <div className='mb-5 d-flex justify-content-center '>
                <h1 className='best-selling-title'>Best Selling</h1>
            </div>
            <div className='bestsellingcards'>
                <div className="row d-flex g-4">
                    <div className="col-lg-4 col-md-6 selling-card1 align-items-center d-flex justify-content-center ">
                        <div className='card-1 d-flex flex-column ' style={{width:"80vw"}}>
                            <img src={sellingcard1} alt='/' style={{objectFit:"cover" ,width:"100%"}}/>
                            <Link to="/shop"><button className='cardbutton mt-3 w-100'>Shop Now</button></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 selling-card1 align-items-center d-flex justify-content-center ">
                        <div className='card-1 d-flex flex-column'  style={{width:"80vw"}}>
                            <img src={sellingcard2} alt='/' style={{objectFit:"cover", width:"100%"}} />
                            <Link to="/shop"><button className='cardbutton mt-3 w-100'>Shop Now</button></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 selling-card1 align-items-center d-flex justify-content-center">
                        <div className='card-1 d-flex flex-column'style={{width:"80vw"}}>
                            <img src={sellingcard3} alt='/' style={{objectFit:"cover",width:"100%"}}/>
                            <Link to="/shop"><button className='cardbutton mt-3 w-100'>Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Shop/>

    <div className="section-blog mt-5 ">
        <div className='d-flex justify-content-center '>
            <h1 className='best-selling-title-blog'>Blogs</h1>
        </div>
        <div className="container mt-3 ">
            <div className="row mt-2 g-2 d-flex justify-content-between" >
                <div className="col-xxl-6 p-0">
                    <div className='blog-background-image '>
                        <div className="blog-content d-flex flex-column justify-content-center align-items-center text-center " style={{padding:"10%"}}>
                            <p>8 Best Low Maintenance Plants For a Busy Home</p>
                            <button className='blog-button'>Read More!</button>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 p-0 ">
                <div className='blog-background-image2'>
                        <div className="blog-content d-flex flex-column justify-content-center align-items-center text-center" style={{padding:"10%"}}>
                            <p>Copy Air Purifying Plants You Should Take Home Today</p>
                            <button className='blog-button'>Read More!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Shopsale/>

    <div className='section-landscapegarder' style={{marginTop:"120px", marginBottom:"120px"}}>
        <div className="container ">
            <div className="row">
                <div className="col-lg-6 h-50">
                    <h1 className='landscape-title'>Landscape Garder</h1>
                     <p className='ladnscape-text'>Whether it is growing your own food or setting up your roof-top garden, we provide the highest quality landscaping services, contributing to a greener world and substantial living! It is very beautifull place for every kind of people. <br></br>
                     <br></br><span >Schedule your service appointment today!</span><br></br>
                     <br></br> <span style={{color:"#D11F1F", fontSize:"20px", lineHeight:"27px",fontWeight:"300"}}><em>*Service only available in Telangana and AndhraPradesh.  </em>  </span>
                     </p>
                     <button className='gardenbutton'>Book Now!</button>
                </div>
                <div className="col-lg-6">
                    
                        <img src={garden} alt='/' className='w-100 h-100'/>
                    
                </div>
            </div>
        </div>
    </div>
    
    <div className='section-celebs'>
    <div className="section-celebs-title d-flex justify-content-center">
        <h1>Celebs You Love, Love Us</h1>
    </div>
    <div className="container">
        <div className="row d-flex justify-content-center align-items-center w-100">        
                <div className="col-xxl-3 col-xl-4 col-md-6 ">
                    <img src={celeb1} alt='/' style={{width:"100%", height:"100%", objectFit:"cover", }}/>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6  ">
                    <img src={celeb2} alt='/'style={{width:"100%", height:"100%", objectFit:"cover", }}/>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6  ">
                    <img src={celeb3} alt='/'style={{width:"100%", height:"100%", objectFit:"cover", }}/>
                </div>
                <div className="col-xxl-3 col-xl-6 col-md-6  " >
                    <img src={celeb4} alt='/'style={{width:"100%", height:"100%", objectFit:"cover", }}/>
                </div>    
                <div className="col-xxl-4 col-xl-6 col-md-12 ">
                    <img src={celeb5} alt='/' style={{width:"100%", height:"100%", objectFit:"cover", }}/>
                </div>
                <div className="col-xxl-4 col-xl-6 col-md-12 ">
                    <img src={celeb6} alt='/' style={{width:"100%", height:"100%", objectFit:"cover", }}/>
                </div>
                <div className="col-xxl-4 col-xl-6 col-md-12 ">
                    <img src={celeb7} alt='/'className=''style={{width:"100%", height:"100%", objectFit:"cover", }}/>
                </div>
           
        </div>
    </div>
</div>

    </div>
  )
}


