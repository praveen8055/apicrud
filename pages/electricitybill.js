import React from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'

function electricitybill() {
    return (
        <div>
            <Navbar/>
            <div className={styles.payment}>
                Electricity
            </div>

            <div className={styles.ebill10}>
                <p className={`absolute p-5 h-4 not-italic font-bold text-sm leading-4 text-gray-800 ${styles.ebill1}`}>Electricity Board</p>
                <div>
               
                    <p className={styles.state}>select state:</p>
                    <input type="text" className={styles.stateInput} name="state"/>
                </div>

                <div>
                    <p className={styles.state1}>Consumer Number:</p>
                    <input type="text" className={styles.stateInput1} name="state"/>
                </div>
               <p className={styles.samplebill}>Click to view sample bill</p>
               </div>

               <div className={styles.bigBill1}>
                <div className={styles.smallBill1}>
                    <div className={styles.element}>
                    <p id={styles.billdeets}>Bill Details</p>
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
                    <p className={styles.subjects2}>Monthly</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Bill Amount before 1 Jun</p>
                    <p className={styles.subjects2}>5200</p>
                    </div>
                    
                    <div>

                    </div>
                </div>
                <div className={styles.finalAmount1}>
                    <div style={{display:'flex'}}>
                    <p className={styles.paid1}>Amount to be paid:  <p className={styles.rupees}>Rs. 5,200</p></p>
                    <button className={styles.paymentButton}><p className={styles.proceed}>Proceed to payment</p></button>
                    </div>
                    </div></div>
        </div>
    )
}

export default electricitybill
