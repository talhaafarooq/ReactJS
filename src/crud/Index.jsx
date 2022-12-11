import React, { Component, Fragment } from 'react'
import { Button, Container, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';


export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            author: null,
            posts: []
        }
    }
    async handleSubmit() {
        const post = {
            name: this.state.name,
            author: this.state.author
        }
        await axios.post('http://localhost:3001/posts', post);
        alert("post added");
        this.getAllData();
    }
    getAllData() {
        axios.get('http://localhost:3001/posts').then((response) => {
            this.setState({ posts: response.data });
        });
    }

    async handleDelete(id) {
        await axios.delete('http://localhost:3001/posts/' + id);
        alert("post deleted");
        let posts = this.state.posts.filter(posts => posts.id !== id);
        this.setState({ posts: posts });
    }

    componentDidMount() {
        this.getAllData();
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <h1>Home</h1>
                    <Form.Group>
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control id="name" onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Author</Form.Label>
                        <Form.Control id="author" onChange={(e) => { this.setState({ author: e.target.value }) }} />
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Button type="button" onClick={() => { this.handleSubmit() }}>Submit</Button>
                    </Form.Group>
                    <br /><br /><br />
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Author</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.posts ?
                                    this.state.posts.map((v) =>
                                        <tr key={v.id}>
                                            <td>{v.id}</td>
                                            <td>{v.name}</td>
                                            <td>{v.author}</td>
                                            <td>
                                                <Button variant="danger" onClick={() => { this.handleDelete(v.id) }}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
                                                <Link to={'edit/' + v.id} state={{ "id": v.id, "name": v.name, "author": v.author }} className="btn btn-info"><FontAwesomeIcon icon={faPencil} /></Link>
                                            </td>
                                        </tr>
                                    )
                                    : <tr>
                                        <td colSpan={4}>Please Wait...</td>
                                    </tr>
                            }
                        </tbody>
                    </Table>
                </Container>
            </Fragment>
        )
    }
}
