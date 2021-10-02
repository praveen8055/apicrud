import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'
import Paymenthistory from './paymenthistory'
import Modal from 'react-modal'
import msedcl from "../public/assets/msedcl.png"
import success from "../public/assets/Sucess.png"
import  { useRouter } from 'next/router'
import * as Utilities from '../Utilities/utilities'



function electricitybill() {
    const router= useRouter()
    const handleClick4=()=>{
        window.location.reload()
    }
    const clickpush=()=>{
        router.push("/electricity")
    }
    const [modalopen, setmodalopen] = useState(false)
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    return (
        <div>
        <Navbar/>
        <Paymenthistory/>
        <div style={{display:"flex"}} className={styles.payment}>
        <Image onClick={clickpush} className="w-12 h-12 bg-white  cursor-pointer" src={backbtn}/>
           <p className="pl-5"> Electricity </p>
        </div>

        <div className={styles.ebill10}>
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
           </div>

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
                <p className={styles.subjects}>Bill Period</p>
                <p className={styles.subjects2}>Monthly</p>
                </div>
                <div className={styles.element}>
                <p className={styles.subjects}>Bill Amount before 1 Jun</p>
                <p className={styles.subjects2}>5200</p>
                </div>
                
                <div>

                </div>
            </div>
            <div className={styles.finalAmount1}>
                <div style={{display:'flex'}}>
                <p className={styles.paid1}>Amount to be paid:  <p className={styles.rupees}>Rs. 5,200</p></p>
                <button onClick={()=>setmodalopen(true)} className={styles.paymentButton}><p className={styles.proceed}>Proceed to payment</p></button>
                </div>
                <Modal isOpen={modalopen}
     onRequestClose={()=>setmodalopen(false)}
     className={styles.modal}
     style={
         { 
             content:{
                 backgroundColor:"white",
                 outline:"none"
             },
             overlay:{
                 backgroundColor: "rgb(0 0 0 / 75%)"
             }
                 
            
            
         }
     }>
         <div style={{display:"flex", justifyContent:"center"}}>
             <Image className="text-center" src={msedcl}/>
         </div>
         <p className="not-italic font-bold text-lg leading-7 text-center uppercase text-blue" style={{color:"#1D1E5E"}}>Maharashtra State Electricity Distribution Company Limited </p>
           <div className={styles.success}>
               <div style={{display:"flex"}}>
           <p className="not-italic m-4 font-bold text-xl leading-6 flex items-center" style={{color:"#1D1E5E"}}>Rs 8000</p>
           <p className="mt-4 ml-4 pl-16" style={{color: "#23B10C"}}>Success</p>
           <div className="mt-4 ml-3">
           <Image src={success}/></div>
           </div>
           </div>
           <div  className={styles.transactions}>
               <div className="m-5">
           <div className={styles.element}>
                <p className={styles.subjects}>Transaction Date and Time:</p>
                <p className={styles.subjects20}>01 Jun 2021- 3:14pm</p>
                </div>
                <div className={styles.element}>
                <p className={styles.subjects}>Transaction ID:</p>
                <p className={styles.subjects20}>24536637829</p>
                </div>
                <div style={{marginBottom:"10px"}} className={styles.element}>
                <p className={styles.subjects}>From:</p>
                <p className={styles.subjects20}><p>Jack Ryan(HDFC BANK)</p><p>jackryan@hdfcbank</p></p>
                </div>
                <div className={styles.element}>
                <p className={styles.subjects}>To:</p>
                <p className={styles.subjects20}>HP Kalpana Gas Service</p>
                </div>
                </div>
           </div>
           <div className={styles.completed}>
            <div>
                <div style={{display:"flex"}}>
                    <div className="m-4">
                    <Image src={success}/></div>
                    <p className="mt-3">Payment complete</p>
                </div>
            </div>
           <div style={{display:"flex", justifyContent:"center"}} className="flex row text-center">
                <p className=" mt-2 not-italic font-bold text-sm leading-4 text-gray-800">Issue with this payment?</p>
                <p className="text-sm mt-1.5 pl-2 cursor-pointer">Click here</p>
           </div>
           </div>
        </Modal>
                </div></div>
    </div>
    )
}

export default electricitybill
