import React from 'react'
import axios from 'axios'

export default class Fetch extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/show').then((res) => {
            this.setState({ arr: res.data });
            console.log("data received");
        }).catch((err) => {
            console.log(err);
        });

    }

    render() {
        return (
            <div>
                <h3>STUDENT DATA - 2021/22</h3>
                <table border="2">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Branch</th>
                            <th>City</th>
                            <th>Aggregate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.arr.map((el, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{el.s_id}</td>
                                <td>{el.s_firstname}</td>
                                <td>{el.s_lastname}</td>
                                <td>{el.s_branch}</td>
                                <td>{el.s_city}</td>
                                <td>{el.s_Aggregate}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        );
    }
}