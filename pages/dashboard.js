import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
// import styles from '../styles/Home.module.css'
import Notice from './notice'
import axios from 'axios'
import router, { useRouter } from 'next/router'
import cookie from 'react'
import { NextPageContext } from 'next'
import Popup from './popup'
import Modal from 'react-modal'


const styles = {}
function Dashboard() {
    let router = useRouter()
    const [user, setuser] = useState({
        username: "",
        email: '',
        _id: ""
    })


    const [modalopen, setmodalopen] = useState(false)
    const register = () => {

        axios.post(`${process.env.SERVER_URL}/auth/local`)
            .then(res => {
                console.log(res)
                setuser()
            }).catch(err => {
                console.log(err)
            })
    }
    const handleClick = () => {
        window.location.reload()
    }

    return (
        <div>
            <Navbar styles={{ marginLeft: "20px" }} />
            <Notice />
            <div className="mt-10 md:ml-40 max-w-5xl w-full md:px-0 px-10">
                <div className="flex flex-col mb-8">
                    <div className="flex flex-row items-center">
                        <p className="text-2xl text-indigo-900 font-light">Welcome Back,</p>
                        <p className="ml-2 text-2xl text-indigo-900 font-semibold">{`${'Chandan Bauri'}`}</p>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-2 w-full">
                        <p className="text-gray-500 font-light">Here are your updates for the day</p>
                        <div className="">
                            <p className="text-indigo-900 capitalize">View all</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row items-center flex-wrap w-full">
                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '18rem', minHeight: '15rem', maxHeight: "20rem" }}>
                        <div className="flex flex-col w-full mb-10">
                            <p className=" text-gray-800 font-extrabold">Nikhil Amazon</p>
                            <p className="text-gray-500 text-sm font-normal mt-1">Delivery Agent</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button className="border-indigo-500 border bg-indigo-500 w-full flex items-center justify-center rounded-full py-3">
                                <p className="text-white uppercase">Approve</p>
                            </button>
                            <button className="border-indigo-500 border bg-white w-full flex items-center justify-center rounded-full py-3 mt-3">
                                <p className="text-indigo-500 uppercase"> Reject</p>
                            </button>
                        </div>
                    </div>


                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between h-full mr-5 lg:mb-0 mb-5" style={{ maxWidth: '18rem', minHeight: '15rem', maxHeight: "20rem" }}>
                        <div className="flex flex-col">
                            <p className="text-gray-800 font-extrabold">Electricity Bill</p>
                            <div className="flex flex-row items-center text-sm mt-1">
                                <p className="text-gray-500 font-light">Amount Due:</p>
                                <p className="ml-1 text-gray-600">Rs.820.22</p>
                            </div>
                            <div className="flex flex-row items-center text-sm mt-5">
                                <p className="text-red-400 font-semibold">Due Today:</p>
                                <p className="ml-1 text-gray-600 font-bold">21 April 2021</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <button className="border-indigo-500 border bg-white w-full flex items-center justify-center rounded-full py-3 mt-3">
                                <p className="text-indigo-500 uppercase"> Pay now</p>
                            </button>
                        </div>
                    </div>

                    <div className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between h-full lg:mb-0 mb-5" style={{ maxWidth: '18rem', minHeight: '15rem', maxHeight: "20rem" }}>
                        <div className="flex flex-col">
                            <p className={styles.person}>Maintenance Request</p>
                            <p className="text-gray-500 font-light text-sm mt-2">Details: Water leaking from the bathroom ceiling</p>
                            <p className="text-yellow-500 mt-5">Under Review </p>
                        </div>


                        <div className="flex flex-col">
                            <button className="border-indigo-500 border bg-white w-full flex items-center justify-center rounded-full py-3 mt-3">
                                <p className="text-indigo-500 uppercase"> Reject</p>
                            </button>

                        </div>
                    </div>
                </div>


                <div className="flex flex-col w-full mt-10 mb-10">
                    <div className="flex">
                        <p className="text-xl text-indigo-900">Quick Actions</p>
                    </div>
                    <div className="flex flex-row flex-wrap">
                        <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10">
                            <div className="h-10 w-10">
                                <img src="/assets/PayBills.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Pay Bills</p>
                        </div>
                        <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10">
                            <div className="h-10 w-10">
                                <img src="/assets/Security.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Security</p>
                        </div>
                        <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10">
                            <div className="h-10 w-10">
                                <img src="/assets/Maintain.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Maintenance requests</p>
                        </div>
                        <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10">
                            <div className="h-10 w-10">
                                <img src="/assets/Entry.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Pre-approve Entry</p>
                        </div>
                        <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10">
                            <div className="h-10 w-10">
                                <img src="/assets/Complaint.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Make a complaint</p>
                        </div>
                        <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10">
                            <div className="h-10 w-10">
                                <img src="/assets/Book.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Book Guest Parking</p>
                        </div>
                    </div>
                </div>
                <p className="text-xl text-indigo-900 my-10">Visitor Entries</p>
                
                <div>
                    <div className="flex flex row">

                   
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
                        
                    </div></div>
                    </div>
                   
                         
                </div>

            </div>

       
    )
}

export default Dashboard

