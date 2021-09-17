import moment from 'moment'; // Example for onSort prop
import React from 'react'; // Import React
//import { render } from 'react-dom'; // Import render method
import Datatable from 'react-bs-datatable'; // Import this package
import {
    Row, Col,
} from 'reactstrap';

const header = [
  { title: 'Invoice ID', prop: 'id', sortable: true, filterable: true },
  { title: 'Customer', prop: 'customer', sortable: true, filterable: true },
  { title: 'Category', prop: 'title', sortable: true, filterable: true },
  { title: 'Email', prop: 'email', sortable: true, filterable: true },
  { title: 'Price', prop: 'price', sortable: true, filterable: true },
  { title: 'Date', prop: 'date', sortable: true, filterable: true },
  { title: 'Status', prop: 'status', sortable: true, filterable: true },
];



const body = [{id:1,customer:"Anthony Washington",title:"branding",email:"awashington0@cafepress.com",status:"Completed",date:"11/9/2015",price:"$387.15"},
{id:2,customer:"Antonio Wheeler",title:"logo design",email:"awheeler1@ehow.com",status:"Completed",date:"5/21/2015",price:"$278.47"},
{id:3,customer:"Victor Butler",title:"graphic design",email:"vbutler2@edublogs.org",status:"New",date:"10/28/2015",price:"$450.28"},
{id:4,customer:"Anne Cruz",title:"branding",email:"acruz3@yolasite.com",status:"Completed",date:"12/12/2014",price:"$434.28"},
{id:5,customer:"Jane Cook",title:"photoshop",email:"jcook4@examiner.com",status:"New",date:"2/13/2015",price:"$171.54"},
{id:6,customer:"Robert Hicks",title:"SEO and SEM",email:"rhicks5@state.gov",status:"Completed",date:"3/22/2015",price:"$423.79"},
{id:7,customer:"Marilyn Richards",title:"web design",email:"mrichards6@goodreads.com",status:"New",date:"9/14/2015",price:"$191.68"},
{id:8,customer:"Billy Cunningham",title:"php website",email:"bcunningham7@creativecommons.org",status:"New",date:"1/29/2015",price:"$316.71"},
{id:9,customer:"Helen Peterson",title:"logo design",email:"hpeterson8@angelfire.com",status:"Completed",date:"10/20/2015",price:"$107.12"},
{id:10,customer:"Jimmy Washington",title:"freelance service",email:"jwashington9@youku.com",status:"New",date:"5/2/2015",price:"$102.67"},
{id:11,customer:"Peter Holmes",title:"wordpress website",email:"pholmesa@t-online.de",status:"New",date:"1/14/2015",price:"$204.43"},
{id:12,customer:"Ann Hawkins",title:"SEO and SEM",email:"ahawkinsb@newyorker.com",status:"New",date:"2/22/2015",price:"$318.12"},
{id:13,customer:"Edward Brooks",title:"programming",email:"ebrooksc@netvibes.com",status:"Completed",date:"1/2/2015",price:"$106.20"},
{id:14,customer:"Kathleen Thompson",title:"branding",email:"kthompsond@123-reg.co.uk",status:"Completed",date:"12/15/2014",price:"$120.99"},
{id:15,customer:"Willie Torres",title:"graphic design",email:"wtorrese@hexun.com",status:"New",date:"1/29/2015",price:"$448.76"},
{id:16,customer:"Nicole Vasquez",title:"web design",email:"nvasquezf@redcross.org",status:"Completed",date:"12/2/2014",price:"$145.33"},
{id:17,customer:"Katherine Peterson",title:"graphic design",email:"kpetersong@t.co",status:"New",date:"9/13/2015",price:"$103.88"},
{id:18,customer:"Roy Porter",title:"photoshop",email:"rporterh@t-online.de",status:"Completed",date:"1/9/2015",price:"$444.87"},
{id:19,customer:"Phyllis Ward",title:"freelance service",email:"pwardi@chronoengine.com",status:"Completed",date:"5/18/2015",price:"$171.97"},
{id:20,customer:"Kathryn Watkins",title:"freelance service",email:"kwatkinsj@ow.ly",status:"Completed",date:"5/7/2015",price:"$497.40"},
{id:21,customer:"Phillip Wells",title:"php website",email:"pwellsk@biblegateway.com",status:"Completed",date:"1/19/2015",price:"$380.12"},
{id:22,customer:"Christine Little",title:"php website",email:"clittlel@dot.gov",status:"Completed",date:"11/26/2015",price:"$154.68"},
{id:23,customer:"Raymond Russell",title:"graphic design",email:"rrussellm@cnbc.com",status:"Completed",date:"4/22/2015",price:"$165.76"},
{id:24,customer:"Margaret Davis",title:"marketing",email:"mdavisn@elegantthemes.com",status:"Completed",date:"5/16/2015",price:"$200.61"},
{id:25,customer:"Lisa Sullivan",title:"logo design",email:"lsullivano@ed.gov",status:"New",date:"5/21/2015",price:"$351.33"},
{id:26,customer:"Paul Porter",title:"marketing",email:"pporterp@state.tx.us",status:"Completed",date:"1/30/2015",price:"$400.03"},
{id:27,customer:"Alan Torres",title:"photoshop",email:"atorresq@pagesperso-orange.fr",status:"New",date:"8/21/2015",price:"$231.74"},
{id:28,customer:"Jacqueline Simpson",title:"web design",email:"jsimpsonr@oaic.gov.au",status:"New",date:"4/20/2015",price:"$177.48"},
{id:29,customer:"Jeffrey Fox",title:"programming",email:"jfoxs@vkontakte.ru",status:"New",date:"7/5/2015",price:"$242.88"},
{id:30,customer:"Walter Arnold",title:"photoshop",email:"warnoldt@umn.edu",status:"Completed",date:"1/7/2015",price:"$493.50"},
{id:31,customer:"Anna Nguyen",title:"SEO and SEM",email:"anguyenu@hud.gov",status:"Completed",date:"4/7/2015",price:"$151.89"},
{id:32,customer:"Shawn Henderson",title:"programming",email:"shendersonv@tiny.cc",status:"Completed",date:"10/19/2015",price:"$279.19"},
{id:33,customer:"Lawrence Duncan",title:"programming",email:"lduncanw@blinklist.com",status:"Completed",date:"8/30/2015",price:"$133.13"},
{id:34,customer:"Janet Cruz",title:"freelance service",email:"jcruzx@yandex.ru",status:"Completed",date:"8/24/2015",price:"$152.70"},
{id:35,customer:"Brenda Rice",title:"marketing",email:"bricey@hugedomains.com",status:"New",date:"12/29/2014",price:"$306.83"},
{id:36,customer:"Lois Perkins",title:"programming",email:"lperkinsz@godaddy.com",status:"New",date:"3/19/2015",price:"$108.95"},
{id:37,customer:"Larry Young",title:"branding",email:"lyoung10@w3.org",status:"New",date:"4/9/2015",price:"$193.97"},
{id:38,customer:"Chris Mitchell",title:"marketing",email:"cmitchell11@scribd.com",status:"New",date:"4/30/2015",price:"$412.61"},
{id:39,customer:"Karen Mason",title:"social media marketing",email:"kmason12@clickbank.net",status:"Completed",date:"4/17/2015",price:"$297.80"},
{id:40,customer:"Phillip Young",title:"logo design",email:"pyoung13@spotify.com",status:"New",date:"7/3/2015",price:"$398.10"},
{id:41,customer:"Jennifer Long",title:"freelance service",email:"jlong14@reverbnation.com",status:"Completed",date:"5/1/2015",price:"$450.65"},
{id:42,customer:"Robert Tucker",title:"branding",email:"rtucker15@google.co.jp",status:"Completed",date:"10/21/2015",price:"$440.68"},
{id:43,customer:"Terry Lynch",title:"web design",email:"tlynch16@instagram.com",status:"Completed",date:"6/2/2015",price:"$409.29"},
{id:44,customer:"Gloria Sanchez",title:"photoshop",email:"gsanchez17@fc2.com",status:"New",date:"8/28/2015",price:"$453.17"},
{id:45,customer:"Justin Sanders",title:"logo design",email:"jsanders18@51.la",status:"Completed",date:"5/27/2015",price:"$257.22"},
{id:46,customer:"Jessica Lewis",title:"freelance service",email:"jlewis19@google.nl",status:"Completed",date:"3/15/2015",price:"$456.15"},
{id:47,customer:"Thomas White",title:"graphic design",email:"twhite1a@cbslocal.com",status:"Completed",date:"5/3/2015",price:"$405.93"},
{id:48,customer:"Keith Roberts",title:"branding",email:"kroberts1b@fc2.com",status:"Completed",date:"2/5/2015",price:"$145.14"},
{id:49,customer:"Jonathan Bradley",title:"web design",email:"jbradley1c@illinois.edu",status:"Completed",date:"1/19/2015",price:"$283.62"},
{id:50,customer:"Carlos Hansen",title:"SEO and SEM",email:"chansen1d@behance.net",status:"New",date:"11/25/2015",price:"$203.77"},
{id:51,customer:"Wanda Garrett",title:"graphic design",email:"wgarrett1e@macromedia.com",status:"Completed",date:"9/17/2015",price:"$224.13"},
{id:52,customer:"Karen Rose",title:"freelance service",email:"krose1f@walmart.com",status:"New",date:"12/25/2014",price:"$371.52"},
{id:53,customer:"Kenneth Crawford",title:"php website",email:"kcrawford1g@squarespace.com",status:"New",date:"7/30/2015",price:"$266.79"},
{id:54,customer:"Cynthia Bishop",title:"SEO and SEM",email:"cbishop1h@hostgator.com",status:"New",date:"1/1/2015",price:"$198.15"},
{id:55,customer:"Janet Turner",title:"freelance service",email:"jturner1i@posterous.com",status:"New",date:"9/27/2015",price:"$303.55"},
{id:56,customer:"Frank Palmer",title:"freelance service",email:"fpalmer1j@house.gov",status:"New",date:"12/17/2014",price:"$392.08"},
{id:57,customer:"Denise Warren",title:"logo design",email:"dwarren1k@icio.us",status:"New",date:"10/12/2015",price:"$123.38"},
{id:58,customer:"Jennifer Wagner",title:"graphic design",email:"jwagner1l@slashdot.org",status:"Completed",date:"6/6/2015",price:"$405.66"},
{id:59,customer:"Ronald Crawford",title:"web design",email:"rcrawford1m@jalbum.net",status:"New",date:"8/30/2015",price:"$390.42"},
{id:60,customer:"Tina Wood",title:"logo design",email:"twood1n@guardian.co.uk",status:"Completed",date:"6/21/2015",price:"$412.32"},
{id:61,customer:"Adam Rivera",title:"logo design",email:"arivera1o@cnet.com",status:"Completed",date:"12/11/2014",price:"$119.61"},
{id:62,customer:"Keith White",title:"web design",email:"kwhite1p@cyberchimps.com",status:"Completed",date:"8/15/2015",price:"$193.64"},
{id:63,customer:"Carol Sims",title:"php website",email:"csims1q@myspace.com",status:"Completed",date:"4/28/2015",price:"$385.97"},
{id:64,customer:"David Greene",title:"graphic design",email:"dgreene1r@eventbrite.com",status:"New",date:"8/27/2015",price:"$157.38"},
{id:65,customer:"Dennis Garza",title:"graphic design",email:"dgarza1s@ucoz.com",status:"Completed",date:"7/24/2015",price:"$319.08"},
{id:66,customer:"Russell Gomez",title:"photoshop",email:"rgomez1t@exblog.jp",status:"Completed",date:"11/18/2015",price:"$342.70"},
{id:67,customer:"Kevin Hansen",title:"photoshop",email:"khansen1u@businessinsider.com",status:"Completed",date:"10/9/2015",price:"$100.80"},
{id:68,customer:"Jennifer Campbell",title:"SEO and SEM",email:"jcampbell1v@bandcamp.com",status:"Completed",date:"8/13/2015",price:"$161.94"},
{id:69,customer:"Charles Lopez",title:"photoshop",email:"clopez1w@admin.ch",status:"Completed",date:"6/28/2015",price:"$446.54"},
{id:70,customer:"Albert Harvey",title:"php website",email:"aharvey1x@tamu.edu",status:"New",date:"1/29/2015",price:"$440.97"},
{id:71,customer:"Richard Tucker",title:"programming",email:"rtucker1y@linkedin.com",status:"Completed",date:"12/5/2014",price:"$193.04"},
{id:72,customer:"Keith Perkins",title:"web design",email:"kperkins1z@clickbank.net",status:"New",date:"5/14/2015",price:"$463.59"},
{id:73,customer:"Frank Russell",title:"programming",email:"frussell20@mayoclinic.com",status:"Completed",date:"5/29/2015",price:"$496.28"},
{id:74,customer:"Margaret Berry",title:"logo design",email:"mberry21@amazon.com",status:"New",date:"1/27/2015",price:"$416.66"},
{id:75,customer:"Edward Ruiz",title:"logo design",email:"eruiz22@webmd.com",status:"New",date:"12/23/2014",price:"$271.69"},
{id:76,customer:"Alice Jenkins",title:"social media marketing",email:"ajenkins23@nba.com",status:"New",date:"7/26/2015",price:"$326.99"},
{id:77,customer:"Eric Cruz",title:"SEO and SEM",email:"ecruz24@redcross.org",status:"New",date:"5/14/2015",price:"$422.61"},
{id:78,customer:"Deborah Armstrong",title:"freelance service",email:"darmstrong25@theglobeandmail.com",status:"New",date:"1/7/2015",price:"$429.25"},
{id:79,customer:"Albert Williamson",title:"freelance service",email:"awilliamson26@macromedia.com",status:"Completed",date:"10/20/2015",price:"$144.81"},
{id:80,customer:"Roy Larson",title:"SEO and SEM",email:"rlarson27@wunderground.com",status:"New",date:"3/19/2015",price:"$445.01"},
{id:81,customer:"Julie Howard",title:"wordpress website",email:"jhoward28@people.com.cn",status:"Completed",date:"10/16/2015",price:"$461.39"},
{id:82,customer:"Scott Reyes",title:"logo design",email:"sreyes29@ox.ac.uk",status:"New",date:"12/13/2014",price:"$401.57"},
{id:83,customer:"Janice Gardner",title:"web design",email:"jgardner2a@phoca.cz",status:"Completed",date:"4/6/2015",price:"$261.16"},
{id:84,customer:"Lori Knight",title:"branding",email:"lknight2b@desdev.cn",status:"Completed",date:"12/10/2014",price:"$163.82"},
{id:85,customer:"Richard Bailey",title:"photoshop",email:"rbailey2c@npr.org",status:"New",date:"12/30/2014",price:"$445.53"},
{id:86,customer:"Denise Greene",title:"php website",email:"dgreene2d@spiegel.de",status:"Completed",date:"2/6/2015",price:"$388.58"},
{id:87,customer:"Cynthia Frazier",title:"branding",email:"cfrazier2e@reference.com",status:"New",date:"8/28/2015",price:"$159.53"},
{id:88,customer:"Steve Stevens",title:"SEO and SEM",email:"sstevens2f@springer.com",status:"New",date:"2/11/2015",price:"$264.84"},
{id:89,customer:"Howard Long",title:"wordpress website",email:"hlong2g@digg.com",status:"New",date:"3/1/2015",price:"$453.14"},
{id:90,customer:"Emily Harvey",title:"web design",email:"eharvey2h@statcounter.com",status:"New",date:"11/10/2015",price:"$231.70"},
{id:91,customer:"Larry Hughes",title:"SEO and SEM",email:"lhughes2i@wiley.com",status:"New",date:"3/6/2015",price:"$277.24"},
{id:92,customer:"Laura Woods",title:"programming",email:"lwoods2j@rakuten.co.jp",status:"New",date:"5/5/2015",price:"$454.30"},
{id:93,customer:"Walter Fields",title:"web design",email:"wfields2k@usatoday.com",status:"New",date:"7/13/2015",price:"$303.66"},
{id:94,customer:"Pamela Williams",title:"marketing",email:"pwilliams2l@google.de",status:"New",date:"7/30/2015",price:"$421.95"},
{id:95,customer:"Rebecca Sanders",title:"graphic design",email:"rsanders2m@marriott.com",status:"Completed",date:"10/25/2015",price:"$164.86"},
{id:96,customer:"Jonathan Alexander",title:"SEO and SEM",email:"jalexander2n@amazon.co.jp",status:"New",date:"12/20/2014",price:"$135.95"},
{id:97,customer:"Mildred Edwards",title:"SEO and SEM",email:"medwards2o@xing.com",status:"New",date:"8/6/2015",price:"$285.79"},
{id:98,customer:"Billy Sullivan",title:"php website",email:"bsullivan2p@foxnews.com",status:"New",date:"7/2/2015",price:"$490.55"},
{id:99,customer:"James Welch",title:"web design",email:"jwelch2q@biglobe.ne.jp",status:"Completed",date:"1/14/2015",price:"$135.55"},
{id:100,customer:"Alan Payne",title:"SEO and SEM",email:"apayne2r@yellowbook.com",status:"New",date:"7/1/2015",price:"$178.75"},

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

class Invoice extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Invoices</h1>
                        </div>
                    </div>


                          

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Invoices</h2>
                                
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

export default Invoice;
