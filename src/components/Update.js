import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default class Update extends React.Component {
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
                                axios.put('http://localhost:4000/update/' + this.state.s_id, {
                                    s_firstname: this.state.s_firstname,
                                    s_lastname: this.state.s_lastname,
                                    s_branch: this.state.s_branch,
                                    s_city: this.state.s_city,
                                    s_Aggregate: this.state.s_Aggregate
                                }).then(res => {
                                    alert('Record Updated' + res);
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

    render() {
        return (
            <div>
                <h2>Update Student Record</h2>
                <TextField id="outlined-basic"
                    label="ID"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_id: e.target.value }) }}
                /><br /><span id="id"></span><br />

                <TextField id="outlined-basic"
                    label="Fisrt Name"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_firstname: e.target.value }) }}
                /><br /><span id="firstname"></span><br />

                <TextField id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_lastname: e.target.value }) }}
                /><br /><span id="lastname"></span><br />

                <TextField id="outlined-basic"
                    label="Branch"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_branch: e.target.value }) }}
                /><br /><span id="branch"></span><br />

                <TextField id="outlined-basic"
                    label="City"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_city: e.target.value }) }}
                /><br /><span id="city"></span><br />

                <TextField id="outlined-basic"
                    label="Aggregate"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_Aggregate: e.target.value }) }}
                /><br /><span id="aggregate"></span><br /><br />

                <Button variant="contained"
                    color="primary"
                    onClick={() => this.submit()}
                >Update</Button><br /><br />
            </div>
        );
    }
}