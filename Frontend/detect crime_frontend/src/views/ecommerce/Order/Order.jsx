import moment from 'moment'; // Example for onSort prop
import React from 'react'; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import {
    Row, Col,
} from 'reactstrap';

const header = [
  { title: 'Order #', prop: 'number', sortable: true, filterable: true },
  { title: 'Customer', prop: 'customer', sortable: true, filterable: true },
  { title: 'Vendor', prop: 'vendor', sortable: true, filterable: true },
  { title: 'Product', prop: 'product', sortable: true, filterable: true },
  { title: 'Price', prop: 'price', sortable: true, filterable: true },
  { title: 'Date', prop: 'date', sortable: true, filterable: true },
  { title: 'Status', prop: 'status', sortable: true, filterable: true },
];



const body = [{id: 1, number: "0220-9068", customer: "Howard Foster", vendor: "Nicole Ramos", status: "New", date: "11/10/2015", price: "$288.05", product: "Leica T Mirrorless Digital Camera"},
{id: 2, number: "29300-187", customer: "Norma Torres", vendor: "Louis Hall", status: "Pending", date: "2/25/2015", price: "$191.92", product: "Nikon D5500 DSLR - Black"},
{id: 3, number: "65044-1006", customer: "Willie Evans", vendor: "Chris Dean", status: "New", date: "3/22/2015", price: "$357.25", product: "Night Visions"},
{id: 4, number: "60505-2654", customer: "Albert Elliott", vendor: "Albert Hunter", status: "New", date: "10/2/2015", price: "$204.50", product: "Lenovo IdeaCentre 600 All-in-One PC"},
{id: 5, number: "55910-825", customer: "Thomas Alexander", vendor: "Roy Hansen", status: "Delivered", date: "7/16/2015", price: "$177.56", product: "Nike Floral Running Shoes"},
{id: 6, number: "0440-8195", customer: "Frances Boyd", vendor: "Raymond Price", status: "New", date: "6/21/2015", price: "$206.23", product: "Nikon D5500 DSLR"},
{id: 7, number: "21695-832", customer: "Norma Clark", vendor: "Doris Powell", status: "Delivered", date: "6/12/2015", price: "$441.06", product: "Obey Propaganda Hat"},
{id: 8, number: "42787-102", customer: "Kimberly Hawkins", vendor: "Judy Grant", status: "New", date: "1/14/2015", price: "$120.35", product: "Nokia Lumia 1020"},
{id: 9, number: "65862-171", customer: "Jimmy Brown", vendor: "Phyllis Gilbert", status: "Delivered", date: "4/19/2015", price: "$313.56", product: "Leica T Mirrorless Digital Camera"},
{id: 10, number: "42291-889", customer: "Julie Butler", vendor: "Billy Allen", status: "New", date: "10/26/2015", price: "$150.02", product: "Custom T-Shirt"},
{id: 11, number: "52685-307", customer: "Cheryl Evans", vendor: "Susan Rose", status: "Delivered", date: "11/30/2014", price: "$246.47", product: "HP Envy 6-1180ca Sleekbook"},
{id: 12, number: "49349-914", customer: "Sarah Lynch", vendor: "Joe Long", status: "New", date: "7/26/2015", price: "$464.77", product: "Nikon D5500 DSLR - Black"},
{id: 13, number: "55513-021", customer: "Edward Bell", vendor: "Cynthia Shaw", status: "Delivered", date: "2/2/2015", price: "$206.65", product: "Custom T-Shirt"},
{id: 14, number: "51393-7434", customer: "Jose Perez", vendor: "Christopher Williams", status: "New", date: "7/15/2015", price: "$280.43", product: "Nike Floral Running Shoes"},
{id: 15, number: "45802-237", customer: "Joseph Shaw", vendor: "Russell Cunningham", status: "Pending", date: "4/28/2015", price: "$102.60", product: "Lenovo IdeaCentre 600 All-in-One PC"},
{id: 16, number: "49288-0499", customer: "Randy Hughes", vendor: "Jason Freeman", status: "New", date: "8/1/2015", price: "$409.36", product: "Digital Storm Performance PC"},
{id: 17, number: "0409-7904", customer: "Arthur Perez", vendor: "Todd Gilbert", status: "Pending", date: "1/28/2015", price: "$325.38", product: "HTC One Mini Blue"},
{id: 18, number: "55714-8008", customer: "Joe Johnson", vendor: "Adam Wells", status: "Delivered", date: "5/30/2015", price: "$400.16", product: "HTC One Mini Blue"},
{id: 19, number: "41250-280", customer: "James Warren", vendor: "Roger Myers", status: "New", date: "3/10/2015", price: "$130.49", product: "Leica T Mirrorless Digital Camera"},
{id: 20, number: "61748-024", customer: "Helen Martinez", vendor: "Anne Reed", status: "Pending", date: "10/5/2015", price: "$497.31", product: "HP Envy 6-1180ca Sleekbook"},
{id: 21, number: "0409-4684", customer: "Kathy Fernandez", vendor: "Louis Miller", status: "New", date: "3/26/2015", price: "$267.58", product: "Leica T Mirrorless Digital Camera"},
{id: 22, number: "22700-134", customer: "Louis Williamson", vendor: "David Hernandez", status: "New", date: "1/21/2015", price: "$292.02", product: "Flower Girl Bracelet"},
{id: 23, number: "55319-173", customer: "Willie Garcia", vendor: "Marilyn Russell", status: "Delivered", date: "8/15/2015", price: "$344.71", product: "Fahrenheit 451 by Ray Bradbury"},
{id: 24, number: "60505-3723", customer: "Jimmy Robinson", vendor: "David Black", status: "Pending", date: "10/24/2015", price: "$277.01", product: "Custom T-Shirt"},
{id: 25, number: "55910-950", customer: "Antonio Martin", vendor: "Jennifer Roberts", status: "Delivered", date: "3/30/2015", price: "$373.70", product: "If You Wait"},
{id: 26, number: "52305-144", customer: "Martin Morrison", vendor: "Bobby Ross", status: "Pending", date: "11/16/2015", price: "$330.04", product: "Flower Girl Bracelet"},
{id: 27, number: "57237-090", customer: "Julie Henry", vendor: "Evelyn Baker", status: "Delivered", date: "6/14/2015", price: "$270.35", product: "Fahrenheit 451 by Ray Bradbury"},
{id: 28, number: "49643-346", customer: "Ashley Stanley", vendor: "Marilyn Duncan", status: "New", date: "5/4/2015", price: "$113.45", product: "HTC One M8 Android L 5.0 Lollipop"},
{id: 29, number: "0378-1910", customer: "Walter Hernandez", vendor: "Donna Fuller", status: "New", date: "4/3/2015", price: "$250.70", product: "First Prize Pies"},
{id: 30, number: "50242-051", customer: "Kimberly Reyes", vendor: "Anthony Daniels", status: "Delivered", date: "9/9/2015", price: "$471.82", product: "Levi's 511 Jeans"},
{id: 31, number: "55714-4403", customer: "Brian Baker", vendor: "Linda Watkins", status: "New", date: "5/19/2015", price: "$442.63", product: "HP Spectre XT Pro UltraBook"},
{id: 32, number: "62257-221", customer: "Gloria Hanson", vendor: "Roger Ruiz", status: "Pending", date: "3/13/2015", price: "$381.68", product: "Oversized Women T-Shirt"},
{id: 33, number: "75857-0003", customer: "Sara Powell", vendor: "Harry Wood", status: "New", date: "6/8/2015", price: "$111.77", product: "Nikon D5500 DSLR"},
{id: 34, number: "0185-0101", customer: "Randy Mccoy", vendor: "Jonathan Russell", status: "Pending", date: "4/18/2015", price: "$158.55", product: "Flower Girl Bracelet"},
{id: 35, number: "49288-0171", customer: "Rose Fernandez", vendor: "Diana Bailey", status: "New", date: "4/22/2015", price: "$166.94", product: "Lenovo IdeaCentre 600 All-in-One PC"},
{id: 36, number: "64764-805", customer: "George Garcia", vendor: "Irene Dean", status: "Pending", date: "3/6/2015", price: "$167.22", product: "HP Envy 6-1180ca Sleekbook"},
{id: 37, number: "55316-535", customer: "Michelle Barnes", vendor: "Jennifer Hernandez", status: "Delivered", date: "7/19/2015", price: "$229.94", product: "Custom T-Shirt"},
{id: 38, number: "63868-363", customer: "Anne Wallace", vendor: "Ralph Flores", status: "Pending", date: "2/4/2015", price: "$190.43", product: "HP Spectre XT Pro UltraBook"},
{id: 39, number: "43857-0122", customer: "Wayne Palmer", vendor: "Andrea Webb", status: "Pending", date: "7/4/2015", price: "$156.23", product: "Levi's 511 Jeans"},
{id: 40, number: "0615-7519", customer: "Jose Day", vendor: "Kimberly Stanley", status: "Pending", date: "4/7/2015", price: "$183.82", product: "HP Spectre XT Pro UltraBook"},
{id: 41, number: "49631-182", customer: "Wanda Moreno", vendor: "Tina Hall", status: "Pending", date: "4/6/2015", price: "$300.46", product: "Elegant Gemstone Necklace"},
{id: 42, number: "66579-0064", customer: "Dorothy Austin", vendor: "Jerry Watson", status: "Pending", date: "7/26/2015", price: "$118.30", product: "Lenovo IdeaCentre 600 All-in-One PC"},
{id: 43, number: "52125-756", customer: "Theresa Vasquez", vendor: "Beverly Dunn", status: "Pending", date: "6/25/2015", price: "$395.03", product: "HP Spectre XT Pro UltraBook"},
{id: 44, number: "68084-498", customer: "Teresa Wheeler", vendor: "Louis Gonzalez", status: "Pending", date: "11/29/2015", price: "$166.08", product: "Nikon D5500 DSLR - Red"},
{id: 45, number: "0615-7574", customer: "Patrick Ellis", vendor: "Wanda Matthews", status: "New", date: "3/30/2015", price: "$432.99", product: "Nikon D5500 DSLR - Red"},
{id: 46, number: "53964-002", customer: "Kimberly Wheeler", vendor: "Howard Hanson", status: "Delivered", date: "9/19/2015", price: "$319.25", product: "Oversized Women T-Shirt"},
{id: 47, number: "42926-140", customer: "Randy Allen", vendor: "Norma Jackson", status: "Delivered", date: "2/25/2015", price: "$413.13", product: "Nokia Lumia 1020"},
{id: 48, number: "30142-103", customer: "Deborah Stanley", vendor: "Phillip Miller", status: "New", date: "3/7/2015", price: "$425.50", product: "Night Visions"},
{id: 49, number: "65862-477", customer: "Howard Owens", vendor: "Jean Olson", status: "New", date: "6/29/2015", price: "$328.30", product: "Elegant Gemstone Necklace"},
{id: 50, number: "50184-1041", customer: "Catherine Garcia", vendor: "Matthew Anderson", status: "New", date: "2/24/2015", price: "$467.51", product: "Fahrenheit 451 by Ray Bradbury"},
{id: 51, number: "33342-036", customer: "Ann Ramirez", vendor: "Victor Lane", status: "Delivered", date: "4/15/2015", price: "$449.50", product: "Nokia Lumia 1020"},
{id: 52, number: "0597-0192", customer: "Chris Stanley", vendor: "Raymond Castillo", status: "Pending", date: "11/17/2015", price: "$176.30", product: "Nikon D5500 DSLR - Red"},
{id: 53, number: "57520-0937", customer: "Brandon Oliver", vendor: "Gregory Torres", status: "Pending", date: "5/16/2015", price: "$422.45", product: "Digital Storm Performance PC"},
{id: 54, number: "62756-293", customer: "Donna Greene", vendor: "Paul Jackson", status: "Pending", date: "4/19/2015", price: "$144.04", product: "Nike Floral Running Shoes"},
{id: 55, number: "53499-0172", customer: "Ashley Crawford", vendor: "Julie Stewart", status: "New", date: "4/11/2015", price: "$115.46", product: "Fahrenheit 451 by Ray Bradbury"},
{id: 56, number: "52919-161", customer: "Philip Reid", vendor: "Ruth George", status: "Pending", date: "12/1/2014", price: "$201.38", product: "Oversized Women T-Shirt"},
{id: 57, number: "68745-1046", customer: "Jacqueline Reed", vendor: "Shawn Robinson", status: "Delivered", date: "5/23/2015", price: "$123.29", product: "Flower Girl Bracelet"},
{id: 58, number: "42291-836", customer: "Bruce Burns", vendor: "Sarah Thompson", status: "New", date: "3/12/2015", price: "$146.68", product: "HTC One M8 Android L 5.0 Lollipop"},
{id: 59, number: "58232-9913", customer: "Brandon Morrison", vendor: "Virginia Fuller", status: "Delivered", date: "11/22/2015", price: "$480.87", product: "Nikon D5500 DSLR - Red"},
{id: 60, number: "63868-060", customer: "Gregory Holmes", vendor: "Jane Gray", status: "Delivered", date: "6/2/2015", price: "$133.99", product: "Lenovo IdeaCentre 600 All-in-One PC"},
{id: 61, number: "68400-121", customer: "Kevin Ward", vendor: "Peter Bowman", status: "New", date: "9/28/2015", price: "$115.40", product: "Portable Sound Speakers"},
{id: 62, number: "59779-622", customer: "Phillip Murray", vendor: "Brandon Perez", status: "Delivered", date: "12/13/2014", price: "$419.39", product: "HTC One M8 Android L 5.0 Lollipop"},
{id: 63, number: "41250-112", customer: "Jeremy George", vendor: "Martin Bryant", status: "Delivered", date: "1/4/2015", price: "$175.02", product: "If You Wait"},
{id: 64, number: "49967-082", customer: "Anna Freeman", vendor: "Joan Mccoy", status: "Pending", date: "2/15/2015", price: "$383.79", product: "Digital Storm Performance PC"},
{id: 65, number: "35356-833", customer: "Richard Wheeler", vendor: "Douglas Meyer", status: "New", date: "7/8/2015", price: "$377.82", product: "Fahrenheit 451 by Ray Bradbury"},
{id: 66, number: "43857-0097", customer: "Todd Peterson", vendor: "Dorothy Moore", status: "Delivered", date: "11/3/2015", price: "$108.02", product: "Obey Propaganda Hat"},
{id: 67, number: "60512-9068", customer: "Daniel Johnston", vendor: "Michael Palmer", status: "Delivered", date: "10/29/2015", price: "$468.39", product: "HP Envy 6-1180ca Sleekbook"},
{id: 68, number: "66336-554", customer: "Margaret Garcia", vendor: "Phyllis Jacobs", status: "New", date: "3/2/2015", price: "$496.59", product: "Leica T Mirrorless Digital Camera"},
{id: 69, number: "51830-023", customer: "Phillip Bowman", vendor: "Carl Bennett", status: "Pending", date: "10/18/2015", price: "$374.50", product: "Nikon D5500 DSLR"},
{id: 70, number: "60681-0113", customer: "Robert Willis", vendor: "Jeremy Evans", status: "New", date: "5/9/2015", price: "$114.32", product: "Lenovo Thinkpad X1 Carbon Laptop"},
{id: 71, number: "67457-495", customer: "Lori Foster", vendor: "Carol Hansen", status: "New", date: "4/4/2015", price: "$131.08", product: "Lenovo Thinkpad X1 Carbon Laptop"},
{id: 72, number: "54868-6368", customer: "Bobby Bowman", vendor: "Bruce Rice", status: "Pending", date: "10/24/2015", price: "$216.19", product: "Lenovo Thinkpad X1 Carbon Laptop"},
{id: 73, number: "68462-222", customer: "Irene Wilson", vendor: "Kathy Kennedy", status: "Pending", date: "9/24/2015", price: "$471.39", product: "Flower Girl Bracelet"},
{id: 74, number: "42291-212", customer: "Brandon Crawford", vendor: "Brenda Moore", status: "Delivered", date: "7/27/2015", price: "$178.70", product: "Lenovo Thinkpad X1 Carbon Laptop"},
{id: 75, number: "59078-036", customer: "Raymond Payne", vendor: "Heather Flores", status: "Pending", date: "7/24/2015", price: "$248.31", product: "If You Wait"},
{id: 76, number: "63304-875", customer: "Randy Gonzalez", vendor: "Brandon Miller", status: "Pending", date: "8/28/2015", price: "$405.76", product: "First Prize Pies"},
{id: 77, number: "54868-0802", customer: "Jeffrey Tucker", vendor: "Sean Hughes", status: "Pending", date: "10/21/2015", price: "$190.81", product: "Lenovo Thinkpad X1 Carbon Laptop"},
{id: 78, number: "16590-023", customer: "Michelle Fuller", vendor: "Ronald Howard", status: "Delivered", date: "3/20/2015", price: "$127.82", product: "Obey Propaganda Hat"},
{id: 79, number: "68428-147", customer: "Willie Robinson", vendor: "Marie Bell", status: "Delivered", date: "1/7/2015", price: "$278.21", product: "Nikon D5500 DSLR - Black"},
{id: 80, number: "43857-0110", customer: "Jose Fowler", vendor: "Lori Woods", status: "Delivered", date: "2/8/2015", price: "$341.17", product: "If You Wait"},
{id: 81, number: "55910-368", customer: "Bobby Mcdonald", vendor: "Kathryn Nelson", status: "Delivered", date: "2/9/2015", price: "$329.03", product: "Oversized Women T-Shirt"},
{id: 82, number: "67467-623", customer: "Jean Campbell", vendor: "Jason Flores", status: "Pending", date: "11/3/2015", price: "$230.33", product: "Levi's 511 Jeans"},
{id: 83, number: "68899-0001", customer: "Kelly Russell", vendor: "Clarence Kelly", status: "Delivered", date: "12/4/2014", price: "$249.85", product: "Digital Storm Performance PC"},
{id: 84, number: "36987-3427", customer: "Kathy Stone", vendor: "Daniel Rice", status: "New", date: "8/28/2015", price: "$496.78", product: "Nikon D5500 DSLR - Black"},
{id: 85, number: "68745-1053", customer: "Sean Andrews", vendor: "Timothy Moreno", status: "Delivered", date: "3/1/2015", price: "$165.78", product: "Portable Sound Speakers"},
{id: 86, number: "35356-387", customer: "Stephanie Scott", vendor: "Cynthia Murray", status: "Delivered", date: "2/28/2015", price: "$263.57", product: "HTC One Mini Blue"},
{id: 87, number: "13668-107", customer: "Joan Robinson", vendor: "Amanda Perkins", status: "Pending", date: "8/26/2015", price: "$323.09", product: "Nikon D5500 DSLR"},
{id: 88, number: "59899-007", customer: "Henry Cruz", vendor: "Jacqueline Garcia", status: "Delivered", date: "11/4/2015", price: "$389.65", product: "Night Visions"},
{id: 89, number: "0093-2065", customer: "Ashley Mendoza", vendor: "Howard Burns", status: "Pending", date: "3/30/2015", price: "$345.00", product: "Nokia Lumia 1020"},
{id: 90, number: "0268-1442", customer: "Clarence Black", vendor: "Richard Rice", status: "Pending", date: "2/5/2015", price: "$308.28", product: "First Prize Pies"},
{id: 91, number: "61715-054", customer: "Amanda Gordon", vendor: "Wanda Fernandez", status: "Delivered", date: "1/13/2015", price: "$165.77", product: "Oversized Women T-Shirt"},
{id: 92, number: "37012-602", customer: "Randy Arnold", vendor: "Ruth Hawkins", status: "Delivered", date: "4/21/2015", price: "$383.21", product: "Fahrenheit 451 by Ray Bradbury"},
{id: 93, number: "52959-757", customer: "Victor Gordon", vendor: "Terry Richards", status: "Pending", date: "7/2/2015", price: "$173.35", product: "HP Spectre XT Pro UltraBook"},
{id: 94, number: "68400-703", customer: "Ralph Snyder", vendor: "Michelle Edwards", status: "New", date: "3/28/2015", price: "$289.93", product: "Elegant Gemstone Necklace"},
{id: 95, number: "0703-9526", customer: "Harold Perkins", vendor: "Marie Alexander", status: "New", date: "6/7/2015", price: "$241.06", product: "HTC One M8 Android L 5.0 Lollipop"},
{id: 96, number: "75862-014", customer: "Debra Clark", vendor: "Joshua Harris", status: "New", date: "2/17/2015", price: "$290.03", product: "Flower Girl Bracelet"},
{id: 97, number: "54569-4672", customer: "Shirley Fernandez", vendor: "Timothy Gardner", status: "Delivered", date: "4/16/2015", price: "$444.48", product: "Lenovo IdeaCentre 600 All-in-One PC"},
{id: 98, number: "0006-0726", customer: "Phyllis Chapman", vendor: "Joseph Cruz", status: "Delivered", date: "12/8/2014", price: "$361.61", product: "Elegant Gemstone Necklace"},
{id: 99, number: "44911-0022", customer: "Laura Harris", vendor: "Bobby Ferguson", status: "New", date: "6/18/2015", price: "$358.09", product: "If You Wait"},
{ id: 100, number: "42291-678", customer: "Brian Wright", vendor: "Arthur Cruz", status: "Pending", date: "8/2/2015", price: "$109.37", product: "HP Spectre XT Pro UltraBook"}
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

class Order extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Orders</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Orders</h2>
                                
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

export default Order;
