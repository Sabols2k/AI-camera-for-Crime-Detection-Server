import moment from 'moment'; // Example for onSort prop
import React from 'react'; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import {
    Row, Col,
} from 'reactstrap';

const header = [
  { title: 'ID', prop: 'id', sortable: true, filterable: true },
  { title: 'Tag', prop: 'tagname', sortable: true, filterable: true },
  { title: 'Description', prop: 'description', sortable: true, filterable: true },
  { title: 'Total products', prop: 'total', sortable: true, filterable: true },
];



const body = [{
        id: 1,
        tagname: "cd",
        description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        total: 33
    }, {
        id: 2,
        tagname: "red",
        description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        total: 50
    }, {
        id: 3,
        tagname: "wooden",
        description: "Donec semper sapien a libero.",
        total: 72
    }, {
        id: 4,
        tagname: "blue",
        description: "Pellentesque eget nunc.",
        total: 58
    }, {
        id: 5,
        tagname: "red",
        description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        total: 66
    }, {
        id: 6,
        tagname: "tools",
        description: "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        total: 78
    }, {
        id: 7,
        tagname: "yellow",
        description: "Etiam justo.",
        total: 87
    }, {
        id: 8,
        tagname: "tools",
        description: "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        total: 52
    }, {
        id: 9,
        tagname: "frame",
        description: "Morbi ut odio.",
        total: 49
    }, {
        id: 10,
        tagname: "cd",
        description: "Phasellus sit amet erat.",
        total: 75
    }, {
        id: 11,
        tagname: "wooden",
        description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        total: 59
    }, {
        id: 12,
        tagname: "red",
        description: "Nullam varius.",
        total: 33
    }, {
        id: 13,
        tagname: "shoes",
        description: "Aliquam sit amet diam in magna bibendum imperdiet.",
        total: 71
    }, {
        id: 14,
        tagname: "metal",
        description: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
        total: 44
    }, {
        id: 15,
        tagname: "cd",
        description: "Aenean auctor gravida sem.",
        total: 68
    }, {
        id: 16,
        tagname: "computer",
        description: "Sed accumsan felis.",
        total: 32
    }, {
        id: 17,
        tagname: "shoes",
        description: "Duis at velit eu est congue elementum.",
        total: 34
    }, {
        id: 18,
        tagname: "frame",
        description: "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        total: 32
    }, {
        id: 19,
        tagname: "mobile",
        description: "Maecenas rhoncus aliquam lacus.",
        total: 72
    }, {
        id: 20,
        tagname: "wallet",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        total: 77
    }, {
        id: 21,
        tagname: "wooden",
        description: "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        total: 38
    }, {
        id: 22,
        tagname: "cd",
        description: "Fusce consequat.",
        total: 76
    }, {
        id: 23,
        tagname: "blue",
        description: "In congue.",
        total: 34
    }, {
        id: 24,
        tagname: "metal",
        description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        total: 89
    }, {
        id: 25,
        tagname: "red",
        description: "Morbi non lectus.",
        total: 86
    }, {
        id: 26,
        tagname: "wallet",
        description: "Quisque porta volutpat erat.",
        total: 46
    }, {
        id: 27,
        tagname: "shoes",
        description: "Morbi vel lectus in quam fringilla rhoncus.",
        total: 82
    }, {
        id: 28,
        tagname: "shoes",
        description: "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        total: 48
    }, {
        id: 29,
        tagname: "frame",
        description: "In hac habitasse platea dictumst.",
        total: 38
    }, {
        id: 30,
        tagname: "metal",
        description: "Aenean fermentum.",
        total: 85
    }, {
        id: 31,
        tagname: "color",
        description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        total: 53
    }, {
        id: 32,
        tagname: "color",
        description: "Maecenas tincidunt lacus at velit.",
        total: 53
    }, {
        id: 33,
        tagname: "specs",
        description: "Suspendisse potenti.",
        total: 51
    }, {
        id: 34,
        tagname: "cd",
        description: "Nulla facilisi.",
        total: 89
    }, {
        id: 35,
        tagname: "metal",
        description: "Donec ut mauris eget massa tempor convallis.",
        total: 42
    }, {
        id: 36,
        tagname: "cd",
        description: "Duis mattis egestas metus.",
        total: 42
    }, {
        id: 37,
        tagname: "wallet",
        description: "Fusce consequat.",
        total: 44
    }, {
        id: 38,
        tagname: "cd",
        description: "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        total: 70
    }, {
        id: 39,
        tagname: "red",
        description: "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        total: 74
    }, {
        id: 40,
        tagname: "tools",
        description: "Nulla suscipit ligula in lacus.",
        total: 50
    }, {
        id: 41,
        tagname: "tools",
        description: "Phasellus sit amet erat.",
        total: 66
    }, {
        id: 42,
        tagname: "wooden",
        description: "Sed vel enim sit amet nunc viverra dapibus.",
        total: 53
    }, {
        id: 43,
        tagname: "wallet",
        description: "Praesent blandit.",
        total: 53
    }, {
        id: 44,
        tagname: "shoes",
        description: "Integer tincidunt ante vel ipsum.",
        total: 36
    }, {
        id: 45,
        tagname: "hardware",
        description: "Nunc rhoncus dui vel sem.",
        total: 41
    }, {
        id: 46,
        tagname: "wallet",
        description: "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        total: 82
    }, {
        id: 47,
        tagname: "cd",
        description: "Sed vel enim sit amet nunc viverra dapibus.",
        total: 66
    }, {
        id: 48,
        tagname: "frame",
        description: "Suspendisse accumsan tortor quis turpis.",
        total: 33
    }, {
        id: 49,
        tagname: "hardware",
        description: "Aliquam erat volutpat.",
        total: 68
    }, {
        id: 50,
        tagname: "mobile",
        description: "Duis ac nibh.",
        total: 38
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

class Tag extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Product Tags</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Product Tags</h2>
                                
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

export default Tag;
