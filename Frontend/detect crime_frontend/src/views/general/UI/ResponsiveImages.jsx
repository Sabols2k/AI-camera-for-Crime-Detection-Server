import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class UIResponsiveImages extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Responsive Images</h1>
                        </div>
                    </div>


                            
        

                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Responsive Image Styles</h2>
                                
                            </header>
                            <div className="content-body">    
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12">



                                        <h5>Responsive Image</h5>
                                        <div className="spacer"></div>
        
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12" style={{'marginBottom': '15px'}}>
                                                <img src={IMGDIR+"/images/responsive-images/895x250.svg"} className="img-fluid" alt="Responsive" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12" style={{'marginBottom': '15px'}}>
                                                <img src={IMGDIR+"/images/responsive-images/895x250.svg"} className="img-fluid" alt="Responsive" />
                                            </div>
                                        </div>


                                        <br/><div className="spacer"></div>
                                        <h5>Image Thumbnail</h5>
                                        <div className="spacer"></div>

                                        <div className="row ui-responsiveimages">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" style={{'marginBottom': '15px'}}>
                                                <img src={IMGDIR+"/images/responsive-images/200x200.svg"} alt="thumbnail" className="img-thumbnail" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" style={{'marginBottom': '15px'}}>
                                                <img src={IMGDIR+"/images/responsive-images/200x200.svg"} alt="thumbnail" className="img-thumbnail" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" style={{'marginBottom': '15px'}}>
                                                <img src={IMGDIR+"/images/responsive-images/200x200.svg"} alt="thumbnail" className="img-thumbnail" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" style={{'marginBottom': '15px'}}>
                                                <img src={IMGDIR+"/images/responsive-images/200x200.svg"} alt="thumbnail" className="img-thumbnail" />
                                            </div>
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

export default UIResponsiveImages;
