import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UICode extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Code Style</h1>
                        </div>
                    </div>


                            
        
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Code</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            For example, <code>&lt;section&gt;</code> should be wrapped as inline.

                                            <br/><div className="spacer"></div>

                                            To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br/>
                                            To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>

                                            <br/><div className="spacer"></div>

                                            <pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>

                                            <br/><div className="spacer"></div>

                                            <code>&lt;section&gt;</code> should be wrapped as inline.
                                            <br/><div className="spacer"></div>
                                            <var>y</var> = <var>m</var><var>x</var> + <var>b</var>

                                        </div>
                                </div>
                            </div>
                        </section></div>
   

           
                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default UICode;
