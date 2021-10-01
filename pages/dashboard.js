import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import styles from '../styles/Home.module.css'
import Notice from './notice'
import axios from 'axios'
import router, { useRouter } from 'next/router'
import cookie from 'react'
import { NextPageContext } from 'next'
import Popup from './popup'
import Modal from 'react-modal'



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
            <Navbar styles={{marginLeft:"20px"}} />
            <Notice />
            <div>
                <p id={styles.welcome}>Welcome Back,  </p>
                <p id={styles.username}>{user.username}</p>

            </div>
            <p className={styles.update}>Here are your updates for the day</p>
            <div>
                <p className={styles.viewAll}>View all</p>

            </div>

            <div className={styles.allcards}>

                <div  className={styles.cards}>
                   
                       
                    <p className={styles.person}>Nikhil Amazon</p>
                    <p className={styles.role1}>Delivery Agent</p>

                    <button className={styles.approve}>
                        <p className={styles.btntext}>Approve</p>
                    </button>
                    <button className={styles.reject}>
                        <p className={styles.btntext1}> Reject</p>
                    </button>
                </div>


                <div className={styles.cards1}>
                    <p className={styles.person}>Electricity Bill</p>
                    <div className={styles.due}>
                        <p className={styles.role1}>Amount Due</p>
                        <p className={styles.price}>Rs.820.22</p>
                    </div>
                    <div className={styles.due}>
                        <p className={styles.today}>Due Today:</p>
                        <p className={styles.date}>21 April 2021</p>
                    </div>
                    <button className={styles.reject}>
                        <p className={styles.btntext1}> Pay now</p>
                    </button>
                </div>

                <div className={styles.cards2}>
                    <p className={styles.person}>Maintenance Request</p>
                    <p className={styles.role1}>Details: Water leaking from the bathroom ceiling</p>
                    <p className={styles.today1}>Under Review </p>

                    <button className={styles.reject}>
                        <p className={styles.btntext1}> Reject</p>
                    </button>
                </div>
            </div>

            <div className={styles.quickActions}>
                <p className={styles.quick}>Quick Actions</p>

                <div className={styles.PayBills}>
                    <div className={styles.paybills}>
                        <img src="/assets/PayBills.png" alt="" />
                    </div>
                    <p className={styles.paytext}>Pay Bills</p>
                </div>

                <div className={styles.PayBills1}>
                    <div className={styles.paybills}>
                        <img src="/assets/Security.png" alt="" />
                    </div>
                    <p className={styles.paytext}>Security</p>
                </div>

                <div className={styles.PayBills2}>
                    <div className={styles.paybills}>
                        <img src="/assets/Maintain.png" alt="" />
                    </div>
                    <p className={styles.paytext}>Maintenance requests</p>
                </div>

                <div className={styles.PayBills3}>
                    <div>
                        <img src="/assets/Entry.png" alt="" />
                    </div>
                    <p className={styles.paytext}>Pre-approve Entry</p>
                </div>

                <div className={styles.PayBills4}>
                    <div className={styles.paybills}>
                        <img src="/assets/Complaint.png" alt="" />
                    </div>
                    <p className={styles.paytext}>Make a complaint</p>
                </div>

                <div className={styles.PayBills5}>
                    <div className={styles.paybills}>
                        <img src="/assets/Book.png" alt="" />
                    </div>
                    <p className={styles.paytext}>Book Guest Parking</p>
                </div>
            </div>


            <p className={styles.visitor}>Visitor Entries</p>
            <div className={styles.VisitorEntries}>
                <div className={styles.parcels}>
                    <div className={styles.division}>
                        <div id={styles.parcel10}>
                            <img src="/assets/Group 108.png" alt="" />
                        </div>
                        <p id={styles.parcel1}>Parcels</p>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.name11}>Akhil Amazon</p>
                        <p className={styles.delivery}>Delivery</p>
                        <div className={styles.clock}>
                            <img src="/assets/Clock.png" alt="" />
                        </div>
                        <p className={styles.time4}>8:00 am</p>
                    </div>
                    <div className={styles.perInfo}>
                        <p className={styles.delivery1}>Temp:</p>
                        <p className={styles.name12}>96.7*C</p>
                        <p className={styles.delivery2}>Mask :</p>
                        <p className={styles.ON}>ON</p>
                    </div>
                    <p className={styles.delivery3}>Waiting at gate</p>
                    <div className={styles.buttons}>
                        <button className={styles.yes}><p className={styles.btntext}>Approve</p></button>
                        <button className={styles.nope}><p className={styles.btntext1}>Reject</p></button>
                    </div>
                </div>
            </div>
            <div className={styles.VisitorEntries1}>
                <div className={styles.parcels}>
                    <div className={styles.division}>
                        {/* check this shit right here */}
                        <div id={styles.parcel10}>
                            <img src="/assets/Guests200.png" alt="" />
                        </div>
                        <p id={styles.parcel1}>Guests</p>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.name11}>Sharon</p>
                        <p className={styles.delivery}>All day</p>
                    </div>
                    <div className={styles.perInfo}>
                        <p className={styles.delivery1}>Temp:</p>
                        <p className={styles.name12}>Check at Gate</p>
                        <p className={styles.delivery23}>Mask :</p>
                        <p className={styles.ON1}>NA</p>
                    </div>
                    <p className={styles.delivery3}>Pre-approved by you</p>
                    <div >
                        <button className={styles.pre}><p className={styles.pretext}>Pre-approved</p></button>
                        <div className={styles.kebab}>
                            <img src="/assets/Kebab menu.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dashboard
