import React from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'

function dthbill() {
    return (
        <div>
             <Navbar/>
            <div className={styles.payment}>
                DTH
            </div>

            <div className={styles.ebill30}>
                <div>
               
                    <p className={styles.state20}>Cable Operator:</p>
                    <input type="text" className={styles.stateInput10} name="state"/>
                </div>

                <div>
                    <p className={styles.state10}>Customer ID:</p>
                    <input type="text" className={styles.stateInput20} name="state"/>
                </div>

                <div>
               
               <p className={styles.state40}>Amount:</p>
               <input type="text" className={styles.stateInput2} name="state"/>
           </div>
               <p className={styles.samplebill1}>Click to view plans</p>
            <div className={styles.finalamount2}>
            <div style={{display:'flex'}}>
                    <p className={styles.paid1}>Amount to be paid:  <p className={styles.rupees}>Rs. 5,200</p></p>
                    <button className={styles.paymentButton}><p className={styles.proceed}>Proceed to payment</p></button>
                    </div></div>
            </div>

         
        </div>
    )
}

export default dthbill
