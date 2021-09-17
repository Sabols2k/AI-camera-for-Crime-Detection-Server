import React from 'react';
import {
    Pagination, PaginationItem, PaginationLink,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIPagination extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Pagination</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Pagination</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
  <h5>Basic</h5>                            
     <br/>

     <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#!" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#!" />
        </PaginationItem>
      </Pagination>

<br/>
<br/>
  <h5>Disabled and Active States</h5>
<br/>
      

      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled>
          <PaginationLink previous href="#!" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#!">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#!" />
        </PaginationItem>
      </Pagination>
<br/>
<br/>

  <h5>Sizing</h5>
  <br/>

      <Pagination size="sm" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#!" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#!" />
        </PaginationItem>
      </Pagination>      
                                

      <br/>


      <Pagination size="lg" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#!" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#!">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#!" />
        </PaginationItem>
      </Pagination>


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

export default UIPagination;
