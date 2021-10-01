import React from 'react'
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

function visitorentries() {
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
        <div style={{display:"flex"}} className={styles.payment}>
        <IoPersonSharp style={{borderRadius:"10px"}} className="w-10 h-10 p-1 bg-white text-indigo-600 cursor-pointer" />
           <p className="pl-5"> Jonathan Philip </p>
        </div>
        <div  style={{display:"flex", position:"absolute", top:"250px", left:"160px", borderBottom:"1px solid #E1E1E1"}}>
                <button onClick={handleClick} className={styles.document}>Personal Details</button>
                <button onClick={handleClick1} className={styles.document}>Documents</button>
                <button onClick={handleClick2} className={styles.document}>Your Posts</button>
                <button onClick={handleClick3} className={styles.personal}>Visitor Entries</button>
            </div>
        <div className={styles.VisitorEntries100}>
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
                </div></div>

                <div className={styles.VisitorEntries200}>
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
                   </div></div></div></div>
                    
    </div>
    )
}

export default visitorentries
