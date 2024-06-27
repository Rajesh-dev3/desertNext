import React from 'react'
import "./gallery.scss"
import { galleryImg, sliderImg } from '../../../assets'
import { CiHeart } from "react-icons/ci";
import Image from 'next/image';

const Gallerycard = () => {
  return (
    <div className='card-container'>
      
      <Image src={galleryImg} alt="gallery" />
    </div>
  )
}

export default Gallerycard