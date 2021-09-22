import React, {useState, useEffect} from 'react'
import paybills from '../public/Assets/PayBills.png'
import Security from '../public/Assets/Security.png'
import Maintain from '../public/Assets/Maintain.png'
import Entry from '../public/Assets/Entry.png'
import Complaint from '../public/Assets/Complaint.png'
import Book from '../public/Assets/Book.png'
import Navbar from './Navbar'
import parcel from '../public/Assets/Parcel.png'
import clock from '../public/Assets/Clock.png'
import Guests from '../public/Assets/Guests.png'
import Kebab from '../public/Assets/Kebab menu.png'
import group18 from '../public/Assets/Group 108.png'
import Guests200 from '../public/Assets/Guests200.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Notice from './Notice'
import axios from 'axios'
import router, {useRouter} from 'next/router'
import cookie from 'react'
import {NextPageContext} from 'next'
import Popup from './popup'
import Modal from 'react-modal'
import amazonlogo from '../public/assets/amazonlogo.png'


function dashboard() {
    let router =useRouter()
    const [user, setuser] = useState({
        username:"",
        email:'',
        _id:""
    })
    const [modalopen, setmodalopen] = useState(false)
    const register=()=>{

        axios.post("http://localhost:1337/auth/local")
        .then(res=>{
            console.log(res)
            setuser()
        }).catch(err=>{
            console.log(err)
        })
    }
    const handleClick=()=>{
        window.location.reload()
    }
  
    return (
        <div>
             <Navbar/>
             <Notice/>
        <div className={styles.intro}>
            <p id={styles.welcome}>Welcome Back,  </p>
            <p id={styles.username}>{user.username}</p>
           
        </div>
        <p className={styles.update}>Here are your updates for the day</p>
        <div>
            <p className={styles.viewAll}>View all</p>
            
        </div>
            
        <div className={styles.allcards}>
            
        <div onClick={()=>setmodalopen(true)} className={styles.cards}>
        <Modal isOpen={modalopen}
         onRequestClose={()=>setmodalopen(false)}
         className={styles.modal}
         style={
             {
                 content:{
                     backgroundColor:"white",
                     outline:"none"
                 },
                
             }
         }>
                <Image src={amazonlogo}/>
                <h1>Akhil amazon</h1>
                <p className={styles.delivery}>Delivery</p>
                <div className={styles.clock}>
                    <Image src={clock} alt="" />
                    </div>
                    <p className={styles.time4}>8:00 am</p>
                <div>
                <button onClick={handleClick}>close</button>
                </div>
            </Modal>
            <p className={styles.person}>Nikhil Amazon</p>
            <p className={styles.role1}>Delivery Agent</p>
           
            <button  className={styles.approve}>
                <p className={styles.btntext}>Approve</p>
            </button>
            <button className={styles.reject}>
               <p className={styles.btntext1}> Reject</p>
            </button>
        </div>
       

        <div  className={styles.cards1}>
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
                <Image  src={paybills} alt="" />
                </div>
                <p className={styles.paytext}>Pay Bills</p>
            </div>

            <div className={styles.PayBills1}>
                <div className={styles.paybills}>
                <Image  src={Security} alt="" />
                </div>
                <p className={styles.paytext}>Security</p>
            </div>

            <div className={styles.PayBills2}>
                <div className={styles.paybills}>
                <Image   src={Maintain} alt="" />
                </div>
                <p className={styles.paytext}>Maintenance requests</p>
            </div>

            <div className={styles.PayBills3}>
                <div>
                <Image   src={Entry} alt="" />
                </div>
                <p className={styles.paytext}>Pre-approve Entry</p>
            </div>

            <div className={styles.PayBills4}>
                <div className={styles.paybills}>
                <Image   src={Complaint} alt="" />
                </div>
                <p className={styles.paytext}>Make a complaint</p>
            </div>

            <div className={styles.PayBills5}>
                <div className={styles.paybills}>
                <Image  src={Book} alt="" />
                </div>
                <p className={styles.paytext}>Book Guest Parking</p>
            </div>
        </div>


            <p className={styles.visitor}>Visitor Entries</p>
        <div className={styles.VisitorEntries}>
                <div className={styles.parcels}>
                    <div className={styles.division}>
                        <div  id={styles.parcel10}>
                    <Image  src={group18} alt="" />
                        </div>
                    <p id={styles.parcel1}>Parcels</p>
                    </div>
                    <div className={styles.info}>
                    <p className={styles.name11}>Akhil Amazon</p>
                    <p className={styles.delivery}>Delivery</p>
                    <div className={styles.clock}>
                    <Image src={clock} alt="" />
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
                    <Image src={Guests200} alt="" />
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
                   <Image src={Kebab} alt="" />
                   </div>
                    </div>
                </div>
        </div>

       
        </div>
    )
}

export default dashboard
