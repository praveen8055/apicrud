import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

function dth() {
    let router = useRouter()
    const handleClick=()=>{
        router.push("/dthbill")
    }
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
               <button onClick={handleClick} className={styles.next2}><p className={styles.btntext}>PROCEED</p></button>
            </div>

         
        </div>
    )
}

export default dth