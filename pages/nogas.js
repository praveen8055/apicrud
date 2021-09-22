import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'

function nogas() {
    return (
        <div>
            <Navbar/>
            <div className={styles.payment}>
                Gas
            </div>
            <div className={styles.ebill20}>
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
               <button  className={styles.next1}><p className={styles.btntext}>NEXT</p></button>

            <div className={styles.smallnote1}>
                    <p className="absolute w-100 p-5 h-4 not-italic font-semibold text-sm leading-4 text-gray-900">No upcoming Gas bills</p>
                    <p className={styles.congrats}>Congratulations! You have already paid your last month's bill</p>
                    <p className={styles.lastbill}>View Last Bill</p>
                </div>
            </div>
            </div>
        
    )
}

export default nogas
