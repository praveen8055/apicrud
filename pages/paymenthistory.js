import React from 'react'
import filter from '../public/Assets/Filter (1).png'
import calender from '../public/Assets/Group 86.png'
import notice from '../public/Assets/Notice Board.png'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import cylinder from '../public/assets/cylinder.png'

import paymenthistory1 from '../public/assets/paymenthistory.png'

function paymenthistory() {
    return (
        <div className={styles.bigNotice}>
            <div className={styles.notice}>
                <div className={styles.note1}>
                    <h1 className={styles.note}>
                        <div className="h-12 w-48 font-semibold">
                        <Image src={paymenthistory1} alt="" />
                        </div></h1>
                    <div className={styles.filter}>
                        <Image src={filter} alt="" />
                    </div>
                </div>
                <div className={styles.history}>
                    <div style={{ width: "310px", display:"flex",}} className="absolute h-14 left-0 top-0 bg-purple-100">
                        <div style={{display:'flex'}}>
                        <p className={styles.hp}>HP GAS</p>
                        </div>
                    </div>
                    <div className={styles.historycard}>

                    </div>
                </div>
            </div>
        </div>



    )
}

export default paymenthistory