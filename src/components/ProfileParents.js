import React, { Component } from 'react'
import Profile from './Profile'
import {Button} from 'react-bootstrap'
export default class ProfileParents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Person: { fullName:'Chedli Balti',bio:'S\'up this is my portfolio exemple', imgSrc:'https://webcongnghe247.com/wp-content/uploads/2021/10/c5313db21e65af45280b7dfb258b8631749d7cb3r1-707-1000v2_uhq-566x800.jpg', profession:'ingénieur informatique'},
            show: false
        }
    }

    toggleShow = () => {
        this.setState({ show: !this.state.show})
    }
    render() {
        return (
            <div>
                <Button className="d-flex mybtn" variant="primary" onClick={this.toggleShow}>
                {this.state.show ? 'Hide profile ' : 'Show profile '}
                </Button>
                {this.state.show && <Profile person={this.state.Person}/>}
            </div>
        )
    }
}
