import React from 'react'
import {Modal, Form, Button} from 'react-bootstrap'

function EditDateModal(props){
    return <div>
        <Modal show={props.show} onHide={props.onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add/Edit notes and date</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>Notes:</Form.Label>
                    <Form.Control as="textarea" rows={3} value={props.notes} onChange={props.onChange} name='notes'/>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type='date' value={props.date} onChange={props.onChange} name='date'/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                <Button variant="primary" onClick={props.save}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    </div>
}

export default EditDateModal