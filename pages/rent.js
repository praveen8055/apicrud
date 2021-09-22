
import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

function rent() {
    let router = useRouter()
    const handleClick=()=>{
        router.push("/rentbill")
    }
    return (
        <div>
            <Navbar/>
            <div className={styles.payment}>
                Rent
            </div>
        <div className={styles.bigrent}>
        
                <p className={styles.landlord}>Landloard's Name:</p>
                <input className={styles.landlordtext}  type="text" />
            
        
                <p className={styles.propaddress}>Property Address:</p>
                <input className={styles.propaddresstext} type="text-area" />
            
           
        
                <p  className={styles.bank}>Landlord's bank account no:</p>
                <input className={styles.banktext} type="text" />
            
        
                <p  className={styles.confirmbank}>Confirm Landlord's bank account no:</p>
                <input className={styles.confirmbanktext} type="text" />
            
        
            <p  className={styles.ifsc}>IFSC Code:</p>
            <input className={styles.ifsctext} type="text" />
            
        
               <p  className={styles.rentamount}>Rent Amount:</p>
               <input className={styles.rentamounttext} type="text" />
           
        
               <p  className={styles.commentsop}>Comments (optional):</p>
               <input className={styles.commentsoptext} type="text" />
           <button onClick={handleClick} className={styles.rentnext}><p className={styles.btntext}>NEXT</p></button>
        </div>
        </div>
    )
}

export default rent
