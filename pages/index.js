import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const onSplashScreenLoad = () => {
    setTimeout(() => {
      router.replace("/login");
    }, 3000);
  }
  useEffect(() => {
    onSplashScreenLoad();
  }, [])
  return (

    <div className={styles.App}>
      <img src='/assets/splashImage.jpg' className="w-full h-screen object-cover" />
    </div>
  )
}
