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
  { title: 'Company', prop: 'company', sortable: true, filterable: true },
  { title: 'Email', prop: 'email', sortable: true, filterable: true },
  { title: 'Phone', prop: 'phone', sortable: true, filterable: true },
  { title: 'Date', prop: 'date', sortable: true, filterable: true },
];

const body = [
{id: 1, name: "Helen Banks", company: "Brainlounge", email: "hbanks0@networkadvertising.org", phone: "386-(842)278-0044", date: moment().subtract(1, 'days').format('Do MMMM YYYY')}, 
{id: 2, name: "Russell Wright", company: "Trilith", email: "rwright1@istockphoto.com", phone: "63-(139)594-8042", date: moment().subtract(2, 'days').format('Do MMMM YYYY')}, 
{id: 3, name: "Phillip Franklin", company: "Babbleopia", email: "pfranklin2@npr.org", phone: "880-(756)896-3032", date: moment().subtract(3, 'days').format('Do MMMM YYYY')}, 
{id: 4, name: "Jane Reynolds", company: "Roombo", email: "jreynolds3@auda.org.au", phone: "380-(346)659-7616", date: moment().subtract(4, 'days').format('Do MMMM YYYY')}, 
{id: 5, name: "Harry Stone", company: "Aimbu", email: "hstone4@joomla.org", phone: "54-(231)606-3538", date: moment().subtract(5, 'days').format('Do MMMM YYYY')}, 
{id: 6, name: "Wanda Simmons", company: "Realfire", email: "wsimmons5@npr.org", phone: "63-(385)914-9407", date: moment().subtract(6, 'days').format('Do MMMM YYYY')}, 
{id: 7, name: "Raymond Coleman", company: "Dynabox", email: "rcoleman6@webmd.com", phone: "970-(681)568-6350", date: moment().subtract(7, 'days').format('Do MMMM YYYY')}, 
{id: 8, name: "Roy Bell", company: "Rooxo", email: "rbell7@a8.net", phone: "51-(630)553-0176", date: moment().subtract(8, 'days').format('Do MMMM YYYY')}, 
{id: 9, name: "Mary Alexander", company: "Thoughtbeat", email: "malexander8@mit.edu", phone: "269-(259)977-0268", date: moment().subtract(9, 'days').format('Do MMMM YYYY')}, 
{id: 10, name: "James Payne", company: "Yacero", email: "jpayne9@dailymotion.com", phone: "86-(268)516-5474", date: moment().subtract(10, 'days').format('Do MMMM YYYY')}, 
{id: 11, name: "Carlos Hunter", company: "Tagchat", email: "chuntera@howstuffworks.com", phone: "33-(491)588-9269", date: moment().subtract(11, 'days').format('Do MMMM YYYY')}, 
{id: 12, name: "Brandon Morales", company: "Fivechat", email: "bmoralesb@tinypic.com", phone: "963-(853)531-1878", date: moment().subtract(12, 'days').format('Do MMMM YYYY')}, 
{id: 13, name: "Stephanie West", company: "Browsecat", email: "swestc@technorati.com", phone: "7-(337)416-7177", date: moment().subtract(13, 'days').format('Do MMMM YYYY')}, 
{id: 14, name: "Cheryl Taylor", company: "Oyondu", email: "ctaylord@kickstarter.com", phone: "351-(259)415-8876", date: moment().subtract(14, 'days').format('Do MMMM YYYY')}, 
{id: 15, name: "Ann Gibson", company: "Skinix", email: "agibsone@eepurl.com", phone: "48-(207)876-1994", date: moment().subtract(15, 'days').format('Do MMMM YYYY')}, 
{id: 16, name: "Nicole Gardner", company: "Aivee", email: "ngardnerf@free.fr", phone: "86-(289)985-0413", date: moment().subtract(16, 'days').format('Do MMMM YYYY')}, 
{id: 17, name: "Joshua Brooks", company: "Kwideo", email: "jbrooksg@pagesperso-accent.fr", phone: "1-(405)902-2092", date: moment().subtract(17, 'days').format('Do MMMM YYYY')}, 
{id: 18, name: "Willie Knight", company: "Skyba", email: "wknighth@examiner.com", phone: "48-(207)829-9588", date: moment().subtract(18, 'days').format('Do MMMM YYYY')}, 
{id: 19, name: "Gloria Washington", company: "Skivee", email: "gwashingtoni@sourceforge.net", phone: "55-(884)543-9458", date: moment().subtract(19, 'days').format('Do MMMM YYYY')}, 
{id: 20, name: "Donna Miller", company: "Vidoo", email: "dmillerj@wikispaces.com", phone: "27-(749)163-2984", date: moment().subtract(20, 'days').format('Do MMMM YYYY')}, 
{id: 21, name: "Aaron Olson", company: "Topiczoom", email: "aolsonk@state.gov", phone: "971-(848)704-9651", date: moment().subtract(21, 'days').format('Do MMMM YYYY')}, 
{id: 22, name: "Mildred Wells", company: "Jabberbean", email: "mwellsl@hc360.com", phone: "7-(459)939-1553", date: moment().subtract(22, 'days').format('Do MMMM YYYY')}, 
{id: 23, name: "Steven Berry", company: "Skibox", email: "sberrym@walmart.com", phone: "57-(408)241-8123", date: moment().subtract(23, 'days').format('Do MMMM YYYY')}, 
{id: 24, name: "Ryan Dean", company: "Podcat", email: "rdeann@mit.edu", phone: "226-(485)375-0538", date: moment().subtract(24, 'days').format('Do MMMM YYYY')}, 
{id: 25, name: "Philip Jacobs", company: "Agivu", email: "pjacobso@sitemeter.com", phone: "1-(847)899-8492", date: moment().subtract(25, 'days').format('Do MMMM YYYY')}, 
{id: 26, name: "Robin Harper", company: "Gabtune", email: "rharperp@amazonaws.com", phone: "62-(989)946-0097", date: moment().subtract(26, 'days').format('Do MMMM YYYY')}, 
{id: 27, name: "Lawrence Bailey", company: "Ailane", email: "lbaileyq@msu.edu", phone: "86-(690)608-1267", date: moment().subtract(27, 'days').format('Do MMMM YYYY')}, 
{id: 28, name: "Tammy Young", company: "Aimbu", email: "tyoungr@unicef.org", phone: "1-(317)259-7796", date: moment().subtract(28, 'days').format('Do MMMM YYYY')}, 
{id: 29, name: "Terry Hart", company: "Meedoo", email: "tharts@rambler.ru", phone: "374-(179)993-2539", date: moment().subtract(29, 'days').format('Do MMMM YYYY')}, 
{id: 30, name: "Ralph Sullivan", company: "Oyoba", email: "rsullivant@microsoft.com", phone: "86-(209)974-2533", date: moment().subtract(30, 'days').format('Do MMMM YYYY')}, 
{id: 31, name: "Jack Williams", company: "Quire", email: "jwilliamsu@wp.com", phone: "55-(984)170-0657", date: moment().subtract(31, 'days').format('Do MMMM YYYY')}, 
{id: 32, name: "Christopher Anderson", company: "Youbridge", email: "candersonv@yandex.ru", phone: "86-(345)688-7510", date: moment().subtract(32, 'days').format('Do MMMM YYYY')}, 
{id: 33, name: "Nicole Jenkins", company: "Browsedrive", email: "njenkinsw@zimbio.com", phone: "86-(584)705-8676", date: moment().subtract(33, 'days').format('Do MMMM YYYY')}, 
{id: 34, name: "Dorothy Ray", company: "Jabberstorm", email: "drayx@sfgate.com", phone: "502-(341)233-4234", date: moment().subtract(34, 'days').format('Do MMMM YYYY')}, 
{id: 35, name: "Larry Henry", company: "Blognation", email: "lhenryy@berkeley.edu", phone: "223-(420)302-9359", date: moment().subtract(35, 'days').format('Do MMMM YYYY')}, 
{id: 36, name: "Angela Knight", company: "Trudoo", email: "aknightz@dmoz.org", phone: "963-(507)865-8889", date: moment().subtract(36, 'days').format('Do MMMM YYYY')}, 
{id: 37, name: "Christina Wagner", company: "Yakijo", email: "cwagner10@51.la", phone: "1-(214)672-8109", date: moment().subtract(37, 'days').format('Do MMMM YYYY')}, 
{id: 38, name: "Jesse Walker", company: "Feedmix", email: "jwalker11@istockphoto.com", phone: "380-(328)778-4358", date: moment().subtract(38, 'days').format('Do MMMM YYYY')}, 
{id: 39, name: "Shirley Gibson", company: "Midel", email: "sgibson12@jimdo.com", phone: "62-(471)259-0770", date: moment().subtract(39, 'days').format('Do MMMM YYYY')}, 
{id: 40, name: "Patricia Harris", company: "Kare", email: "pharris13@ibm.com", phone: "84-(401)582-7201", date: moment().subtract(40, 'days').format('Do MMMM YYYY')}, 
{id: 41, name: "Andrew Porter", company: "Katz", email: "aporter14@cbc.ca", phone: "20-(380)764-1733", date: moment().subtract(41, 'days').format('Do MMMM YYYY')}, 
{id: 42, name: "Shirley Fields", company: "Jaxspan", email: "sfields15@slate.com", phone: "255-(815)870-2285", date: moment().subtract(42, 'days').format('Do MMMM YYYY')}, 
{id: 43, name: "Ryan Evans", company: "Yacero", email: "revans16@hud.gov", phone: "7-(725)728-0942", date: moment().subtract(43, 'days').format('Do MMMM YYYY')}, 
{id: 44, name: "Patrick Wood", company: "Skippad", email: "pwood17@freewebs.com", phone: "33-(808)901-8687", date: moment().subtract(44, 'days').format('Do MMMM YYYY')}, 
{id: 45, name: "Harold Ross", company: "Skidoo", email: "hross18@example.com", phone: "48-(145)515-5749", date: moment().subtract(45, 'days').format('Do MMMM YYYY')}, 
{id: 46, name: "Fred Fowler", company: "Tavu", email: "ffowler19@ucoz.ru", phone: "48-(557)822-1569", date: moment().subtract(46, 'days').format('Do MMMM YYYY')}, 
{id: 47, name: "Daniel Cooper", company: "Zoomcast", email: "dcooper1a@jalbum.net", phone: "237-(758)895-8583", date: moment().subtract(47, 'days').format('Do MMMM YYYY')}, 
{id: 48, name: "Fred Ramirez", company: "Avamm", email: "framirez1b@jugem.jp", phone: "63-(649)705-1826", date: moment().subtract(48, 'days').format('Do MMMM YYYY')}, 
{id: 49, name: "Christopher Allen", company: "Jetpulse", email: "callen1c@arizona.edu", phone: "57-(150)977-3016", date: moment().subtract(49, 'days').format('Do MMMM YYYY')}, 
{id: 50, name: "Kevin Bowman", company: "Kwimbee", email: "kbowman1d@multiply.com", phone: "7-(325)789-1257",     date: moment().subtract(50, 'days').format('Do MMMM YYYY')}

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

class UIBSDatatable extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Datatables</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Data Tables</h2>
                                
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

export default UIBSDatatable;
