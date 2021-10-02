import React, {useEffect} from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import * as Utilities from '../Utilities/utilities'

function Noelectricity() {
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    return (

        <div>
            <Navbar />
            <div style={{ display: "flex", alignItems: 'center' }} className={styles.payment}>
                <img className="w-8 h-8 bg-white  cursor-pointer" src='/assets/backbutton.png' alt="" />
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
