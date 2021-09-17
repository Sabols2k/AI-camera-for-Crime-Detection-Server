import React from 'react';
import {
    ListGroup, ListGroupItem, Badge , ListGroupItemHeading, ListGroupItemText,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIListGroup extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">List Group</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">List Group</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-8 col-md-9 col-sm-10">
                            
<h5>Basic</h5>
                            
    <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>  

<br/>
<h5>Tags</h5>

<ListGroup>
        <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
        <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
      </ListGroup>

<br/>
<h5>Disabled items</h5>
      

      <ListGroup>
        <ListGroupItem disabled tag="a" href="#!">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#!">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#!">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#!">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#!">Vestibulum at eros</ListGroupItem>
      </ListGroup>


<br/>
<h5>Anchors</h5>

      <div>
        <ListGroup>
          <ListGroupItem active tag="a" href="#!" action>Cras justo odio</ListGroupItem>
          <ListGroupItem tag="a" href="#!" action>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="a" href="#!" action>Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="a" href="#!" action>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem disabled tag="a" href="#!" action>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <p />

<br/>
<h5>Buttons</h5>

        <ListGroup>
          <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
          <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>

<br/>
<h5>Colors</h5>

      <ListGroup>
        <ListGroupItem color="success">Cras justo odio</ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
      </ListGroup>

<br/>
<h5>Custom content</h5>

      <ListGroup>
        <ListGroupItem active>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>

<br/>
<h5>Flush style</h5>

      <ListGroup flush>
        <ListGroupItem disabled tag="a" href="#!">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#!">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#!">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#!">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#!">Vestibulum at eros</ListGroupItem>
      </ListGroup>

                                

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

export default UIListGroup;
