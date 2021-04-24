import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default class Delete extends React.Component {
    constructor() {
        super();
        this.state = {
            s_id: null
        }
    }
    submit() {
        if (this.state.s_id) {
            axios.delete('http://localhost:4000/delete/' + this.state.s_id).then(res => {
                alert('Record deleted');
                window.location.reload(true);
            }).catch(err => {
                console.log(err);
            });
        }
        else {
            document.getElementById('id').innerHTML = '**ID should not blank.'
        }
    }

    clear(id){
        document.getElementById(id).innerHTML = ''
    }

    render() {
        return (
            <div>
                <h2>Delete Student Record</h2>
                <TextField id="outlined-basic"
                    label="ID"
                    variant="outlined"
                    onChange={(e) => { this.setState({ s_id: e.target.value }) }}
                    onKeyDown={() => this.clear('id')}
                /><br /><span id='id'></span><br /><br/>
                <Button variant="contained"
                    color="secondary"
                    onClick={() => this.submit()}
                >Delete</Button><br /><br />
            </div>
        )
    }
}