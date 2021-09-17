import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIVideoEmbeds extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Video Embed</h1>
                        </div>
                    </div>


                            
         
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Responsive Embed</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row">
                                    <div className="col-xl-9 col-lg-10">

                                        <h4>21:9 aspect ratio</h4><br/>
                                        <div className="embed-responsive embed-responsive-21by9">
                                            <iframe title="video embed" className="embed-responsive-item" src="https://www.youtube.com/embed/lCOF9LN_Zxs"></iframe>
                                        </div>
                                        <div className="spacer"></div><br/>

                                        <h4>16:9 aspect ratio</h4><br/>
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title="video embed" className="embed-responsive-item" src="https://www.youtube.com/embed/lCOF9LN_Zxs"></iframe>
                                        </div>
                                        <div className="spacer"></div><br/>

                                        <h4>4:3 aspect ratio</h4><br/>
                                        <div className="embed-responsive embed-responsive-4by3">
                                            <iframe title="video embed" className="embed-responsive-item" src="https://www.youtube.com/embed/lCOF9LN_Zxs"></iframe>
                                        </div>
                                        <div className="spacer"></div><br/>

                                        <h4>1:1 aspect ratio</h4><br/>
                                        <div className="embed-responsive embed-responsive-1by1">
                                            <iframe title="video embed" className="embed-responsive-item" src="https://www.youtube.com/embed/lCOF9LN_Zxs"></iframe>
                                        </div>
                                        <div className="spacer"></div><br/>

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

export default UIVideoEmbeds;
