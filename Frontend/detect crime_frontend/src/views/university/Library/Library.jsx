import moment from 'moment'; // Example for onSort prop
import React from 'react'; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import {
    Row, Col,
} from 'reactstrap';

const header = [
  { title: 'ID', prop: 'id', sortable: true, filterable: true },
  { title: 'Title', prop: 'title', sortable: true, filterable: true },
  { title: 'Subject', prop: 'subject', sortable: true, filterable: true },
  { title: 'Year', prop: 'year', sortable: true, filterable: true },
  { title: 'Department', prop: 'department', sortable: true, filterable: true },
  { title: 'Price', prop: 'price', sortable: true, filterable: true },
  { title: 'Type', prop: 'type', sortable: true, filterable: true },
  { title: 'Status', prop: 'status', sortable: true, filterable: true },
];



const body = [{id: 1, title: "Web Programming", subject: "Mechanics", year: "First Year", department: "Automobile Engg.", type: "Book", status: "In Stock", price: "$136.88"},
{id: 2, title: "Designing", subject: "Mechanics", year: "First Year", department: "Automobile Engg.", type: "Newpaper", status: "Out of Stock", price: "$82.82"},
{id: 3, title: "Mechanics", subject: "Computer", year: "Second Year", department: "Computer Engineering", type: "DVD", status: "Out of Stock", price: "$151.65"},
{id: 4, title: "Theory of Relaivity", subject: "Animation", year: "First Year", department: "Civil Engg.", type: "CD", status: "In Stock", price: "$182.81"},
{id: 5, title: "Time History", subject: "Management", year: "First Year", department: "Civil Engg.", type: "Newpaper", status: "Out of Stock", price: "$182.68"},
{id: 6, title: "Politics", subject: "Designing", year: "Second Year", department: "Civil Engg.", type: "Newpaper", status: "Out of Stock", price: "$69.95"},
{id: 7, title: "Management Basics", subject: "Designing", year: "Second Year", department: "Architecture", type: "CD", status: "Out of Stock", price: "$191.25"},
{id: 8, title: "Animation Graphic Fundamentals", subject: "Graphics", year: "Third Year", department: "MBA", type: "DVD", status: "Out of Stock", price: "$157.27"},
{id: 9, title: "Parallel Computing", subject: "Politics", year: "First Year", department: "Architecture", type: "Newpaper", status: "Out of Stock", price: "$116.83"},
{id: 10, title: "Networking", subject: "Computer", year: "Last Year", department: "MBA", type: "Newpaper", status: "In Stock", price: "$92.24"},
{id: 11, title: "Architecture", subject: "Mechanics", year: "Second Year", department: "Computer Engineering", type: "DVD", status: "Out of Stock", price: "$162.47"},
{id: 12, title: "Electronics", subject: "Mechanics", year: "First Year", department: "Civil Engg.", type: "CD", status: "Out of Stock", price: "$142.30"},
{id: 13, title: "Integrated Circuits", subject: "Animation", year: "Last Year", department: "Architecture", type: "CD", status: "In Stock", price: "$108.38"},
{id: 14, title: "Computer Basics", subject: "Animation", year: "Third Year", department: "Architecture", type: "CD", status: "Out of Stock", price: "$12.50"},
{id: 15, title: "Law Practice", subject: "Management", year: "Last Year", department: "Computer Engineering", type: "Newpaper", status: "In Stock", price: "$64.13"},
{id: 16, title: "Responsive Designs", subject: "Politics", year: "First Year", department: "Civil Engg.", type: "Newpaper", status: "Out of Stock", price: "$174.50"},
{id: 17, title: "Graphic Designing", subject: "Management", year: "First Year", department: "Civil Engg.", type: "Newpaper", status: "In Stock", price: "$55.59"},
{id: 18, title: "Animation", subject: "Designing", year: "Second Year", department: "Architecture", type: "CD", status: "Out of Stock", price: "$110.92"},
{id: 19, title: "Build a Brand", subject: "Graphics", year: "Second Year", department: "Architecture", type: "Newpaper", status: "Out of Stock", price: "$41.54"},
{id: 20, title: "Marketing", subject: "Politics", year: "Second Year", department: "MBA", type: "Book", status: "Out of Stock", price: "$135.34"},
{id: 21, title: "AngularJS", subject: "Mechanics", year: "Last Year", department: "Architecture", type: "Newpaper", status: "In Stock", price: "$65.70"},
{id: 22, title: "SQL", subject: "Management", year: "Last Year", department: "Automobile Engg.", type: "Book", status: "In Stock", price: "$86.99"},
{id: 23, title: "Management", subject: "Mechanics", year: "Last Year", department: "MBA", type: "DVD", status: "Out of Stock", price: "$145.48"},
{id: 24, title: "Web Programming", subject: "Computer", year: "Last Year", department: "Civil Engg.", type: "CD", status: "Out of Stock", price: "$25.52"},
{id: 25, title: "Designing", subject: "Politics", year: "Last Year", department: "Computer Engineering", type: "DVD", status: "Out of Stock", price: "$117.87"},
{id: 26, title: "Mechanics", subject: "Politics", year: "First Year", department: "Computer Engineering", type: "DVD", status: "In Stock", price: "$50.63"},
{id: 27, title: "Theory of Relaivity", subject: "Computer", year: "First Year", department: "MBA", type: "Book", status: "Out of Stock", price: "$29.01"},
{id: 28, title: "Time History", subject: "Animation", year: "First Year", department: "Civil Engg.", type: "CD", status: "In Stock", price: "$148.12"},
{id: 29, title: "Politics", subject: "Mechanics", year: "Third Year", department: "Architecture", type: "Book", status: "In Stock", price: "$114.95"},
{id: 30, title: "Management Basics", subject: "Computer", year: "First Year", department: "Mechanical Engineering", type: "Book", status: "In Stock", price: "$181.30"},
{id: 31, title: "Animation Graphic Fundamentals", subject: "Mechanics", year: "Last Year", department: "MBA", type: "Newpaper", status: "In Stock", price: "$38.70"},
{id: 32, title: "Parallel Computing", subject: "Animation", year: "First Year", department: "Automobile Engg.", type: "CD", status: "In Stock", price: "$97.32"},
{id: 33, title: "Networking", subject: "Designing", year: "Third Year", department: "Mechanical Engineering", type: "DVD", status: "In Stock", price: "$103.39"},
{id: 34, title: "Architecture", subject: "Animation", year: "Second Year", department: "Mechanical Engineering", type: "Newpaper", status: "Out of Stock", price: "$41.75"},
{id: 35, title: "Electronics", subject: "Computer", year: "Second Year", department: "MBA", type: "CD", status: "In Stock", price: "$65.67"},
{id: 36, title: "Integrated Circuits", subject: "Mechanics", year: "Third Year", department: "Architecture", type: "Newpaper", status: "Out of Stock", price: "$98.83"},
{id: 37, title: "Computer Basics", subject: "Graphics", year: "Third Year", department: "Automobile Engg.", type: "CD", status: "In Stock", price: "$130.34"},
{id: 38, title: "Law Practice", subject: "Mechanics", year: "Last Year", department: "Architecture", type: "DVD", status: "Out of Stock", price: "$44.50"},
{id: 39, title: "Responsive Designs", subject: "Animation", year: "First Year", department: "Civil Engg.", type: "DVD", status: "In Stock", price: "$173.87"},
{id: 40, title: "Graphic Designing", subject: "Management", year: "Last Year", department: "Architecture", type: "Book", status: "Out of Stock", price: "$106.24"},
{id: 41, title: "Animation", subject: "Management", year: "Last Year", department: "Mechanical Engineering", type: "DVD", status: "Out of Stock", price: "$14.28"},
{id: 42, title: "Build a Brand", subject: "Graphics", year: "Second Year", department: "Architecture", type: "Newpaper", status: "In Stock", price: "$118.56"},
{id: 43, title: "Marketing", subject: "Mechanics", year: "Third Year", department: "Automobile Engg.", type: "Newpaper", status: "In Stock", price: "$86.90"},
{id: 44, title: "AngularJS", subject: "Designing", year: "First Year", department: "Architecture", type: "CD", status: "In Stock", price: "$194.50"},
{id: 45, title: "SQL", subject: "Computer", year: "Last Year", department: "Computer Engineering", type: "Newpaper", status: "Out of Stock", price: "$160.38"},
{id: 46, title: "Management", subject: "Computer", year: "Last Year", department: "MBA", type: "CD", status: "Out of Stock", price: "$189.51"},
{id: 47, title: "Web Programming", subject: "Management", year: "First Year", department: "Architecture", type: "Book", status: "In Stock", price: "$121.57"},
{id: 48, title: "Designing", subject: "Designing", year: "Last Year", department: "Mechanical Engineering", type: "Book", status: "In Stock", price: "$58.07"},
{id: 49, title: "Mechanics", subject: "Mechanics", year: "First Year", department: "Mechanical Engineering", type: "Newpaper", status: "In Stock", price: "$103.69"},
{id: 50, title: "Theory of Relaivity", subject: "Animation", year: "Last Year", department: "Architecture", type: "CD", status: "In Stock", price: "$28.10"},
{id: 51, title: "Time History", subject: "Computer", year: "First Year", department: "Architecture", type: "DVD", status: "In Stock", price: "$131.15"},
{id: 52, title: "Politics", subject: "Designing", year: "First Year", department: "Automobile Engg.", type: "Newpaper", status: "Out of Stock", price: "$87.50"},
{id: 53, title: "Management Basics", subject: "Animation", year: "Second Year", department: "Civil Engg.", type: "Book", status: "In Stock", price: "$44.18"},
{id: 54, title: "Animation Graphic Fundamentals", subject: "Animation", year: "First Year", department: "Automobile Engg.", type: "Book", status: "In Stock", price: "$156.25"},
{id: 55, title: "Parallel Computing", subject: "Animation", year: "Third Year", department: "MBA", type: "Book", status: "Out of Stock", price: "$187.66"},
{id: 56, title: "Networking", subject: "Mechanics", year: "Third Year", department: "Automobile Engg.", type: "DVD", status: "In Stock", price: "$147.46"},
{id: 57, title: "Architecture", subject: "Designing", year: "Second Year", department: "Automobile Engg.", type: "Book", status: "In Stock", price: "$199.23"},
{id: 58, title: "Electronics", subject: "Designing", year: "Second Year", department: "Civil Engg.", type: "Book", status: "Out of Stock", price: "$61.57"},
{id: 59, title: "Integrated Circuits", subject: "Animation", year: "Second Year", department: "Automobile Engg.", type: "Book", status: "In Stock", price: "$174.77"},
{id: 60, title: "Computer Basics", subject: "Computer", year: "Last Year", department: "Mechanical Engineering", type: "CD", status: "In Stock", price: "$171.31"},
{id: 61, title: "Law Practice", subject: "Graphics", year: "Third Year", department: "Architecture", type: "Newpaper", status: "Out of Stock", price: "$168.88"},
{id: 62, title: "Responsive Designs", subject: "Mechanics", year: "Last Year", department: "Mechanical Engineering", type: "DVD", status: "Out of Stock", price: "$22.14"},
{id: 63, title: "Graphic Designing", subject: "Designing", year: "First Year", department: "Architecture", type: "Newpaper", status: "In Stock", price: "$72.10"},
{id: 64, title: "Animation", subject: "Management", year: "First Year", department: "Architecture", type: "Book", status: "In Stock", price: "$180.65"},
{id: 65, title: "Build a Brand", subject: "Politics", year: "Second Year", department: "Civil Engg.", type: "DVD", status: "In Stock", price: "$103.80"},
{id: 66, title: "Marketing", subject: "Politics", year: "Second Year", department: "Mechanical Engineering", type: "CD", status: "Out of Stock", price: "$71.43"},
{id: 67, title: "AngularJS", subject: "Graphics", year: "Last Year", department: "Computer Engineering", type: "DVD", status: "Out of Stock", price: "$14.06"},
{id: 68, title: "SQL", subject: "Graphics", year: "First Year", department: "Automobile Engg.", type: "Newpaper", status: "Out of Stock", price: "$161.23"},
{id: 69, title: "Management", subject: "Designing", year: "First Year", department: "Architecture", type: "Newpaper", status: "Out of Stock", price: "$80.10"},
{id: 70, title: "Web Programming", subject: "Mechanics", year: "Third Year", department: "Computer Engineering", type: "Book", status: "In Stock", price: "$50.75"},
{id: 71, title: "Designing", subject: "Designing", year: "Last Year", department: "Mechanical Engineering", type: "DVD", status: "In Stock", price: "$80.58"},
{id: 72, title: "Mechanics", subject: "Designing", year: "Third Year", department: "Computer Engineering", type: "Book", status: "Out of Stock", price: "$177.06"},
{id: 73, title: "Theory of Relaivity", subject: "Politics", year: "Second Year", department: "Mechanical Engineering", type: "CD", status: "Out of Stock", price: "$78.26"},
{id: 74, title: "Time History", subject: "Mechanics", year: "Third Year", department: "Computer Engineering", type: "Book", status: "Out of Stock", price: "$86.42"},
{id: 75, title: "Politics", subject: "Designing", year: "Last Year", department: "Civil Engg.", type: "DVD", status: "Out of Stock", price: "$96.39"},
{id: 76, title: "Management Basics", subject: "Designing", year: "First Year", department: "Civil Engg.", type: "Newpaper", status: "In Stock", price: "$68.62"},
{id: 77, title: "Animation Graphic Fundamentals", subject: "Mechanics", year: "Third Year", department: "MBA", type: "CD", status: "In Stock", price: "$74.50"},
{id: 78, title: "Parallel Computing", subject: "Politics", year: "First Year", department: "Mechanical Engineering", type: "Newpaper", status: "In Stock", price: "$160.62"},
{id: 79, title: "Networking", subject: "Animation", year: "First Year", department: "Computer Engineering", type: "Book", status: "In Stock", price: "$124.97"},
{id: 80, title: "Architecture", subject: "Animation", year: "Third Year", department: "Civil Engg.", type: "CD", status: "In Stock", price: "$61.30"},
{id: 81, title: "Electronics", subject: "Computer", year: "Third Year", department: "Automobile Engg.", type: "Newpaper", status: "Out of Stock", price: "$70.66"},
{id: 82, title: "Integrated Circuits", subject: "Management", year: "Third Year", department: "Computer Engineering", type: "CD", status: "In Stock", price: "$150.93"},
{id: 83, title: "Computer Basics", subject: "Graphics", year: "Last Year", department: "Computer Engineering", type: "Book", status: "In Stock", price: "$193.52"},
{id: 84, title: "Law Practice", subject: "Computer", year: "Second Year", department: "Computer Engineering", type: "CD", status: "Out of Stock", price: "$187.59"},
{id: 85, title: "Responsive Designs", subject: "Mechanics", year: "Third Year", department: "Architecture", type: "DVD", status: "In Stock", price: "$115.62"},
{id: 86, title: "Graphic Designing", subject: "Graphics", year: "Last Year", department: "Mechanical Engineering", type: "Book", status: "Out of Stock", price: "$119.14"},
{id: 87, title: "Animation", subject: "Mechanics", year: "Second Year", department: "Computer Engineering", type: "Book", status: "Out of Stock", price: "$154.58"},
{id: 88, title: "Build a Brand", subject: "Mechanics", year: "Second Year", department: "Automobile Engg.", type: "Newpaper", status: "Out of Stock", price: "$125.73"},
{id: 89, title: "Marketing", subject: "Graphics", year: "Third Year", department: "Civil Engg.", type: "Book", status: "Out of Stock", price: "$130.29"},
{id: 90, title: "AngularJS", subject: "Mechanics", year: "Second Year", department: "Mechanical Engineering", type: "DVD", status: "In Stock", price: "$55.46"},
{id: 91, title: "SQL", subject: "Politics", year: "Second Year", department: "MBA", type: "Book", status: "In Stock", price: "$24.18"},
{id: 92, title: "Management", subject: "Animation", year: "Last Year", department: "Automobile Engg.", type: "Newpaper", status: "In Stock", price: "$133.19"},
{id: 93, title: "Web Programming", subject: "Graphics", year: "Last Year", department: "MBA", type: "CD", status: "In Stock", price: "$100.73"},
{id: 94, title: "Designing", subject: "Graphics", year: "Second Year", department: "MBA", type: "Newpaper", status: "In Stock", price: "$80.63"},
{id: 95, title: "Mechanics", subject: "Politics", year: "First Year", department: "Civil Engg.", type: "Newpaper", status: "In Stock", price: "$89.96"},
{id: 96, title: "Theory of Relaivity", subject: "Animation", year: "Last Year", department: "Automobile Engg.", type: "Newpaper", status: "Out of Stock", price: "$73.26"},
{id: 97, title: "Time History", subject: "Management", year: "Third Year", department: "Architecture", type: "DVD", status: "In Stock", price: "$67.41"},
{id: 98, title: "Politics", subject: "Graphics", year: "First Year", department: "Mechanical Engineering", type: "DVD", status: "In Stock", price: "$166.12"},
{id: 99, title: "Management Basics", subject: "Management", year: "Second Year", department: "Automobile Engg.", type: "Newpaper", status: "Out of Stock", price: "$118.85"},
{id: 100, title: "Animation Graphic Fundamentals", subject: "Graphics", year: "Second Year", department: "MBA", type: "Book", status: "In Stock", price: "$145.11"}
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

class Library extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Library Assets</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Library</h2>
                                
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

export default Library;
