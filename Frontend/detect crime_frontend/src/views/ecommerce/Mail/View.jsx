import React from 'react';
import {
   Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
   Row, Col
} from 'reactstrap';

import {  } from 'components';
import Mailmenu from 'views/ecommerce/Mail/Menu.jsx';
var IMGDIR = process.env.REACT_APP_IMGDIR;

class EcommerceMailview extends React.Component{

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
        };
      }

      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    render(){
        return (
            <div>

                <div className="content">
                    <Row>
                        <Col md={12}>
                            

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Mail View</h1>
                        </div>
                    </div>

                            <div className="content-body">    

                                <div className="row" style={{ margin: '15px 0px 0px 0px'}}>

                                    <Mailmenu/>


                                    <div className="col-lg-10 col-md-9 col-12" style={{ paddingLeft: '0px'}}>
                                        <div className="mail_content">

                                            <div className="row">
                                                <div className="col-12">

                                                    <h3 className="mail_head">View</h3>
                                                    <div className='mail-view-btns'>
                                                        <button type="button" className="btn btn-default btn-icon" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Reply" data-placement="top">
                                                            <i className="i-action-redo icon-xs"></i>
                                                        </button>
                                                        <button type="button" className="btn btn-default btn-icon" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Forward" data-placement="top">
                                                            <i className="i-action-undo icon-xs"></i>
                                                        </button>
                                                        <button type="button" className="btn btn-default btn-icon" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Attachments" data-placement="top">
                                                            <i className="i-paper-clip icon-xs"></i>
                                                        </button>
                                                        <button type="button" className="btn btn-default btn-icon" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Trash" data-placement="top">
                                                            <i className="i-trash icon-xs"></i>
                                                        </button>

                                                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                            <DropdownToggle caret>
                                                              Actions
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                              <DropdownItem>Reply</DropdownItem>
                                                              <DropdownItem>Reply All</DropdownItem>
                                                              <DropdownItem>Forward</DropdownItem>
                                                              <DropdownItem>Attachments</DropdownItem>
                                                              <DropdownItem>Trash</DropdownItem>
                                                            </DropdownMenu>
                                                          </Dropdown>
                                                    </div>


                                                </div>

                                                <div className="col-12 mail_view_title">

                                                    <div className="float-left">
                                                        <h4 className="">New Project Alloted to your team.</h4>
                                                    </div>

                                                </div>

                                                <div className="col-12 mail_view_info">

                                                    <div className="float-left">
                                                        <span className=""><strong>Bruce Wayne</strong> (brucewayne@example.com) to <strong>You</strong></span>
                                                    </div>

                                                    <div className='float-right'>
                                                        <span className='msg_ts text-muted'>12:40 PM, Today</span>
                                                    </div>

                                                </div>

                                                    



                                                <div className="col-12 mail_view">
                                                    <p>Hello Jason,</p>
                                                    <h4>What is Graphic Design?</h4>
                                                    <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                    <h4>Balance</h4>
                                                    <p>Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space). "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance. A design composition does not have to be symmetrical or linear to be considered balanced, the balance is global to all elements even the absence of content. In this context perfectly symmetrical and linear compositions are not necessarily balanced and so asymmetrical or radial distributions of text and graphic elements can achieve balance in a composition.</p>
                                                    <h4>Contrast</h4>
                                                    <p>Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships. For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways. Another way to describe contrast, is to say "a small object next to a large object will look smaller". As contrast in size diminishes, monotony is approached.</p>
                                                </div>


                                                <div className="col-12 mail_view_attach">
                                                    <h4>
                                                        <i className="i-paper-clip icon-sm"></i> Attachments
                                                    </h4><br/>

                                                    <ul className="list-unstyled list-inline">
                                                        <li className="list-inline-item">
                                                            <a href="#!" className="file">
                                                                <img alt="attachment" src={IMGDIR+"/images/mail/attach-1.jpg"} className="img-thumbnail"/>
                                                            </a>

                                                            <a href="#!" className="title">
                                                                Project_details.jpg
                                                                <span>10KB</span>
                                                            </a>

                                                            <div className="actions">
                                                                <a href="#!">View</a>
                                                                <a href="#!">Download</a>
                                                            </div>
                                                        </li>

                                                        <li className="list-inline-item">
                                                            <a href="#!" className="file">
                                                                <img alt="attachment" src={IMGDIR+"/images/mail/attach-2.jpg"} className="img-thumbnail"/>
                                                            </a>

                                                            <a href="#!" className="title">
                                                                Guidlines.jpg
                                                                <span>14KB</span>
                                                            </a>

                                                            <div className="actions">
                                                                <a href="#!">View</a>
                                                                <a href="#!">Download</a>
                                                            </div>
                                                        </li>

                                                        <li className="list-inline-item">
                                                            <a href="#!" className="file">
                                                                <img alt="attachment" src={IMGDIR+"/images/mail/attach-3.jpg"} className="img-thumbnail"/>
                                                            </a>

                                                            <a href="#!" className="title">
                                                                Team_info.jpg
                                                                <span>12KB</span>
                                                            </a>

                                                            <div className="actions">
                                                                <a href="#!">View</a>
                                                                <a href="#!">Download</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>


                                                <div className="col-12 mail_view_reply">
                                                    <div className="form-group">
                                                        <div className="controls">
                                                            <textarea className="form-control autogrow" cols="5" id="field-7" placeholder="Reply or Forward this message" style={{overflow: 'hidden', wordWrap: 'break-word', resize: 'horizontal', height: 120+'px'}}></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

}

export default EcommerceMailview;
