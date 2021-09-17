import React from 'react';
import {
    Button, Form, FormGroup, Label, Input, FormText, FormFeedback,
    InputGroup, InputGroupAddon, InputGroupText,   InputGroupButtonDropdown,
    Row, Col,  DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

import {
} from 'components';

class FormElements extends React.Component{

    constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
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
                            <h1 className="title">Form Elements</h1>
                        </div>
                    </div>





                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Basic Elements</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">




                                    <Form>
                                            <FormGroup>
                                              <Label htmlFor="exampleEmail7">Email</Label>
                                              <Input type="email" name="email" id="exampleEmail7" placeholder="" />
                                            </FormGroup>
                                            <FormGroup>
                                              <Label htmlFor="examplePassword5">Password</Label>
                                              <Input type="password" name="password" id="examplePassword5" placeholder="" />
                                            </FormGroup>
                                            <FormGroup>
                                              <Label htmlFor="exampleSelect3">Select</Label>
                                              <Input type="select" name="select" id="exampleSelect3">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                              </Input>
                                            </FormGroup>
                                            <FormGroup>
                                              <Label htmlFor="exampleSelectMulti1">Select Multiple</Label>
                                              <Input type="select" name="selectMulti" id="exampleSelectMulti1" multiple>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                              </Input>
                                            </FormGroup>
                                            <FormGroup>
                                              <Label htmlFor="exampleText">Text Area</Label>
                                              <Input type="textarea" name="text" id="exampleText" />
                                            </FormGroup>
                                            <FormGroup>
                                              <Label htmlFor="exampleFile">File</Label>
                                              <Input type="file" name="file" id="exampleFile" />
                                              <FormText color="muted">
                                                This is some placeholder block-level help text for the above input.
                                                It's a bit lighter and easily wraps to a new line.
                                              </FormText>
                                            </FormGroup>
                                            <FormGroup tag="fieldset">
                                              <legend>Radio Buttons</legend>
                                              <FormGroup check>
                                                <Label check>
                                                  <Input type="radio" name="radio1" />{' '}
                                                  Option one is this and that—be sure to include why it's great
                                                </Label>
                                              </FormGroup>
                                              <FormGroup check>
                                                <Label check>
                                                  <Input type="radio" name="radio1" />{' '}
                                                  Option two can be something else and selecting it will deselect option one
                                                </Label>
                                              </FormGroup>
                                              <FormGroup check disabled>
                                                <Label check>
                                                  <Input type="radio" name="radio1" disabled />{' '}
                                                  Option three is disabled
                                                </Label>
                                              </FormGroup>
                                            </FormGroup>
                                            <FormGroup check>
                                              <Label check>
                                                <Input type="checkbox" />{' '}
                                                Check me out
                                              </Label>
                                            </FormGroup>
                                            <br/>
                                            <Button>Submit</Button>
                                          </Form>



                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                       
                       
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Inline Form</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">



<Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor="exampleEmail1" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail1" placeholder="something@email.com" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor="examplePassword1" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword1" placeholder="Password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Form Validation</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">




<Form>
       <FormGroup>
          <Label htmlFor="exampleEmail2">Input without validation</Label>
          <Input />
          <FormFeedback>You will not be able to see this</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleEmail3">Valid input</Label>
          <Input valid />
          <FormFeedback valid>Sweet! that name is available</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="examplePassword12">Invalid input</Label>
          <Input invalid />
          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleEmail4">Input without validation</Label>
          <Input />
          <FormFeedback tooltip>You will not be able to see this</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleEmail5">Valid input</Label>
          <Input valid />
          <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="examplePassword3">Invalid input</Label>
          <Input invalid />
          <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
      </Form>



                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Form input types</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">





<Form>
        <FormGroup>
          <Label htmlFor="exampleEmail6">Email</Label>
          <Input type="email" name="email" id="exampleEmail6" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="examplePassword4">Password</Label>
          <Input type="password" name="password" id="examplePassword4" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleUrl">Url</Label>
          <Input type="url" name="url" id="exampleUrl" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleNumber">Number</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleDatetime">Datetime</Label>
          <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleTime">Time</Label>
          <Input type="time" name="time" id="exampleTime" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleColor">Color</Label>
          <Input type="color" name="color" id="exampleColor" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleSearch">Search</Label>
          <Input type="search" name="search" id="exampleSearch" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleSelect2">Select</Label>
          <Input type="select" name="select" id="exampleSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleText1">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText1" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleFile1">File</Label>
          <Input type="file" name="file" id="exampleFile1" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
      </Form>



                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Checkboxes inline</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">




      <Form>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Some input
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
             <Input type="checkbox" /> Some other input
          </Label>
        </FormGroup>
      </Form>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Input Groups</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">



 
<div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="" />
        <InputGroupAddon addonType="append">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
    </div>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Input Group addons</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">


    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>To the Left!</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <InputGroupText>To the Right!</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>To the Left!</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append">
          <InputGroupText>To the Right!</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Input Group Dropdowns </h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">



    
        <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <Input />
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
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
          </InputGroupButtonDropdown>
        </InputGroup>
        <br />
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

export default FormElements;
