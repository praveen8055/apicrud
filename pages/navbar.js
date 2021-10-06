import React, { useState, useEffect } from 'react'

import { FaTableTennis } from 'react-icons/fa'
import { IoHomeSharp } from 'react-icons/io5'
import { IoChatbubbles } from 'react-icons/io5'
import { FaEnvelope } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { FaWallet } from 'react-icons/fa'

import { IoPersonSharp } from 'react-icons/io5'
import { BsFillBellFill } from 'react-icons/bs'
import Modal from "react-modal"
import styles from '../styles/Home.module.css'
import Link from "next/link"
import { useRouter } from 'next/router'
import * as Utilities from '../Utilities/utilities'
import { useAuthContext } from '../Contexts/Auth'


function Navbar() {
    const logout = () => {
        let token = localStorage.getItem("token")
        console.log(token)
        localStorage.removeItem("token")
        router.push("/login")
    }
    const [profile, setprofile] = useState(false)
    const router = useRouter(
    )
    const handleClick = () => {

    }
    const AuthContext = useAuthContext()
    const { user } = AuthContext
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    return (
        <div>

            <div className={styles.Navbar}>


                <div style={{ width: "120px" }} className="fixed h-full bg-indigo-900 md:flex flex-col hidden">

                    <div>
                        <div className="flex flex-col w-full justify-center items-center py-4 mb-3  cursor-pointer"  >

                            <img src='/assets/Logo.png' alt="not found" />
                        </div>
                    </div>

                    <Link href="/dashboard">
                        {router.route === "/dashboard" ? (
                            <div className="flex flex-col w-full justify-center items-center py-4 mb-2 bg-white cursor-pointer" >
                                <IoHomeSharp className="text-indigo-900" />
                                <div className="text-indigo-900 font-extrabold">Home</div>
                            </div>) : (
                            <div className="group flex flex-col w-full justify-center items-center mb-2 py-4 bg-indigo-900 hover:bg-white cursor-pointer" >
                                <IoHomeSharp className="text-white group-hover:text-indigo-900" />
                                <div className="text-white font-extrabold group-hover:text-indigo-900">Home</div></div>
                        )
                        }
                    </Link>

                    <Link href="/payments">
                        {router.route === "/payments" ? (
                            <div className="flex flex-col w-full justify-center items-center py-4 mb-2 bg-white cursor-pointer" >
                                <FaWallet className="text-indigo-900" />
                                <div className="text-indigo-900 font-extrabold">Payments</div>
                            </div>) : (
                            <div className="group flex flex-col w-full justify-center items-center mb-2 py-4 bg-indigo-900 hover:bg-white cursor-pointer" >
                                <FaWallet className="text-white group-hover:text-indigo-900" />
                                <div className="text-white font-extrabold group-hover:text-indigo-900">Payments</div></div>
                        )
                        }
                    </Link>



                    <Link href="/requests">
                        {router.route === "/requests" ? (
                            <div className="flex flex-col w-full justify-center items-center mb-2 py-4 bg-white cursor-pointer" >
                                <FaEnvelope className="text-indigo-900" />
                                <div className="text-indigo-900 font-extrabold">Requests</div>
                            </div>) : (
                            <div className="group flex flex-col w-full justify-center mb-2 items-center py-4 bg-indigo-900 hover:bg-white cursor-pointer" >
                                <FaEnvelope className="text-white group-hover:text-indigo-900" />
                                <div className="text-white font-extrabold group-hover:text-indigo-900">Requests</div></div>
                        )
                        }
                    </Link>


                    <Link href="/amenities">
                        {router.route === "/amenities" ? (
                            <div className="flex flex-col w-full justify-center items-center py-4 mb-2 bg-white cursor-pointer" >
                                <FaTableTennis className="text-indigo-900 " />
                                <div className="text-indigo-900 font-extrabold">Amenities</div>
                            </div>) : (
                            <div className="group flex flex-col w-full justify-center items-center mb-2 py-4 bg-indigo-900 hover:bg-white cursor-pointer" >
                                <FaTableTennis className="text-white group-hover:text-indigo-900" />
                                <div className="text-white font-extrabold group-hover:text-indigo-900">Amenities</div></div>
                        )
                        }
                    </Link>


                    <Link href="/community">
                        {router.route === "/community" ? (
                            <div className="flex flex-col w-full justify-center items-center py-4 mb-2 bg-white cursor-pointer" >

                                <IoIosPeople className="text-indigo-900" />
                                <div className="text-indigo-900 font-extrabold">Community</div>
                            </div>) : (
                            <div className="group flex flex-col w-full justify-center mb-2 items-center py-4 bg-indigo-900 hover:bg-white cursor-pointer" >
                                <IoIosPeople className="text-white group-hover:text-indigo-900" />
                                <div className="text-white font-extrabold group-hover:text-indigo-900">Community</div></div>
                        )
                        }
                    </Link>


                    <Link href="/contact">
                        {router.route === "/contact" ? (
                            <div className="flex flex-col w-full justify-center mb-2 items-center py-4 bg-white cursor-pointer" >
                                <IoChatbubbles className="text-indigo-900" />
                                <div className="text-indigo-900 font-extrabold">Contact</div>
                            </div>
                        ) : (
                            <div className="group flex flex-col w-full mb-2 justify-center items-center py-4 bg-indigo-900 hover:bg-white cursor-pointer" >
                                <IoChatbubbles className="text-white group-hover:text-indigo-900" />
                                <div className="text-white font-extrabold group-hover:text-indigo-900">Contact</div>
                            </div>
                        )}
                    </Link>
                </div>
            </div>

            <div className={styles.searchbar}>
                <div className={styles.search}>
                    <div className={styles.searching}>
                        <img src='/assets/Search.png' alt="" />
                    </div>
                    <input type="text" className={styles.search1} placeholder="Search for bill payments, amenities, contacts">
                    </input>
                </div>

                {/* <div className={styles.select}>
                    <select className={styles.atHome}>
                        <oipton
                            className={styles.option} value="0">
                            At Home</option>
                        <option className={styles.option} value="1">Not At Home</option>
                    </select>

                </div> */}
                <div>
                    <button className={styles.emergency}>
                        <img id={styles.call} src='/assets/Call.png' alt="" />
                        <p className={styles.emer}>Emergency</p>
                    </button>
                </div>
            </div>
            <div>
                <BsFillBellFill id={styles.bell} />
            </div>
            <button onClick={() => setprofile(prev => !prev)}>
                <div className={styles.mydiv}>
                    <IoPersonSharp id={styles.profile} />
                </div>
            </button>
            {profile &&
                <div className="absolute right-16 top-20  z-30 bg-white rounded-md filter drop-shadow-2xl p-4 box-border flex flex-col">
                    <div className="flex flex-row">
                        <IoPersonSharp className="mt-4 ml-2 text-gray-400 h-8 w-8 pt-1 bg-gray-100 pb-2 rounded-md " />
                    <p className="pl-5 pt-3 ">{user.username}</p>
                    <p onClick={handleClick} className="font-light text-gray-600 cursor-pointer font-sm pt-3 pl-8 pr-2">view profile</p>
                </div>
                <div className="flex bg-indigo-50 h-12 mt-4 mr-2 ml-2 rounded-md" >
                    <IoHomeSharp className="text-indigo-800 mt-3 ml-3" />
                    <p className="flex items-left justify-left w-44 text-sm pl-4 mt-1"> Q 601, Jayalu vihar phase 2</p>
                    <div className="ml-8 mt-3" >
                        <img src='/assets/check.png' alt="" />
                    </div>
                </div>
                <div className="flex border-b-gray-50 border-b-solid border-b-1 border-b-gray-500" >
                    <IoHomeSharp className="mt-4  ml-5" />
                    <p className="ml-4 mt-3 text-sm text-gray-500 mb-5 ">702, Moreshwar Complex</p>
                </div>
                <div className="flex ml-4">
                    <p className="text-xs text-gray-400 mr-16">Privacy Policy</p>
                    <p className="text-xs text-gray-400">Terms of Service</p>
                </div>
                    <button onClick={logout} className="border-indigo-500 border bg-white w-full mt-5 flex items-center justify-center rounded-full py-2 mb-5 ">
                        <p className="text-indigo-500 uppercase">Log Out</p>
                    </button>
                </div>}







        </div>
    )
}

export default Navbar