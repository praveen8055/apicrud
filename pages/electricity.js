import React from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

function electricity() {
    let router = useRouter()
    const handleClick=()=>{
        router.push("/electricitybill")
    }
    return (
        <div>
             <Navbar/>
            <div className={styles.payment}>
                Electricity
            </div>

            <div className={styles.ebill}>
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
               <button onClick={handleClick} className={styles.next}><p className={styles.btntext}>NEXT</p></button>
            </div>

         
        </div>
    )
}

export default electricity
