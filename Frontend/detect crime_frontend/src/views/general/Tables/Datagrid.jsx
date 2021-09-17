import React from 'react';
import { Row, Col, } from 'reactstrap';

//import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
//import "./styles.css";

const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "name", name: "Name", editable: true },
  { key: "company", name: "Company", editable: true },
  { key: "email", name: "Email", editable: true },
  { key: "phone", name: "Phone", editable: true },
  { key: "createdon", name: "Created On", editable: true },
];

const rows = [
{id: 1, name: "Helen Banks", company: "Brainlounge", email: "hbanks0@networkadvertising.org", phone: "386-(842)278-0044", createdon: "2/17/2015"}, 
{id: 2, name: "Russell Wright", company: "Trilith", email: "rwright1@istockphoto.com", phone: "63-(139)594-8042", createdon: "12/31/2014"}, 
{id: 3, name: "Phillip Franklin", company: "Babbleopia", email: "pfranklin2@npr.org", phone: "880-(756)896-3032", createdon: "12/8/2014"}, 
{id: 4, name: "Jane Reynolds", company: "Roombo", email: "jreynolds3@auda.org.au", phone: "380-(346)659-7616", createdon: "6/20/2015"}, 
{id: 5, name: "Harry Stone", company: "Aimbu", email: "hstone4@joomla.org", phone: "54-(231)606-3538", createdon: "9/18/2015"}, 
{id: 6, name: "Wanda Simmons", company: "Realfire", email: "wsimmons5@npr.org", phone: "63-(385)914-9407", createdon: "6/1/2015"}, 
{id: 7, name: "Raymond Coleman", company: "Dynabox", email: "rcoleman6@webmd.com", phone: "970-(681)568-6350", createdon: "1/16/2015"}, 
{id: 8, name: "Roy Bell", company: "Rooxo", email: "rbell7@a8.net", phone: "51-(630)553-0176", createdon: "9/8/2015"}, 
{id: 9, name: "Mary Alexander", company: "Thoughtbeat", email: "malexander8@mit.edu", phone: "269-(259)977-0268", createdon: "6/27/2015"}, 
{id: 10, name: "James Payne", company: "Yacero", email: "jpayne9@dailymotion.com", phone: "86-(268)516-5474", createdon: "7/25/2015"}, 
{id: 11, name: "Carlos Hunter", company: "Tagchat", email: "chuntera@howstuffworks.com", phone: "33-(491)588-9269", createdon: "5/29/2015"}, 
{id: 12, name: "Brandon Morales", company: "Fivechat", email: "bmoralesb@tinypic.com", phone: "963-(853)531-1878", createdon: "9/22/2015"}, 
{id: 13, name: "Stephanie West", company: "Browsecat", email: "swestc@technorati.com", phone: "7-(337)416-7177", createdon: "7/3/2015"}, 
{id: 14, name: "Cheryl Taylor", company: "Oyondu", email: "ctaylord@kickstarter.com", phone: "351-(259)415-8876", createdon: "12/26/2014"}, 
{id: 15, name: "Ann Gibson", company: "Skinix", email: "agibsone@eepurl.com", phone: "48-(207)876-1994", createdon: "8/20/2015"}, 
{id: 16, name: "Nicole Gardner", company: "Aivee", email: "ngardnerf@free.fr", phone: "86-(289)985-0413", createdon: "2/3/2015"}, 
{id: 17, name: "Joshua Brooks", company: "Kwideo", email: "jbrooksg@pagesperso-accent.fr", phone: "1-(405)902-2092", createdon: "6/30/2015"}, 
{id: 18, name: "Willie Knight", company: "Skyba", email: "wknighth@examiner.com", phone: "48-(207)829-9588", createdon: "2/27/2015"}, 
{id: 19, name: "Gloria Washington", company: "Skivee", email: "gwashingtoni@sourceforge.net", phone: "55-(884)543-9458", createdon: "2/26/2015"}, 
{id: 20, name: "Donna Miller", company: "Vidoo", email: "dmillerj@wikispaces.com", phone: "27-(749)163-2984", createdon: "8/15/2015"}, 
{id: 21, name: "Aaron Olson", company: "Topiczoom", email: "aolsonk@state.gov", phone: "971-(848)704-9651", createdon: "2/26/2015"}, 
{id: 22, name: "Mildred Wells", company: "Jabberbean", email: "mwellsl@hc360.com", phone: "7-(459)939-1553", createdon: "12/17/2014"}, 
{id: 23, name: "Steven Berry", company: "Skibox", email: "sberrym@walmart.com", phone: "57-(408)241-8123", createdon: "5/20/2015"}, 
{id: 24, name: "Ryan Dean", company: "Podcat", email: "rdeann@mit.edu", phone: "226-(485)375-0538", createdon: "11/30/2014"}, 
{id: 25, name: "Philip Jacobs", company: "Agivu", email: "pjacobso@sitemeter.com", phone: "1-(847)899-8492", createdon: "8/2/2015"}, 
{id: 26, name: "Robin Harper", company: "Gabtune", email: "rharperp@amazonaws.com", phone: "62-(989)946-0097", createdon: "11/17/2015"}, 
{id: 27, name: "Lawrence Bailey", company: "Ailane", email: "lbaileyq@msu.edu", phone: "86-(690)608-1267", createdon: "7/30/2015"}, 
{id: 28, name: "Tammy Young", company: "Aimbu", email: "tyoungr@unicef.org", phone: "1-(317)259-7796", createdon: "8/21/2015"}, 
{id: 29, name: "Terry Hart", company: "Meedoo", email: "tharts@rambler.ru", phone: "374-(179)993-2539", createdon: "6/28/2015"}, 
{id: 30, name: "Ralph Sullivan", company: "Oyoba", email: "rsullivant@microsoft.com", phone: "86-(209)974-2533", createdon: "3/4/2015"}, 
{id: 31, name: "Jack Williams", company: "Quire", email: "jwilliamsu@wp.com", phone: "55-(984)170-0657", createdon: "7/26/2015"}, 
{id: 32, name: "Christopher Anderson", company: "Youbridge", email: "candersonv@yandex.ru", phone: "86-(345)688-7510", createdon: "12/28/2014"}, 
{id: 33, name: "Nicole Jenkins", company: "Browsedrive", email: "njenkinsw@zimbio.com", phone: "86-(584)705-8676", createdon: "3/16/2015"}, 
{id: 34, name: "Dorothy Ray", company: "Jabberstorm", email: "drayx@sfgate.com", phone: "502-(341)233-4234", createdon: "4/9/2015"}, 
{id: 35, name: "Larry Henry", company: "Blognation", email: "lhenryy@berkeley.edu", phone: "223-(420)302-9359", createdon: "8/20/2015"}, 
{id: 36, name: "Angela Knight", company: "Trudoo", email: "aknightz@dmoz.org", phone: "963-(507)865-8889", createdon: "7/19/2015"}, 
{id: 37, name: "Christina Wagner", company: "Yakijo", email: "cwagner10@51.la", phone: "1-(214)672-8109", createdon: "7/22/2015"}, 
{id: 38, name: "Jesse Walker", company: "Feedmix", email: "jwalker11@istockphoto.com", phone: "380-(328)778-4358", createdon: "3/12/2015"}, 
{id: 39, name: "Shirley Gibson", company: "Midel", email: "sgibson12@jimdo.com", phone: "62-(471)259-0770", createdon: "11/2/2015"}, 
{id: 40, name: "Patricia Harris", company: "Kare", email: "pharris13@ibm.com", phone: "84-(401)582-7201", createdon: "7/25/2015"}, 
{id: 41, name: "Andrew Porter", company: "Katz", email: "aporter14@cbc.ca", phone: "20-(380)764-1733", createdon: "11/5/2015"}, 
{id: 42, name: "Shirley Fields", company: "Jaxspan", email: "sfields15@slate.com", phone: "255-(815)870-2285", createdon: "9/15/2015"}, 
{id: 43, name: "Ryan Evans", company: "Yacero", email: "revans16@hud.gov", phone: "7-(725)728-0942", createdon: "4/29/2015"}, 
{id: 44, name: "Patrick Wood", company: "Skippad", email: "pwood17@freewebs.com", phone: "33-(808)901-8687", createdon: "9/30/2015"}, 
{id: 45, name: "Harold Ross", company: "Skidoo", email: "hross18@example.com", phone: "48-(145)515-5749", createdon: "4/15/2015"}, 
{id: 46, name: "Fred Fowler", company: "Tavu", email: "ffowler19@ucoz.ru", phone: "48-(557)822-1569", createdon: "4/10/2015"}, 
{id: 47, name: "Daniel Cooper", company: "Zoomcast", email: "dcooper1a@jalbum.net", phone: "237-(758)895-8583", createdon: "1/28/2015"}, 
{id: 48, name: "Fred Ramirez", company: "Avamm", email: "framirez1b@jugem.jp", phone: "63-(649)705-1826", createdon: "6/12/2015"}, 
{id: 49, name: "Christopher Allen", company: "Jetpulse", email: "callen1c@arizona.edu", phone: "57-(150)977-3016", createdon: "3/21/2015"}, 
{id: 50, name: "Kevin Bowman", company: "Kwimbee", email: "kbowman1d@multiply.com", phone: "7-(325)789-1257", createdon: "3/29/2015"}
];

class UIDatagrid extends React.Component{
   
  state = { rows };
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
    
    render(){
  
      return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Data Grid</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Data Grid - Edit Cell</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">

        <ReactDataGrid
          minHeight={rows.length*25 + 50}
          rowHeight={50}
          columns={columns}
          rowGetter={i => this.state.rows[i]}
          rowsCount={50}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
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

export default UIDatagrid;
