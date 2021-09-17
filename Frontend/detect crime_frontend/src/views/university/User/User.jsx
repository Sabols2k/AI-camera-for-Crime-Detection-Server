import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    Professorslist
} from 'components';


import axios from 'axios'; //để get API 

// import { professors } from 'variables/university/professors.jsx';

class Professor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            admins: [
                'name',
                'username',
                'age'
            ],
            name: [],
            position: [],
            msg: [],
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/admin/show`)
            .then(res => {
                const admins = res.data;

                this.setState({ admins: admins });

                console.log(this.state.admins);


            })
        // this.professors();
    }
    //  professors() {
    //     var IMGDIR = process.env.REACT_APP_IMGDIR;
    //     var name = this.state.admins;
    //     var professors = [
    //         // {avatar: IMGDIR+"/images/university/professors/professor-8.jpg", name: name[0].username, position: "Admin", facebook: "#!", twitter: "#!", linkedin: "#!", msg: 'After a slow start, blogging rapidly gained in popularity, blog usage spread.'},

    //     ]
    //     for(let i =0 ; i< name.length(); i++){
    //             // professors[i].avatar=IMGDIR+"/images/university/professors/professor-8.jpg";
    //             // professors[i].name= name[i].username;
    //             console.log(i);
    //     }

    // }; 
    professors() {
        var IMGDIR = process.env.REACT_APP_IMGDIR;
        var name = this.state.admins;
        console.log(name.length);
        const professors = [];
        for (let i = 0; i < name.length; i++) {
            professors[i] = { avatar: IMGDIR + "/images/university/professors/professor-8.jpg", name: name[i].name, position: "Admin", age: name[i].age, facebook: "#!", twitter: "#!", linkedin: "#!", msg: 'After a slow start, blogging rapidly gained in popularity, blog usage spread.' };

        }

        return professors;
    }
    render() {
        var IMGDIR = process.env.REACT_APP_IMGDIR;
        var name = this.state.admins;
        console.log("abc" + name[0].username);
        // const professors = [];

        // for(let i =0 ; i< name.length(); i++){
        //     // professors[i].avatar=IMGDIR+"/images/university/professors/professor-8.jpg";
        //     // professors[i].name= name[i].username;
        //     console.log(i);
        // }
        // const name1 = "Chaau";
        // const professors = [

        //     {avatar: IMGDIR+"/images/university/professors/professor-8.jpg", name: name[0].username, position: "Admin", facebook: "#!", twitter: "#!", linkedin: "#!", msg: 'After a slow start, blogging rapidly gained in popularity, blog usage spread.'},
        //     {avatar: IMGDIR+"/images/university/professors/professor-6.jpg", name: "Blake Ross", position: "Author", facebook: "#!", twitter: "#!", linkedin: "#!", msg: 'Posts were made to appear in reverse chronological order by manually updating text based HTML.'},
        //     {avatar: IMGDIR+"/images/university/professors/professor-1.jpg", name: "Carl Vasar", position: "Admin", facebook: "#!", twitter: "#!", linkedin: "#!", msg: 'The evolution of electronic and software tools to facilitate the production and maintenance'},
        //     {avatar: IMGDIR+"/images/university/professors/professor-4.jpg", name: "Eric Short", position: "Editor", facebook: "#!", twitter: "#!", linkedin: "#!", msg: 'Blogs can be hosted by dedicated blog hosting services, on regular web hosting services.'},
        //     {avatar: IMGDIR+"/images/university/professors/professor-2.jpg", name: "Dan Vance", position: "Editor", facebook: "#!", twitter: "#!", linkedin: "#!", msg: 'Early blogs were simply manually updated components of common Websites.'},
        //     {avatar: IMGDIR+"/images/university/professors/professor-7.jpg", name: "John Terry", position: "Subscriber", facebook: "#!", twitter: "#!", linkedin: "#!", msg: 'Web site was produced and updated manually before any blogging programs were available. '},

        // ]; 
        // console.log(professors[0]);
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                            <div className="page-title">
                                <div className="float-left">
                                    <h1 className="title">Users</h1>
                                </div>
                            </div>

                            <div className="col-xl-12">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title float-left">All Users</h2>
                                    </header>
                                    <div className="content-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <Professorslist professors={this.professors()} />
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

export default Professor;
