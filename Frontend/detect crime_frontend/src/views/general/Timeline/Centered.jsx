import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class CenteredTimeline extends React.Component{
   
    
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

                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Timeline (Centered Style)</h2>
                                
                            </header>
                            <div className="content-body">    
                                <div className="">
                                    <div className="col-12">


                                        <ul className="timeline">
                                            <li className="timeline-inverted ">
                                                <div className="timeline-badge"><i className="i-paper-clip"></i></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">Balance</h4>
                                                        <p><small className="text-muted">21st Jan 2019 via Facebook</small></p>            
                                                    </div>
                                                    <div className="timeline-body">
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-badge"><i className="i-folder"></i></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">Contrast</h4>
                                                        <p><small className="text-muted">21st Jan 2019 via Facebook</small></p>            
                                                    </div>
                                                    <div className="timeline-body">
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-badge"><i className="i-briefcase"></i></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">Emphasis</h4>
                                                        <p><small className="text-muted">21st Jan 2019 via Facebook</small></p>            
                                                    </div>
                                                    <div className="timeline-body">
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                        
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline-inverted">
                                                <div className="timeline-badge"><i className="i-like"></i></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">Gestalt</h4>
                                                        <p><small className="text-muted">21st Jan 2019 via Facebook</small></p>            
                                                    </div>
                                                    <div className="timeline-body">
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timeline-badge"><i className="i-check"></i></div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h4 className="timeline-title">Graphic Design</h4>
                                                        <p><small className="text-muted">11 hours ago via Twitter</small></p>
                                                    </div>
                                                    <div className="timeline-body">
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                    </div>
                                                </div>
                                            </li>


                                        </ul>



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

export default CenteredTimeline;
