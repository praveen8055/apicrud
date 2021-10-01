import React from 'react'
import filter from '../public/assets/Filter (1).png'
import calender from '../public/Assets/Group 86.png'
import notice from '../public/Assets/Notice Board.png'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import cylinder from '../public/assets/cylinder.png'
import success from "../public/assets/Sucess.png"
import paymenthistory1 from '../public/assets/paymenthistory.png'

function paymenthistory() {
    return (
        <div className={styles.bigNotice}>
            <div className={styles.notice}>
                <div className={styles.note1}>
                    <h1 className={styles.note}>
                        <div className="h-12 w-48 font-semibold">
                        <Image src={paymenthistory1} alt="" />
                        </div></h1>
                    <div className={styles.filter}>
                        <Image src={filter} alt="" />
                    </div>
                </div>
                <div className={styles.history}>
                    <div style={{ width: "310px", display:"flex",}} className="absolute h-14 left-0 top-0 bg-purple-100">
                        <div style={{display:'flex'}}>
                            <div className="m-2 bg-white">
                                <Image src={cylinder}/>
                            </div>
                        <p className={`pl-5 ${styles.hp}`}>HP GAS</p>
                        <p className="pt-7  pl-1 text-sm">Gas</p>
                        </div>
                        <div style={{display:"flex", position:"absolute", top:"70px", left:"15px"}}>
            <p className="not-italic font-normal pt-1 text-sm leading-4 text-gray-700">Bill Date:</p>
            <p className="pl-2 pt-0.5" style={{fontSize:"14px"}} >08 May</p>
            </div>
            <div style={{display:"flex", position:"absolute", top:"70px", left:"150px"}}>
            <p className="not-italic font-normal pt-1 text-sm leading-4 text-gray-700">Paid on:</p>
            <p className="pl-2 pt-0.5" style={{fontSize:"14px"}} >10 May</p>
            </div>
            <div style={{display:"flex", position:"absolute", top:"110px", left:"15px"}}>
            <p className="not-italic font-normal pt-1 text-sm leading-4 text-gray-700">Order ID:</p>
            <p className="pl-2 pt-0.5" style={{fontSize:"14px"}} >43ef678</p>
            </div>
            <div style={{display:"flex", position:"absolute", top:"150px", left:"15px"}}>
            <p className="not-italic font-normal pt-1 text-sm leading-4 text-gray-700">Transaction ID:</p>
            <p className="pl-2 pt-0.5" style={{fontSize:"14px"}} >43ef678789</p>
            </div>
                    </div>
                    <div className={styles.historycard}>
                        <p className="not-italic font-bold text-xl leading-6 flex items-center text-blue-800">Rs 8000</p>
                        <div style={{position:"absolute", left:"260px"}}>
                        <Image src={success}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default paymenthistory