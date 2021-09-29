import React from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'
import cylinder from '../public/assets/cylinder.png'
import bulb from '../public/assets/bulb.png'
import dth from '../public/assets/dth.png'
import recharge from '../public/assets/recharge.png'
import reciept1 from "../public/assets/reciept1.png"
import {useRouter} from 'next/router'

function Payments() {
    let router= useRouter()

    const handleClick=()=>{
        router.push("/gas")
    }

    
    const handleClick1=()=>{
        router.push("/electricity")
    }

    const handleClick2=()=>{
        router.push("/maintenance")
    }

    const handleClick3=()=>{
        router.push("/dth")
    }
    const handleClick4=()=>{
        router.push("/rent")
    }
    return (
        <div>
            <Navbar/>
            <div style={{display:"flex"}} className={styles.payment}>
                <img className="w-12 h-12 bg-white  cursor-pointer" src={backbtn} />
               <p className="pl-5"> Payments </p>
            </div>
           
            <div  onClick={handleClick}  className={styles.billElements}>
                <div  className={styles.paybills}>
                    <img className={styles.gasimage} src={cylinder} alt="" />
                </div>
                <p className={`${styles.paytext}`}>Gas</p>
            </div>


            <div onClick={handleClick1}  className={styles.billElements1}>          
            <div className={styles.paybills}>
                    <img className={styles.gasimage} src={bulb} alt="" />
                </div>
                <p className={styles.paytext}>Electricity</p>
                </div>


                <div onClick={handleClick2}  className={styles.billElements2}>
                <div className={styles.paybills}>
                    <img className={styles.gasimage} src={reciept1} alt="" />
                </div>
                <p className={styles.paytext}>Maintenance</p>
                </div>


                <div onClick={handleClick3}  className={styles.billElements3}>
                <div className={styles.paybills}>
                    <img className={styles.gasimage} src={dth} alt="" />
                </div>
                <p className={styles.paytext}>DTH</p>
                </div>


                <div  onClick={handleClick4} className={styles.billElements4}>
                <div className={styles.paybills}>
                    <img className={styles.gasimage} src={recharge} alt="" />
                </div>
                <p className={styles.paytext}>Mobile Recharge</p>
                </div>
            
        </div>
    )
}

export default Payments
