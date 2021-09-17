import moment from 'moment'; // Example for onSort prop
import React from 'react'; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import {
    Row, Col,
} from 'reactstrap';

const header = [
  { title: 'Ticket #', prop: 'number', sortable: true, filterable: true },
  { title: 'Owner', prop: 'name', sortable: true, filterable: true },
  { title: 'Type', prop: 'type', sortable: true, filterable: true },
  { title: 'Email', prop: 'email', sortable: true, filterable: true },
  { title: 'Date', prop: 'date', sortable: true, filterable: true },
  { title: 'Status', prop: 'status', sortable: true, filterable: true },
];



const body = [{id:1,number:"76354-106",name:"Roger Howard",type:"logo design",email:"rhoward0@forbes.com",status:"Completed",date:"7/7/2015"},
{id:2,number:"49035-339",name:"Jessica Berry",type:"SEO and SEM",email:"jberry1@163.com",status:"Completed",date:"12/13/2014"},
{id:3,number:"63323-542",name:"Deborah Fernandez",type:"programming",email:"dfernandez2@guardian.co.uk",status:"New",date:"8/21/2015"},
{id:4,number:"68016-187",name:"Julie James",type:"programming",email:"jjames3@twitter.com",status:"Completed",date:"4/26/2015"},
{id:5,number:"21130-374",name:"Carol Burns",type:"graphic design",email:"cburns4@usgs.gov",status:"Completed",date:"5/21/2015"},
{id:6,number:"55714-4466",name:"Ann Thomas",type:"marketing",email:"athomas5@posterous.com",status:"New",date:"2/20/2015"},
{id:7,number:"0023-9232",name:"Martha Griffin",type:"social media marketing",email:"mgriffin6@feedburner.com",status:"New",date:"5/1/2015"},
{id:8,number:"51263-3126",name:"Louis Ford",type:"social media marketing",email:"lford7@stumbleupon.com",status:"Completed",date:"9/13/2015"},
{id:9,number:"61727-340",name:"Walter Gibson",type:"freelance service",email:"wgibson8@earthlink.net",status:"Completed",date:"12/19/2014"},
{id:10,number:"35356-873",name:"Patricia Parker",type:"social media marketing",email:"pparker9@alexa.com",status:"New",date:"7/17/2015"},
{id:11,number:"49349-983",name:"Roy Fowler",type:"graphic design",email:"rfowlera@sina.com.cn",status:"Completed",date:"6/13/2015"},
{id:12,number:"48951-5065",name:"Joe Daniels",type:"programming",email:"jdanielsb@nyu.edu",status:"Completed",date:"4/4/2015"},
{id:13,number:"49288-0110",name:"Joseph Ford",type:"branding",email:"jfordc@naver.com",status:"Completed",date:"9/26/2015"},
{id:14,number:"0378-5522",name:"Jose Sullivan",type:"freelance service",email:"jsullivand@timesonline.co.uk",status:"Completed",date:"10/27/2015"},
{id:15,number:"61727-302",name:"Evelyn Dixon",type:"php website",email:"edixone@jimdo.com",status:"New",date:"8/14/2015"},
{id:16,number:"36987-3057",name:"Harry Wells",type:"branding",email:"hwellsf@goo.gl",status:"Completed",date:"3/6/2015"},
{id:17,number:"59779-807",name:"Daniel Mccoy",type:"SEO and SEM",email:"dmccoyg@cornell.edu",status:"Completed",date:"11/21/2015"},
{id:18,number:"68645-474",name:"Diana Hunt",type:"wordpress website",email:"dhunth@mediafire.com",status:"New",date:"4/2/2015"},
{id:19,number:"0023-3416",name:"Justin Nguyen",type:"web design",email:"jnguyeni@4shared.com",status:"Completed",date:"1/21/2015"},
{id:20,number:"66715-9741",name:"Patrick Adams",type:"photoshop",email:"padamsj@diigo.com",status:"New",date:"4/10/2015"},
{id:21,number:"0363-0906",name:"Arthur Turner",type:"logo design",email:"aturnerk@dailymotion.com",status:"New",date:"8/13/2015"},
{id:22,number:"0781-2020",name:"Sarah Black",type:"graphic design",email:"sblackl@github.com",status:"Completed",date:"4/21/2015"},
{id:23,number:"18527-120",name:"Angela Shaw",type:"SEO and SEM",email:"ashawm@elpais.com",status:"New",date:"9/10/2015"},
{id:24,number:"41163-679",name:"Robin Castillo",type:"photoshop",email:"rcastillon@ftc.gov",status:"Completed",date:"6/8/2015"},
{id:25,number:"0555-0926",name:"Annie Hayes",type:"graphic design",email:"ahayeso@sina.com.cn",status:"Completed",date:"5/23/2015"},
{id:26,number:"67296-0544",name:"Rebecca Reed",type:"graphic design",email:"rreedp@seattletimes.com",status:"Completed",date:"3/8/2015"},
{id:27,number:"60681-0801",name:"Charles Henderson",type:"branding",email:"chendersonq@icio.us",status:"New",date:"12/31/2014"},
{id:28,number:"37000-556",name:"Larry Foster",type:"SEO and SEM",email:"lfosterr@zimbio.com",status:"New",date:"6/26/2015"},
{id:29,number:"67239-0203",name:"Brenda Ramos",type:"SEO and SEM",email:"bramoss@rambler.ru",status:"New",date:"6/8/2015"},
{id:30,number:"49349-988",name:"Walter Garrett",type:"php website",email:"wgarrettt@yahoo.com",status:"Completed",date:"12/30/2014"},
{id:31,number:"55154-3728",name:"Roy Fowler",type:"programming",email:"rfowleru@wordpress.com",status:"Completed",date:"1/23/2015"},
{id:32,number:"41163-911",name:"Julia Carr",type:"marketing",email:"jcarrv@icq.com",status:"Completed",date:"3/2/2015"},
{id:33,number:"59970-053",name:"Cheryl Williamson",type:"programming",email:"cwilliamsonw@bizjournals.com",status:"New",date:"12/25/2014"},
{id:34,number:"35000-716",name:"Teresa Daniels",type:"photoshop",email:"tdanielsx@twitpic.com",status:"New",date:"3/24/2015"},
{id:35,number:"51386-711",name:"Denise Thomas",type:"marketing",email:"dthomasy@behance.net",status:"New",date:"8/4/2015"},
{id:36,number:"68152-103",name:"Craig Mcdonald",type:"logo design",email:"cmcdonaldz@biblegateway.com",status:"New",date:"7/17/2015"},
{id:37,number:"60512-6473",name:"Norma Ross",type:"SEO and SEM",email:"nross10@fema.gov",status:"New",date:"5/28/2015"},
{id:38,number:"35356-662",name:"Pamela Crawford",type:"branding",email:"pcrawford11@sbwire.com",status:"Completed",date:"4/28/2015"},
{id:39,number:"61703-319",name:"Doris Hernandez",type:"php website",email:"dhernandez12@histats.com",status:"Completed",date:"8/22/2015"},
{id:40,number:"28691-0838",name:"Mary Reynolds",type:"graphic design",email:"mreynolds13@surveymonkey.com",status:"New",date:"8/24/2015"},
{id:41,number:"0206-2100",name:"Billy Young",type:"logo design",email:"byoung14@forbes.com",status:"New",date:"5/29/2015"},
{id:42,number:"86227-000",name:"Betty Burns",type:"marketing",email:"bburns15@tripod.com",status:"Completed",date:"10/16/2015"},
{id:43,number:"49999-059",name:"Lori West",type:"photoshop",email:"lwest16@typepad.com",status:"Completed",date:"3/12/2015"},
{id:44,number:"52544-238",name:"Norma King",type:"php website",email:"nking17@exblog.jp",status:"New",date:"10/20/2015"},
{id:45,number:"60429-372",name:"Harry Cooper",type:"SEO and SEM",email:"hcooper18@examiner.com",status:"Completed",date:"3/16/2015"},
{id:46,number:"63354-001",name:"Lori Stone",type:"web design",email:"lstone19@mapquest.com",status:"New",date:"7/1/2015"},
{id:47,number:"65217-0001",name:"Susan Dean",type:"branding",email:"sdean1a@multiply.com",status:"Completed",date:"7/19/2015"},
{id:48,number:"0143-9729",name:"Evelyn Garcia",type:"photoshop",email:"egarcia1b@blog.com",status:"Completed",date:"4/29/2015"},
{id:49,number:"62080-8002",name:"Julie Alvarez",type:"branding",email:"jalvarez1c@4shared.com",status:"Completed",date:"3/14/2015"},
{id:50,number:"11819-351",name:"Jeremy Bailey",type:"branding",email:"jbailey1d@artisteer.com",status:"New",date:"12/21/2014"},
{id:51,number:"50021-243",name:"Paul Bennett",type:"SEO and SEM",email:"pbennett1e@dyndns.org",status:"Completed",date:"5/18/2015"},
{id:52,number:"48102-101",name:"Laura Griffin",type:"marketing",email:"lgriffin1f@java.com",status:"New",date:"11/14/2015"},
{id:53,number:"51389-210",name:"Victor Romero",type:"branding",email:"vromero1g@last.fm",status:"New",date:"2/28/2015"},
{id:54,number:"61722-081",name:"Christina Turner",type:"SEO and SEM",email:"cturner1h@51.la",status:"Completed",date:"3/19/2015"},
{id:55,number:"64117-248",name:"Doris Freeman",type:"freelance service",email:"dfreeman1i@skype.com",status:"Completed",date:"9/9/2015"},
{id:56,number:"41250-946",name:"Irene Lee",type:"photoshop",email:"ilee1j@jalbum.net",status:"Completed",date:"8/9/2015"},
{id:57,number:"0591-1117",name:"Gerald Powell",type:"freelance service",email:"gpowell1k@printfriendly.com",status:"New",date:"6/23/2015"},
{id:58,number:"43772-0021",name:"Richard Alexander",type:"web design",email:"ralexander1l@epa.gov",status:"Completed",date:"8/22/2015"},
{id:59,number:"43269-796",name:"Victor Harris",type:"logo design",email:"vharris1m@last.fm",status:"Completed",date:"3/9/2015"},
{id:60,number:"63736-203",name:"Cynthia Burke",type:"web design",email:"cburke1n@hc360.com",status:"New",date:"4/29/2015"},
{id:61,number:"66336-059",name:"Daniel Williams",type:"web design",email:"dwilliams1o@edublogs.org",status:"Completed",date:"8/22/2015"},
{id:62,number:"63779-056",name:"Kimberly Peters",type:"graphic design",email:"kpeters1p@usda.gov",status:"Completed",date:"1/9/2015"},
{id:63,number:"68788-9078",name:"Nicholas Garza",type:"photoshop",email:"ngarza1q@princeton.edu",status:"New",date:"2/20/2015"},
{id:64,number:"0409-1255",name:"George Campbell",type:"logo design",email:"gcampbell1r@delicious.com",status:"Completed",date:"12/4/2014"},
{id:65,number:"25021-827",name:"Lisa Mitchell",type:"graphic design",email:"lmitchell1s@google.com.au",status:"Completed",date:"12/30/2014"},
{id:66,number:"32909-121",name:"Carolyn Robertson",type:"logo design",email:"crobertson1t@csmonitor.com",status:"New",date:"7/1/2015"},
{id:67,number:"58232-0748",name:"Thomas Diaz",type:"marketing",email:"tdiaz1u@psu.edu",status:"New",date:"8/23/2015"},
{id:68,number:"0169-7704",name:"Harry Barnes",type:"photoshop",email:"hbarnes1v@amazon.com",status:"Completed",date:"11/25/2015"},
{id:69,number:"11822-0250",name:"Kathleen Walker",type:"photoshop",email:"kwalker1w@slideshare.net",status:"Completed",date:"8/4/2015"},
{id:70,number:"51660-143",name:"Carlos Grant",type:"web design",email:"cgrant1x@yolasite.com",status:"New",date:"3/5/2015"},
{id:71,number:"13537-274",name:"Mildred Flores",type:"php website",email:"mflores1y@squarespace.com",status:"New",date:"1/23/2015"},
{id:72,number:"68084-072",name:"Donald Garza",type:"web design",email:"dgarza1z@vkontakte.ru",status:"Completed",date:"1/25/2015"},
{id:73,number:"13537-190",name:"Teresa Shaw",type:"logo design",email:"tshaw20@cbslocal.com",status:"Completed",date:"9/5/2015"},
{id:74,number:"35356-546",name:"Eugene Watson",type:"logo design",email:"ewatson21@alexa.com",status:"Completed",date:"5/26/2015"},
{id:75,number:"68382-796",name:"Timothy Knight",type:"photoshop",email:"tknight22@skype.com",status:"Completed",date:"3/31/2015"},
{id:76,number:"55154-2395",name:"Willie Ray",type:"marketing",email:"wray23@creativecommons.org",status:"Completed",date:"2/2/2015"},
{id:77,number:"54575-114",name:"Kathryn Armstrong",type:"graphic design",email:"karmstrong24@soundcloud.com",status:"Completed",date:"4/14/2015"},
{id:78,number:"64616-039",name:"Debra Andrews",type:"branding",email:"dandrews25@gnu.org",status:"New",date:"6/3/2015"},
{id:79,number:"42549-693",name:"Julie Hall",type:"web design",email:"jhall26@dell.com",status:"Completed",date:"11/16/2015"},
{id:80,number:"58503-009",name:"Aaron Stone",type:"graphic design",email:"astone27@clickbank.net",status:"Completed",date:"11/24/2015"},
{id:81,number:"43269-850",name:"Christopher Hernandez",type:"SEO and SEM",email:"chernandez28@photobucket.com",status:"Completed",date:"8/30/2015"},
{id:82,number:"52609-0006",name:"Craig Robertson",type:"social media marketing",email:"crobertson29@elpais.com",status:"Completed",date:"2/23/2015"},
{id:83,number:"41520-916",name:"Jessica Roberts",type:"wordpress website",email:"jroberts2a@godaddy.com",status:"New",date:"8/21/2015"},
{id:84,number:"0187-1613",name:"Maria Wallace",type:"branding",email:"mwallace2b@rediff.com",status:"Completed",date:"1/18/2015"},
{id:85,number:"59387-001",name:"Helen Miller",type:"php website",email:"hmiller2c@weibo.com",status:"Completed",date:"2/23/2015"},
{id:86,number:"63323-377",name:"Carlos Warren",type:"SEO and SEM",email:"cwarren2d@howstuffworks.com",status:"Completed",date:"1/17/2015"},
{id:87,number:"10812-337",name:"Kathleen Evans",type:"web design",email:"kevans2e@msu.edu",status:"New",date:"6/23/2015"},
{id:88,number:"0591-2790",name:"Brian Howell",type:"freelance service",email:"bhowell2f@smugmug.com",status:"New",date:"7/6/2015"},
{id:89,number:"0409-7118",name:"Mary Boyd",type:"programming",email:"mboyd2g@admin.ch",status:"Completed",date:"3/31/2015"},
{id:90,number:"0378-0018",name:"Kevin Powell",type:"SEO and SEM",email:"kpowell2h@about.com",status:"Completed",date:"4/8/2015"},
{id:91,number:"36987-2475",name:"Diane Ramos",type:"photoshop",email:"dramos2i@nba.com",status:"Completed",date:"7/20/2015"},
{id:92,number:"67510-0005",name:"Cheryl Lopez",type:"graphic design",email:"clopez2j@google.com.hk",status:"New",date:"11/11/2015"},
{id:93,number:"23155-030",name:"Todd Hernandez",type:"logo design",email:"thernandez2k@gizmodo.com",status:"New",date:"11/17/2015"},
{id:94,number:"28595-905",name:"Kathy Brooks",type:"php website",email:"kbrooks2l@walmart.com",status:"Completed",date:"2/25/2015"},
{id:95,number:"0574-4022",name:"Maria Hansen",type:"branding",email:"mhansen2m@mediafire.com",status:"Completed",date:"3/1/2015"},
{id:96,number:"42002-423",name:"Ruth Fields",type:"marketing",email:"rfields2n@blogtalkradio.com",status:"New",date:"5/14/2015"},
{id:97,number:"43074-108",name:"Sarah Torres",type:"SEO and SEM",email:"storres2o@vimeo.com",status:"New",date:"7/19/2015"},
{id:98,number:"62037-696",name:"George Mendoza",type:"graphic design",email:"gmendoza2p@t-online.de",status:"Completed",date:"1/30/2015"},
{id:99,number:"23155-006",name:"Carl Fuller",type:"programming",email:"cfuller2q@fda.gov",status:"Completed",date:"2/22/2015"},
{id:100,number:"59667-0034",name:"Adam Ruiz",type:"marketing",email:"aruiz2r@tinyurl.com",status:"Completed",date:"5/4/2015"}
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

class Ticket extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Tickets</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Tickets</h2>
                                
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

export default Ticket;
