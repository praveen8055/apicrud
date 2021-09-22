import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'

function noelectricity() {
    return (

        <div>
            <Navbar/>
            <div className={styles.payment}>
                Electricity
            </div>
            <div className={styles.ebill}>
                <div className={styles.smallnote}>
                    <p className="absolute w-100 p-5 h-4 not-italic font-semibold text-sm leading-4 text-gray-900">No upcoming Electricity bills</p>
                    <p className={styles.congrats}>Congratulations! You have already paid your last month's bill</p>
                    <p className={styles.lastbill}>View Last Bill</p>
                </div>
            </div>
        </div>
    )
}

export default noelectricity
