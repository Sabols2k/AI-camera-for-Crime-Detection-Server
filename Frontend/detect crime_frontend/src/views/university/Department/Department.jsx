import moment from 'moment'; // Example for onSort prop
import React from 'react'; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import {
    Row, Col,
} from 'reactstrap';

const header = [
  { title: 'ID', prop: 'id', sortable: true, filterable: true },
  { title: 'Name', prop: 'name', sortable: true, filterable: true },
  { title: 'Brief', prop: 'brief', sortable: true, filterable: true },
  { title: 'HOD', prop: 'HOD', sortable: true, filterable: true },
  { title: 'Students', prop: 'students', sortable: true, filterable: true },
  { title: 'Email', prop: 'email', sortable: true, filterable: true },
  { title: 'Phone', prop: 'phone', sortable: true, filterable: true },
];



const body = [{
  id: 1,
  name: "Electronics",
  brief: "A introductory note of Electronics department comes here.",
  HOD: "Prof. Bruce Chapman",
  students: 314,
  email: "bchapman0@parallels.com",
  phone: "31-(245)745-6271"
}, {
  id: 2,
  name: "Mechanical Engineering",
  brief: "A introductory note of Mechanical Engineering department comes here.",
  HOD: "Prof. Julie Anderson",
  students: 474,
  email: "janderson1@rediff.com",
  phone: "7-(437)283-2588"
}, {
  id: 3,
  name: "Automobile Engg.",
  brief: "A introductory note of Automobile Engg. department comes here.",
  HOD: "Prof. Melissa Moreno",
  students: 648,
  email: "mmoreno2@storify.com",
  phone: "62-(955)932-9240"
}, {
  id: 4,
  name: "Mechanical Engineering",
  brief: "A introductory note of Mechanical Engineering department comes here.",
  HOD: "Prof. Evelyn Turner",
  students: 372,
  email: "eturner3@elpais.com",
  phone: "86-(423)219-7602"
}, {
  id: 5,
  name: "Automobile Engg.",
  brief: "A introductory note of Automobile Engg. department comes here.",
  HOD: "Prof. Jennifer Lane",
  students: 555,
  email: "jlane4@java.com",
  phone: "351-(459)488-5514"
}, {
  id: 6,
  name: "MBBS",
  brief: "A introductory note of MBBS department comes here.",
  HOD: "Prof. Carolyn Harvey",
  students: 614,
  email: "charvey5@list-manage.com",
  phone: "48-(550)661-1024"
}, {
  id: 7,
  name: "MBBS",
  brief: "A introductory note of MBBS department comes here.",
  HOD: "Prof. Harry Hamilton",
  students: 441,
  email: "hhamilton6@a8.net",
  phone: "86-(845)911-2981"
}, {
  id: 8,
  name: "Automobile Engg.",
  brief: "A introductory note of Automobile Engg. department comes here.",
  HOD: "Prof. Ruby Andrews",
  students: 641,
  email: "randrews7@nature.com",
  phone: "51-(285)877-0372"
}, {
  id: 9,
  name: "Mechanical Engineering",
  brief: "A introductory note of Mechanical Engineering department comes here.",
  HOD: "Prof. Kenneth Wallace",
  students: 566,
  email: "kwallace8@rambler.ru",
  phone: "7-(419)426-0880"
}, {
  id: 10,
  name: "Civil Engg.",
  brief: "A introductory note of Civil Engg. department comes here.",
  HOD: "Prof. Ashley Wood",
  students: 613,
  email: "awood9@cnbc.com",
  phone: "86-(423)548-1405"
}, {
  id: 11,
  name: "B.Com",
  brief: "A introductory note of B.Com department comes here.",
  HOD: "Prof. Todd Jordan",
  students: 427,
  email: "tjordana@yale.edu",
  phone: "46-(721)169-0491"
}, {
  id: 12,
  name: "Automobile Engg.",
  brief: "A introductory note of Automobile Engg. department comes here.",
  HOD: "Prof. Raymond Knight",
  students: 552,
  email: "rknightb@nydailynews.com",
  phone: "86-(136)370-2270"
}, {
  id: 13,
  name: "Civil Engg.",
  brief: "A introductory note of Civil Engg. department comes here.",
  HOD: "Prof. Jennifer Robertson",
  students: 403,
  email: "jrobertsonc@jalbum.net",
  phone: "1-(518)140-2723"
}, {
  id: 14,
  name: "M.Com",
  brief: "A introductory note of M.Com department comes here.",
  HOD: "Prof. Rebecca Johnston",
  students: 548,
  email: "rjohnstond@mayoclinic.com",
  phone: "258-(384)318-9326"
}, {
  id: 15,
  name: "Electronics",
  brief: "A introductory note of Electronics department comes here.",
  HOD: "Prof. Carlos Brown",
  students: 536,
  email: "cbrowne@clickbank.net",
  phone: "62-(741)636-8398"
}, {
  id: 16,
  name: "BBA",
  brief: "A introductory note of BBA department comes here.",
  HOD: "Prof. Jimmy Roberts",
  students: 523,
  email: "jrobertsf@drupal.org",
  phone: "686-(957)193-4479"
}, {
  id: 17,
  name: "Civil Engg.",
  brief: "A introductory note of  department comes here.",
  HOD: "Prof. Irene Romero",
  students: 469,
  email: "iromerog@newsvine.com",
  phone: "86-(534)313-7544"
}, {
  id: 18,
  name: "Electronics",
  brief: "A introductory note of Electronics department comes here.",
  HOD: "Prof. Katherine Robertson",
  students: 311,
  email: "krobertsonh@blogtalkradio.com",
  phone: "62-(818)161-5005"
}, {
  id: 19,
  name: "MBBS",
  brief: "A introductory note of MBBS department comes here.",
  HOD: "Prof. Paula Kelly",
  students: 604,
  email: "pkellyi@google.es",
  phone: "48-(781)844-0938"
}, {
  id: 20,
  name: "B.Com",
  brief: "A introductory note of B.Com department comes here.",
  HOD: "Prof. Fred Owens",
  students: 672,
  email: "fowensj@google.co.jp",
  phone: "86-(493)105-6472"
}];

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

class Department extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Departments</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Departments</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12 dt-disp">
                            
  <Datatable
  tableHeader={header}
  tableBody={body}
  keyName="userTable"
  tableClass="striped table-hover table-responsive"
  rowsPerPage={10}
  rowsPerPageOption={[5, 10, 15, 20]}
  initialSort={{prop: "id", isAscending: true}}
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

export default Department;
