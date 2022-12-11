import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Edit() {
    // const params = useParams();
    // const id = params.id;
    const location = useLocation();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id);
    const [name, setName] = useState(location.state.name);
    const [author, setAuthor] = useState(location.state.author);

    const handleUpdate = () => {
        const post = { name, author };
        // console.log(post);
        axios.patch('http://localhost:3001/posts/' + id, post);
        alert("post updated");
        navigate('/');
    }

    return (
        <div>
            <Container>
                <h1>Edit</h1>
                <Form.Group>
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control id="name" onChange={(e) => { setName(e.target.value) }} defaultValue={name} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Author</Form.Label>
                    <Form.Control id="author" onChange={(e) => { setAuthor(e.target.value) }} defaultValue={author} />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Button type="button" onClick={() => handleUpdate()}>Submit</Button>
                </Form.Group>
            </Container>
        </div>
    )
}