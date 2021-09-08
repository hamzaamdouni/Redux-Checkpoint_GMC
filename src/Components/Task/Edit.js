import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../../JS/actions/todo";
import './Task.css'


function Edit({task}) {
    const [show, setShow] = useState(false);
    const [newText, setNewtext] = useState(task.text)
    
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
    <Button variant="primary" onClick={handleShow} className='TaskEdit' >
        Edit
    </Button>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <input value={newText} onChange={(e)=>setNewtext(e.target.value)}/>
        </Modal.Header>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={()=>{dispatch(editTask(task.id,newText));handleClose()}}>
            Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
    </>
    ); 
}

    export default Edit;