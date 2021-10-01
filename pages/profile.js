import React from 'react'
import Navbar from './navbar'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { IoPersonSharp } from 'react-icons/io5'
import phoneNumber from "../public/assets/phoneNumber.png"
import { IoHomeSharp } from 'react-icons/io5'
import { useRouter } from 'next/router'
import Modal from 'react-modal'

function profile() {
    const router= useRouter()
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
    return (
        <div>
            <Navbar/>
            <div style={{display:"flex"}} className={styles.payment}>
            <IoPersonSharp style={{borderRadius:"10px"}} className="w-10 h-10 p-1 bg-white text-indigo-600 cursor-pointer" />
               <p className="pl-5"> Jonathan Philip </p>
            </div>
            <div  style={{display:"flex", position:"absolute", top:"250px", left:"160px", borderBottom:"1px solid #E1E1E1"}}>
                <button onClick={handleClick} className={styles.personal}>Personal Details</button>
                <button onClick={handleClick1} className={styles.document}>Documents</button>
                <button onClick={handleClick2} className={styles.document}>Your Posts</button>
                <button onClick={handleClick3} className={styles.document}>Visitor Entries</button>
            </div>
            <div className={styles.contactno}>
                <div className="pb-5" style={{display:"flex",width:"670px", borderBottom:"1px dashed #E0E0E0;"}}>
                    <Image src={phoneNumber}/>
                <p className="pl-5">Contact Numbers</p>
                </div>
                <div style={{display:"flex"}}>
                <p className="mt-2 p-2 not-italic font-normal text-sm leading-4 text-gray-700">Mobile:</p>
                <p className="pt-2 mt-2 pl-12 text-sm">+91 90289 90293</p>
                </div>
                <div style={{display:"flex"}}>
                <p className="p-2 not-italic font-normal text-sm leading-4 text-gray-700">Landline:</p>
                <p className="mt-2 pl-9 text-sm">+91 90289 90293</p>
                </div>

            </div>
            <div style={{position:"absolute", top:"450px", left:"175px"}}>
            <div className={styles.address1}>
            <div className="pb-5" style={{display:"flex",width:"670px", borderBottom:"1px dashed #E0E0E0;"}}>
                    <IoHomeSharp className="mt-1 text-indigo-600"/>
                <p className="pl-5">Address 1</p>
                </div>
                <p className="mt-2 p-2 not-italic font-normal text-sm leading-4 text-gray-700">Flat No:</p>
                <div className={styles.flatno}>
                   <p className="p-2">601</p> 
                </div>

                <p className={`mt-2 p-2 not-italic font-normal text-sm leading-4 text-gray-700 ${styles.building}`}>Building:</p>
                <div className={styles.flatno1}>
                   <p className="p-2">Q-Wing</p> 
                </div>
                <p className={`mt-2 p-2 not-italic font-normal text-sm leading-4 text-gray-700 ${styles.building1}`}>Society:</p>
                <div className={styles.flatno2}>
                   <p className="p-2">Jayalu Vihar Phase 2</p> 
                </div>
                <p className={`mt-2 p-2 not-italic font-normal text-sm leading-4 text-gray-700 ${styles.building2}`}>Street:</p>
                <div className={styles.flatno3}>
                   <p className="p-2">Sector 21</p> 
                </div>
                <p className={`mt-2 p-2 not-italic font-normal text-sm leading-4 text-gray-700 ${styles.building3}`}>City:</p>
                <div className={styles.flatno4}>
                   <p className="p-2">Navi Mumbai</p> 
                </div>
                <p className={`mt-2 p-2 not-italic font-normal text-sm leading-4 text-gray-700 ${styles.building4}`}>Zip Code:</p>
                <div className={styles.flatno5}>
                   <p className="p-2">41020</p> 
                </div>
                <p className={`mt-2 p-2 not-italic font-normal text-sm leading-4 text-gray-700 ${styles.building5}`}>State:</p>
                <div className={styles.flatno6}>
                   <p className="p-2">Maharashtra</p> 
                </div>
                <p className={`mt-2 p-2 not-italic font-normal text-sm leading-4 text-gray-700 ${styles.building6}`}>Ownership:</p>
                <div className={styles.flatno7}>
                   <p className="p-2">Renter</p> 
                </div>
            </div>
            </div>
        </div>
    )
}

export default profile