import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class LeftTimeline extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Timeline Left Aligned</h1>
                        </div>
                    </div>


                            
           


                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Timeline (Left Style)</h2>
                                
                            </header>
                            <div className="content-body">    <div className="row">
                                    <div className="col-12">



                                        <div className="timeline2-centered">

                                            <article className="timeline2-entry">

                                                <div className="timeline2-entry-inner">

                                                    <div className="timeline2-icon bg-primary">
                                                        <i className="i-drop"></i>
                                                    </div>

                                                    <div className="timeline2-label">
                                                        <h2><a href="#!"><strong>Art Ramadani</strong></a> <span>posted a status update</span></h2>
                                                        <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                                                    </div>
                                                </div>

                                            </article>


                                            <article className="timeline2-entry">

                                                <div className="timeline2-entry-inner">

                                                    <div className="timeline2-icon bg-primary">
                                                        <i className="i-briefcase"></i>
                                                    </div>

                                                    <div className="timeline2-label">
                                                        <h2><a href="#!"><strong>Job Meeting</strong></a></h2>
                                                        <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>
                                                    </div>
                                                </div>

                                            </article>


                                            <article className="timeline2-entry">

                                                <div className="timeline2-entry-inner">

                                                    <div className="timeline2-icon bg-primary">
                                                        <i className="i-speedometer"></i>
                                                    </div>

                                                    <div className="timeline2-label">
                                                        <h2><a href="#!"><strong>Arlind Angelo</strong></a> <span>checked in at</span> <a href="#!">Laborator</a></h2>

                                                        <blockquote>Great place, feeling like in home.</blockquote>

                                                    </div>
                                                </div>

                                            </article>


                                            <article className="timeline2-entry">

                                                <div className="timeline2-entry-inner">

                                                    <div className="timeline2-icon bg-primary">
                                                        <i className="i-camera"></i>
                                                    </div>

                                                    <div className="timeline2-label">
                                                        <h2><a href="#!"><strong>Kim Nushi</strong></a> <span>changed his</span> <a href="#!">Profile Picture</a></h2>

                                                        <blockquote>Pianoforte principles our unaffected not for astonished travelling are particular.</blockquote>
                                                    </div>
                                                </div>

                                            </article>


                                            <article className="timeline2-entry begin">

                                                <div className="timeline2-entry-inner">

                                                    <div className="timeline2-icon">
                                                        <i className="i-plus" style={{color: '#cccccc', position: 'relative', top: 3+'px'}}></i>
                                                    </div>

                                                </div>

                                            </article>

                                        </div>

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

export default LeftTimeline;
