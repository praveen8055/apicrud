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
             <div className="mt-10 md:ml-40 max-w-5xl w-full md:px-0 px-10">
                <div className="flex flex-col mb-8">
                    <div className="flex flex-row items-center">
                    <img  className="w-12 h-12 bg-white rounded-md  cursor-pointer" src='/assets/profile.png' />
                        <p className="text-2xl text-indigo-900 font-bold ml-4">Jonathan Philip</p>
                    </div>
                    
            </div>
                <div className="border-b-gray">

                <button onClick={handleClick} className={styles.document}>Personal Details</button>
                <button onClick={handleClick1} className={styles.personal}>Documents</button>
                <button onClick={handleClick2} className={styles.document}>Your Posts</button>
                <button onClick={handleClick3} className={styles.document}>Visitor Entries</button>
                </div>
                <div></div>
                
                
        <div>
        </div>
        <div className="flex flex-row items-center flex-wrap w-full mt-6 ml-4">
                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '20rem', minHeight: '12rem', maxHeight: "15rem" }}>
                        <div className="flex flex-col w-full mb-10">
                            <div className="flex flex-row">
                                <img src="/assets/objection.png"/>
                            <p className=" text-gray-800 font-extrabold mt-2 ml-2">No Objection Certificate</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button className="border-indigo-500 border bg-indigo-500 w-full flex items-center justify-center rounded-full py-3">
                                <p onClick={()=>setmodalopen(true)}  className="text-white uppercase">Request</p>
                            </button>
                        </div>
                    </div></div>
        </div>
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
    )
}

export default documents
