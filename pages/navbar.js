import React, {useEffect} from 'react'

import { FaTableTennis } from 'react-icons/fa'
import { IoHomeSharp } from 'react-icons/io5'
import { IoChatbubbles } from 'react-icons/io5'
import { FaEnvelope } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { FaWallet } from 'react-icons/fa'

import { IoPersonSharp } from 'react-icons/io5'
import { BsFillBellFill } from 'react-icons/bs'

import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router'
import * as Utilities from '../Utilities/utilities'


function Navbar() {
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
    let router = useRouter()
    const handleClick = () => {
        router.push("/payments")
    }
    const handleClick1 = () => {
        router.push("/dashboard")
    }
    const handleClick3 = () => {
        router.push("/amenities")
    }
    const handleClick4 = () => {
        router.push("/community")
    }
    const handleClick5 = () => {
        router.push("/contact")
    }
    return (
        <div>


            <div className={styles.navbar}>

                <div>
                    <div className={styles.anchorNavLogo} >

                        <img src='/assets/Logo.png' alt="not found" />
                    </div>
                </div>


                <div className={styles.anchor}>
                    <IoHomeSharp className={styles.amenities} />
                    <div onClick={handleClick1}>Home</div>
                </div>


                <div className={styles.anchor}>
                    <FaWallet className={styles.amenities} />
                    <div onClick={handleClick}>Payments</div>
                </div>

                <div className={styles.anchor}>
                    <FaEnvelope className={styles.amenities} />
                    <div>Requests</div>
                </div>

                <div className={styles.anchor}>
                    <FaTableTennis className={styles.amenities} />
                    <div onClick={handleClick3}>Amenities</div>
                </div>

                <div className={styles.anchor}>
                    <IoIosPeople className={styles.communities} />
                    <div onClick={handleClick4}>Community</div>
                </div>

                <div className={styles.anchor}>
                    <IoChatbubbles className={styles.amenities} />
                    <div onClick={handleClick5}>Contact</div>
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

                <div className={styles.select}>
                    <select className={styles.atHome}>
                        <option
                            className={styles.option} value="0">
                            At Home</option>
                        <option className={styles.option} value="1">Not At Home</option>
                    </select>

                </div>
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
            <div className={styles.mydiv}>
                <IoPersonSharp id={styles.profile} />
            </div>
            <div className={styles.hide}>
                <div className={styles.view1}>
                    <IoPersonSharp id={styles.house} />
                    <p className={styles.part1}>Jonathan Philip</p>
                    <p className={styles.part2}>view profile</p>
                </div>
                <div className={styles.back}>
                    <IoHomeSharp className={styles.house2} />
                    <p className={styles.part3}> Q 601, whdewifhdiehf vihar phase 2</p>
                    <div className={styles.check}>
                        <img src='/assets/check.png' alt="" />
                    </div>
                </div>
                <div className={styles.view31}>
                    <IoHomeSharp className={styles.house3} />
                    <p className={styles.part4}>702, Moreshwar Complex</p>
                </div>



                <div className={styles.policies}>
                    <p className={styles.stuff}>Privacy Policy</p>
                    <p className={styles.stuff}>Terms of Service</p>

                </div>
                <div>
                    <button className={styles.logout}><p className={styles.logout1}>Log Out</p></button>
                </div>
            </div>

        </div>
    )
}

export default Navbar