import React from 'react'
import "./navbar.scss";
// import logo from "../../assets/logo_images.png"
import { FiAlignLeft } from "react-icons/fi";
import { logo } from '../../../assets';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='main-nav'>
      <div className="nav-logo">
        <Link href={"/"}>
        <Image src={logo} alt="logo" />
        </Link>
        <FiAlignLeft />

      </div>
   
    </div>
  )
}

export default Navbar
