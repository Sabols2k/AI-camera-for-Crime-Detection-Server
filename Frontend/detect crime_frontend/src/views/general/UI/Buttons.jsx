import React from 'react';
import {
    Button,ButtonGroup ,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIButtons extends React.Component{
    constructor (props) {
    super(props);
    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);

  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }
  
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Buttons</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Buttons</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12 ui-buttons">

                                    
    <div>
        <Button color="primary">Primary</Button>{' '}
        <Button color="accent">accent</Button>{' '}
        <Button color="purple">Purple</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Button sizes</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12 ui-buttons">

                                           <div className="btn-sizes">
                                                <p>
                                                    <button type="button" className="btn btn-primary btn-xs">Extra small button</button>
                                                </p>
                                                <p>
                                                    <button type="button" className="btn btn-primary btn-sm">Small size button</button>
                                                </p>
                                                <p>
                                                    <button type="button" className="btn btn-primary">Default size button</button>
                                                </p>
                                                <p>
                                                    <button type="button" className="btn btn-primary btn-lg">Large size button</button>
                                                </p>
                                            </div>

                                        
                                        <div className="clearfix"></div>
                                       
                                        
                                        <Button color="primary" size="lg" block>Block level button</Button>
                                        
                                        <div className="clearfix"></div>
                                        <br/>


 
                                        </div>
                                </div>


                            </div>
                        </section>
                    </div>

                <div className="col-12">
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Active state Buttons</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12 ui-buttons">

                                    <Button color="primary" size="lg" active>Primary link</Button>{' '}
                                    <Button color="secondary" size="lg" active>Link</Button>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div className="col-sm-6 col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Disabled Buttons</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12 ui-buttons">


                                <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
                                <Button color="secondary" size="lg" disabled>Button</Button>




                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                
                </div>
                </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Stateful Buttons</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">

      <div>
        <h5>Radio Buttons</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>

        <h5>Checkbox Buttons</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
        </ButtonGroup>
        <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
      </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>





                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Colors</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row btn-colors">
                                    <div className="col-lg-12">
                                        <button type="button" className="btn btn-default">Default</button>
                                        <button type="button" className="btn btn-primary">Primary</button>
                                        <button type="button" className="btn btn-success">Success</button>
                                        <button type="button" className="btn btn-info">Info</button>

                                        <button type="button" className="btn btn-warning">Warning</button>
                                        <button type="button" className="btn btn-danger">Danger</button>
                                        <button type="button" className="btn btn-purple">Purple</button>

                                        <button type="button" className="btn btn-secondary">Secondary</button>



                                    </div>
                                </div>
                            </div>
                        </section></div>



                    <div className="clearfix"></div>

                    <div className="row margin-0">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Iconic</h2>
                                    
                                </header>
                                <div className="content-body">    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12 btn-iconic">
                                            <button type="button" className="btn btn-primary"><i className="i-speedometer"></i></button>
                                            <button type="button" className="btn btn-primary"><i className="i-cursor-move"></i></button>
                                            <button type="button" className="btn btn-primary"><i className="i-bell"></i></button>
                                            <button type="button" className="btn btn-primary"><i className="i-notebook"></i></button>
                                            <button type="button" className="btn btn-primary"><i className="i-briefcase"></i></button>
                                            <button type="button" className="btn btn-primary"><i className="i-plane"></i></button>
                                            <button type="button" className="btn btn-accent"><i className="i-magic-wand"></i></button>
                                            <button type="button" className="btn btn-accent"><i className="i-rocket"></i></button>
                                            <button type="button" className="btn btn-accent"><i className="i-camera"></i></button>
                                            <button type="button" className="btn btn-accent"><i className="i-bubble"></i></button>
                                            <button type="button" className="btn btn-accent"><i className="i-layers"></i></button>
                                            <button type="button" className="btn btn-accent"><i className="i-envelope"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </section></div>

                        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Social Media</h2>
                                    
                                </header>
                                <div className="content-body">    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12 btn-social">
                                            <button type="button" className="btn btn-primary facebook"><i className="i-social-facebook"></i></button>
                                            <button type="button" className="btn btn-primary twitter"><i className="i-social-twitter"></i></button>
                                            <button type="button" className="btn btn-primary google-plus"><i className="i-social-google"></i></button>
                                            <button type="button" className="btn btn-primary dribbble"><i className="i-social-dribbble"></i></button>
                                            <button type="button" className="btn btn-primary youtube"><i className="i-social-youtube"></i></button>
                                            <button type="button" className="btn btn-primary vimeo"><i className="i-social-instagram"></i></button>
                                            <button type="button" className="btn btn-primary flickr"><i className="i-social-pinterest"></i></button>
                                            <button type="button" className="btn btn-primary rss"><i className="i-social-reddit"></i></button>
                                            <button type="button" className="btn btn-primary skype"><i className="i-social-skype"></i></button>
                                            <button type="button" className="btn btn-primary linkedin"><i className="i-social-linkedin"></i></button>
                                            <button type="button" className="btn btn-primary android"><i className="i-social-tumblr"></i></button>
                                            <button type="button" className="btn btn-primary apple"><i className="i-social-dropbox"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </section></div>
                    </div>



                    <div className="row margin-0">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Text & Icons</h2>
                                    
                                </header>
                                <div className="content-body">    <div className="row btn-texticons">
                                        <div className="col-lg-12">
                                            <button className="btn btn-secondary btn-icon bottom15 right15">
                                                <i className="i-heart"></i> &nbsp; <span>Like</span>
                                            </button>

                                            <button className="btn btn-purple btn-icon bottom15 right15">
                                                <i className="i-plane"></i> &nbsp; <span>Launch</span>
                                            </button>

                                            <button className="btn btn-purple btn-icon bottom15 right15">
                                                <i className="i-basket"></i> &nbsp; <span>Buy</span>
                                            </button>

                                            <button className="btn btn-success btn-icon bottom15 right15">
                                                <i className="i-diamond"></i> &nbsp; <span>Success</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section></div>

                    </div>










                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default UIButtons;
