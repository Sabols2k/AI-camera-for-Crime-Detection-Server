import React from 'react';
import {
    Row, Col,
} from 'reactstrap';


class Layout6 extends React.Component{
    
    render(){


        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                          <div className="page-title">
                              <div className="float-left">
                                  <h1 className="title">Layout 6</h1>
                              </div>
                          </div>



                          <div className="col-xl-12">
                              <section className="box ">
                                  <header className="panel_header">
                                      <h2 className="title float-left">Layout</h2>
                                      
                                  </header>
                                  <div className="content-body">    
                                      <div className="">
                                              React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal only for its intended use of being the quickest method to fetch rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.
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

export default Layout6;
