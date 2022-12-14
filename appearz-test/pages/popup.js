import React , {useState, useEffect} from 'react'
import Modal from 'react-modal'
import * as Utilities from '../Utilities/utilities'

function Popup() {
    useEffect(() => {
        Utilities.isLoggedIn().catch(error => console.error(error))
    }, [])
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

export default Popup
