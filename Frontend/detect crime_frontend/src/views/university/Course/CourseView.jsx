import React from 'react';

import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';


import { Line, Doughnut } from 'react-chartjs-2';
import {

    dashboardAllProductsChart31,
    lineChartData
} from 'variables/general/dashboard-charts-4.jsx';

import {

    Row, Col,
} from 'reactstrap';

import {

} from 'components';

import axios from 'axios'; //để get API 
var mailps;

var IMGDIR = process.env.REACT_APP_IMGDIR;

class CourseProfile extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpendd = this.handleOpendd.bind(this);
        this.randomData = this.randomData.bind(this);
        this.randomDataMonth = this.randomDataMonth.bind(this);
        this.randomDataYear = this.randomDataYear.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            ultrasonic: [],
            chartData: [],
            data: [],
            time: [],
            // flag: '',
            lastvalue: 0,

            dropdownOpen: false,
        }
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    randomDataDay() {
        axios.get(`http://localhost:3000/api/showday`)
            .then(res => {
                const ultrasonics = res.data;
                console.log(ultrasonics);

                this.setState({ ultrasonic: ultrasonics });
                var data = [];
                var time = [];
                for (let i = 0; i < ultrasonics.length; i++) {
                    data[ultrasonics.length - 1 - i] = ultrasonics[i]["value"];
                    time[ultrasonics.length - 1 - i] = ultrasonics[i]["createdAt"]
                }

                // console.log(data);

                // console.log(time);

                // this.setState({ lastvalue: time })
                this.setState({ lastvalue: ultrasonics[0]["value"] })
                this.setState({ time: time })
                this.setState({ data: data })

            })
    }
    randomData() {
        axios.get(`http://localhost:3000/api/showweek`)
            .then(res => {
                const ultrasonics = res.data;
                console.log(ultrasonics);

                this.setState({ ultrasonic: ultrasonics });
                var data = [];
                var time = [];
                for (let i = 0; i < ultrasonics.length; i++) {
                    data[ultrasonics.length - 1 - i] = ultrasonics[i]["value"];
                    time[ultrasonics.length - 1 - i] = ultrasonics[i]["createdAt"]
                }

                // console.log(data);

                // console.log(time);
                this.setState({ lastvalue: ultrasonics[0]["value"] })
                this.setState({ time: time })
                this.setState({ data: data })

            })
    }
    randomDataMonth() {
        axios.get(`http://localhost:3000/api/showmonth`)
            .then(res => {
                const ultrasonics = res.data;
                console.log("This is data nguyen thuy");
                console.log(ultrasonics);

                this.setState({ ultrasonic: ultrasonics });
                var data = [];
                var time = [];
                for (let i = 0; i < ultrasonics.length; i++) {
                    data[ultrasonics.length - 1 - i] = ultrasonics[i]["value"];
                    time[ultrasonics.length - 1 - i] = ultrasonics[i]["createdAt"]
                }

                // console.log(data);

                // console.log(time);
                this.setState({ lastvalue: ultrasonics[0]["value"] })
                this.setState({ time: time })
                this.setState({ data: data })

            })
    }
    randomDataYear() {
        axios.get(`http://localhost:3000/api/showyear`)
            .then(res => {
                const ultrasonics = res.data;
                //console.log(ultrasonics);

                this.setState({ ultrasonic: ultrasonics });
                var data = [];
                var time = [];
                for (let i = 0; i < ultrasonics.length; i++) {
                    data[ultrasonics.length - 1 - i] = ultrasonics[i]["value"];
                    time[ultrasonics.length - 1 - i] = ultrasonics[i]["createdAt"]
                }

                // console.log(data);

                // console.log(time);
                this.setState({ lastvalue: ultrasonics[0]["value"] })
                this.setState({ time: time })
                this.setState({ data: data })

            })
    }

    handleOpendd(a) {
        // console.log("UIT no.1"+a);
        //var flag = a;
        console.log(a);
        //this.setState({flag: flag});
        // console.log("UIT no.2")
    }
    componentDidMount() {

        var intervalId = setInterval(() => this.randomDataYear(), 1000);
        this.setState({ intervalId })
    }


    componentWillUnmount() {
        if (navigator.platform.indexOf('Win') > -1) {
            mailps.destroy();
        }

        clearInterval(this.state.intervalId);

    }


    render() {
        const options12 = {
            legend: {
                display: false,
            },
        };
        const data12 = {
            labels: [
                'Firefox',
                'Chrome',
                'Edge',
                'Opera',
                'IE'
            ],
            datasets: [{
                data: [300, 50, 100, 75, 10],
                backgroundColor: [
                    '#ffccbc', '#ffab91', '#ff8a65', '#ffa183', '#fc8b68', '#fe825b'
                ],
                hoverBackgroundColor: [
                    '#ffccbc', '#ffab91', '#ff8a65', '#ffa183', '#fc8b68', '#fe825b'
                ]
            }]
        };
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                            <div className="page-title">
                                <div className="float-left">
                                    <h1 className="title">View Device</h1>
                                </div>
                            </div>






                            {/* <div className="col-xl-12">
                                <section className="box profile-page">
                                    <div className="content-body">
                                        <div className="col-12">
                                            <div className="row uprofile">
                                                <div className="uprofile-image col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12">
                                                    <img alt="" src={IMGDIR + "/images/university/courses/course-1.jpg"} className="img-fluid" />
                                                </div>
                                                <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                                                    <h3 className="uprofile-owner">
                                                        <a href="#!">Web Development</a>
                                                    </h3>
                                                    <button className="btn btn-primary btn-sm profile-btn">Message</button>
                                                    <button className="btn btn-primary btn-sm profile-btn">Subscribe</button>
                                                    <div className="clearfix"></div>
                                                    <p className="uprofile-title">Computer Engg.</p>
                                                    <div className="clearfix"></div>
                                                    <p>Humans can evaluate these visual elements in several situations to find a sense of balance. Humans can evaluate these visual elements in several situations to find a sense of balance.</p>
                                                    <p className="uprofile-list">
                                                        <span><i className='i-home'></i> New York, USA</span>
                                                        <span><i className='i-user'></i> 340 Contacts</span>
                                                        <span><i className='i-briefcase'></i> Tech Lead, YIAM</span>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="col-12">
                                        <hr/>
                                        <h4>Course Details:</h4>
                                        <p>Education is free in Brunei Darussalam not limited to government educational institutions but private educational institutions too. There are mainly two types of educational institutions namely government or public as well as private institutions. Several stages have to be undergone by the prospective students leading to higher qualifications such as Bachelors Degree.</p>
                                        <ul>
                                            <li>Primary School (Year 1 to 6)</li>
                                            <li>Secondary School (Year 7 to 11)</li>
                                            <li>High School [or also known as the Sixth Form Centers] (Year 12 to 13)</li>
                                            <li>Colleges (Pre-University to Diploma)</li>
                                            <li>University Level (Undergraduate, Postgraduate and Professional)</li>
                                        </ul>
                                        <p>It takes six and five years to complete the primary and secondary levels respectively. Upon completing these two crucial stages, students have freedom to progress to sixth-form centers, colleges or probably straight to employment. Ahead of times, these students will be led to undertake the university level programs in both, government and private university colleges.</p>
                                        <p>Education is free in Brunei Darussalam not limited to government educational institutions but private educational institutions too. There are mainly two types of educational institutions namely government or public as well as private institutions. Several stages have to be undergone by the prospective students leading to higher qualifications such as Bachelors Degree.</p>
                                        <ul>
                                            <li>Primary School (Year 1 to 6)</li>
                                            <li>Secondary School (Year 7 to 11)</li>
                                            <li>High School [or also known as the Sixth Form Centers] (Year 12 to 13)</li>
                                            <li>Colleges (Pre-University to Diploma)</li>
                                            <li>University Level (Undergraduate, Postgraduate and Professional)</li>
                                        </ul>
                                        <p>It takes six and five years to complete the primary and secondary levels respectively. Upon completing these two crucial stages, students have freedom to progress to sixth-form centers, colleges or probably straight to employment. Ahead of times, these students will be led to undertake the university level programs in both, government and private university colleges.</p>
                                        <div className="clearfix"></div>
                                        <hr/>
                                        <h4>Subjects:</h4>
                                        <ul>
                                            <li>Integer tincidunt.</li>
                                            <li>Praesent vestibulum dapibus nibh.</li>
                                            <li> Phasellus consectetuer vestibulum elit.</li>
                                            <li>M.B.B.S from Ski University</li>
                                            <li>Praesent vestibulum dapibus nibh.</li>
                                            <li>Proin pretium, leo ac pellentesque mollis justo.</li>
                                            <li>unc ultrices eros, sed gravida augue augue</li>
                                        </ul>
                                        <div className="clearfix"></div>
                                        <hr/>
                                        <div className="clearfix"></div>

                                    </div> }

                                    </div>
                                </section>
                            </div>
 */}


                            <div className="row margin-0">



                                <div className="col-xl-4 col-md-4 col-lg-4 col-sm-6 col-12">
                                    <div className="db_box graph_widget pie">
                                        <div className="float-left">
                                            <div className="chart-area" style={{ height: 60 + 'px', maxWidth: 100 + 'px' }}>
                                                <Doughnut height={190} data={data12} options={options12} />
                                            </div>
                                        </div>
                                        <div className="widdata float-left widdata-pie">
                                            <h2 className="widtitle">{this.state.lastvalue}</h2>
                                            <p className="widtag">Latest value </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-4 col-lg-4 col-sm-6 col-12">
                                    <div className="db_box graph_widget pie">
                                        <div className="float-left">
                                            <div className="chart-area" style={{ height: 60 + 'px', maxWidth: 100 + 'px' }}>
                                                <Doughnut height={190} data={data12} options={options12} />
                                            </div>
                                        </div>
                                        <div className="widdata float-left widdata-pie">
                                            <h2 className="widtitle">{this.state.lastvalue}</h2>
                                            <p className="widtag">Latest value </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-4 col-lg-4 col-sm-6 col-12">
                                    <div className="db_box graph_widget pie">
                                        <div className="float-left">
                                            <div className="chart-area" style={{ height: 60 + 'px', maxWidth: 100 + 'px' }}>
                                                <Doughnut height={190} data={data12} options={options12} />
                                            </div>
                                        </div>
                                        <div className="widdata float-left widdata-pie">
                                            <h2 className="widtitle">{this.state.lastvalue}</h2>
                                            <p className="widtag">Latest value </p>
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="col-12">
                                <section className="box ">
                                    <header className="panel_header row">
                                        <div className="left col-6">
                                            <h2 className="title float-left">Line Chart Data Of Ultrasonic</h2>
                                        </div>
                                        <div className="right col-6">
                                            {/* <Nav className="navigation">
<h2>Dropdown</h2>
</Nav>
*/}

                                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                <DropdownToggle caret>
                                                    Zoom
        </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={() => {
                                                        // this.setState({flag: 0});
                                                        clearInterval(this.state.intervalId);
                                                        var intervalId = setInterval(() => this.randomDataDay(), 1000);
                                                        this.setState({ intervalId })
                                                    }}>
                                                        Day
          </DropdownItem>
                                                    <DropdownItem onClick={() => {
                                                        // this.setState({flag: 0});
                                                        clearInterval(this.state.intervalId);
                                                        var intervalId = setInterval(() => this.randomData(), 1000);
                                                        this.setState({ intervalId })
                                                    }}>
                                                        Week
          </DropdownItem>
                                                    <DropdownItem onClick={() => {
                                                        // this.setState({flag: 0});
                                                        clearInterval(this.state.intervalId);
                                                        var intervalId = setInterval(() => this.randomDataMonth(), 1000);
                                                        this.setState({ intervalId })
                                                    }}>
                                                        Month
          </DropdownItem>
                                                    <DropdownItem onClick={() => {
                                                        // this.setState({flag: 0});
                                                        clearInterval(this.state.intervalId);
                                                        var intervalId = setInterval(() => this.randomDataYear(), 1000);
                                                        this.setState({ intervalId })
                                                    }}>
                                                        Year
          </DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>

                                    </header>



                                    <div className="content-body">    <div className="row margin-0">
                                        <div className="col-12">
                                            <div className="wid-vectormap">
                                                <div className="row">

                                                    <div className="col-12 col-md-12 col-lg-12 col-xl-12">

                                                        <div style={{ width: 95 + '%', 'paddingLeft': '30px' }} className="chart-container dash-4-linechart">

                                                            <Line data={lineChartData(this.state.data, this.state.time)} options={dashboardAllProductsChart31.options} height={300} />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    </div>


                                </section>

                            </div>


                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default CourseProfile;
