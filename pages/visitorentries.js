import React, {useEffect} from 'react'
import Navbar from './navbar'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import clock from '../public/assets/Clock.png'
import Kebab from '../public/assets/Kebab menu.png'
import group18 from '../public/assets/Group 108.png'
import Guests200 from '../public/assets/Guests200.png'
import { IoPersonSharp } from 'react-icons/io5'
import { useRouter } from 'next/router'
import * as Utilities from '../Utilities/utilities'

function Visitorentries() {
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    const router= useRouter()
    const handleClick=()=>{
        router.push("/profile")
    }
    const handleClick1=()=>{
        router.push("/documents")
    }
    const handleClick2=()=>{
        router.push("/documents")
    }
    const handleClick3=()=>{
        router.push("/visitorentries")
    }
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
                <button onClick={handleClick1} className={styles.document}>Documents</button>
                <button onClick={handleClick2} className={styles.document}>Your Posts</button>
                <button onClick={handleClick3} className={styles.personal}>Visitor Entries</button>
                </div>
                <div>
                    <div className="flex lg:flex-row mt-5 flex-col ">

                   
                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col max-w-xl mb-5 mr-5 ">
                        <div className="">
                            <div className="p-3 mb-5 bg-gray-100 rounded-md w-full flex flex-row items-center ">
                                <div className="h-10 w-10">
                                    <img src="/assets/Group 108.png" alt="" />
                                </div>
                                <p className="ml-2 text-lg">Parcels</p>
                            </div>
                            <div className="flex flex-row items-center mt-8">
                                <p className="text-gray-800">Akhil Amazon</p>
                                <div className="bg-gray-600 mx-4" style={{ height: '20px', width: '2px' }} />
                                <div className="flex flex-row items-center">
                                    <p className="text-gray-800 font-light">Delivery</p>
                                    <div className="mx-2">
                                        <img src="/assets/Clock.png" alt="" />
                                    </div>
                                    <p className="text-gray-800 font-light">8:00 am</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="flex flex-row items-center mr-10 mt-5">
                                    <p className="text-gray-500 text-sm mr-2">Temp&nbsp;:</p>
                                    <p className="text-gray-800">96.7*C</p>
                                </div>
                                <div className="flex flex-row items-center mt-5">
                                    <p className="text-gray-500 text-sm mr-2">Mask&nbsp;:</p>
                                    <p className="text-green-400">ON</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <p className="text-gray-400 text-sm">Waiting at gate</p>
                            </div>

                            <div className="mt-5 flex flex-col md:flex-row  items-center justify-between">
                                <button className="border-indigo-500 border bg-indigo-500 w-full flex items-center justify-center rounded-full py-3 box-border md:mr-4" >
                                    <p className="text-white uppercase">Approve</p></button>
                                <button className="border-indigo-500 border bg-white w-full flex items-center justify-center rounded-full py-3 box-border md:mt-0 mt-5">
                                    <p className="text-indigo-500 uppercase">Reject</p>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                   

                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col max-w-xl flex-grow">
                        <div className="">
                            <div className="p-3 mb-5 bg-gray-100 rounded-md w-full flex flex-row items-center ">
                                <div className="h-10 w-10">
                                    <img src="/assets/Guests200.png" alt="" />
                                </div>
                                <p className="ml-2 text-lg">Guests</p>
                            </div>
                            <div className="flex flex-row items-center mt-8 w-full">
                                <p className="text-gray-800">Sharon</p>
                                <div className="bg-gray-600 mx-4" style={{ height: '20px', width: '2px' }} />
                                <div className="flex flex-row items-center">
                                    <div className="mx-2">
                                        <img src="/assets/Clock.png" alt="" />
                                    </div>
                                    <p className="text-gray-800 font-light">All Day</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="flex flex-row items-center mr-10 mt-5">
                                    <p className="text-gray-500 text-sm mr-2">Temp&nbsp;:</p>
                                    <p className="text-gray-800">Check At Gate</p>
                                </div>
                                <div className="flex flex-row items-center mt-5">
                                    <p className="text-gray-500 text-sm mr-2">Mask&nbsp;:</p>
                                    <p className="text-gray-900">NA</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <p className="text-green-400 text-sm">Pre-approved by you</p>
                            </div>

                            <div className="mt-5 flex flex-col md:flex-row  items-center justify-between">
                                <button className="border-gray-200 border bg-gray-200 w-full flex items-center justify-center rounded-full py-3 box-border md:mr-4" >
                                    <p className="text-gray-500 uppercase">Pre-approved</p></button>
                            </div>
                        </div>
                        
                    </div></div></div>
                </div>
       
    </div>
    )
}

export default Visitorentries
