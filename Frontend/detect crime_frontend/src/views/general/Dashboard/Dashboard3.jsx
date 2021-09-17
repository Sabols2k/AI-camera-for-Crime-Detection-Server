import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ReactSession from 'react-client-session';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';



// import { verifyTokenAsync, userLogoutAsync } from "./../asyncActions/authAsyncActions";
// import { userLogout, verifyTokenEnd } from "./../actions/authActions";

// import { setAuthToken } from './../services/auth';
// import { getUserListService } from './../services/user';
import ApexCharts from 'apexcharts';

import axios from 'axios'; //để get API 

import {

  Row, Col, Table,
} from 'reactstrap';

import {

} from 'components';

import { Line, Doughnut, Bar, Radar, HorizontalBar, Polar } from 'react-chartjs-2';

//import styles from 'jvectormap/jquery-jvectormap.css'
//import { VectorMap } from 'react-jvectormap';

import {
  playlistCharts,
  playlistCharts1,
  playlistCharts2,
  playlistCharts3,
} from 'variables/general/dashboard-charts-3.jsx'
  ;
import {
  dashboardAllProductsChart,
  dashboardAllProductsChart1,
  dashboardAllProductsChart31,
  lineChartData
} from 'variables/general/dashboard-charts-4.jsx';

// import {
//     Mailbox,
// } from 'components';

// import { mailbox } from 'variables/general/mailbox.jsx';

import PerfectScrollbar from 'perfect-scrollbar';

var mailps;

