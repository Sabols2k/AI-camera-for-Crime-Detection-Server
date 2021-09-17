import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIModals extends React.Component{
    constructor (props) {
    super(props);
    this.state = {
      modal: false,

      modal1: false,
      backdrop1: true,

      modal2: false,
      nestedModal: false,
      closeAll: false,

      modal3: false,

      modal4: false,

      modal5: false
    };

    this.toggle = this.toggle.bind(this);

    this.changeBackdrop = this.changeBackdrop.bind(this);
    this.toggle1 = this.toggle1.bind(this);

    this.toggle2 = this.toggle2.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);

    this.toggle3 = this.toggle3.bind(this);

    this.toggle4 = this.toggle4.bind(this);

    this.toggle5 = this.toggle5.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle1() {
    this.setState({
      modal1: !this.state.modal1
    });
  }

  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }
  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop1: value });
  }

  toggle3() {
    this.setState({
      modal3: !this.state.modal3
    });
  }

  toggle4() {
    this.setState({
      modal4: !this.state.modal4
    });
  }

  toggle5() {
    this.setState({
      modal5: !this.state.modal5
    });
  }
    render(){

    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle5}>&times;</button>;

    return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Modals</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Modals</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">

        
                            
<h5>Modal</h5>
<div>
        <Button color="primary" onClick={this.toggle}>Launch Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
<br/> 

<h5>Modal backdrop</h5>

<div>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label htmlFor="backdrop1" style={{'width': '100%','textAlign':'left','display': 'block','marginBottom': '5px'}}>Backdrop value</Label>
            <Input type="select" name="backdrop1" id="backdrop1" onChange={this.changeBackdrop} style={{'marginBottom': '15px'}}>
              <option value="true">true</option>
              <option value="false">false</option>
              <option value="static">"static"</option>
            </Input>
            <Button color="primary" onClick={this.toggle1}  style={{'marginBottom': '15px'}}>Control Backdrop Modal</Button>
          </FormGroup>
        </Form>
        <Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className} backdrop={this.state.backdrop1}>
          <ModalHeader toggle={this.toggle1}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle1}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle1}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

<br/> 

<h5>Nested Modals</h5>

<div>
        <Button color="primary" onClick={this.toggle2}>Launch Modal w/ Nested Example</Button>
        <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
          <ModalHeader toggle={this.toggle2}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <Button color="success" onClick={this.toggleNested}>Show Nested Modal</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle2 : undefined}>
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle2}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle2}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

<br/> 

<h5>Custom timeouts in modal</h5>

<div>
        <Button color="primary" onClick={this.toggle3}>timeouts</Button>
        <Modal isOpen={this.state.modal3} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle3} className={this.props.className}>
          <ModalHeader toggle={this.toggle3}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle3}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle3}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

<br/> 

<h5>Modals without Fade Effect</h5>



<div>
        <Button color="primary" onClick={this.toggle4}>Modals without Fade Effect</Button>
        <Modal isOpen={this.state.modal4} fade={false} toggle={this.toggle4} className={this.props.className}>
          <ModalHeader toggle={this.toggle4}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle4}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle4}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

<br/> 

<h5>Modals with external button</h5>


<div>
        <Button color="primary" onClick={this.toggle5}>Modals with external button</Button>
        <Modal isOpen={this.state.modal5} toggle={this.toggle5} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <b>Look at the top right of the page/viewport!</b><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle5}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle5}>Cancel</Button>
          </ModalFooter>
        </Modal>
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

export default UIModals;
