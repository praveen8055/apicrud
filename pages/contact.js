import React, { useState, useEffect, useRef } from 'react'
import Navbar from './navbar'
import Image from 'next/image'
import Search from '../public/assets/Search.png'
import phoneNumber from '../public/assets/phoneNumber.png'
import star from '../public/assets/Star.png'
import Modal from 'react-modal'
import * as Utilities from '../Utilities/utilities'
import { useRouter } from 'next/router'
import axios from 'axios'



function Contact() {
    // const [modalopen, setmodalopen] = useState(false)
    // const [modalopen1, setmodalopen1] = useState(false)
    // const [modalopen2, setmodalopen2] = useState(false)
    // const [modalopen3, setmodalopen3] = useState(false)
    const [active, setActive] = useState(0);
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);
    const [initializing, setInintializing] = useState(false);
    // const handleClick = () => {
    //     setmodalopen1(true)
    //     setmodalopen(false)
    // }
    // const handleClick1 = () => {
    //     setmodalopen1(false)
    //     setmodalopen2(true)
    // }
    // const handleClick3 = () => {
    //     setmodalopen(false)
    //     setmodalopen3(true)
    // }
    // const clickpush1 = () => {
    //     window.location.reload()
    // }
    let router = useRouter()
    const clickpush = () => {
        router.push("/dashboard")
    }
    const onFilterClick = (index) => {

        if (typeof index == 'number') {
            setActive(index)
            switch (index) {
                case 0:
                    contactsFilteredByType('management')
                    return;
                case 1:
                    contactsFilteredByType('common_area')
                    return;
                case 2:
                    contactsFilteredByType('a_wing')
                    return;
                case 3:
                    contactsFilteredByType('b_wing')
                    return;
                case 4:
                    contactsFilteredByType('c_wing')
                    return;
                case 5:
                    contactsFilteredByType('police_station')
                    return;
                case 6:
                    contactsFilteredByType('fire_brigade')
                    return;
                case 7:
                    contactsFilteredByType('security')
                    return;
                case 8:
                    contactsFilteredByType('ambulance')
                    return;
                default:
                    contactsFilteredByType()
                    return;
            }
            return
        }
    }
    const focusOnSearchBar = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }
    const makeSearchRequest = (e) => {
        if (e.key == 'Enter') {
            // console.log('MAKING REQUEST ...')

        }
    }
    const getContacts = async () => {
        try {
            const token = localStorage.getItem('token');
            let res = await axios.get(`http://localhost:1337/contacts`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            // console.log('Contacts Data', res.data)
            return res.data
        } catch (error) {
            console.log('CONTACTS', error)
        }
    }
    const contactsFilteredByType = async (filter) => {
        setInintializing(true);
        if (filter !== '' && filter == null) {
            try {
                let allContacts = await getContacts()
                console.log('Contacts Data', allContacts)
                setResults(allContacts)
            } catch (error) {
                throw error
            }
        } else {
            try {
                const token = localStorage.getItem('token');
                let res = await axios.get(`http://localhost:1337/contacts/type/${filter}`, {
                    headers: {
                        authorization: `bearer ${token}`
                    }
                })
                console.log('Contacts Data', res.data)
                setResults(res.data)
            }
            catch (error) {
                throw error
            }
        }
        setInintializing(false)
    }
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    useEffect(() => {
        // getContacts().catch(error => { console.error(error) })
        contactsFilteredByType().catch(error => console.error())
    }, [])
    return (
        <div>
            <Navbar />
            <div className=" md:ml-40 max-w-5xl w-full md:px-0 px-10">
                <div className="flex flex-col mb-8">
                    <div className="flex flex-row items-center">
                        <img onClick={clickpush} className="w-8 h-8 bg-white  cursor-pointer" src='/assets/backbutton.png' />
                        <p className="text-2xl text-indigo-900 font-bold ml-4">Requests</p>
                    </div>
                </div>

                <div className="flex flex-col w-full mt-10 mb-10">
                    <div className="flex">
                    </div>
                    <div className="flex flex-row flex-wrap">
                        <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer"
                            onClick={() => { onFilterClick(7) }}
                        >
                            <div className="h-10 w-10">
                                <img src="/assets/Security.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Security </p>
                        </div>
                        <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer"
                            onClick={() => { onFilterClick(5) }}
                        >
                            <div className="h-10 w-10">
                                <img src="/assets/police.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Police</p>
                        </div>
                        <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer"
                            onClick={() => { onFilterClick(6) }}
                        >
                            <div className="h-10 w-10">
                                <img src="/assets/ambulance.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Fire Brigade</p>
                        </div>
                        <div className="flex flex-row items-center w-full max-w-xs mr-5 mt-10 cursor-pointer"
                            onClick={() => { onFilterClick(8) }}
                        >
                            <div className="h-10 w-10">
                                <img src="/assets/ambulance1.png" alt="" />
                            </div>
                            <p className="ml-2 text-gray-500 font-light">Ambulance</p>
                        </div>

                    </div>
                </div>

                <div className="w-full bg-white rounded-xl shadow-lg p-4">
                    <div className="flex items-center justify-start max-w-xs bg-gray-100 w-full rounded-full px-4 py-2 cursor-pointer" onClick={() => {
                        focusOnSearchBar();
                    }}>
                        <div className="h-6 w-6 ">
                            <Image src={Search} alt="" />
                        </div>
                        <input type="text" className=" bg-gray-100 text-sm ml-2 outline-none" placeholder="Search Names" ref={inputRef} onKeyDown={makeSearchRequest}>
                        </input>
                    </div>

                    <div className="flex items-center justify-between mt-10">
                        <button className={`text-xs font-sans  rounded-full border text-center py-1 w-full ${active == 0 ? 'bg-indigo-600 border-indigo-600' : 'border-gray-200 bg-gray-50'}`} style={{ maxWidth: '8rem' }}
                            onClick={() => { onFilterClick(0) }}
                        >
                            <p className={` uppercase font-thin ${active == 0 ? 'text-white' : "text-gray-600"}`}>Management</p>
                        </button>
                        <button className={`text-xs font-sans  rounded-full border text-center py-1 w-full ${active == 1 ? 'bg-indigo-600 border-indigo-600' : 'border-gray-200 bg-gray-50'}`} style={{ maxWidth: '8rem' }}
                            onClick={() => { onFilterClick(1) }}
                        >
                            <p className={` uppercase font-thin ${active == 1 ? 'text-white' : "text-gray-600"}`}>Common Area</p></button>
                        <button className={`text-xs font-sans  rounded-full border text-center py-1 w-full ${active == 2 ? 'bg-indigo-600 border-indigo-600' : 'border-gray-200 bg-gray-50'}`} style={{ maxWidth: '8rem' }}
                            onClick={() => { onFilterClick(2) }}
                        >
                            <p className={` uppercase font-thin ${active == 2 ? 'text-white' : "text-gray-600"}`}>A Wing</p></button>
                        <button className={`text-xs font-sans  rounded-full border text-center py-1 w-full ${active == 3 ? 'bg-indigo-600 border-indigo-600' : 'border-gray-200 bg-gray-50'}`} style={{ maxWidth: '8rem' }}
                            onClick={() => { onFilterClick(3) }}
                        >
                            <p className={` uppercase font-thin ${active == 3 ? 'text-white' : "text-gray-600"}`}>B Wing</p></button>
                        <button className={`text-xs font-sans  rounded-full border text-center py-1 w-full ${active == 4 ? 'bg-indigo-600 border-indigo-600' : 'border-gray-200 bg-gray-50'}`} style={{ maxWidth: '8rem' }}
                            onClick={() => { onFilterClick(4) }}
                        >
                            <p className={` uppercase font-thin ${active == 4 ? 'text-white' : "text-gray-600"}`}>C Wing</p></button>
                    </div>
                    <div className="flex items-center justify-start flex-wrap w-full mt-2">
                        {initializing ?
                            <div className="w-full py-5 text-center">
                                <p className="text-indigo-600 font-thin">Loading ...</p>
                            </div> : results.length ? results.map((item, index) => (
                                <div className="flex flex-row items-center w-full justify-between py-3" key={index}>
                                    <div className="max-w-max flex flex-col">
                                        <p className="text-gray-800 text-sm">{item.Contact_Name}</p>
                                        <p className="text-gray-600 font-thin text-xs mt-2 capitalize">{item.Contact_Type.toString().replace('_', ' ')}</p>
                                    </div>
                                    <div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full" style={{ maxWidth: '10rem' }}>
                                        <div className="h-6 w-6">
                                            <Image src={phoneNumber} />
                                        </div>
                                        <p>{item.Contact}</p>
                                        <div className="h-6 w-6">
                                            <Image src={star} />
                                        </div>
                                    </div>
                                </div>)) : <div className="w-full py-5 text-center">
                                <p className="text-indigo-600 font-thin">No Contacts Available</p>
                            </div>}

                    </div>
                </div>
                {/* <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen}
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
                    }>        <div onRequestClose={() => setmodalopen(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                        <div style={{ borderBottom: "1px solid gray" }} className="flex  ml-3 mb-5 justify-between">
                            <p className="font-bolder mb-3 mt-2">Security</p>
                            <div className="h-6 w-6 mt-2 cursor-pointer">
                                <img onClick={() => setmodalopen(false)} src="/assets/close.png" /></div>
                        </div>
                        <div className="flex flex-row flex-wrap ml-4 mt-5">
                            <div className="mr-16">
                                <div onClick={handleClick3} className="flex flex-row cursor-pointer">
                                    <div className="h-12 w-12">
                                        <img src="/assets/phoneNumber.png" /></div>
                                    <p className="mt-2 text-gray-800 text-sm">Call Security</p>
                                </div>
                                <div className="flex flex-row cursor-pointer">
                                    <div className="h-14 w-14">
                                        <img src="/assets/fire.png" /></div>
                                    <p className="mt-2 text-gray-800 text-sm">Fire Alert</p>
                                </div>
                                <div className="flex flex-row">
                                    <div className="h-14 w-14">
                                        <img src="/assets/visitorthreat.png" /></div>
                                    <p className="mt-2 text-gray-800 text-sm">Visitor Threat</p>
                                </div></div>
                            <div>
                                <div onClick={handleClick} className="flex flex-row cursor-pointer">
                                    <div className="h-14 w-14">
                                        <img src="/assets/message1.png" /></div>
                                    <p className="mt-2 text-gray-800 text-sm">Message Security</p>
                                </div>
                                <div className="flex flex-row cursor-pointer">
                                    <div className="h-14 w-14">
                                        <img src="/assets/stuckinlift.png" /></div>
                                    <p className="mt-2 text-gray-800 text-sm">Stuck In Lift</p>
                                </div>
                                <div className="flex flex-row cursor-pointer">
                                    <div className="h-14 w-14">
                                        <img src="/assets/animalthreat.png" /></div>
                                    <p className=" mt-2 text-gray-800 text-sm">Animal Threat</p>
                                </div></div>
                        </div>
                        <p className="ml-3 text-gray-800 text-sm">Other Issue</p>
                        <textarea type="text-area" rows="4" cols="30" className="pl-2 outline-none pt-2 ml-2 rounded-md mt-3 bg-gray-100 mr-3" />
                        <button className="border-gray-100 border bg-gray-300 w-full flex items-center justify-center mr-5 mt-20 rounded-full py-3">
                            <p className="text-gray-800 uppercase">SEND</p>
                        </button>
                    </div>





                </Modal>

                <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen1}
                    onRequestClose={() => setmodalopen1(false)}
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
                    }>        <div onRequestClose={() => setmodalopen1(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                        <div style={{ borderBottom: "1px solid gray" }} className="flex  ml-3 mb-5 justify-between">
                            <div className="flex flex-row">
                                <img onClick={clickpush1} className="w-6 h-6 bg-white mt-2 mr-2 cursor-pointer" src='/assets/backbutton.png' />
                                <p className="font-bolder mb-3 mt-2">Send Message To Security</p></div>
                            <div className="h-6 w-6 mt-2 cursor-pointer">
                                <img onClick={() => setmodalopen1(false)} src="/assets/close.png" /></div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <textarea type="text-area" rows="4" cols="30" className="pl-2 outline-none pt-2 ml-2 rounded-md mt-3 bg-gray-100 mr-3" />
                            <button onClick={handleClick1} className="border-indigo-500 border bg-indigo-500 w-full flex items-center justify-center mr-5 rounded-full py-3 mt-48">
                                <p className="text-white uppercase">Send To Security</p>
                            </button></div>
                    </div>





                </Modal> */}


                {/* <Modal className="flex justify-center items-center h-full w-full" isOpen={modalopen2}
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
                    }>        <div onRequestClose={() => setmodalopen2(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                        <div style={{ borderBottom: "1px solid gray" }} className="flex  ml-3 mb-5 justify-between">
                            <div className="flex flex-row">
                                <img onClick={clickpush1} className="w-6 h-6 bg-white mt-2 mr-2 cursor-pointer" src='/assets/backbutton.png' />
                                <p className="font-bolder mb-3 mt-2">Back</p></div>
                            <div className="h-6 w-6 mt-2 cursor-pointer">
                                <img onClick={() => setmodalopen2(false)} src="/assets/close.png" /></div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="/assets/jalvayu.png" />
                            <p className="text-indigo-900 text-extrabold">JALVAYU C.H.S.</p>
                            <p className="text-gray-800 text-sm mt-2">Security has been  alerted about the fire. Expect a response in few minutes.</p>
                        </div>
                        <div className="mt-5 flex flex-col md:flex-row  items-center justify-between mt-48">
                            <button className="border-indigo-500 border mr-2 ml-2 bg-white w-full flex items-center justify-center rounded-full py-3 box-border md:mt-0 mt-5">
                                <p className="text-indigo-500 uppercase">Undo cancelation</p>
                            </button>
                            <button className="border-indigo-500 border bg-indigo-500 w-full flex items-center justify-center rounded-full py-3 box-border md:mr-4" >
                                <p className="text-white uppercase">Done</p></button>
                        </div>
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
                    }>        <div onRequestClose={() => setmodalopen3(false)} className="p-3 bg-white rounded-2xl w-full flex flex-col justify-between mr-5 lg:mb-0 " style={{ maxWidth: '35rem', maxHeight: "35rem" }}>
                        <div style={{ borderBottom: "1px solid gray" }} className="flex  ml-3 mb-5 justify-between">
                            <div className="flex flex-row">
                                <img onClick={clickpush1} className="w-6 h-6 bg-white mt-2 mr-2 cursor-pointer" src='/assets/backbutton.png' />
                                <p className="font-bolder mb-3 mt-2">Call Security</p></div>
                            <div className="h-6 w-6 mt-2 cursor-pointer">
                                <img onClick={() => setmodalopen3(false)} src="/assets/close.png" /></div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="/assets/jalvayu.png" />
                            <p className="text-indigo-900 text-extrabold">JALVAYU C.H.S.</p>
                        </div>

                        <div className="flex flex-row items-center flex-wrap w-full mt-3 mb-24">
                            <div className="p-3 bg-gray-100 rounded-md ml-5 w-full flex flex-col justify-between mr-5 lg:mb-0 mb-5" style={{ maxWidth: '32rem', minHeight: '13rem', maxHeight: "20rem" }}>
                                <div>
                                    <p className="ml-5 text-gray-700 mt-3 font-light">Security Contact:</p>
                                    <div className="flex flex-row mt-3 ml-3">
                                        <p className="ml-4  font-extrabold  text-gray-900 font-bolder">Kripashankar Pandey</p>
                                    </div>
                                    <p className="ml-5 text-gray-700 mt-5 font-light">Security Number:</p>
                                    <div className="flex flex-row mt-3 ml-6">
                                        <img src="/assets/phoneNumber.png" />
                                        <p className="text-gray-900 text-sm font-semibold ml-2 mt-1">98937 82937</p>
                                    </div>
                                </div></div></div>
                    </div>





                </Modal> */}


            </div>
        </div>
    )
}

export default Contact
