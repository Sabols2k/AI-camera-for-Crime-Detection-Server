import React from 'react';
import {
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Row, Col, 
} from 'reactstrap';

import {
    
} from 'components';

class UIButtonDropdowns extends React.Component{
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      btnDropup: false,
      btnDropleft: false,
      btnDropright: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
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
                            <h1 className="title">Button Dropdown</h1>
                        </div>
                    </div>


                            

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Button Dropdown</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            

                                
<h5>Button Dropdown</h5>
<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Button Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>




<br/>
<br/>
<h5>Colors</h5>
<div className="ui-btndropdowns">

<ButtonDropdown  isOpen={this.state.btnDrop1} toggle={() => { this.setState({ btnDrop1: !this.state.btnDrop1 }); }}>
  <DropdownToggle caret color="primary">
    Primary
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<span>&nbsp;</span>

<ButtonDropdown isOpen={this.state.btnDrop2} toggle={() => { this.setState({ btnDrop2: !this.state.btnDrop2 }); }}>
  <DropdownToggle caret color="secondary">
    Secondary
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>


<span>&nbsp;</span>
<ButtonDropdown  isOpen={this.state.btnDrop3} toggle={() => { this.setState({ btnDrop3: !this.state.btnDrop3 }); }}>
  <DropdownToggle caret color="success">
    Success
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<span>&nbsp;</span>
<ButtonDropdown isOpen={this.state.btnDrop4} toggle={() => { this.setState({ btnDrop4: !this.state.btnDrop4 }); }}>
  <DropdownToggle caret color="warning">
    Warning
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

<span>&nbsp;</span>
<ButtonDropdown  isOpen={this.state.btnDrop5} toggle={() => { this.setState({ btnDrop5: !this.state.btnDrop5 }); }}>
  <DropdownToggle caret color="info">
    Info
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
<span>&nbsp;</span>
<ButtonDropdown isOpen={this.state.btnDrop6} toggle={() => { this.setState({ btnDrop6: !this.state.btnDrop6 }); }}>
  <DropdownToggle caret color="danger">
      Danger
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
</div>
<br/>
<br/>

<h5>Dropdown direction</h5>
<div className="ui-btndropdowns">
<ButtonDropdown direction="up"  isOpen={this.state.btnDropup} toggle={() => { this.setState({ btnDropup: !this.state.btnDropup }); }}>
  <DropdownToggle caret>
    Dropup
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
<span>&nbsp;</span>

<ButtonDropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
  <DropdownToggle caret>
    Dropleft
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
<span>&nbsp;</span>

<ButtonDropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
  <DropdownToggle caret>
    Dropright
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem>Another Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
</div>

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

export default UIButtonDropdowns;
