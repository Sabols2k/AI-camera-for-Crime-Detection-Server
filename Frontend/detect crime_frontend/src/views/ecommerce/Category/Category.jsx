import moment from 'moment'; // Example for onSort prop
import React from 'react'; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import {
    Row, Col,
} from 'reactstrap';

const header = [
  { title: 'ID', prop: 'id', sortable: true, filterable: true },
  { title: 'Category', prop: 'catname', sortable: true, filterable: true },
  { title: 'Description', prop: 'description', sortable: true, filterable: true },
  { title: 'Total products', prop: 'total', sortable: true, filterable: true },
];



const body = [{
        "id": 1,
        "catname": "electronics",
        "description": "Maecenas rhoncus aliquam lacus.",
        "total": 76
    }, {
        "id": 2,
        "catname": "software",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "total": 56
    }, {
        "id": 3,
        "catname": "hardware",
        "description": "Nullam porttitor lacus at turpis.",
        "total": 38
    }, {
        "id": 4,
        "catname": "shoes",
        "description": "Nunc nisl.",
        "total": 31
    }, {
        "id": 5,
        "catname": "electronics",
        "description": "Nunc nisl.",
        "total": 62
    }, {
        "id": 6,
        "catname": "electronics",
        "description": "Aliquam quis turpis eget elit sodales scelerisque.",
        "total": 70
    }, {
        "id": 7,
        "catname": "software",
        "description": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "total": 53
    }, {
        "id": 8,
        "catname": "shoes",
        "description": "Fusce consequat.",
        "total": 89
    }, {
        "id": 9,
        "catname": "accessories",
        "description": "Maecenas tincidunt lacus at velit.",
        "total": 88
    }, {
        "id": 10,
        "catname": "tools",
        "description": "Sed sagittis.",
        "total": 48
    }, {
        "id": 11,
        "catname": "clothes",
        "description": "Aenean auctor gravida sem.",
        "total": 61
    }, {
        "id": 12,
        "catname": "clothes",
        "description": "Integer tincidunt ante vel ipsum.",
        "total": 48
    }, {
        "id": 13,
        "catname": "clothes",
        "description": "Fusce consequat.",
        "total": 50
    }, {
        "id": 14,
        "catname": "shoes",
        "description": "Suspendisse ornare consequat lectus.",
        "total": 47
    }, {
        "id": 15,
        "catname": "accessories",
        "description": "Nulla facilisi.",
        "total": 38
    }, {
        "id": 16,
        "catname": "accessories",
        "description": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "total": 63
    }, {
        "id": 17,
        "catname": "electronics",
        "description": "Maecenas rhoncus aliquam lacus.",
        "total": 37
    }, {
        "id": 18,
        "catname": "accessories",
        "description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "total": 58
    }, {
        "id": 19,
        "catname": "electronics",
        "description": "Nullam varius.",
        "total": 83
    }, {
        "id": 20,
        "catname": "accessories",
        "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "total": 61
    }, {
        "id": 21,
        "catname": "accessories",
        "description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "total": 51
    }, {
        "id": 22,
        "catname": "accessories",
        "description": "In congue.",
        "total": 52
    }, {
        "id": 23,
        "catname": "software",
        "description": "Mauris sit amet eros.",
        "total": 87
    }, {
        "id": 24,
        "catname": "shoes",
        "description": "Praesent blandit.",
        "total": 35
    }, {
        "id": 25,
        "catname": "clothes",
        "description": "In hac habitasse platea dictumst.",
        "total": 80
    }, {
        "id": 26,
        "catname": "tools",
        "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "total": 32
    }, {
        "id": 27,
        "catname": "accessories",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "total": 83
    }, {
        "id": 28,
        "catname": "tools",
        "description": "Sed accumsan felis.",
        "total": 78
    }, {
        "id": 29,
        "catname": "tools",
        "description": "In hac habitasse platea dictumst.",
        "total": 48
    }, {
        "id": 30,
        "catname": "software",
        "description": "Nulla facilisi.",
        "total": 79
    }, {
        "id": 31,
        "catname": "electronics",
        "description": "Morbi porttitor lorem id ligula.",
        "total": 35
    }, {
        "id": 32,
        "catname": "software",
        "description": "Quisque porta volutpat erat.",
        "total": 66
    }, {
        "id": 33,
        "catname": "hardware",
        "description": "Donec posuere metus vitae ipsum.",
        "total": 57
    }, {
        "id": 34,
        "catname": "tools",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "total": 36
    }, {
        "id": 35,
        "catname": "tools",
        "description": "Curabitur in libero ut massa volutpat convallis.",
        "total": 59
    }, {
        "id": 36,
        "catname": "clothes",
        "description": "Morbi ut odio.",
        "total": 72
    }, {
        "id": 37,
        "catname": "software",
        "description": "Nam dui.",
        "total": 66
    }, {
        "id": 38,
        "catname": "accessories",
        "description": "Suspendisse ornare consequat lectus.",
        "total": 40
    }, {
        "id": 39,
        "catname": "software",
        "description": "Praesent id massa id nisl venenatis lacinia.",
        "total": 73
    }, {
        "id": 40,
        "catname": "clothes",
        "description": "Curabitur convallis.",
        "total": 63
    }, {
        "id": 41,
        "catname": "clothes",
        "description": "Cras non velit nec nisi vulputate nonummy.",
        "total": 61
    }, {
        "id": 42,
        "catname": "hardware",
        "description": "Suspendisse potenti.",
        "total": 42
    }, {
        "id": 43,
        "catname": "clothes",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "total": 39
    }, {
        "id": 44,
        "catname": "shoes",
        "description": "Vivamus vestibulum sagittis sapien.",
        "total": 38
    }, {
        "id": 45,
        "catname": "software",
        "description": "Mauris sit amet eros.",
        "total": 51
    }, {
        "id": 46,
        "catname": "electronics",
        "description": "Aenean sit amet justo.",
        "total": 90
    }, {
        "id": 47,
        "catname": "hardware",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "total": 88
    }, {
        "id": 48,
        "catname": "shoes",
        "description": "Pellentesque at nulla.",
        "total": 64
    }, {
        "id": 49,
        "catname": "software",
        "description": "Aliquam quis turpis eget elit sodales scelerisque.",
        "total": 35
    }, {
        "id": 50,
        "catname": "shoes",
        "description": "Nunc purus.",
        "total": 47
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

class Category extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Product Categories</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All product categories</h2>
                                
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

export default Category;
