import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    Courseslist
} from 'components';

import { courses } from 'variables/university/courses.jsx';

import axios from 'axios'; //để get API 

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [
                'device_name',
                'admin_id',
            ],
            name: [],
            position: [],
            msg: [],
            show: "show",
            username: ""
        }
    }

    async componentDidMount() {
        const devices = await axios.get(`http://localhost:3000/device/show`)
        
        this.setState({ devices: devices.data });

        
    }
    devices() {
        var IMGDIR = process.env.REACT_APP_IMGDIR;
        var devices = this.state.devices;
        console.log(devices[0].device_name);
        const devices_list = [];
        for (let i = 0; i < devices.length; i++) {
            const user= ""
            console.log("device"+devices[i].admin_id);
            // var url = `http://localhost:3000/admin/`+devices[i].admin_id;
            axios.get(`http://localhost:3000/admin/showcustomer`)
            .then(res =>{
                // console.log(devices[0].admin_id);
                // user = ""+res.data.username;
                console.log(res.data.length);
                for(var j = 0; j < res.data.length; j++){
                    // console.log("user"+res.data[j]._id );
                    if(res.data[j]._id == devices[i].admin_id){
                        // console.log(res.data[j]);
                        user = res.data[j].username
                        console.log(user);
                    }
                }
            })
          
            devices_list[i] = { avatar: IMGDIR + "/images/university/courses/course-14.jpg", name: devices[i].device_name, slug: devices[i].slug, position:  "Chaudd", length: "1 week", msg: "" };
            
        }

        return devices_list;
    }

    render() {

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
