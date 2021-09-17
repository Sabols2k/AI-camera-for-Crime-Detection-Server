import React from 'react'
import {
   Row, Col
} from 'reactstrap';

import {  } from 'components';

import BigCalendar from 'react-big-calendar'
import events from 'views/hospital/Events/events.js'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);

class HospitalEvents extends React.Component {
  render() {
 
	const allViews = Object
	  .keys(BigCalendar.Views)
	  .map(k => BigCalendar.Views[k])

  	//console.log({events});
    return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Events</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Schedule</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            

									  <div style={{ height: 700, width: 100+'%' }}>
									    <BigCalendar
									      events={events}
									      step={60}
									      views={allViews}
									      defaultDate={new Date(2018, 3, 1)}
									    />
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

export default HospitalEvents;
