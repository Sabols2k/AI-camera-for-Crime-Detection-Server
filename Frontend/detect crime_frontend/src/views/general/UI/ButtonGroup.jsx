import React from 'react';
import {
  Button, ButtonGroup, ButtonToolbar, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Row, Col,  
} from 'reactstrap';

import {
    
} from 'components';

class UIButtonGroup extends React.Component{
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggle1() {
    this.setState({
      dropdownOpen1: !this.state.dropdownOpen1
    });
  }

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Button Group</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Button Group</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            


<br/>
<h5>Basic</h5>   

       <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>


<br/>

<br/>
<h5>Toolbar</h5>   

      <ButtonToolbar>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>8</Button>
        </ButtonGroup>
      </ButtonToolbar>


<br/>
<h5>Sizing</h5>   
<ButtonGroup size="lg">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>

<br/>
<br/>
<ButtonGroup>
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>

<br/>
<br/>
<ButtonGroup size="sm">
  <Button>Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</ButtonGroup>


<br/>

<br/>
<h5>With dropdown</h5> 

<br/>
<ButtonGroup>
  <Button>1</Button>
  <Button>2</Button>
  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    <DropdownToggle caret>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Dropdown Link</DropdownItem>
      <DropdownItem>Dropdown Link</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
</ButtonGroup>

<br/>

<br/>
<h5>Vertical Dropdown</h5> 

<br/>
<ButtonGroup vertical>
  <Button>1</Button>
  <Button>2</Button>
  <ButtonDropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
    <DropdownToggle caret>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Dropdown Link</DropdownItem>
      <DropdownItem>Dropdown Link</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>
</ButtonGroup>

<br/>

<br/>
<br/>

<br/>

                                
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

export default UIButtonGroup;
