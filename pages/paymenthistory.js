import React from 'react'
import styles from '../styles/Home.module.css'


function paymenthistory() {
    return (
        <div className={styles.bigNotice}>
            <div className={styles.notice}>
                <div className={styles.note1}>
                    <h1 className={styles.note}>
                        <div className="h-12 w-48 font-semibold">
                            <img src='/assets/paymenthistory.png' layout="fill" alt="" />
                        </div></h1>
                    <div className={styles.filter}>
                        <img src='/Assets/Filter (1).png' layout="fill" alt="" />
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