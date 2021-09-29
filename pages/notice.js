import React from 'react'
// import filter from '../public/'
// import calender from '../public'
// import notice from '../public'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Notice() {
    return (
        <div className={styles.bigNotice}>
            <div className={styles.notice}>
                <div className={styles.note1}>
                    <h1 className={styles.note}>
                        <div>
                            <img src='/assets/Notice Board.png' alt="" />
                        </div></h1>
                    <div className={styles.filter}>
                        <img src='/assets/Filter (1).png' alt="" />
                    </div>
                </div>

                <div className={styles.agm}>
                    <div className={styles.calender}>
                        <img src='/assets/Group 86.png' alt="" />
                    </div>
                    <div>
                        <p id={styles.asm}>Annual Society Meeting</p>
                        <p className={styles.timing}>
                            <p className={styles.start} >Starts at</p>
                            <p className={styles.time}>10:20 AM</p>
                        </p>
                    </div>




                </div>
            </div>

        </div>
    )
}

export default Notice