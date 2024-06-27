import React from 'react'
import "./styles.scss"
import Image from 'next/image'
import logo from "../../assets/logo_images.png"
import Link from 'next/link'
const Home = () => {

  return (
    <>
      <div className="container">
        <div className="hero-sec">
           <div className="heading-logo">
           <Image
      src={logo}
      
      alt="Picture of the author"
    />
          </div>
       
<Link href="/explore">
         
           <button className='btn-explore' >explore now</button>
</Link>
          </div>
        </div>

      {/* // </div> */}


    </>
  )
}

export default Home