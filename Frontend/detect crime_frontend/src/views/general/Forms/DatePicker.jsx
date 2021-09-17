import React from 'react';
import {
   Row, Col, FormGroup,
} from 'reactstrap';

import {} from 'components';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';


class FormDatePicker extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      startDate1: moment(),
      startDate2: moment(),
      startDate3: moment(),
      startDate4: moment(),
      startDate5: moment(),
      startDate6: moment(),
      startDate7: moment(),
      startDate8: moment(),
      startDate9: moment(),
      startDate10: moment(),
      startDate11: moment(),
      startDate12: moment(),
      startDate13: moment(),
      startDate14: moment(),
      startDate15: moment(),
      startDate16: moment(),
      startDate17: moment(),
      startDate18: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);
    this.handleChange8 = this.handleChange8.bind(this);
    this.handleChange9 = this.handleChange9.bind(this);
    this.handleChange10 = this.handleChange10.bind(this);
    this.handleChange11 = this.handleChange11.bind(this);
    this.handleChange12 = this.handleChange12.bind(this);
    this.handleChange13 = this.handleChange13.bind(this);
    this.handleChange14 = this.handleChange14.bind(this);
    this.handleChange15 = this.handleChange15.bind(this);
    this.handleChange16 = this.handleChange16.bind(this);
    this.handleChange17 = this.handleChange17.bind(this);
    this.handleChange18 = this.handleChange18.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleChange1(date) { this.setState({ startDate1: date });  }
  handleChange2(date) { this.setState({ startDate2: date });  }
  handleChange3(date) { this.setState({ startDate3: date });  }
  handleChange4(date) { this.setState({ startDate4: date });  }
  handleChange5(date) { this.setState({ startDate5: date });  }
  handleChange6(date) { this.setState({ startDate6: date });  }
  handleChange7(date) { this.setState({ startDate7: date });  }
  handleChange8(date) { this.setState({ startDate8: date });  }
  handleChange9(date) { this.setState({ startDate9: date });  }
  handleChange10(date) { this.setState({ startDate10: date });  }
  handleChange11(date) { this.setState({ startDate11: date });  }
  handleChange12(date) { this.setState({ startDate12: date });  }
  handleChange13(date) { this.setState({ startDate13: date });  }
  handleChange14(date) { this.setState({ startDate14: date });  }
  handleChange15(date) { this.setState({ startDate15: date });  }
  handleChange16(date) { this.setState({ startDate16: date });  }
  handleChange17(date) { this.setState({ startDate17: date });  }
  handleChange18(date) { this.setState({ startDate18: date });  }
   
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Date Picker</h1>
                        </div>
                    </div>


                            




                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Date Picker</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Basic</label>
                                            <div className="controls">
                                                <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                            </div>
                                            </FormGroup>

                                            <FormGroup>
                                              <label className="form-label" htmlFor="field-1">Select Time</label>
                                              <div className="controls">
                                                  <DatePicker
                                                      selected={this.state.startDate1}
                                                      onChange={this.handleChange1}
                                                      showTimeSelect
                                                      timeFormat="HH:mm"
                                                      timeIntervals={15} 
                                                      dateFormat="LLL"
                                                      timeCaption="time"
                                                  />
                                              </div>
                                            </FormGroup>

                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Select Time Only</label>
                                            <div className="controls">

                                                    <DatePicker
                                                        selected={this.state.startDate2}
                                                        onChange={this.handleChange2}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={15}
                                                        dateFormat="LT"
                                                        timeCaption="Time"
                                                    />
                                            </div>
                                            </FormGroup>


                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Exclude Times</label>
                                            <div className="controls">

                                                    <DatePicker
                                                        selected={this.state.startDate3}
                                                        onChange={this.handleChange3}
                                                        showTimeSelect
                                                          excludeTimes={[
                                                            moment().hours(17).minutes(0), 
                                                            moment().hours(18).minutes(30), 
                                                            moment().hours(19).minutes(30), 
                                                            moment().hours(17).minutes(30)]}
                                                          dateFormat="LLL"
                                                    />
                                            </div>
                                            </FormGroup>


                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Include times</label>
                                            <div className="controls">

