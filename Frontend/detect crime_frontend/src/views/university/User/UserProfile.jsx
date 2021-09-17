import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class ProfessorProfile extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Professor Profile</h1>
                        </div>
                    </div>


                            



                    <div className="col-xl-12">
                        <section className="box profile-page">
                            <div className="content-body">
                                    <div className="col-12">
                                    <div className="row uprofile">
                                        <div className="uprofile-image col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12">
                                            <img alt="" src={IMGDIR+"/images/university/professors/professor-1.jpg"} className="img-fluid" />
                                        </div>
                                        <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                                            <h3 className="uprofile-owner">
                                                <a href="#!">Prof. Stephnie Clarke</a>
                                            </h3>
                                            <button className="btn btn-primary btn-sm profile-btn">Send message</button>
                                            <button className="btn btn-primary btn-sm profile-btn">Add as friend</button>
                                            <div className="clearfix"></div>
                                            <p className="uprofile-title">Sr. Professor</p>
                                            <div className="clearfix"></div>
                                            <p>Humans can evaluate these visual elements in several situations to find a sense of balance. Humans can evaluate these visual elements in several situations to find a sense of balance.</p>
                                            <p className="uprofile-list">
                                                <span><i className='i-home'></i> New York, USA</span> 
                                                <span><i className='i-user'></i> 340 Contacts</span>
                                                <span><i className='i-briefcase'></i> Tech Lead, YIAM</span>

                                            </p>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="col-12">


                            <h4>Biography:</h4>
                            <p>A professor, informally often known as full professor, is the highest academic rank at universities and other post-secondary education and research institutions in most countries. Literally, professor derives from Latin as a "person who professes" being usually an expert in arts or sciences, a teacher of the highest rank.[1] In some countries, the word professor is also used in titles of lower ranks such as associate professor and assistant professor.</p>
                            <p>Professors conduct original research and commonly teach undergraduate, graduate, and/or professional courses in their field of expertise. In universities with graduate schools, professors may mentor and supervise graduate students who are conducting research for a thesis or dissertation. Professors typically hold a Ph.D., another doctorate or a different terminal degree. Some professors hold a masters degree or a professional degree such as an MD as their highest degree.</p>
                            <div className="clearfix"></div>
                            <hr/>
                            <h4>Education:</h4>
                            <ul>
                                <li>B.Com from Ski University</li>
                                <li>In hac habitasse platea dictumst.</li>
                                <li>In hac habitasse platea dictumst.</li>
                                <li>Vivamus elementum semper nisi.</li>
                                <li>Praesent ac sem eget est egestas volutpat.</li>
                            </ul>
                            <div className="clearfix"></div>
                            <hr/>
                            <h4>Competencies:</h4>
                            <ul>
                                <li>Integer tincidunt.</li>
                                <li>Praesent vestibulum dapibus nibh.</li>
                                <li>Integer tincidunt.</li>
                                <li>Praesent vestibulum dapibus nibh.</li>
                                <li>Integer tincidunt.</li>
                                <li>Praesent vestibulum dapibus nibh.</li>
                            </ul>

                            <div className="clearfix"></div>
                            <hr/>
                            <h4>Experience:</h4>
                            <ul>
                                <li>Integer tincidunt.</li>
                                <li>Praesent vestibulum dapibus nibh.</li>
                                <li>M.B.B.S from Ski University</li>
                                <li>Praesent vestibulum dapibus nibh.</li>
                                <li>Proin pretium, leo ac pellentesque mollis justo.</li>
                                <li>unc ultrices eros, sed gravida augue augue</li>
                            </ul>
                            <div className="clearfix"></div>
                            <hr/>
                            <h4>Subjects:</h4>
                            <ul>
                                <li>Integer tincidunt.</li>
                                <li>Praesent vestibulum dapibus nibh.</li>
                                <li> Phasellus consectetuer vestibulum elit.</li>
                                <li>M.B.B.S from Ski University</li>
                                <li>Praesent vestibulum dapibus nibh.</li>
                                <li>Proin pretium, leo ac pellentesque mollis justo.</li>
                                <li>unc ultrices eros, sed gravida augue augue</li>
                            </ul>
                            <div className="clearfix"></div>

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

export default ProfessorProfile;
