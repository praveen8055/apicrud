import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
import Login from "./login"

export default function Home() {
  return(
    <Login/>
  )
}
