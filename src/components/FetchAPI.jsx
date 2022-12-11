import React, { Component } from 'react'

export default class FetchAPI extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users?page=2').then((response) => {
            response.json().then((result) => {
                // console.log(result.data);
                this.setState({ users: result.data });
            })
        })
    }
    render() {
        return (
            <div>
                <h1>FetchAPI</h1>
                <ul>
                    {
                        this.state.users ?
                            this.state.users.map((v) =>
                                <li key={v.id}>{v.id} --- {v.first_name + ' ' + v.last_name}</li>
                            )
                            : <h1>Please Wait Data Loading...</h1>
                    }
                </ul>
            </div>
        )
    }
}
