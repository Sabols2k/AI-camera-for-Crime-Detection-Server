import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import DateTimePicker from 'react-datetime-picker';

class FormDateTimePicker extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {    this.setState({      date: date    });  }
   
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Date Time Picker</h1>
                        </div>
                    </div>


                            




                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Date Time Picker</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                        <div className="form-group">
                                            <label className="form-label">Basic</label>
                                            <div className="controls">
                                            <DateTimePicker
                                                  onChange={this.handleChange}
                                                  value={this.state.date}
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

export default FormDateTimePicker;
