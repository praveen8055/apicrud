import React, {useEffect} from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Paymenthistory from './paymenthistory'
import * as Utilities from '../Utilities/utilities'

function Dth() {
    let router = useRouter()
    const handleClick=()=>{
        router.push("/dthbill")
    }
    const clickpush=()=>{
        router.push("/payments")
    }
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    return (
        <div>
             <Navbar/>
             <Paymenthistory/>
             <div style={{display:"flex"}} className={styles.payment}>
                <img onClick={clickpush} className="w-8 h-8 bg-white  cursor-pointer" src="/assets/backbutton.png" />
               <p className="pl-5"> DTH </p>
            </div>

            <div className={styles.ebill30}>
                <div>
               
                    <p className={styles.state20}>Cable Operator:</p>
                    <input type="text" className={`pl-2 ${styles.stateInput10}`} name="state"/>
                </div>

                <div>
                    <p className={styles.state10}>Customer ID:</p>
                    <input type="text" className={`pl-2 ${styles.stateInput20}`} name="state"/>
                </div>

                <div>
               
               <p className={styles.state40}>Amount:</p>
               <input type="text" className={`pl-2 ${styles.stateInput2}`} name="state"/>
           </div>
               <p className={styles.samplebill1}>Click to view plans</p>
               <button onClick={handleClick} className={styles.next2}><p className={styles.btntext}>PROCEED</p></button>
            </div>

         
        </div>
    )
}

export default Dth
