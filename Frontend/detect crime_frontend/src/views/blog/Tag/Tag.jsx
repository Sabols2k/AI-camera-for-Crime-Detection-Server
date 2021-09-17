import moment from 'moment'; // Example for onSort prop
import React from 'react'; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import {
    Row, Col,
} from 'reactstrap';

const header = [
  { title: 'ID', prop: 'id', sortable: true, filterable: true },
  { title: 'Tag', prop: 'catname', sortable: true, filterable: true },
  { title: 'Description', prop: 'description', sortable: true, filterable: true },
  { title: 'Total blogs', prop: 'totalblogs', sortable: true, filterable: true },
];



const body = [{"id":1,"catname":"photoshop","description":"In eleifend quam a odio.","totalblogs":85},
{"id":2,"catname":"logo design","description":"Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","totalblogs":57},
{"id":3,"catname":"photoshop","description":"Proin eu mi.","totalblogs":51},
{"id":4,"catname":"php website","description":"Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.","totalblogs":77},
{"id":5,"catname":"wordpress website","description":"Morbi quis tortor id nulla ultrices aliquet.","totalblogs":62},
{"id":6,"catname":"SEO and SEM","description":"Fusce consequat.","totalblogs":38},
{"id":7,"catname":"logo design","description":"Donec dapibus.","totalblogs":48},
{"id":8,"catname":"photoshop","description":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.","totalblogs":65},
{"id":9,"catname":"graphic design","description":"Phasellus sit amet erat.","totalblogs":77},
{"id":10,"catname":"photoshop","description":"In hac habitasse platea dictumst.","totalblogs":73},
{"id":11,"catname":"graphic design","description":"Curabitur gravida nisi at nibh.","totalblogs":55},
{"id":12,"catname":"web design","description":"Nam tristique tortor eu pede.","totalblogs":69},
{"id":13,"catname":"web design","description":"In hac habitasse platea dictumst.","totalblogs":60},
{"id":14,"catname":"branding","description":"Maecenas ut massa quis augue luctus tincidunt.","totalblogs":48},
{"id":15,"catname":"branding","description":"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.","totalblogs":72},
{"id":16,"catname":"php website","description":"Vivamus in felis eu sapien cursus vestibulum.","totalblogs":59},
{"id":17,"catname":"web design","description":"Pellentesque eget nunc.","totalblogs":85},
{"id":18,"catname":"programming","description":"Quisque porta volutpat erat.","totalblogs":47},
{"id":19,"catname":"photoshop","description":"Duis bibendum.","totalblogs":69},
{"id":20,"catname":"logo design","description":"Nunc purus.","totalblogs":51},
{"id":21,"catname":"wordpress website","description":"Duis ac nibh.","totalblogs":75},
{"id":22,"catname":"wordpress website","description":"Praesent blandit.","totalblogs":68},
{"id":23,"catname":"graphic design","description":"Morbi vel lectus in quam fringilla rhoncus.","totalblogs":79},
{"id":24,"catname":"branding","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","totalblogs":58},
{"id":25,"catname":"programming","description":"Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","totalblogs":72},
{"id":26,"catname":"web design","description":"Suspendisse potenti.","totalblogs":69},
{"id":27,"catname":"crm service","description":"Proin eu mi.","totalblogs":85},
{"id":28,"catname":"crm service","description":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","totalblogs":79},
{"id":29,"catname":"crm service","description":"Duis bibendum.","totalblogs":34},
{"id":30,"catname":"web design","description":"Donec ut dolor.","totalblogs":33},
{"id":31,"catname":"logo design","description":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.","totalblogs":72},
{"id":32,"catname":"wordpress website","description":"In quis justo.","totalblogs":83},
{"id":33,"catname":"php website","description":"Donec posuere metus vitae ipsum.","totalblogs":51},
{"id":34,"catname":"photoshop","description":"Praesent blandit lacinia erat.","totalblogs":35},
{"id":35,"catname":"logo design","description":"Praesent id massa id nisl venenatis lacinia.","totalblogs":89},
{"id":36,"catname":"logo design","description":"Quisque ut erat.","totalblogs":71},
{"id":37,"catname":"programming","description":"Quisque porta volutpat erat.","totalblogs":48},
{"id":38,"catname":"crm service","description":"Praesent lectus.","totalblogs":46},
{"id":39,"catname":"logo design","description":"Nulla ut erat id mauris vulputate elementum.","totalblogs":84},
{"id":40,"catname":"programming","description":"Sed ante.","totalblogs":69},
{"id":41,"catname":"graphic design","description":"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","totalblogs":53},
{"id":42,"catname":"web design","description":"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","totalblogs":53},
{"id":43,"catname":"SEO and SEM","description":"In blandit ultrices enim.","totalblogs":87},
{"id":44,"catname":"SEO and SEM","description":"Fusce posuere felis sed lacus.","totalblogs":33},
{"id":45,"catname":"php website","description":"Phasellus sit amet erat.","totalblogs":76},
{"id":46,"catname":"web design","description":"Etiam faucibus cursus urna.","totalblogs":37},
{"id":47,"catname":"social media marketing","description":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.","totalblogs":73},
{"id":48,"catname":"SEO and SEM","description":"Suspendisse ornare consequat lectus.","totalblogs":35},
{"id":49,"catname":"wordpress website","description":"Nulla nisl.","totalblogs":31},
{"id":50,"catname":"wordpress website","description":"Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","totalblogs":62}];

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
                            <h1 className="title">Blog Tags</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Blog Tags</h2>
                                
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