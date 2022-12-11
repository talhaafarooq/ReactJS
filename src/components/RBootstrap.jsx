import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default class RBootstrap extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show });
    }
    render() {
        return (
            <div>
                <h1>RBootstrap</h1>
                <Button>Click Here</Button>
                <br /><br />
                <Button onClick={() => { this.handleModal() }}>Modal</Button>
                <Modal show={this.state.show} onHide={() => { this.handleModal() }}>
                    <Modal.Header closeButton>Modal Header</Modal.Header>
                    <Modal.Body>Modal Body</Modal.Body>
                    <Modal.Footer>Modal Footer
                        <Button variant='danger' onClick={() => { this.handleModal() }}>Close</Button>
                        <Button variant='primary'>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }
}
