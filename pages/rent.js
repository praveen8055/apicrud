
import React, {useEffect} from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Paymenthistory from './paymenthistory'
import * as Utilities from '../Utilities/utilities'



function Rent() {
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    let router = useRouter()
    const handleClick = () => {
        router.push("/rentbill")
    }
    const clickpush=()=>{
        router.push("/payments")
    }
    return (
        <div>
            <Navbar />
            <Paymenthistory/>
            <div style={{ display: "flex", alignItems: 'center' }} className={styles.payment}>
                <img onClick={clickpush} className="w-8 h-8 bg-white  cursor-pointer" src='/assets/backbutton.png' />
                <p className="pl-5"> Rent </p>
            </div>
            <div className={styles.bigrent}>

                <p className={styles.landlord}>Landloard&apos;s Name:</p>
                <input className={styles.landlordtext} type="text" />


                <p className={styles.propaddress}>Property Address:</p>
                <input className={styles.propaddresstext} type="text-area" />



                <p className={styles.bank}>Landlord&apos;s bank account no:</p>
                <input className={styles.banktext} type="text" />


                <p className={styles.confirmbank}>Confirm Landlord&apos;s bank account no:</p>
                <input className={styles.confirmbanktext} type="text" />


                <p className={styles.ifsc}>IFSC Code:</p>
                <input className={styles.ifsctext} type="text" />


                <p className={styles.rentamount}>Rent Amount:</p>
                <input className={styles.rentamounttext} type="text" />


                <p className={styles.commentsop}>Comments (optional):</p>
                <input className={styles.commentsoptext} type="text" />
                <button onClick={handleClick} className={styles.rentnext}><p className={styles.btntext}>NEXT</p></button>
            </div>
        </div>
    )
}

export default Rent
