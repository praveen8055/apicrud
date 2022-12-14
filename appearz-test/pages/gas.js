import React, {useEffect} from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Paymenthistory from './paymenthistory'
import * as Utilities from '../Utilities/utilities'



function Gas() {
  let router = useRouter()
  const handleClick = () => {
    router.push("/gasbill")
  }
  const clickpush=()=>{
    router.push("/payments")
  }
  useEffect(() => {
    Utilities.isLoggedIn().catch(error => console.error(error))
}, [])
  return (
    <div>
      <Navbar />
      <Paymenthistory/>
      <div style={{ display: "flex", alignItems: 'center' }} className={styles.payment}>
        <img onClick={clickpush} className="w-8 h-8 bg-white  cursor-pointer" src='/assets/backbutton.png' />
        <p className="pl-5"> Gas </p>
      </div>
      <div className={styles.ebill}>
        <div
          className={styles.radio}
          style={{ color: "#515151", display: "flex" }}
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
          <input type="text"  className={`pl-2 ${styles.stateInput}`} name="state" />
        </div>

        <div>
          <p className={styles.state1}>Consumer Number:</p>
          <input type="text" className={`pl-2 ${styles.stateInput1}`} name="state" />
        </div>
        <button onClick={handleClick} className={styles.next}><p className={styles.btntext}>NEXT</p></button>
      </div>

    </div>

  )
}

export default Gas
