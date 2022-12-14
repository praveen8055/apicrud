import React, {useEffect} from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Paymenthistory from './paymenthistory'
import * as Utilities from '../Utilities/utilities'


function Gasbill() {
  const router= useRouter()
  const clickpush=()=>{
    router.push("/gas")
  }
  useEffect(() => {
    Utilities.isLoggedIn().catch(error => console.error(error))
}, [])
    return (
        <div>
             <div>
            <Navbar/>
            <Paymenthistory/>
          <div style={{ display: "flex", alignItems: 'center' }} className={styles.payment}>
            <img onClick={clickpush} className="w-8 h-8 bg-white  cursor-pointer" src='/assets/backbutton.png' />
               <p className="pl-5"> Gas </p>
            </div>
            <div className={styles.ebill10}>
            <div
                  className={styles.radio}
                  style={{ color: "#515151" , display:"flex" }}
                >
                  <div className="flex items-center">
                    <input
                      className="mr-1 cursor-pointer"
                      type="radio"
                      name="selectCategory"
                      checked="true"
                      value="rented"
                    />
                    <p className="pr-10">Pay Gas Bill</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="mr-1 cursor-pointer"
                      type="radio"
                      name="selectCategory"
                      value="owner"
                    />
                    Book a cylinder
                  </div></div>
                <div>
               
                    <p className={styles.state}>Gas Provider:</p>
                    <input type="text" className={styles.stateInput} name="state"/>
                </div>

                <div>
                    <p className={styles.state1}>Consumer Number:</p>
                    <input type="text" className={styles.stateInput1} name="state"/>
                </div>
        </div></div>
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
                    <p className={styles.subjects}>Bill Period:</p>
                    <p className={styles.subjects2}>Monthly</p>
                    </div>
                    <div className={styles.element}>
                    <p className={styles.subjects}>Gas Agency:</p>
                    <p className={styles.subjects2}>Bharat Gas Agency</p>
                    </div>
                    
                    <div>

                    </div>
                </div>
                <div className={styles.finalAmount1}>
                    <div style={{display:'flex'}}>
                    <p className={styles.paid1}>Amount to be paid:  <p className={styles.rupees}>Rs. 5,200</p></p>
                    <button className={styles.paymentButton}><p className={styles.proceed}>Proceed to payment</p></button>
                    </div></div></div>
        </div>
    )
}

export default Gasbill