<DatePicker
  selected={this.state.startDate4}
  onChange={this.handleChange4}
  showTimeSelect
  includeTimes={[moment().hours(17).minutes(0), moment().hours(18).minutes(30), moment().hours(19).minutes(30), moment().hours(17).minutes(30)]}
  dateFormat="LLL"
/>
                                            </div>
                                            </FormGroup>


                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Specific time</label>
                                            <div className="controls">


<DatePicker
    selected={this.state.startDate5}
    onChange={this.handleChange5}
    showTimeSelect
    timeFormat="HH:mm"
    injectTimes={[
      moment().hours(0).minutes(1),
      moment().hours(12).minutes(5),
      moment().hours(23).minutes(59)
    ]}
    dateFormat="LLL"
/>

                                            </div>
                                            </FormGroup>


                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Specific Time Range</label>
                                            <div className="controls">

<DatePicker
  selected={this.state.startDate6}
  onChange={this.handleChange6}
  showTimeSelect
  minTime={moment().hours(17).minutes(0)}
  maxTime={moment().hours(20).minutes(30)}
  dateFormat="LLL"
/>                                            </div>
                                            </FormGroup>


                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Custom Date Format</label>
                                            <div className="controls">

<DatePicker
dateFormat="YYYY/MM/DD"
selected={this.state.startDate7}
onChange={this.handleChange7} />
                                            </div>
                                            </FormGroup>


                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Today Button</label>
                                            <div className="controls">

<DatePicker
    todayButton={"Vandaag"}
    selected={this.state.startDate8}
    onChange={this.handleChange8}
/>
                                            </div>
                                            </FormGroup>


                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Specific date range</label>
                                            <div className="controls">
<DatePicker
  selected={this.state.startDate10}
  onChange={this.handleChange10}
  minDate={moment()}
  maxDate={moment().add(5, "days")}
  placeholderText="Select a date between today and 5 days in the future"
/>


                                            </div>
                                            </FormGroup>


                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Week starts from monday</label>
                                            <div className="controls">
<DatePicker
  selected={this.state.startDate11}
  onChange={this.handleChange11}
  locale="en-gb"
  placeholderText="Weeks start on Monday" />


                                            </div>
                                            </FormGroup>

                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Highlight dates</label>
                                            <div className="controls">
<DatePicker
selected={this.state.startDate12}
onChange={this.handleChange12}
highlightDates={[moment().subtract(7, "days"), moment().add(7, "days")]}
placeholderText="This highlights a week ago and a week from today" />


                                            </div>
                                            </FormGroup>



                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Portal version</label>
                                            <div className="controls">

<DatePicker
    selected={this.state.startDate15}
    onChange={this.handleChange15}
    withPortal
/>

                                            </div>
                                            </FormGroup>



                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Year select dropdown</label>
                                            <div className="controls">

<DatePicker
    selected={this.state.startDate16}
    onChange={this.handleChange16}
    peekNextMonth
    showMonthDropdown
    showYearDropdown
    dropdownMode="select"
/>


                                            </div>
                                            </FormGroup>



                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Open to date</label>
                                            <div className="controls">


<DatePicker
    openToDate={moment("1993-09-28")}
    selected={this.state.startDate17}
    onChange={this.handleChange17}
/>

                                            </div>
                                            </FormGroup>


                                        <FormGroup>
                                            <label className="form-label" htmlFor="field-1">Multiple months</label>
                                            <div className="controls">


<DatePicker
    selected={this.state.startDate18}
    onChange={this.handleChange18}
    monthsShown={2}
/>

                                            </div>
                                            </FormGroup>


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

export default FormDatePicker;
