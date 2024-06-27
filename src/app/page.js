import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./home/page"
import { useMediaQuery } from "./useMediaQuery";
import WebHome from "./webHome/WebHome";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:480px)")
  return (
    <>
    {!isMobile ? 
   <HomePage/>
  :<WebHome/>}

    </>
  )
}
