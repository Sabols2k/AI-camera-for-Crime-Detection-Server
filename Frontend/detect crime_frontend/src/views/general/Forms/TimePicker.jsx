import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import TimePicker from 'react-time-picker';

class FormTimePicker extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      time: '10:00:30',
      time1: '10:00:30',
      time2: '10:00:30',
      time3: '10:00:30',
      time4: '10:00:30',
      time5: '10:00:30',
      time6: '10:00:30'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
  }

  handleChange(time) {    this.setState({      time: time    });  }
  handleChange1(time) {    this.setState({      time1: time    });  }
  handleChange2(time) {    this.setState({      time2: time    });  }
  handleChange3(time) {    this.setState({      time3: time    });  }
  handleChange4(time) {    this.setState({      time4: time    });  }
  handleChange5(time) {    this.setState({      time5: time    });  }
  handleChange6(time) {    this.setState({      time6: time    });  }
   
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Time Picker</h1>
                        </div>
                    </div>


                            




                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Time Picker</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                        <div className="form-group">
                                            <label className="form-label">Basic</label>
                                            <div className="controls">
                                            <TimePicker
                                            maxDetail='second'
                                                  onChange={this.handleChange}
                                                  value={this.state.time}
                                                />

                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <label className="form-label">Hour and Minutes</label>
                                            <div className="controls">
                                            <TimePicker
                                            maxDetail='minute'
                                                  onChange={this.handleChange1}
                                                  value={this.state.time1}
                                                />
                                                
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <label className="form-label">Hours</label>
                                            <div className="controls">
                                            <TimePicker
                                            maxDetail='hour'
                                                  onChange={this.handleChange2}
                                                  value={this.state.time2}
                                                />
                                                
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <label className="form-label">Disabled</label>
                                            <div className="controls">
                                            <TimePicker
                                            disabled={true}
                                                  onChange={this.handleChange4}
                                                  value={this.state.time4}
                                                />

                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <label className="form-label">Maximum Time</label>
                                            <div className="controls">
                                            <TimePicker
                                            maxTime='22:15:00'
                                                  onChange={this.handleChange5}
                                                  value={this.state.time5}
                                                />

                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Minimum Time</label>
                                            <div className="controls">
                                            <TimePicker
                                            minTime='22:45:00'
                                                  onChange={this.handleChange6}
                                                  value={this.state.time6}
                                                />

                                            </div>
                                        </div>






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

export default FormTimePicker;
