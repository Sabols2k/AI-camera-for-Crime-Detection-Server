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
  { title: 'Total blogs', prop: 'totalblogs', sortable: true, filterable: true },
];



const body = [{
  "id": 1,
  "catname": "photoshop",
  "description": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "totalblogs": 84
}, {
  "id": 2,
  "catname": "crm service",
  "description": "Sed vel enim sit amet nunc viverra dapibus.",
  "totalblogs": 66
}, {
  "id": 3,
  "catname": "photoshop",
  "description": "Sed ante.",
  "totalblogs": 75
}, {
  "id": 4,
  "catname": "graphic design",
  "description": "Nam tristique tortor eu pede.",
  "totalblogs": 49
}, {
  "id": 5,
  "catname": "web design",
  "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
  "totalblogs": 78
}, {
  "id": 6,
  "catname": "php website",
  "description": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "totalblogs": 62
}, {
  "id": 7,
  "catname": "graphic design",
  "description": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
  "totalblogs": 32
}, {
  "id": 8,
  "catname": "crm service",
  "description": "Morbi quis tortor id nulla ultrices aliquet.",
  "totalblogs": 88
}, {
  "id": 9,
  "catname": "wordpress website",
  "description": "Nunc purus.",
  "totalblogs": 76
}, {
  "id": 10,
  "catname": "logo design",
  "description": "Nam dui.",
  "totalblogs": 70
}, {
  "id": 11,
  "catname": "marketing",
  "description": "Aenean fermentum.",
  "totalblogs": 41
}, {
  "id": 12,
  "catname": "logo design",
  "description": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
  "totalblogs": 86
}, {
  "id": 13,
  "catname": "marketing",
  "description": "Duis consequat dui nec nisi volutpat eleifend.",
  "totalblogs": 76
}, {
  "id": 14,
  "catname": "web design",
  "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
  "totalblogs": 83
}, {
  "id": 15,
  "catname": "wordpress website",
  "description": "Aenean fermentum.",
  "totalblogs": 84
}, {
  "id": 16,
  "catname": "crm service",
  "description": "Proin risus.",
  "totalblogs": 48
}, {
  "id": 17,
  "catname": "marketing",
  "description": "Curabitur at ipsum ac tellus semper interdum.",
  "totalblogs": 56
}, {
  "id": 18,
  "catname": "programming",
  "description": "Maecenas ut massa quis augue luctus tincidunt.",
  "totalblogs": 90
}, {
  "id": 19,
  "catname": "logo design",
  "description": "Nullam sit amet turpis elementum ligula vehicula consequat.",
  "totalblogs": 55
}, {
  "id": 20,
  "catname": "php website",
  "description": "Nulla justo.",
  "totalblogs": 32
}, {
  "id": 21,
  "catname": "branding",
  "description": "Proin at turpis a pede posuere nonummy.",
  "totalblogs": 56
}, {
  "id": 22,
  "catname": "wordpress website",
  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
  "totalblogs": 31
}, {
  "id": 23,
  "catname": "graphic design",
  "description": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "totalblogs": 32
}, {
  "id": 24,
  "catname": "wordpress website",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "totalblogs": 32
}, {
  "id": 25,
  "catname": "marketing",
  "description": "Fusce consequat.",
  "totalblogs": 71
}, {
  "id": 26,
  "catname": "SEO and SEM",
  "description": "In blandit ultrices enim.",
  "totalblogs": 70
}, {
  "id": 27,
  "catname": "branding",
  "description": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "totalblogs": 67
}, {
  "id": 28,
  "catname": "php website",
  "description": "Vivamus tortor.",
  "totalblogs": 72
}, {
  "id": 29,
  "catname": "photoshop",
  "description": "Nulla justo.",
  "totalblogs": 39
}, {
  "id": 30,
  "catname": "programming",
  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
  "totalblogs": 31
}, {
  "id": 31,
  "catname": "crm service",
  "description": "Phasellus sit amet erat.",
  "totalblogs": 62
}, {
  "id": 32,
  "catname": "photoshop",
  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
  "totalblogs": 69
}, {
  "id": 33,
  "catname": "graphic design",
  "description": "Proin risus.",
  "totalblogs": 44
}, {
  "id": 34,
  "catname": "social media marketing",
  "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  "totalblogs": 46
}, {
  "id": 35,
  "catname": "crm service",
  "description": "Nullam porttitor lacus at turpis.",
  "totalblogs": 36
}, {
  "id": 36,
  "catname": "social media marketing",
  "description": "Donec ut mauris eget massa tempor convallis.",
  "totalblogs": 70
}, {
  "id": 37,
  "catname": "social media marketing",
  "description": "Phasellus sit amet erat.",
  "totalblogs": 80
}, {
  "id": 38,
  "catname": "social media marketing",
  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
  "totalblogs": 64
}, {
  "id": 39,
  "catname": "branding",
  "description": "Maecenas rhoncus aliquam lacus.",
  "totalblogs": 66
}, {
  "id": 40,
  "catname": "branding",
  "description": "Ut at dolor quis odio consequat varius.",
  "totalblogs": 51
}, {
  "id": 41,
  "catname": "branding",
  "description": "Cras pellentesque volutpat dui.",
  "totalblogs": 57
}, {
  "id": 42,
  "catname": "crm service",
  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
  "totalblogs": 72
}, {
  "id": 43,
  "catname": "SEO and SEM",
  "description": "Nam dui.",
  "totalblogs": 55
}, {
  "id": 44,
  "catname": "web design",
  "description": "In quis justo.",
  "totalblogs": 46
}, {
  "id": 45,
  "catname": "photoshop",
  "description": "Sed ante.",
  "totalblogs": 75
}, {
  "id": 46,
  "catname": "programming",
  "description": "Quisque ut erat.",
  "totalblogs": 81
}, {
  "id": 47,
  "catname": "SEO and SEM",
  "description": "Praesent blandit.",
  "totalblogs": 86
}, {
  "id": 48,
  "catname": "photoshop",
  "description": "Donec semper sapien a libero.",
  "totalblogs": 30
}, {
  "id": 49,
  "catname": "marketing",
  "description": "Aenean lectus.",
  "totalblogs": 30
}, {
  "id": 50,
  "catname": "marketing",
  "description": "Nulla tellus.",
  "totalblogs": 59
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
                            <h1 className="title">Blog Categories</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All blog categories</h2>
                                
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
