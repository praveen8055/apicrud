import React from 'react'
import Navbar from './navbar'
import backbtn from '../public/assets/backbutton.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { IoPersonSharp } from 'react-icons/io5'
import phoneNumber from "../public/assets/phoneNumber.png"
import { IoHomeSharp } from 'react-icons/io5'
import router, { useRouter } from 'next/router'
import {AiFillLike} from "react-icons/ai"
import {BiMessage} from "react-icons/bi"
import {FaShare} from "react-icons/fa"
import Notice from "./notice"
function community() {
    const router= useRouter()
    const handleClick=()=>{
        router.push("/yourposts")
    }
    return (
        <div>
            <Navbar/>
            <Notice/>
            <div style={{display:"flex"}} className={styles.payment}>
               <p> Community </p>
            </div>
            <div  style={{display:"flex", position:"absolute", top:"250px", left:"160px"}}>
                <button  className={styles.personal}>All Posts</button>
                <button  className={styles.document}>Discussions</button>
                <button  className={styles.document}>Announcements</button>
                <button onClick={handleClick} className={styles.document}>Your Posts</button>
            </div>
            <div className={styles.posts}>
                <p className="not-italic font-bold text-sm leading-4 text-gray-900 ml-8 mt-2">Ram Kishore</p>
                <p className="not-italic font-normal text-sm leading-4 text-gray-900 mb-5 mt-1 ml-8">D 404</p>
                <p className="static h-8 pl-3 left-0 top-0 not-italic font-normal text-sm leading-4 text-gray-700">Please contact if anybody is in the need of homecooked meals. We are providing meals for all Javalu residents</p>
                <div style={{display:"flex", paddingTop:"10px"}}> 
                    <AiFillLike className="text-indigo-800 ml-3 mr-2"/>
                    <p className="not-italic font-normal text-sm leading-4 text-gray-900 mr-5">19 Likes</p>
                    <BiMessage className="mr-2" />
                    <p className="not-italic font-normal text-sm leading-4 text-gray-900 mr-5">19 comments</p>
                    <FaShare className="mr-2 text-indigo"/>
                    <p className="not-italic font-normal text-sm leading-4 text-gray-900 mr-5">Share</p>
                
                </div>
            </div>
        </div>
    )
}

export default community
