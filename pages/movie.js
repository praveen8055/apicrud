import React from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import  Image from "next/image"
import backbtn from '../public/assets/backbutton.png'
import check from '../public/assets/Select Check.png'
import {FiCheck} from 'react-icons/fi'
function movie() {
    return (
        <div>
            <Navbar/>
            <div style={{display:"flex"}} className={styles.payment}>
            <Image className="w-12 h-12 bg-white  cursor-pointer" src={backbtn}/>
               <p className="pl-5"> Movie Theatre </p>
            </div>
            <div className={styles.rulesCard}>
                <p className="m-5 bold">Rules</p>
                <div style={{display:"flex"}}>
                    <div className={styles.checkImage}>
                    <FiCheck/>
                    </div>
               <p className={styles.rules1}>You can make a maximum of 3 bookings at a time.</p>
                </div>
                <div style={{display:"flex"}}>
                    <div className={styles.checkImage}>
                    <FiCheck/>
                    </div>
                <p className={styles.rules1}>Please make sure that you arrive on time. Bookings will be held for ten minutes.</p></div>
                <div style={{display:"flex"}}>
                    <div className={styles.checkImage}>
                    <FiCheck/>
                    </div>
                <p className={styles.rules1}>A mx of 40 people will be allowed in the theatre in each slot.</p></div>
                <div style={{display:"flex"}}>
                    <div className={styles.checkImage}>
                    <FiCheck/>
                    </div>
                <p className={styles.rules1}>Dont litter or leave anything behind.</p></div>
                <p></p>
            </div>
        </div>
    )
}

export default movie