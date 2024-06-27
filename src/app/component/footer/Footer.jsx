import Button from "../exploreButton/Button"
import "./footer.scss"
import logo1 from "../../../assets/whtaup.png"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="footer-container">

      <Button />
      <a href="https://api.whatsapp.com/send?phone=+971526063261&amp;text=Hi,%20I%20would%20like%20to%20know%20more%20details">
      <Image src={logo1} alt="logo" />
      </a>
    
    </div>
  )
}

export default Footer
