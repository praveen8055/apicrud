import React, {useState} from 'react'
import Navbar from './navbar'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { IoPersonSharp } from 'react-icons/io5'
import  objection from "../public/assets/objection.png"
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import {GrClose} from 'react-icons/gr'

function documents() {
    const router=useRouter()
    const handleClick=()=>{
        router.push("/profile")
    }
    const handleClick1=()=>{
        router.push("/documents")
    }
    const handleClick2=()=>{
        router.push("/yourposts")
    }
    const handleClick3=()=>{
        router.push("/visitorentries")
    }
    const handleClick4=()=>{
        window.location.reload()
    }
    const [modalopen, setmodalopen] = useState(false)
    return (
        <div>
             <Navbar/>
        <div style={{display:"flex"}} className={styles.payment}>
        <IoPersonSharp style={{borderRadius:"10px"}} className="w-10 h-10 p-1 bg-white text-indigo-600 cursor-pointer" />
           <p className="pl-5"> Jonathan Philip </p>
        </div>
        <div  style={{display:"flex", position:"absolute", top:"250px", left:"150px", borderBottom:"1px solid #E1E1E1"}}>
                <button onClick={handleClick} className={styles.document}>Personal Details</button>
                <button  onClick={handleClick1}  className={styles.personal}>Documents</button>
                <button onClick={handleClick2} className={styles.document}>Your Posts</button>
                <button onClick={handleClick3} className={styles.document}>Visitor Entries</button>
            </div>
        <div className={styles.certificate}>
            <div style={{display:"flex"}}>
                <Image src={objection}/>
            <p className="pl-2">No Objection Certificate</p>
            </div>
            <button  onClick={()=>setmodalopen(true)} className={styles.approve2}>
                <p className={styles.btntext}>Request</p>
            </button>
            <Modal isOpen={modalopen}
         onRequestClose={()=>setmodalopen(false)}
         className={styles.modal1}
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
                <button className={styles.close} onClick={handleClick4}>< GrClose/></button>
               <p className="not-italic  mt-8 ml-12 mr-12 pl-10 pr-10 font-normal text-sm leading-4 text-center text-gray-900">Request for NOC has been submitted. You will be updated via sms on this registered mobile number as shown below assigned with us</p>
               <p className="text-sm mt-5 text-center ">+91 ***** **989</p>
               <button className={styles.cancel}><p className={styles.btntext1}>Cancel</p></button>
               <button className={styles.done}><p className={styles.btntext}>Done</p></button>
                <div>
                </div>
            </Modal>
        </div>
        </div>
    )
}

export default documents
