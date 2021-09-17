import React from 'react';
import {
   Row, Col, UncontrolledDropdown , DropdownToggle , DropdownItem, DropdownMenu
} from 'reactstrap';

import {
    Mailbox
} from 'components';

import { mailbox } from 'variables/general/mailbox.jsx';

import Mailmenu from 'views/general/Mail/Menu.jsx';

class Mailinbox extends React.Component{
    render(){
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Mailbox</h1>
                        </div>
                    </div>                            
                                        
                            <div className="content-body">    
                                <div className="row" style={{ margin: '15px 0px 0px 0px'}}>

                                    <Mailmenu/>

                                    <div className="col-lg-10 col-md-9 col-12" style={{ paddingLeft: '0px'}}>
                                        <div className="mail_content">

                                            <div className="row">
                                                <div className="col-12">

                                                    <h3 className="mail_head">Inbox <sup>(5)</sup></h3>
                                                    
                                                    <i className='i-refresh icon-primary icon-xs icon-accent mail_head_icon float-right'></i>
                                                    <i className='i-magnifier icon-primary icon-xs icon-accent mail_head_icon float-right'></i>
                                                    <i className='i-settings icon-primary icon-xs icon-accent mail_head_icon float-right'></i>


                                                </div>

                                                <div className="col-12">

                                                    <div className="float-left mail_more_btn">
                                                    <UncontrolledDropdown>
                                                      <DropdownToggle caret>
                                                        All
                                                      </DropdownToggle>
                                                      <DropdownMenu>
                                                        <DropdownItem>All</DropdownItem>
                                                        <DropdownItem>Read</DropdownItem>
                                                        <DropdownItem>Unread</DropdownItem>
                                                        <DropdownItem>Starred</DropdownItem>
                                                      </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                        
                                                    </div>

                                                    <div className="float-right mail_nav">
                                                        <button className="btn btn-default btn-icon" rel="tooltip" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Previous" data-placement="top">
                                                            <i className="i-arrow-left-circle"></i>
                                                        </button>
                                                        <button className="btn btn-default btn-icon" rel="tooltip" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Next" data-placement="top">
                                                            <i className="i-arrow-right-circle"></i>
                                                        </button>
                                                    </div>
                                                    <span className='float-right mail_count_nav text-muted'><strong>1</strong> to <strong>20</strong> of 3247</span>

                                                </div>

                                                        <Mailbox mailbox={mailbox}/>
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

export default Mailinbox;
