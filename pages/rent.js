
import React from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'


function Rent() {
    let router = useRouter()
    const handleClick=()=>{
        router.push("/rentbill")
    }
    return (
        <div>
            <Navbar/>
            <div style={{display:"flex"}} className={styles.payment}>
                <img className="w-12 h-12 bg-white  cursor-pointer" src={backbtn} />
               <p className="pl-5"> Rent </p>
            </div>
        <div className={styles.bigrent}>
        
                <p className={styles.landlord}>Landloard&apos;s Name:</p>
                <input className={styles.landlordtext}  type="text" />
            
        
                <p className={styles.propaddress}>Property Address:</p>
                <input className={styles.propaddresstext} type="text-area" />
            
           
        
                <p className={styles.bank}>Landlord&apos;s bank account no:</p>
                <input className={styles.banktext} type="text" />
            
        
                <p className={styles.confirmbank}>Confirm Landlord&apos;s bank account no:</p>
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

export default Rent
