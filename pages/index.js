import { useRouter } from 'next/router';
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import splashImage from "../public/assets/splashImage.jpg";

export default function Home() {
  const router = useRouter();
  const onSplashScreenLoad = () => {
    setTimeout(() => {
      router.replace("/login");
    }, 3000);}
  return (
    
    <div className={styles.App} onLoad={onSplashScreenLoad}>
      <Image src={splashImage} className="w-full h-screen object-cover"/>
    </div>
  )
}
