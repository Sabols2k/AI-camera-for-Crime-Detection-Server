import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import {  } from 'components';
import Mailmenu from 'views/ecommerce/Mail/Menu.jsx';

class EcommerceMailcompose extends React.Component{
    render(){
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Mail Compose</h1>
                        </div>
                    </div>                            
                            <div className="content-body">

                                <div className="row" style={{ margin: '15px 0px 0px 0px'}}>

                                    
                                    <Mailmenu/>


                                    <div className="col-lg-10 col-md-9 col-12" style={{ paddingLeft: '0px'}}>
                                        <div className="mail_content">

                                            <div className="row">
                                                <div className="col-12">

                                                    <h3 className="mail_head">Compose</h3>
                                                    <i className='i-refresh icon-primary icon-xs icon-accent mail_head_icon float-right'></i>
                                                    <i className='i-magnifier icon-primary icon-xs icon-accent mail_head_icon float-right'></i>
                                                    <i className='i-settings icon-primary icon-xs icon-accent mail_head_icon float-right'></i>


                                                </div>

                                                <div className="col-12 mail_view_info">

                                                    <div className="form-group mail_cc_bcc">
                                                        <label className="form-label">To:</label>
                                                        <span className="desc">e.g. "someemail@example.com"</span>
                                                        <div className="controls">
                                                            <input type="text" className="form-control mail_compose_to" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group mail_compose_cc">
                                                        <label className="form-label">CC:</label>
                                                        <span className="desc">e.g. "someemail@example.com"</span>
                                                        <div className="controls">
                                                            <input type="text" className="form-control mail_compose_to" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group mail_compose_bcc">
                                                        <label className="form-label">BCC:</label>
                                                        <span className="desc">e.g. "someemail@example.com"</span>
                                                        <div className="controls">
                                                            <input type="text" className="form-control mail_compose_to" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="form-label">Subject:</label>
                                                        <span className="desc">e.g. "Meeting in 1st week"</span>
                                                        <div className="controls">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="form-label">Message:</label>
                                                        <textarea className="mail-compose-editor" placeholder="Enter text ..." style={{width: 100+'%',height: 250+'px',fontSize: 14+'px',lineHeight: 23+'px',padding: 15+'px'}}></textarea>
                                                    </div>



                                                </div>





                                                <div className="col-12">

                                                    <div className='float-left mail-compose-btns'>
                                                        <button type="button" className="btn btn-primary">
                                                            <i className="i-paper-plane icon-xs"></i> &nbsp; SEND
                                                        </button> &nbsp; 
                                                        <button type="button" className="btn btn-purple">
                                                            <i className="i-doc icon-xs"></i> &nbsp; SAVE
                                                        </button> &nbsp; 
                                                        <button type="button" className="btn btn-secondary">
                                                            <i className="i-trash icon-xs"></i> &nbsp; TRASH
                                                        </button> &nbsp; 
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

export default EcommerceMailcompose;
