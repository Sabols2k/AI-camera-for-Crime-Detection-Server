import React from 'react';
import {
    Nav, NavItem, Dropdown, NavLink, 
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UINav extends React.Component{
   
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false
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
                            <h1 className="title">Timeline Centered</h1>
                        </div>
                    </div>


                            
           <div>
        <p>List Based</p>
        <Nav>
          <NavItem>
            <NavLink href="#!">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#!">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#!">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#!">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Link Based</p>
        <Nav>
          <NavLink href="#!">Link</NavLink> <NavLink href="#!">Link</NavLink> <NavLink href="#!">Another Link</NavLink> <NavLink disabled href="#!">Disabled Link</NavLink>
        </Nav>
      </div>

      vertical

      <div>
        <p>List Based</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#!">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#!">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#!">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#!">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Link based</p>
        <Nav vertical>
          <NavLink href="#!">Link</NavLink> <NavLink href="#!">Link</NavLink> <NavLink href="#!">Another Link</NavLink> <NavLink disabled href="#!">Disabled Link</NavLink>
        </Nav>
      </div>


      tabs

       <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#!" active>Link</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#!">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#!">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#!">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>

      badges / pills
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="#!" active>Link</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#!">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#!">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#!">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>

                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default UINav;