class Dashboard3 extends React.Component {

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
        this.setState({lastvalue: ultrasonics[0]["value"]})
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
        this.setState({lastvalue: ultrasonics[0]["value"]})
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
        this.setState({lastvalue: ultrasonics[0]["value"]})
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
        this.setState({lastvalue: ultrasonics[0]["value"]})
        this.setState({ time: time })
        this.setState({ data: data })

      })
  }

  handleOpendd(a){
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

  //   componentDidMount() {

  //   window.setInterval(() => {
  //     getNewSeries(lastDate, {
  //       min: 10,
  //       max: 90
  //     })

  //     ApexCharts.exec('realtime', 'updateSeries', [{
  //       data: data
  //     }])
  //   }, 1000)
  // }

  // componentDidMount() {
  //   axios.get(`http://localhost:3000/api/show`)
  //     .then(res => {
  //       const ultrasonic = res.data;
  //       const data_temp = [];
  //       // res.send(res.data);

  //       console.log("data"+this.state.data);

  //       console.log("abc"+res.data[0]["value"]);
  //       // this.setState({ ultrasonic });
  //       this.setState({ ultrasonic });
  //       // console.log("data"+this.state.ultrasonic[0].value);
  //       // this.setState({ chartData.....data:})
  //       var i =0; 
  //       while(i < this.state.ultrasonic.length){
  //         data_temp[i]= this.state.ultrasonic[i].value;
  //         i++;
  //       };
  //       this.setState({data: data_temp});




  //       console.log("data"+this.state.data);

  //     })
  // }


  render() {

    // const dispatch = useDispatch();
    // const authObj = useSelector(state => state.auth);

    // const { user, token, expiredAt } = authObj;
    // const [userList, setUserList] = useState([]);
    // const handleLogout = () => {
    //   dispatch(userLogoutAsync());
    // }

    // // get user list
    // const getUserList = async () => {
    //   const result = await getUserListService();
    //   if (result.error) {
    //     dispatch(verifyTokenEnd());
    //     if (result.response && [401, 403].includes(result.response.status))
    //       dispatch(userLogout());
    //     return;
    //   }
    //   setUserList(result.data);
    // }

    // // set timer to renew token
    // useEffect(() => {
    //   setAuthToken(token);
    //   const verifyTokenTimer = setTimeout(() => {
    //     dispatch(verifyTokenAsync(true));
    //   }, moment(expiredAt).diff() - 10 * 1000);
    //   return () => {
    //     clearTimeout(verifyTokenTimer);
    //   }
    // }, [expiredAt, token])

    // // get user list on page load
    // useEffect(() => {
    //   getUserList();
    // }, []);

    const data32 = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Subscriptions',
          backgroundColor: 'rgba(38, 166, 154,1)',
          borderColor: 'rgba(38, 166, 154,0.6)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(38, 166, 154,0.6)',
          hoverBorderColor: 'rgba(38, 166, 154,1)',
          data: [265, 159, 145, 121, 212, 125, 230]
        },
        {
          label: 'Visitors',
          backgroundColor: 'rgba(127, 143, 244,1)',
          borderColor: 'rgba(127, 143, 244,0.6)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(127, 143, 244,0.6)',
          hoverBorderColor: 'rgba(127, 143, 244,1)',
          data: [165, 259, 170, 181, 256, 155, 259]
        }
      ]
    };


    const options32 = {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
          ticks: {
            display: false
          },

        }],
        yAxes: [{
          categoryPercentage: 0.5,
          barPercentage: 0.4,
          maxBarThickness: 8,
          display: 1,
          gridLines: {
            color: "rgba(0, 0, 0, 0.01)",
          },
          ticks: {
            display: true
          }
        }]
      },
      maintainAspectRatio: false
    };

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
    const data6 = {
      labels: ['Firefox',
        'Chrome',
        'Edge',
        'IE',
        'Safari', 'Opera', 'Others'],
      datasets: [
        {
          label: '2017',
          backgroundColor: 'rgba(38, 166, 154,0.7)',
          borderColor: 'rgba(38, 166, 154,1)',
          pointBackgroundColor: 'rgba(38, 166, 154,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(38, 166, 154,1)',
          data: [165, 59, 190, 81, 56, 155, 40]
        },
        {
          label: '2018',
          backgroundColor: 'rgba(127, 143, 244,0.7)',
          borderColor: 'rgba(127, 143, 244,1)',
          pointBackgroundColor: 'rgba(127, 143, 244,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(127, 143, 244,1)',
          data: [28, 148, 40, 119, 196, 27, 100]
        }
      ]
    };


    const options6 = {
      legend: {
        display: false,
      },
      scale: {
        display: true,
        gridLines: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          beginAtZero: true
        }
      },
      maintainAspectRatio: false,

    };


    const data312 = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [

        {

          label: 'Subscriptions',
          fill: true,
          lineTension: 0.2,
          backgroundColor: 'rgba(38, 166, 154,.8)',
          borderColor: 'rgba(38, 166, 154,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#fafafa',
          pointBackgroundColor: 'rgba(38, 166, 154,1)',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(38, 166, 154,1)',
          pointHoverBorderColor: '#eeeeee',
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          pointHitRadius: 10,

          data: [
            145,
            174,
            160,
            185,
            156,
            165,
            170
          ]

        }
      ]
    };

    const options312 = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          categoryPercentage: 0.8,
          barPercentage: 0.6,
          maxBarThickness: 12,
          display: 1,
          gridLines: {
            color: "rgba(0, 0, 0, 0.01)",
          },
          ticks: {
            display: true
          }
        }],
        xAxes: [{
          display: 1,
          gridLines: {
            color: "rgba(0, 0, 0, 0.01)",
          },
          ticks: {
            display: false
          },

        }]
      },
      layout: {
        padding: { left: 0, right: 0, top: 0, bottom: 0 }
      }
    };



    const data45 = {
      datasets: [{
        data: [
          111,
          161,
          71,
          113,
          124
        ],
        backgroundColor: [
          '#80cbc4', '#4db6ac', '#26a69a', '#56d4c8', '#5fcec4', '#b2dfdb'
        ],
        label: 'Browsers' // for legend
      }],
      labels: [
        'Firefox',
        'Chrome',
        'Edge',
        'IE',
        'Safari'
      ]
    };



    const options45 = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        xAxes: [{
          display: 1,
          gridLines: {
            color: "rgba(0, 0, 0, 0.01)",
          },
          ticks: {
            display: false
          },

        }],
        yAxes: [{
          categoryPercentage: 0.8,
          barPercentage: 0.6,
          maxBarThickness: 12,
          display: 1,
          gridLines: {
            color: "rgba(0, 0, 0, 0.01)",
          },
          ticks: {
            display: true
          }
        }]
      },
      layout: {
        padding: { left: 0, right: 0, top: 0, bottom: 0 }
      },
      scale: {
        display: true,
        gridLines: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          beginAtZero: true
        }
      },

    };

    var options = {
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'sales',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    }

    // var chart = new ApexCharts(document.querySelector("#chart"), options);
    // chart.render();

    return (



      <div>

        <div className="content">
          <Row>
            <Col xs={12} md={12}>

              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Dashboard </h1>
                </div>
              </div>




              {/* <div className="row margin-0">



                <div className="col-lg-6 col-xl-8 col-md-6 col-12">
                  <section className="box ">
                    <header className="panel_header">
                      <h2 className="title float-left">Cards</h2>
                      <ul>







                      </ul>
                    </header>
                    <div className="content-body">
                      <div className="row">
                        <div className="col-12">
                          <Table hover responsive className="fixheight">
                            <thead>
                              <tr>
                                <th>Sensor Name</th>
                                <th>Value</th>
                                <th>UpdatedAt</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.ultrasonic.map(ultra =>
                                <tr>
                                  <td>ultrasonic</td>
                                  <td>{ultra.value}</td>
                                  <td>{ultra.updatedAt}</td>
                                  <td><span className="playlist_song1">

                                  </span></td>
                                </tr>
                              )}



                            </tbody>
                          </Table>

                        </div>

                      </div>
                    </div>
                  </section>
                </div>

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
                      <p className="widtag">Lastest value </p>
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
                      <p className="widtag">Lastest value </p>
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
                      <p className="widtag">Lastest value </p>
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

        <div className="col-9">
          {/* <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
                  </div> */}
                   {/* <p>User Name is: {ReactSession.get("username")}</p> */}

        </div>
      </div>


    );
  }
}

export default Dashboard3;
