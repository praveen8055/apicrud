import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

function gas() {
    let router=useRouter()
    const handleClick=()=>{
        router.push("/gasbill")
    }
    return (
        <div>
            <Navbar/>
            <div className={styles.payment}>
                Gas
            </div>
            <div className={styles.ebill}>
            <div
                  className={styles.radio}
                  style={{ color: "#515151" , display:"flex" }}
                >
                  <div className="flex items-center">
                    <input
                      className="mr-1 cursor-pointer"
                      type="radio"
                      name="selectCategory"
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
               <button onClick={handleClick} className={styles.next}><p className={styles.btntext}>NEXT</p></button>
            </div>

            </div>
        
    )
}

export default gas
