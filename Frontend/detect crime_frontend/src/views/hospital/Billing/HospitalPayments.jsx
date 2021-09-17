import moment from 'moment'; // Example for onSort prop
import React from 'react'; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import {
    Row, Col,
} from 'reactstrap';

import payments from './payments.js'

const header = [
  { title: 'ID', prop: 'billno', sortable: true, filterable: true },
  { title: 'Date', prop: 'billdate', sortable: true, filterable: true },
  { title: 'Patient', prop: 'patient', sortable: true, filterable: true },
  { title: 'Doctor', prop: 'doctor', sortable: true, filterable: true },
  { title: 'Charges', prop: 'charges', sortable: true, filterable: true },
  { title: 'Tax', prop: 'tax', sortable: true, filterable: true },
  { title: 'Discount', prop: 'discount', sortable: true, filterable: true },
  { title: 'Total', prop: 'total', sortable: true, filterable: true },
];


const onSortFunction = {
  date(columnValue) {
    // Convert the string date format to UTC timestamp
    // So the table could sort it by number instead of by string
    return moment(columnValue, 'Do MMMM YYYY').valueOf();
  },
};

const customLabels = {
  first: '<<',
  last: '>>',
  prev: '<',
  next: '>',
  show: 'Display ',
  entries: ' rows',
  noResults: 'There is no data to be displayed',
};

class HospitalPayments extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Payments</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Payments</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12 dt-disp">
                            
  <Datatable
  tableHeader={header}
  tableBody={payments}
  keyName="userTable"
  tableClass="striped table-hover table-responsive"
  rowsPerPage={10}
  rowsPerPageOption={[5, 10, 15, 20]}
  initialSort={{prop: "billno", isAscending: true}}
  onSort={onSortFunction}
  labels={customLabels}
/>

                               

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

export default HospitalPayments;
