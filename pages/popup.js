import React , {useState} from 'react'
import Modal from 'react-modal'
import styles from '../styles/Home.module.css'

function popup() {
    const [modalopen, setmodalopen] = useState(false)
    return (
        <div>
            <button onClick={()=>setmodalopen(true)}>Open modal
            <Modal isOpen={modalopen} onRequestClose={()=>setmodalopen(false)}>
                <h1>Hello</h1>
                <p>good day</p>
            </Modal>
            </button>
        </div>
    )
}

export default popup
