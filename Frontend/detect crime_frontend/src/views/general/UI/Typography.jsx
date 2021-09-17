import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UITypography extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Typography</h1>
                        </div>
                    </div>


                            
           


                    <div className="row margin-0">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Typography</h2>
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h1>H1. This is Heading 1</h1>
                                            <h2>H2. This is Heading 2</h2>
                                            <h3>H3. This is Heading 3</h3>
                                            <h4>H4. This is Heading 4</h4>
                                            <h5>H5. This is Heading 5</h5>
                                            <h6>H6. This is Heading 6</h6>
                                        </div>
                                        <br/>
                                        <div className="col-lg-12">
                                            <br/>
                                            <h3>Text Styles & Tags</h3>
                                            <br/>
                                            <p className="lead">
                                                In design, space is concerned with the area <del>deep within the moment</del> of designated design.
                                            </p>
                                            <p>
                                                For a two-dimensional design space concerns <ins>creating the illusion</ins> of a third dimension on <em>a flat surface</em>. Overlap is the effect where objects appear to be on top of each other. This illusion makes the top element look closer to the observer. 
                                            </p>
                                            <p>
                                                Shading adds gradation marks <abbr title="HyperText Markup Language" className="initialism">HTML</abbr> to make an object of a two-dimensional <mark>surface seem three-dimensional</mark>. Highlight, Transitional Light, Core of the Shadow, Reflected Light, and Cast Shadow give an object a three-dimensional look.
                                            </p>

                                            <br/>

                                            <h1 className="light">the elements, <span className="semi-bold">bring them together</span></h1>
                                            <h4>Visual unity is a main goal of graphic design</h4>
                                            <br/>
                                            <h2>Perspective, Similarity <span className="semi-bold">& Contrast</span>, <i>Rhythm</i> </h2>
                                            <h4><span className="semi-bold">Semi Bold</span>, Light , <span className="semi-bold">Bold</span> , <i>Italics</i></h4>
                                            <p>A good design contains elements that lead the reader through each element in order of its significance. The type and images should be expressed starting from most important to the least important.</p>
                                            <br/>
                                            <h3><span className="semi-bold">Numerics</span> stuff! - 1234<span className="semi-bold">56</span>78<span className="bold">9</span>0</h3>
                                            <h3>Some more text addons <span className="semi-bold">640.54<sup>USD</sup></span></h3>
                                            <h3>Decimals <span className="semi-bold">3432.<sup><u>10</u></sup></span></h3>

                                        </div>
                                    </div>


                                </div>
                            </section>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">

                        <div className="row">
                            <div className="col-12 col-md-6 col-sm-12">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title float-left">Unordered Lists</h2>
                                        
                                    </header>
                                    <div className="content-body">    <div className="row">
                                            <div className="col-lg-12 col-md-12 col-12">

                                                <ul>
                                                    <li>
                                                        Lorem ipsum dolor sit amet
                                                    </li>
                                                    <li>
                                                        Faucibus porta lacus fringilla vel
                                                    </li>
                                                    <li>
                                                        Facilisis in pretium nisl aliquet
                                                    </li>
                                                    <li>
                                                        Nulla volutpat aliquam velit
                                                        <ul>
                                                            <li>
                                                                Phasellus iaculis neque
                                                            </li>
                                                            <li>
                                                                Purus sodales ultricies
                                                            </li>
                                                            <li>
                                                                Ac tristique libero volutpat at
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Faucibus porta lacus fringilla vel
                                                    </li>
                                                    <li>
                                                        Aenean sit amet erat nunc
                                                    </li>
                                                    <li>
                                                        Faucibus porta lacus fringilla vel
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </section></div>


                            <div className="col-12 col-md-6 col-sm-12">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title float-left">Ordered Lists</h2>
                                        
                                    </header>
                                    <div className="content-body">    <div className="row">
                                            <div className="col-lg-12 col-md-12 col-12">

                                                <ol>
                                                    <li><span >Lorem ipsum dolor sit amet</span></li>
                                                    <li><span >Consectetur adipiscing elit</span></li>
                                                    <li><span >Integer molestie lorem at massa</span></li>
                                                    <li><span >Facilisis in pretium nisl aliquet</span></li>
                                                    <li><span >Nulla volutpat aliquam velit</span></li>
                                                    <li><span >Faucibus porta lacus fringilla vel</span></li>
                                                    <li><span >Aenean sit amet erat nunc</span></li>
                                                    <li><span >Eget porttitor lorem</span></li>
                                                    <li><span >Nulla volutpat aliquam velit</span></li>
                                                    <li><span >Faucibus porta lacus fringilla vel</span></li>
                                                </ol>

                                            </div>
                                        </div>
                                    </div>
                                </section></div>




                            </div>

                        </div>
                    </div>


                    <div className="row margin-0">


                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Text Colors</h2>
                                    
                                </header>
                                <div className="content-body">    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <p className="text-muted">
                                                Muted text Sample
                                            </p>
                                            <p className="text-primary">
                                                Primary text Sample
                                            </p>
                                            <p className="text-success">
                                                Success text Sample
                                            </p>
                                            <p className="text-info">
                                                Info text Sample
                                            </p>
                                            <p className="text-warning">
                                                Warning text Sample
                                            </p>
                                            <p className="text-danger">
                                                Danger text Sample
                                            </p>
                                            <p className="bg-muted">
                                                Muted text Sample
                                            </p>
                                            <p className="bg-primary">
                                                Primary text Sample
                                            </p>
                                            <p className="bg-success">
                                                Success text Sample
                                            </p>
                                            <p className="bg-info">
                                                Info text Sample
                                            </p>
                                            <p className="bg-warning">
                                                Warning text Sample
                                            </p>
                                            <p className="bg-danger">
                                                Danger text Sample
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section></div>







                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Transform & Align</h2>
                                    
                                </header>
                                <div className="content-body">    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <p className="text-left">Left aligned text.</p>
                                            <p className="text-center">Center aligned text.</p>
                                            <p className="text-right">Right aligned text.</p>
                                            <p className="text-justify">Justified text.</p>
                                            <p className="text-nowrap">No wrap text.</p>
                                            <p className="text-lowercase">Lowercased text.</p>
                                            <p className="text-uppercase">Uppercased text.</p>
                                            <p className="text-capitalize">Capitalized text.</p>
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

export default UITypography;
