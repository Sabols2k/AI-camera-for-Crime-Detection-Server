import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

var IMGDIR = process.env.REACT_APP_IMGDIR;

class MasonryGallery extends React.Component{
   
    
    render(){

        const elements = [
            {key: "1", src: IMGDIR+"/images/general/masonry/masonry-1.jpg"},
            {key: "2", src: IMGDIR+"/images/general/masonry/masonry-2.jpg"},
            {key: "3", src: IMGDIR+"/images/general/masonry/masonry-3.jpg"},
            {key: "4", src: IMGDIR+"/images/general/masonry/masonry-4.jpg"},
            {key: "5", src: IMGDIR+"/images/general/masonry/masonry-5.jpg"},
            {key: "6", src: IMGDIR+"/images/general/masonry/masonry-6.jpg"},
            {key: "7", src: IMGDIR+"/images/general/masonry/masonry-7.jpg"},
            {key: "8", src: IMGDIR+"/images/general/masonry/masonry-8.jpg"},
            {key: "9", src: IMGDIR+"/images/general/masonry/masonry-9.jpg"},
            {key: "10", src: IMGDIR+"/images/general/masonry/masonry-10.jpg"},
        ];
        
        const childElements = elements.map(function(element){
           return (
                <li className="image-element-class" key={element.key}>
                    <img src={"" + element.src} alt="masonry" />
                </li>
            );
        });

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Gallery</h1>
                        </div>
                    </div>


                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Masonry Gallery</h2>
                                
                            </header>
                            <div className="content-body">    
                                <div className="row">
                                    <div className="col-12">

                            
                                               <Masonry
                                                    className={'masonry-gallery'}
                                                    elementType={'ul'} 
                                                    options={masonryOptions}
                                                    disableImagesLoaded={false}
                                                    updateOnEachImageLoad={false}
                                                    imagesLoadedOptions={imagesLoadedOptions}
                                                >
                                                    {childElements}
                                                </Masonry>


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

export default MasonryGallery;
