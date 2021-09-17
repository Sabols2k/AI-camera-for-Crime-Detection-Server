import React from 'react';
import {
     Row, Col
} from 'reactstrap';

import {  } from 'components';
//import styles from 'jvectormap/jquery-jvectormap.css'
import { VectorMap } from 'react-jvectormap';

class UIVectorMap extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      data1: [
                        {
                            latLng: [41.90, 12.45],
                            name: 'Vatican City'
                        }, {
                            latLng: [43.73, 7.41],
                            name: 'Monaco'
                        }, {
                            latLng: [-0.52, 166.93],
                            name: 'Nauru'
                        }, {
                            latLng: [-8.51, 179.21],
                            name: 'Tuvalu'
                        }, {
                            latLng: [43.93, 12.46],
                            name: 'San Marino'
                        }, {
                            latLng: [47.14, 9.52],
                            name: 'Liechtenstein'
                        }, {
                            latLng: [7.11, 171.06],
                            name: 'Marshall Islands'
                        }, {
                            latLng: [17.3, -62.73],
                            name: 'Saint Kitts and Nevis'
                        }, {
                            latLng: [3.2, 73.22],
                            name: 'Maldives'
                        }, {
                            latLng: [17.11, -61.85],
                            name: 'Antigua and Barbuda'
                        }, {
                            latLng: [-4.61, 55.45],
                            name: 'Seychelles'
                        }, {
                            latLng: [7.35, 134.46],
                            name: 'Palau'
                        }, {
                            latLng: [42.5, 1.51],
                            name: 'Andorra'
                        }
      ]
    };
  }
    render(){
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Vector Map</h1>
                        </div>
                    </div>






                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Vector Map</h2>
                                
                            </header>
                            <div className="content-body">    
                            <div className="row margin-0">
                                    <div className="col-12">
                                        <div className="wid-vectormap">
                                            <div className="row">
                                                <div className="col-12 col-md-12">
                                    <div style={{width: 100+'%', height: 400}}>

                                        <VectorMap map={'world_mill'}
                                                   backgroundColor=""
                                                   ref="map"
                                                   containerStyle={{
                                                       width: '100%',
                                                       height: '100%',
                                                   }}
                                                    markerStyle= {{
                                                        initial: {
                                                            fill: '#26a69a',
                                                            stroke: '#ffffff',
                                                            "stroke-width": 2,
                                                            r: 10
                                                        },
                                                        hover: {
                                                            fill: '#ff8a65',
                                                            stroke: '#ffffff',
                                                            "stroke-width": 2,
                                                            cursor: 'pointer'
                                                        },
                                                        selected: {
                                                            fill: '#FDB45C',
                                                            "stroke-width": 0,
                                                        },
                                                    }}
                                                    selectedRegion={{}}
                                                    regionStyle={{
                                                      initial: {
                                                        fill: "#26a69a"
                                                      },
                                                      hover: {
                                                        fill: "#ff8a65"
                                                      }
                                                    }}
                                                    markers={this.state.data1}
                                                   containerClassName="map"
                                        />
                                    </div>

                                                </div>
                                                
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

export default UIVectorMap;
