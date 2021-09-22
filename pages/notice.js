import React from 'react'
import filter from '../public/assets/Filter (1).png'
import calender from '../public/assets/Group 86.png'
import notice from '../public/assets/Notice Board.png'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Notice() {
    return (
        <div className={styles.bigNotice}>
            <div className={styles.notice}>
            <div className={styles.note1}>
            <h1 className={styles.note}>
                <div>
                <Image src={notice} alt="" />
                </div></h1>
                <div  className={styles.filter}>
            <Image  src={filter} alt="" />
                </div>
            </div>

            <div className={styles.agm}>
                <div className={styles.calender}>
                <Image  src={calender} alt="" />
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