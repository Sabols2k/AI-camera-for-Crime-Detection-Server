import React from 'react';
import {

   Row, Col, 
} from 'reactstrap';

import {
   
} from 'components';

import Dropzone from 'react-dropzone'

class UploadMedia extends React.Component{

    constructor() {
        super()
        this.state = { 
            files: [], 
            files1: [],
            disabled1: true 
        }
      }

      onDrop(files) {
        this.setState({
          files,
        });
      }   


    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Song UploadMedia</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Drag and Drop to Upload</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">
                            
                                      <div className="dropzone">
                                        <Dropzone onDrop={this.onDrop.bind(this)} className="droparea">
                                          <p>Try dropping some files here, or click to select files to upload.</p>
                                        </Dropzone>
                                      </div>
                                      <aside>
                                        <h5>Dropped files</h5>
                                        <ul>
                                          {
                                            this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                          }
                                        </ul>
                                      </aside>


                                    </div>
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

export default UploadMedia;
