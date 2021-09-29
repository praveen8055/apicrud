import React from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'


function Noelectricity() {
    return (

        <div>
            <Navbar/>
            <div style={{display:"flex"}} className={styles.payment}>
                <Image className="w-12 h-12 bg-white  cursor-pointer" src={backbtn} alt="" />
               <p className="pl-5"> Electricity </p>
            </div>
            <div className={styles.ebill}>
                <div className={styles.smallnote}>
                    <p className="absolute w-100 p-5 h-4 not-italic font-semibold text-sm leading-4 text-gray-900">No upcoming Electricity bills</p>
                    <p className={styles.congrats}>Congratulations! You have already paid your last month&apos;s bill</p>
                    <p className={styles.lastbill}>View Last Bill</p>
                </div>
            </div>
        </div>
    )
}

export default Noelectricity
