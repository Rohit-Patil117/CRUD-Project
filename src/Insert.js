import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import './App.css';

export default class Insert extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: [
                {
                    s_id: null,
                    s_firstname: null,
                    s_lastname: null,
                    s_branch: null,
                    s_city: null,
                    s_Aggregate: null
                }
            ]
        }
    }

    submit() {
        if (this.state.s_id) {

            if (this.state.s_firstname) {

                if (this.state.s_lastname) {

                    if (this.state.s_branch) {

                        if (this.state.s_city) {

                            if (this.state.s_Aggregate) {

                                axios.post('http://localhost:4000/insert', {
                                    s_id: this.state.s_id,
                                    s_firstname: this.state.s_firstname,
                                    s_lastname: this.state.s_lastname,
                                    s_branch: this.state.s_branch,
                                    s_city: this.state.s_city,
                                    s_Aggregate: this.state.s_Aggregate
                                }).then(res => {
                                    alert('Record Inserted' + res);
                                    window.location.reload(true);
                                }).catch(err => console.log(err));
                            }
                            else {
                                document.getElementById('aggregate').innerHTML = '**Aggregate should not blank.'
                            }

                        }
                        else {
                            document.getElementById('city').innerHTML = '**City should not blank.'
                        }

                    }
                    else {
                        document.getElementById('branch').innerHTML = '**Branch should not blank.'
                    }

                }
                else {
                    document.getElementById('lastname').innerHTML = '**LastName should not blank.'
                }

            }
            else {
                document.getElementById('firstname').innerHTML = '**FirstName should not blank.'
            }

        }
        else {
            document.getElementById('id').innerHTML = '**ID should not blank.'
        }

    }

    clear(id){
        document.getElementById(id).innerHTML = '';
    }

    render() {
        return (
            <div>
                <h2>Insert Student Record</h2>
                <TextField id="outlined-basic"
                    label="ID"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_id: e.target.value }) }}
                    onKeyDown={() => this.clear('id')}
                /><br /><span id="id"></span><br />

                <TextField id="outlined-basic"
                    label="Fisrt Name"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_firstname: e.target.value }) }}
                    onKeyDown={() => this.clear('firstname')}
                /><br /><span id="firstname"></span><br />

                <TextField id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_lastname: e.target.value }) }}
                    onKeyDown={() => this.clear('lastname')}
                /><br /><span id="lastname"></span><br />

                <TextField id="outlined-basic"
                    label="Branch"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_branch: e.target.value }) }}
                    onKeyDown={() => this.clear('branch')}
                /><br /><span id="branch"></span><br />

                <TextField id="outlined-basic"
                    label="City"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_city: e.target.value }) }}
                    onKeyDown={() => this.clear('city')}
                /><br /><span id="city"></span><br />

                <TextField id="outlined-basic"
                    label="Aggregate"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_Aggregate: e.target.value }) }}
                    onKeyDown={() => this.clear('aggregate')}
                /><br /><span id="aggregate"></span><br /><br />

                <Button variant="contained"
                    color="primary"
                    onClick={() => this.submit()}
                >Insert</Button><br /><br />
            </div>
        );
    }
}