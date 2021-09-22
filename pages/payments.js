import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import paybills from '../public/assets/payBills.png'
import cylinder from '../public/assets/cylinder.png'
import bulb from '../public/assets/bulb.png'
import dth from '../public/assets/dth.png'
import recharge from '../public/assets/recharge.png'
import reciept1 from "../public/assets/reciept1.png"
import {useRouter} from 'next/router'

function payments() {
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
            <div className={styles.payment}>
                Payments
            </div>
           
            <div  onClick={handleClick}  className={styles.billElements}>
                <div  className={styles.paybills}>
                <Image  src={cylinder} alt="" />
                </div>
                <p className={styles.paytext}>Gas</p>
            </div>


            <div onClick={handleClick1}  className={styles.billElements1}>          
            <div className={styles.paybills}>
                <Image  src={bulb} alt="" />
                </div>
                <p className={styles.paytext}>Electricity</p>
                </div>


                <div onClick={handleClick2}  className={styles.billElements2}>
                <div className={styles.paybills}>
                <Image  src={reciept1} alt="" />
                </div>
                <p className={styles.paytext}>Maintenance</p>
                </div>


                <div onClick={handleClick3}  className={styles.billElements3}>
                <div className={styles.paybills}>
                <Image  src={dth} alt="" />
                </div>
                <p className={styles.paytext}>DTH</p>
                </div>


                <div  onClick={handleClick4} className={styles.billElements4}>
                <div className={styles.paybills}>
                <Image  src={recharge} alt="" />
                </div>
                <p className={styles.paytext}>Mobile Recharge</p>
                </div>
            
        </div>
    )
}

export default payments