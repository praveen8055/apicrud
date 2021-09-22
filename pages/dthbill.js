import React from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'

function dthbill() {
    return (
        <div>
             <Navbar/>
             <div style={{display:"flex"}} className={styles.payment}>
            <Image className="w-12 h-12 bg-white  cursor-pointer" src={backbtn}/>
               <p className="pl-5"> DTH</p>
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
