import moment from 'moment'; // Example for onSort prop
import React from 'react'; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import {
    Row, Col,
} from 'reactstrap';

const header = [
  { title: 'Bid #', prop: 'number', sortable: true, filterable: true },
  { title: 'Buyer', prop: 'buyer', sortable: true, filterable: true },
  { title: 'Seller', prop: 'seller', sortable: true, filterable: true },
  { title: 'Category', prop: 'project', sortable: true, filterable: true },
  { title: 'Price', prop: 'price', sortable: true, filterable: true },
  { title: 'Date', prop: 'date', sortable: true, filterable: true },
  { title: 'Status', prop: 'status', sortable: true, filterable: true },
];



const body = [{id: 1, number: "0259-1102", buyer: "Jason Bradley", project: "marketing", status: "New", date: "3/23/2015", price: "$100.73", seller: "Evelyn Cunningham"}, 
{id: 2, number: "65121-001", buyer: "Joan White", project: "logo design", status: "New", date: "10/11/2015", price: "$367.60", seller: "Gloria Ellis"}, 
{id: 3, number: "52124-0116", buyer: "Kelly Ross", project: "logo design", status: "New", date: "6/17/2015", price: "$328.06", seller: "Harold Bryant"}, 
{id: 4, number: "54868-1852", buyer: "Joyce Smith", project: "SEO and SEM", status: "New", date: "2/4/2015", price: "$263.44", seller: "Mary Fields"}, 
{id: 5, number: "54868-6224", buyer: "Douglas Gonzales", project: "wordpress website", status: "New", date: "1/17/2015", price: "$338.40", seller: "Peter Nichols"}, 
{id: 6, number: "11489-082", buyer: "James Allen", project: "crm service", status: "New", date: "8/28/2015", price: "$179.90", seller: "Irene Russell"}, 
{id: 7, number: "50021-061", buyer: "Bobby Rivera", project: "wordpress website", status: "Completed", date: "1/25/2015", price: "$450.53", seller: "Julie Richardson"}, 
{id: 8, number: "58980-777", buyer: "Larry Mills", project: "graphic design", status: "Completed", date: "10/5/2015", price: "$326.25", seller: "Sharon Cooper"}, 
{id: 9, number: "51367-016", buyer: "Anne Carter", project: "php website", status: "New", date: "11/21/2015", price: "$122.62", seller: "Elizabeth Torres"}, 
{id: 10, number: "48951-9074", buyer: "Deborah Reyes", project: "marketing", status: "New", date: "7/29/2015", price: "$130.60", seller: "Patricia Bailey"}, 
{id: 11, number: "13734-126", buyer: "Fred Hansen", project: "SEO and SEM", status: "Completed", date: "11/4/2015", price: "$239.81", seller: "Anne Ramirez"}, 
{id: 12, number: "53877-008", buyer: "Matthew Nichols", project: "photoshop", status: "New", date: "4/12/2015", price: "$202.13", seller: "Judith Lewis"}, 
{id: 13, number: "36800-358", buyer: "Lois Andrews", project: "programming", status: "Completed", date: "2/4/2015", price: "$401.07", seller: "Thomas Roberts"}, 
{id: 14, number: "55289-613", buyer: "Christine Hall", project: "marketing", status: "Completed", date: "8/3/2015", price: "$280.06", seller: "Lori Shaw"}, 
{id: 15, number: "24385-005", buyer: "Jennifer Meyer", project: "wordpress website", status: "New", date: "4/18/2015", price: "$388.36", seller: "Kathryn Jacobs"}, 
{id: 16, number: "53645-1210", buyer: "Edward Willis", project: "graphic design", status: "Completed", date: "4/13/2015", price: "$394.80", seller: "Ryan Daniels"}, 
{id: 17, number: "65841-692", buyer: "Philip Sims", project: "social media marketing", status: "Completed", date: "3/17/2015", price: "$427.61", seller: "Brenda Stanley"}, 
{id: 18, number: "59779-522", buyer: "Jose Taylor", project: "graphic design", status: "New", date: "3/29/2015", price: "$364.27", seller: "Johnny Simpson"}, 
{id: 19, number: "53113-688", buyer: "Martin Alexander", project: "wordpress website", status: "New", date: "11/22/2015", price: "$472.91", seller: "Sara Gray"}, 
{id: 20, number: "51367-022", buyer: "Christine Hawkins", project: "logo design", status: "Completed", date: "1/10/2015", price: "$168.04", seller: "Jonathan Holmes"}, 
{id: 21, number: "59045-1006", buyer: "Henry Lane", project: "wordpress website", status: "Completed", date: "9/30/2015", price: "$286.44", seller: "Shawn Griffin"}, 
{id: 22, number: "52125-580", buyer: "Matthew Garcia", project: "social media marketing", status: "New", date: "10/8/2015", price: "$337.03", seller: "Ruby Ellis"}, 
{id: 23, number: "0591-2224", buyer: "Beverly Brown", project: "SEO and SEM", status: "New", date: "3/18/2015", price: "$125.99", seller: "Ryan Mason"}, 
{id: 24, number: "50076-100", buyer: "Norma Shaw", project: "crm service", status: "Completed", date: "8/5/2015", price: "$170.06", seller: "Arthur Robertson"}, 
{id: 25, number: "42507-092", buyer: "Aaron Miller", project: "branding", status: "Completed", date: "4/24/2015", price: "$281.74", seller: "Elizabeth Anderson"}, 
{id: 26, number: "64980-179", buyer: "Jimmy Ramos", project: "web design", status: "Completed", date: "1/15/2015", price: "$341.61", seller: "Larry Wheeler"}, 
{id: 27, number: "61755-005", buyer: "Henry Collins", project: "logo design", status: "Completed", date: "11/3/2015", price: "$113.36", seller: "Jeffrey Myers"}, 
{id: 28, number: "51346-157", buyer: "Norma Nelson", project: "marketing", status: "Completed", date: "3/7/2015", price: "$236.76", seller: "Beverly Moreno"}, 
{id: 29, number: "67938-1153", buyer: "Norma Lee", project: "photoshop", status: "Completed", date: "6/1/2015", price: "$431.53", seller: "Brian Frazier"}, 
{id: 30, number: "63629-4335", buyer: "Sharon Franklin", project: "crm service", status: "Completed", date: "2/26/2015", price: "$204.20", seller: "Clarence Hawkins"}, 
{id: 31, number: "11528-107", buyer: "Patricia Cox", project: "branding", status: "Completed", date: "2/26/2015", price: "$454.18", seller: "Lois Reed"}, 
{id: 32, number: "51079-073", buyer: "Phyllis Fisher", project: "photoshop", status: "Completed", date: "11/10/2015", price: "$438.71", seller: "Maria Ross"}, 
{id: 33, number: "66559-2978", buyer: "Sara Torres", project: "php website", status: "New", date: "9/14/2015", price: "$255.93", seller: "Harold Greene"}, 
{id: 34, number: "61715-053", buyer: "Annie Torres", project: "logo design", status: "New", date: "10/25/2015", price: "$346.35", seller: "Stephen Jacobs"}, 
{id: 35, number: "0268-1063", buyer: "Diane West", project: "SEO and SEM", status: "New", date: "2/25/2015", price: "$202.38", seller: "Teresa Green"}, 
{id: 36, number: "16714-377", buyer: "Earl Cole", project: "photoshop", status: "New", date: "1/2/2015", price: "$191.23", seller: "Joe West"}, 
{id: 37, number: "0363-0304", buyer: "Patrick Frazier", project: "programming", status: "Completed", date: "2/12/2015", price: "$338.63", seller: "Jesse Lopez"}, 
{id: 38, number: "64117-279", buyer: "Nicole Evans", project: "photoshop", status: "New", date: "1/13/2015", price: "$128.65", seller: "Harold Lawrence"}, 
{id: 39, number: "59351-0302", buyer: "Rebecca Black", project: "wordpress website", status: "New", date: "7/29/2015", price: "$469.99", seller: "Gary Fox"}, 
{id: 40, number: "21749-965", buyer: "Gloria Torres", project: "crm service", status: "New", date: "8/11/2015", price: "$414.01", seller: "Andrea Ramirez"}, 
{id: 41, number: "0185-0801", buyer: "Richard Griffin", project: "web design", status: "Completed", date: "8/14/2015", price: "$251.03", seller: "Walter Gutierrez"}, 
{id: 42, number: "0378-3702", buyer: "Harry Morales", project: "branding", status: "New", date: "3/18/2015", price: "$185.63", seller: "Daniel Moreno"}, 
{id: 43, number: "0409-1941", buyer: "Cynthia Watson", project: "crm service", status: "Completed", date: "8/18/2015", price: "$112.28", seller: "Jesse Gutierrez"}, 
{id: 44, number: "50730-1410", buyer: "Eric Gray", project: "SEO and SEM", status: "New", date: "9/10/2015", price: "$345.62", seller: "Scott Butler"}, 
{id: 45, number: "50211-001", buyer: "Jonathan Jackson", project: "programming", status: "Completed", date: "2/5/2015", price: "$231.75", seller: "Eric Rose"}, 
{id: 46, number: "65044-6513", buyer: "Nancy Berry", project: "social media marketing", status: "Completed", date: "11/29/2015", price: "$139.67", seller: "Robert Moore"}, 
{id: 47, number: "49527-825", buyer: "Shirley Oliver", project: "programming", status: "Completed", date: "6/19/2015", price: "$477.06", seller: "Willie Weaver"}, 
{id: 48, number: "10742-8507", buyer: "Shawn Dunn", project: "programming", status: "New", date: "5/11/2015", price: "$137.86", seller: "Joe Bailey"}, 
{id: 49, number: "55154-3383", buyer: "Billy Garcia", project: "crm service", status: "Completed", date: "9/7/2015", price: "$240.65", seller: "Donald Jordan"}, 
{id: 50, number: "48951-5062", buyer: "Russell Meyer", project: "graphic design", status: "New", date: "3/28/2015", price: "$294.39", seller: "Ruby Diaz"}, 
{id: 51, number: "51672-2016", buyer: "Frank Howell", project: "graphic design", status: "Completed", date: "6/19/2015", price: "$435.97", seller: "Sharon Andrews"}, 
{id: 52, number: "54868-5448", buyer: "Clarence Mitchell", project: "programming", status: "New", date: "6/16/2015", price: "$314.08", seller: "Martha Baker"}, 
{id: 53, number: "37000-397", buyer: "Ralph Kim", project: "logo design", status: "Completed", date: "9/9/2015", price: "$147.24", seller: "Catherine Hudson"}, 
{id: 54, number: "58154-104", buyer: "Jason Barnes", project: "graphic design", status: "Completed", date: "8/29/2015", price: "$228.62", seller: "Sara Carter"}, 
{id: 55, number: "42291-390", buyer: "Christine Carpenter", project: "photoshop", status: "Completed", date: "7/6/2015", price: "$259.83", seller: "Jimmy Allen"}, 
{id: 56, number: "49877-006", buyer: "Lois Henderson", project: "branding", status: "Completed", date: "5/4/2015", price: "$315.46", seller: "Harry Carter"}, 
{id: 57, number: "61722-209", buyer: "Tammy Mccoy", project: "branding", status: "New", date: "12/4/2014", price: "$304.64", seller: "Joseph Wallace"}, 
{id: 58, number: "37808-917", buyer: "Bobby Mccoy", project: "programming", status: "Completed", date: "1/17/2015", price: "$498.47", seller: "Victor Ross"}, 
{id: 59, number: "42627-202", buyer: "Rebecca Watkins", project: "programming", status: "Completed", date: "6/19/2015", price: "$270.64", seller: "Kathryn Chavez"}, 
{id: 60, number: "65628-051", buyer: "Barbara Martin", project: "graphic design", status: "Completed", date: "3/20/2015", price: "$465.30", seller: "Terry Thomas"}, 
{id: 61, number: "13537-411", buyer: "Ruth Carter", project: "crm service", status: "New", date: "7/7/2015", price: "$347.77", seller: "Lillian Peters"}, 
{id: 62, number: "0220-9004", buyer: "William White", project: "programming", status: "New", date: "11/14/2015", price: "$112.78", seller: "Tammy Willis"}, 
{id: 63, number: "54868-4287", buyer: "Gregory Nichols", project: "wordpress website", status: "New", date: "11/11/2015", price: "$392.69", seller: "Janet Murphy"}, 
{id: 64, number: "43353-050", buyer: "Evelyn Bell", project: "marketing", status: "New", date: "10/6/2015", price: "$183.19", seller: "Irene Oliver"}, 
{id: 65, number: "17478-640", buyer: "Juan Alexander", project: "logo design", status: "New", date: "6/5/2015", price: "$231.96", seller: "Judy James"}, 
{id: 66, number: "49873-802", buyer: "Martin Lee", project: "web design", status: "New", date: "6/25/2015", price: "$258.52", seller: "Scott Washington"}, 
{id: 67, number: "57665-331", buyer: "George James", project: "php website", status: "Completed", date: "3/16/2015", price: "$280.06", seller: "Angela Stone"}, 
{id: 68, number: "43419-339", buyer: "Douglas Walker", project: "photoshop", status: "Completed", date: "11/8/2015", price: "$153.48", seller: "Karen Cook"}, 
{id: 69, number: "36987-2474", buyer: "Lois Moreno", project: "crm service", status: "Completed", date: "7/18/2015", price: "$452.98", seller: "Denise Walker"}, 
{id: 70, number: "51201-101", buyer: "Harry Harrison", project: "crm service", status: "New", date: "6/2/2015", price: "$437.25", seller: "Kathleen Reyes"}, 
{id: 71, number: "42549-640", buyer: "Fred Hayes", project: "SEO and SEM", status: "Completed", date: "5/30/2015", price: "$469.06", seller: "Paul West"}, 
{id: 72, number: "0113-0535", buyer: "Carl Nguyen", project: "logo design", status: "New", date: "1/26/2015", price: "$310.35", seller: "Janice Payne"}, 
{id: 73, number: "0603-0241", buyer: "Julie Dunn", project: "photoshop", status: "New", date: "9/26/2015", price: "$225.01", seller: "Teresa Gonzales"}, 
{id: 74, number: "0268-0945", buyer: "Victor Campbell", project: "php website", status: "New", date: "5/21/2015", price: "$131.62", seller: "Kathleen Sims"}, 
{id: 75, number: "68703-030", buyer: "Christine Hawkins", project: "social media marketing", status: "New", date: "2/13/2015", price: "$345.95", seller: "Bobby Gonzales"}, 
{id: 76, number: "41167-1003", buyer: "Martin Cooper", project: "programming", status: "New", date: "1/31/2015", price: "$186.71", seller: "Rebecca Willis"}, 
{id: 77, number: "49035-238", buyer: "Marie Green", project: "branding", status: "New", date: "7/5/2015", price: "$352.64", seller: "Jeremy Kim"}, 
{id: 78, number: "76214-046", buyer: "Patricia Black", project: "branding", status: "Completed", date: "9/8/2015", price: "$375.48", seller: "Nicholas Brooks"}, 
{id: 79, number: "49288-0475", buyer: "Henry Simpson", project: "php website", status: "New", date: "7/2/2015", price: "$416.95", seller: "Catherine Olson"}, 
{id: 80, number: "0409-2988", buyer: "Charles Martinez", project: "branding", status: "Completed", date: "10/19/2015", price: "$420.30", seller: "John Spencer"}, 
{id: 81, number: "63629-5431", buyer: "Martin Murphy", project: "branding", status: "Completed", date: "5/26/2015", price: "$181.42", seller: "Lawrence Boyd"}, 
{id: 82, number: "66854-010", buyer: "Richard Gardner", project: "programming", status: "Completed", date: "10/11/2015", price: "$159.83", seller: "Christina Wilson"}, 
{id: 83, number: "51621-031", buyer: "Christina Black", project: "marketing", status: "New", date: "2/25/2015", price: "$423.25", seller: "Andrea Cole"}, 
{id: 84, number: "30142-957", buyer: "Stephen Gibson", project: "wordpress website", status: "New", date: "9/15/2015", price: "$100.47", seller: "Amy Hunt"}, 
{id: 85, number: "28109-020", buyer: "Matthew Reed", project: "marketing", status: "New", date: "6/4/2015", price: "$487.38", seller: "Shirley Daniels"}, 
{id: 86, number: "11822-6160", buyer: "Nicholas George", project: "wordpress website", status: "Completed", date: "4/17/2015", price: "$397.92", seller: "Albert Ramos"}, 
{id: 87, number: "63304-768", buyer: "Harry Riley", project: "wordpress website", status: "Completed", date: "10/5/2015", price: "$410.44", seller: "Judy Jackson"}, 
{id: 88, number: "68788-1966", buyer: "Lawrence Knight", project: "graphic design", status: "New", date: "5/12/2015", price: "$269.19", seller: "Annie Baker"}, 
{id: 89, number: "0591-0349", buyer: "Diana Reynolds", project: "branding", status: "New", date: "1/3/2015", price: "$103.75", seller: "Todd Banks"}, 
{id: 90, number: "46122-263", buyer: "Paula Edwards", project: "photoshop", status: "Completed", date: "11/4/2015", price: "$432.87", seller: "Debra Shaw"}, 
{id: 91, number: "48951-8161", buyer: "Johnny Chavez", project: "wordpress website", status: "New", date: "12/6/2014", price: "$127.33", seller: "Billy Gomez"}, 
{id: 92, number: "10096-0217", buyer: "Stephanie Kennedy", project: "marketing", status: "Completed", date: "1/30/2015", price: "$429.22", seller: "Tina Greene"}, 
{id: 93, number: "10819-7004", buyer: "Patrick Butler", project: "SEO and SEM", status: "New", date: "1/12/2015", price: "$388.17", seller: "Kenneth White"}, 
{id: 94, number: "43526-109", buyer: "Joan Hudson", project: "graphic design", status: "New", date: "5/20/2015", price: "$279.53", seller: "Rose Harper"}, 
{id: 95, number: "41250-927", buyer: "Kenneth Harper", project: "php website", status: "New", date: "5/30/2015", price: "$159.34", seller: "Rebecca Mendoza"}, 
{id: 96, number: "0093-0292", buyer: "Michelle Taylor", project: "marketing", status: "New", date: "4/3/2015", price: "$262.72", seller: "Benjamin Flores"}, 
{id: 97, number: "59779-316", buyer: "Timothy Cooper", project: "programming", status: "Completed", date: "10/11/2015", price: "$380.18", seller: "Timothy Torres"}, 
{id: 98, number: "0781-1077", buyer: "Peter Vasquez", project: "SEO and SEM", status: "Completed", date: "7/31/2015", price: "$230.52", seller: "Gregory Hayes"}, 
{id: 99, number: "51885-4996", buyer: "Gary Garcia", project: "web design", status: "Completed", date: "1/18/2015", price: "$166.39", seller: "Paul Anderson"}, 
{id: 100, number: "50268-330", buyer: "Martin Thomas", project: "logo design", status: "New", date: "11/12/2015", price: "$291.98", seller: "Roger Collins"}
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

class Bid extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Bids</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Bids</h2>
                                
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

export default Bid;
