import React, { useState } from 'react'
import Navbar from './navbar'
import Modal from "react-modal"
import { GrClose } from 'react-icons/gr'
import amazon from "../public/assets/amazon.png"
import Image from "next/image"
import btn from "../public/assets/Primary Button.png"
import styles from '../styles/Home.module.css'

function Requests() {
    const [modalopen, setmodalopen] = useState(false)
    const [modalopen1, setmodalopen1] = useState(false)
    const [modalopen2, setmodalopen2] = useState(false)
    const [modalopen3, setmodalopen3] = useState(false)
    const [modalopen4, setmodalopen4] = useState(false)
    const [modalopen5, setmodalopen5] = useState(false)
    

    const handleClick=()=>{
        setmodalopen3(true),
        setmodalopen2(false)
    }
    const handleClick1=()=>{
        setmodalopen4(false)
        setmodalopen5(true)
    }
    return (
        <div>
            <Navbar />
            <div className="mt-10 md:ml-40 max-w-5xl w-full md:px-0 px-10">
                <div className="flex flex-col mb-8">
                    <div className="flex flex-row items-center">
                        <p className="text-2xl text-indigo-900 font-bold ml-4">Requests</p>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-10 ">
                    <div className="flex">
                        <p className="text-xl text-gray-900 font-semibold">Security</p>
                    </div></div>

                <div className="flex flex-row flex-wrap">
                    <div onClick={() => setmodalopen(true)} className="flex flex-row items-center w-full cursor-pointer max-w-xs mr-5 mt-10">
                        <div className="h-10 w-10">
                            <img src="/assets/Group 108.png" alt="" />
                        </div>
                        <p className="ml-2 text-gray-500 font-light">Auto-approve Deliveries</p>
                    </div>
                    <div onClick={() => setmodalopen2(true)} className="flex flex-row cursor-pointer items-center w-full max-w-xs mr-5 mt-10">
                        <div className="h-10 w-10">
                            <img src="/assets/Guests200.png" alt="" />
                        </div>
                        <p className="ml-2 text-gray-500 font-light">Pre-approve Guest</p>
                    </div>
                    <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10">
                        <div className="h-10 w-10 bg-white rounded-md">
                            <img src="/assets/parking.png" alt="" />
                        </div>
                        <p className="ml-2 text-gray-500 font-light">Book Guest Parking</p>
                    </div>
                    <div onClick={() => setmodalopen4(true)} className="flex cursor-pointer flex-row items-center w-full max-w-xs mr-5 mt-10">
                        <div className="h-15 w-15 bg-white rounded-md">
                            <img src="/assets/profile.png" alt="" />
                        </div>
                        <p className="ml-2 text-gray-500 font-light">Pre-approve Visiting Help</p>
                    </div>
                    <div className="flex flex-col w-full mt-10 ">
                        <div className="flex">
                            <p className="text-xl text-gray-900 font-semibold">Society</p>
                        </div></div>

                </div>
                <div className="flex flex-row flex-wrap">
                    <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10">
                        <div className="h-10 w-10 bg-white rounded-md">
                            <img src="/assets/Maintain.png" alt="" />
                        </div>
                        <p onClick={() => setmodalopen1(true)} className="ml-2 text-gray-500 font-light">Maintenance Request</p>
                    </div>
                    <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10">
                        <div className="h-10 w-10 bg-white rounded-md">
                            <img src="/assets/Complaint.png" alt="" />
                        </div>
                        <p className="ml-2 text-gray-500 font-light">Make a complaint</p>
                    </div>
                    <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10">
                        <div className="h-15 w-15 bg-white rounded-md">
                            <img src="/assets/profile.png" alt="" />
                        </div>
                        <p className="ml-2 text-gray-500 font-light">Book Ammenities</p>
                    </div></div>
            </div>


            <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen}
                onRequestClose={() => setmodalopen(false)}
                //  className={styles.modal1}
                style={
                    {
                        content: {
                            //  backgroundColor:"white",
                            outline: "none",
                            //  margin:"auto",
                            // marginTop:"15rem"
                            backgroundColor: "rgb(0 0 0 / 15%)"
                        },
                        overlay: {
                            backgroundColor: "rgb(0 0 0 / 75%)"
                        }



                    }
                }>     <div onRequestClose={() => setmodalopen(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                    <div style={{ borderBottom: "1px solid gray" }} className="flex mt-3 ml-3 mb-5 ">
                        <p className="font-bolder mb-3">Auto-approve Deliveries</p>
                    </div>
                    <p className="text-gray-500 font-light ml-3 ">Select partners below to auto-approve any order</p>
                    <input className="w-72 h-12 mt-5 bg-gray-100 ml-3 outline-none pl-3 rounded-md" type="text" placeholder="search or type to add new entry" />
                    <p className="text-gray-900 font-bolder mt-5 ml-5">Shopping (1)</p>
                    <div className="flex flex-row flex-wrap mb-5">
                        <div className="flex flex-col h-20 w-16 ml-3 mr-2 mt-3">
                            <img src="/assets/amazon.png" />
                            <p className="ml-2 text-xs text-indigo-900">Amazon</p>
                        </div>
                        <div className="flex flex-col h-20 w-16 ml-3 mt-3">
                            <img src="/assets/flipkart.png" />
                            <p className="ml-3 text-xs text-gray-900 ">Flipkart</p>
                        </div>
                    </div>
                    <p className="text-gray-900 font-bolder mt-8 ml-5">Food (2)</p>
                    <div className="flex flex-row ">
                        <div className="flex flex-col h-20 w-16 ml-3 mr-8 mt-3">
                            <img src="/assets/zomato.png" />
                            <p className="ml-2 text-xs text-indigo-900">Zomato</p>
                        </div>
                        <div className="flex flex-col h-20 w-16 mr-8 mt-3">
                            <img src="/assets/swiggy.png" />
                            <p className="ml-3 text-xs text-gray-900">Swiggy</p>
                        </div>
                    </div>
                    <button className="mt-10 border-indigo-500 border bg-indigo-500 w-full h-10 flex items-center justify-center rounded-full py-3 box-border md:mr-4" >
                        <p className="text-white uppercase">Select</p></button>
                </div>


            </Modal>

            <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen1}
                onRequestClose={() => setmodalopen(false)}
                //  className={styles.modal1}
                style={
                    {
                        content: {
                            //  backgroundColor:"white",
                            outline: "none",
                            //  margin:"auto",
                            // marginTop:"15rem"
                            backgroundColor: "rgb(0 0 0 / 15%)"
                        },
                        overlay: {
                            backgroundColor: "rgb(0 0 0 / 75%)"
                        }



                    }
                }>     <div onRequestClose={() => setmodalopen1(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                    <div style={{ borderBottom: "1px solid gray" }} className="flex mt-3 ml-3 mb-5 ">
                        <p className="font-bolder mb-3">Auto-approve Deliveries</p>
                    </div>
                    <p className="text-gray-500 font-light ml-3 ">Select partners below to auto-approve any order</p>
                    <div className="flex">
                        <input className="w-72 h-12 mt-5 bg-gray-100 ml-3 outline-none pl-3 rounded-md" type="text" placeholder="search or type to add new entry" />
                        <div className="h-40 w-40 mt-7 cursor-pointer ml-5">
                            <Image src={btn} /></div></div>
                    <button className="mt-48 border-indigo-500 border bg-indigo-500 w-full h-10 flex items-center justify-center rounded-full py-3 box-border md:mr-4" >
                        <p className="text-white uppercase ">Add to auto-approved list</p></button>
                </div>



            </Modal>


            <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen2}
                onRequestClose={() => setmodalopen2(false)}
                //  className={styles.modal1}
                style={
                    {
                        content: {
                            //  backgroundColor:"white",
                            outline: "none",
                            //  margin:"auto",
                            // marginTop:"15rem"
                            backgroundColor: "rgb(0 0 0 / 15%)"
                        },
                        overlay: {
                            backgroundColor: "rgb(0 0 0 / 75%)"
                        }



                    }
                }>     <div onRequestClose={() => setmodalopen2(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                    <div style={{ borderBottom: "1px solid gray" }} className="flex mt-3 ml-3 mb-5 ">
                        <p className="font-bolder mb-3">Pre-approve Guests</p>
                    </div>
                    <div className="mr-5">
                    <input className="w-full h-12 bg-gray-100 ml-2 outline-none pl-3 rounded-md" type="text" placeholder="Guest Name" /></div>
                    <p className="ml-5 text-gray-600 mt-5 font-light mb-5">Allow Entry</p>
                    <div className={styles.radiobtns}>
                        <input className={styles.radio_input} value="option1"  name="myradio" id="myradio1"   type="radio" />
                        <label className={styles.radio_label} htmlFor="myradio1">Allow Once</label>
                        <input className={styles.radio_input} value="option2"  name="myradio" id="myradio2" type="radio" />
                        <label className={styles.radio_label} htmlFor="myradio2">Always</label>
                        <input className={styles.radio_input} value="option3" name="myradio" id="myradio3"  type="radio" />
                        <label className={styles.radio_label} htmlFor="myradio13">Custom</label>
                    </div>
                    <div className="flex flex-row mt-2 ml-4">
                        <div>
                    <p className="text-gray-600 mt-5 mb-2 font-light">Date of Entry:</p>
                        <p className="w-60 h-12 bg-gray-100 pl-5 pt-3 text-gray-500 rounded-md mr-5">Today, 12 June</p></div>
                        <div>
                    <p className=" text-gray-600 mt-5 mb-2 font-light">Date of Exit:</p>
                        <p className="w-60 h-12 bg-gray-100 pl-5 pt-3 text-gray-500 rounded-md">23rd June (11 Days)</p></div>
                    </div>
                    <button onClick={handleClick} className="mt-36 border-indigo-500 border bg-indigo-500 w-full h-10 flex items-center justify-center rounded-full py-3 box-border md:mr-4" >
                        <p className="text-white uppercase ">Pre-approve Entry</p></button>
                </div>



            </Modal>


            <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen3}
                onRequestClose={() => setmodalopen3(false)}
                //  className={styles.modal1}
                style={
                    {
                        content: {
                            //  backgroundColor:"white",
                            outline: "none",
                            //  margin:"auto",
                            // marginTop:"15rem"
                            backgroundColor: "rgb(0 0 0 / 15%)"
                        },
                        overlay: {
                            backgroundColor: "rgb(0 0 0 / 75%)"
                        }



                    }
                }>     <div onRequestClose={() => setmodalopen3(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                    <div style={{ borderBottom: "1px solid gray" }} className="flex mt-3 ml-3 mb-5 ">
                        <p className="font-bolder mb-3">Pre-approve Guests</p>
                    </div>
                    <div className="flex flex-row items-center flex-wrap w-full">
                    <div className="p-3 bg-gray-100 rounded-md ml-5 w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '32rem', minHeight: '13rem', maxHeight: "20rem" }}>
                        <div>
                            <p className="ml-5 text-gray-700 mt-5 font-light">Guest Name:</p>
                            <div className="flex flex-row mt-3 ml-3">
                                <img src="/assets/R.png"/>
                            <p className="ml-4 mt-2 font-extrabold text-xl text-gray-900 font-bolder">Rakesh</p>
                            </div>
                        <p className="ml-5 text-gray-700 mt-5 font-light">Allow Entry:</p>
                        <div className="flex flex-row mt-3 ml-6">
                            <p className="text-gray-900 text-sm font-semibold">12 June (Today)</p>
                            <div className="flex flex-row items-center">
                                    <div className="mx-2 ml-5">
                                        <img src="/assets/Clock.png" alt="" />
                                    </div>
                                    <p className="text-gray-900 text-sm font-semibold">All Day</p>
                                </div>
                        </div>
                        </div>
                        </div></div>
                        <div className="flex flex-row items-center justify-center mt-36">
                            <button className="border-indigo-500 border bg-indigo-500 w-full flex items-center justify-center mr-5 rounded-full py-3">
                                <p className="text-white uppercase">Modify</p>
                            </button>
                            <button className="border-indigo-500 border bg-white w-full flex items-center  justify-center rounded-full py-3 ">
                                <p className="text-indigo-500 uppercase">Cancel Request</p>
                            </button>
                        </div>
                </div>



            </Modal>



            <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen4}
                onRequestClose={() => setmodalopen4(false)}
                //  className={styles.modal1}
                style={
                    {
                        content: {
                            //  backgroundColor:"white",
                            outline: "none",
                            //  margin:"auto",
                            // marginTop:"15rem"
                            backgroundColor: "rgb(0 0 0 / 15%)"
                        },
                        overlay: {
                            backgroundColor: "rgb(0 0 0 / 75%)"
                        }



                    }
                }>     <div onRequestClose={() => setmodalopen4(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                    <div style={{ borderBottom: "1px solid gray" }} className="flex mt-3 ml-3 mb-5 ">
                        <p className="font-bolder mb-3">Pre-approve Visiting Help</p>
                    </div>
                    <div className="mr-5">
                    <input className="w-full h-12 bg-gray-100 ml-2 outline-none pl-3 rounded-md" type="text" placeholder="Select Visiting Help Category" /></div>
                    <p className="ml-5 text-gray-600 mt-5 font-light">Allow Entry</p>
                    <div className="flex flex-row mt-2 ml-4">
                        <div>
                    <p className="text-gray-600 mt-5 mb-2 font-light">Date:</p>
                        <p className="w-60 h-12 bg-gray-100 pl-5 pt-3 text-gray-500 rounded-md mr-5">Today, 12 June</p></div>
                        <div>
                    <p className=" text-gray-600 mt-5 mb-2 font-light">Time</p>
                        <p className="w-60 h-12 bg-gray-100 pl-5 pt-3 text-gray-500 rounded-md">Anytime</p></div>
                    </div>
                    <button onClick={handleClick1} className="mt-48 border-indigo-500 border bg-indigo-500 w-full h-10 flex items-center justify-center rounded-full py-3 box-border md:mr-4" >
                        <p className="text-white uppercase ">Pre-approve Entry</p></button>
                </div>



            </Modal>



            <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen5}
                onRequestClose={() => setmodalopen5(false)}
                //  className={styles.modal1}
                style={
                    {
                        content: {
                            //  backgroundColor:"white",
                            outline: "none",
                            //  margin:"auto",
                            // marginTop:"15rem"
                            backgroundColor: "rgb(0 0 0 / 15%)"
                        },
                        overlay: {
                            backgroundColor: "rgb(0 0 0 / 75%)"
                        }



                    }
                }>     <div onRequestClose={() => setmodalopen5(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                    <div style={{ borderBottom: "1px solid gray" }} className="flex mt-3 ml-3 mb-5 ">
                        <p className="font-bolder mb-3">Pre-approve Guests</p>
                    </div>
                    <div className="flex flex-row items-center flex-wrap w-full">
                    <div className="p-3 bg-gray-100 rounded-md ml-5 w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '32rem', minHeight: '13rem', maxHeight: "20rem" }}>
                        <div>
                            <p className="ml-5 text-gray-700 mt-5 font-light">Category:</p>
                            <div className="flex flex-row mt-3 ml-3">
                                <img src="/assets/R.png"/>
                            <p className="ml-4 mt-2 font-extrabold text-xl text-gray-900 font-bolder">Maid</p>
                            </div>
                        <p className="ml-5 text-gray-700 mt-5 font-light">Allow Entry:</p>
                        <div className="flex flex-row mt-3 ml-6">
                            <p className="text-gray-900 text-sm font-semibold">12 June (Today)</p>
                            <div className="flex flex-row items-center">
                                    <div className="mx-2 ml-5">
                                        <img src="/assets/Clock.png" alt="" />
                                    </div>
                                    <p className="text-gray-900 text-sm font-semibold">2:00pm to 4:00pm</p>
                                </div>
                        </div>
                        </div>
                        </div></div>
                        <div className="flex flex-row items-center justify-center mt-36">
                            <button className="border-indigo-500 border bg-indigo-500 w-full flex items-center justify-center mr-5 rounded-full py-3">
                                <p className="text-white uppercase">Modify</p>
                            </button>
                            <button className="border-indigo-500 border bg-white w-full flex items-center  justify-center rounded-full py-3 ">
                                <p className="text-indigo-500 uppercase">Cancel Request</p>
                            </button>
                        </div>
                </div>



            </Modal>

        </div>
    )
}

export default Requests
