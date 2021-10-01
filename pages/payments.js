import React from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
import Paymenthistory from './paymenthistory'

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
    const clickpush=()=>{
        router.push("/dashboard")
    }
    return (
        <div>
            <Navbar/>
            <Paymenthistory/>
            <div style={{ display: "flex", alignItems: 'center' }} className={styles.payment}>
                <img onClick={clickpush} className="w-8 h-8 bg-white  cursor-pointer" src='/assets/backbutton.png' />
               <p className="pl-5"> Payments </p>
            </div>
           
            <div  onClick={handleClick}  className={styles.billElements}>
                <div  className={styles.paybills}>
                    <img className={styles.gasimage} src={"/assets/cylinder.png"} alt="" />
                </div>
                <p className={`${styles.paytext}`}>Gas</p>
            </div>


            <div onClick={handleClick1}  className={styles.billElements1}>          
            <div className={styles.paybills}>
                    <img className={styles.gasimage} src='/assets/bulb.png' alt="" />
                </div>
                <p className={styles.paytext}>Electricity</p>
                </div>


                <div onClick={handleClick2}  className={styles.billElements2}>
                <div className={styles.paybills}>
                    <img className={styles.gasimage} src='/assets/reciept1.png' alt="" />
                </div>
                <p className={styles.paytext}>Maintenance</p>
                </div>


                <div onClick={handleClick3}  className={styles.billElements3}>
                <div className={styles.paybills}>
                    <img className={styles.gasimage} src='/assets/dth.png' alt="" />
                </div>
                <p className={styles.paytext}>DTH</p>
                </div>


                <div  onClick={handleClick4} className={styles.billElements4}>
                <div className={styles.paybills}>
                    <img className={styles.gasimage} src='/assets/recharge.png' alt="" />
                </div>
                <p className={styles.paytext}>Mobile Recharge</p>
                </div>
            
        </div>
    )
}

export default Payments
