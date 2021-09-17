import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    Courseslist
} from 'components';

import { courses } from 'variables/university/courses.jsx';

import axios from 'axios'; //để get API 

class Course extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            devices: [
                'device_name',
                'admin_id',
            ],
            name: [],
            position: [],
            msg: [],
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/device/showdeviceuser`)
        .then(res => {
            const devices = res.data;

            this.setState({ devices: devices });

            console.log(this.state.devices);
           

        })
        // this.professors();
    }
    devices(){
        var IMGDIR = process.env.REACT_APP_IMGDIR;
        var devices = this.state.devices;
        console.log(devices.length);
        const devices_list = []; 
        for(let i = 0 ; i < devices.length; i++){
            devices_list[i]={avatar: IMGDIR+"/images/university/courses/course-14.jpg", name: devices[i].device_name, slug:devices[i].slug ,position: "Sabols2k", length: "1 week", msg: ""};
            
        
        }
        
        return devices_list;
    }

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Device</h1>
                        </div>
                    </div>

                    <a href="#!" class="btn btn-light btn-icon-split mb-3 add-button"
                                data-toggle="modal" data-target="#addUserModal">
                                    <span class="icon text-gray-600">
                                        <i class="fas fa-arrow-right"></i>
                                    </span>
                                    <span class="text">ADD NEW</span>
                                </a>
                            
           

                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Devices</h2>
                            </header>
                            <div className="content-body">    


                            <div className="row">
                                    <div className="col-12">


                                <Courseslist courses={this.devices()} />

                                    </div>
                                </div>
                            </div>
                        </section></div>



           
                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Course;
