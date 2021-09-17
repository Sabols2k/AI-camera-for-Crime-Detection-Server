import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'

import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);


class FormDateRangePicker extends React.Component{
    constructor (props, context) {

    super(props, context);

    const today = moment();

    this.state = {
      isOpen: false,
      value: moment.range(today.clone().subtract(7, "days"), today.clone()),
      dates1: null,
    };

    this.onSelect1 = this.onSelect1.bind(this);
  }

  onSelect = (value, states) => {
    this.setState({ value, states });
  };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderSelectionValue = () => {
    return (
      <div>
        <div>Selection</div>
        <h5>
        {this.state.value.start.format("YYYY-MM-DD")}
        {" - "}
        {this.state.value.end.format("YYYY-MM-DD")}
        </h5>
      </div>
    );
  };

 handleSelect(range, states) {
    // range is a moment-range object
    this.setState({
      value: range,
      states: states,
    }); 
  }
  onSelect1(dates) {    this.setState({      dates1: dates    });  }
   
    render(){


        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Date Range Picker</h1>
                        </div>
                    </div>


                            




                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Date Range Picker</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-8 col-md-9 col-10">

                                        <div className="form-group">
                                            <label className="form-label">Basic</label>
                                            <div className="controls">
                                            <DateRangePicker
                                              onSelect1={this.onSelect1}
                                              value={this.state.dates1}
                                            />




                                            </div>
                                        </div>



<div>{this.renderSelectionValue()}</div>
 <div>
          <input className="btn"
            type="button"
            value="Toggle date picker"
            onClick={this.onToggle}
          />
        </div>

        {this.state.isOpen && (
          <DateRangePicker
            value={this.state.value}
            onSelect={this.onSelect}
            singleDateRange={true}
            firstOfWeek={1}
            numberOfCalendars={2}
            selectionType='range'
          />
        )}

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

export default FormDateRangePicker;
