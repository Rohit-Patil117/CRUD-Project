import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


export default class Insert extends React.Component {
    constructor() {
        super();
        this.state = {
            s_id: '',
            s_firstname: '',
            s_lastname: '',
            s_branch: '',
            s_city: '',
            s_Aggregate: '',
            errID: '',
            errFirstname: '',
            errLastname: '',
            errBranch: '',
            errCity: '',
            errAggregate: ''
        }
        this.submit = this.submit.bind(this);
        this.clear = this.clear.bind(this);
    }

    clear(e) {
        switch (e.target.name) {
            case "id":
                this.setState({ errID: '' });
                break;
            case "firstname":
                this.setState({ errFirstname: '' });
                break;
            case "lastname":
                this.setState({ errLastname: '' });
                break;
            case "branch":
                this.setState({ errBranch: '' });
                break;
            case "city":
                this.setState({ errCity: '' });
                break;
            case "aggregate":
                this.setState({ errAggregate: '' });
                break;
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
                                this.setState({
                                    errAggregate: '**Aggregate should not blank.'
                                });
                            }
                        } else {
                            this.setState({
                                errCity: '**City should not blank.'
                            });
                        }
                    } else {
                        this.setState({
                            errBranch: '**Branch should not blank.'
                        });
                    }
                } else {
                    this.setState({
                        errLastname: '**LastName should not blank.'
                    });
                }
            } else {
                this.setState({
                    errFirstname: '**FirstName should not blank.'
                });
            }
        } else {
            this.setState({
                errID: '**ID should not blank.'
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Insert Student Record</h2>
                <TextField id="outlined-basic"
                    label="ID"
                    variant="outlined"
                    name="id"
                    onChange={(e) => { this.setState({ s_id: e.target.value }) }}
                    onKeyDown={this.clear}
                /><br /><span className="span">{this.state.errID}</span><br />

                <TextField id="outlined-basic"
                    label="Fisrt Name"
                    variant="outlined"
                    name="firstname"
                    onChange={(e) => { this.setState({ s_firstname: e.target.value }) }}
                    onKeyDown={this.clear}
                /><br /><span className="span">{this.state.errFirstname}</span><br />

                <TextField id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    name="lastname"
                    onChange={(e) => { this.setState({ s_lastname: e.target.value }) }}
                    onKeyDown={this.clear}
                /><br /><span className="span">{this.state.errLastname}</span><br />

                <TextField id="outlined-basic"
                    label="Branch"
                    variant="outlined"
                    name="branch"
                    onChange={(e) => { this.setState({ s_branch: e.target.value }) }}
                    onKeyDown={this.clear}
                /><br /><span className="span">{this.state.errBranch}</span><br />

                <TextField id="outlined-basic"
                    label="City"
                    variant="outlined"
                    name="city"
                    onChange={(e) => { this.setState({ s_city: e.target.value }) }}
                    onKeyDown={this.clear}
                /><br /><span className="span">{this.state.errCity}</span><br />

                <TextField id="outlined-basic"
                    label="Aggregate"
                    variant="outlined"
                    name="aggregate"
                    onChange={(e) => { this.setState({ s_Aggregate: e.target.value }) }}
                    onKeyDown={this.clear}
                /><br /><span className="span">{this.state.errAggregate}</span><br /><br />

                <Button variant="contained"
                    color="primary"
                    onClick={this.submit}
                >Insert</Button><br /><br />
            </div>
        );
    }
}