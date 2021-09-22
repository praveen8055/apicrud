import React from 'react'
import Link from 'next/link'
import Image from 'next/Image'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'

function maintenance() {
    return (
    
        <div>
            <div>
                <Navbar/> 
            </div>
            <div style={{display:'flex'}}>
               <p className={styles.maintenance}>Maintenance</p>
           </div>
           <div className={styles.bigBill}>
                <div className={styles.smallBill}>
                    <div className={styles.element}>
                    <p id="billdeets">Bill Details</p>
                    <p className={styles.subjects2}></p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Bill Date:</p>
                    <p className={styles.subjects2}>08 May</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Due Date:</p>
                    <p className={styles.subjects2}>01 Jun 2021</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Bill Number:</p>
                    <p className={styles.subjects2}>45262718</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Account Name:</p>
                    <p className={styles.subjects2}>Jack Ryan</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Bill Period</p>
                    <p className={styles.subjects2}>1 Jan 2021- 3 Mar 2021</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Administrative and General Expenses:</p>
                    <p className={styles.subjects2}>Kalpana Gas Agency</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>All Municpal dues:</p>
                    <p className={styles.subjects2}>7273.00</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Sinking Funds</p>
                    <p className={styles.subjects2}>730.00</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Periodic Building Maintenance:</p>
                    <p className={styles.subjects2}>1200.00</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Common Area/ Parking:</p>
                    <p className={styles.subjects2}>0.00</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Past Areas:</p>
                    <p className={styles.subjects3}>780.00</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Interest Due:</p>
                    <p className={styles.subjects3}>1600.00</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className={styles.finalAmount}>
                    <div style={{display:'flex'}}>
                    <p className={styles.paid1}>Amount to be paid:  <p className={styles.rupees}>Rs. 5,200</p></p>
                    <button className={styles.paymentButton}><p className={styles.proceed}>Proceed to payment</p></button>
                    </div>
                   

                </div>
           </div>

    
        </div>
        
    )
}

export default maintenance