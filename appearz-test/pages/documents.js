import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { IoPersonSharp } from 'react-icons/io5'
import  objection from "../public/assets/objection.png"
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import {GrClose} from 'react-icons/gr'
import * as Utilities from '../Utilities/utilities'

function Documents() {
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
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
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
        
        <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen}
         onRequestClose={()=>setmodalopen(false)}
        //  className={styles.modal1}
         style={
             { 
                 content:{
                    //  backgroundColor:"white",
                     outline:"none",
                    //  margin:"auto",
                    // marginTop:"15rem"
                    backgroundColor: "rgb(0 0 0 / 50%)"
                 },
                 overlay:{
                     backgroundColor: "rgb(0 0 0 / 75%)"
                 }
                     
                
                
             }
         }>     <div  onRequestClose={()=>setmodalopen(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', minHeight: '15rem', maxHeight: "20rem" }}>
               <div>
               <p className="not-italic mt-5 ml-12 mr-12 pl-10 pr-10 font-normal text-sm leading-4 text-center text-gray-900">Request for NOC has been submitted. You will be updated via sms on this registered mobile number as shown below assigned with us</p>
               <p className="text-center mt-5">+91 ***** **989</p>
               <div className="flex flex-row items-center justify-center mt-8">
                            <button className="border-indigo-500 border bg-white w-full flex items-center mr-5 justify-center rounded-full py-3 ">
                                <p className="text-indigo-500 uppercase"> Cancel</p>
                            </button>
                            <button className="border-indigo-500 border bg-indigo-500 w-full flex items-center justify-center rounded-full py-3">
                                <p className="text-white uppercase">Done</p>
                            </button>
                        </div></div>
                 </div>
                   
                
            </Modal>
        </div>
    )
}

export default Documents
