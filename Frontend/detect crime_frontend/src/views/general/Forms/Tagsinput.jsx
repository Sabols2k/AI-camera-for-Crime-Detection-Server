import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.


class FormTagsinput extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      tags: [],
      tags1: [],
      tags2: [],
      tags3: [],
      tags4: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
  }

  handleChange(tags) {    this.setState({      tags: tags    })  }
  handleChange1(tags) {    this.setState({      tags1: tags    })  }
  handleChange2(tags) {    this.setState({      tags2: tags    })  }
  handleChange3(tags) {    this.setState({      tags3: tags    })  }
  handleChange4(tags) {    this.setState({      tags4: tags    })  }

    render(){

                const inputProps = {
                        type: 'search',
                        placeholder: 'Custom Placeholder'
                    };
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Tags Input</h1>
                        </div>
                    </div>


                            
                                    
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Tags Input</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-8 col-md-9 col-10">

                                <div className="form-group">
                                            <label className="form-label" htmlFor="field-1">Basic</label>
                                            <div className="controls">
                                <TagsInput value={this.state.tags} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="form-group">
                                            <label className="form-label" htmlFor="field-1">On blur</label>
                                            <div className="controls">
                                <TagsInput value={this.state.tags1} onChange={this.handleChange1} addOnBlur={true}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                            <label className="form-label" htmlFor="field-1">Placehoder</label>
                                            <div className="controls">
                                <TagsInput value={this.state.tags2} onChange={this.handleChange2} inputProps={inputProps}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                            <label className="form-label" htmlFor="field-1">On Paste</label>
                                            <div className="controls">
                                <TagsInput value={this.state.tags3} onChange={this.handleChange3} addOnPaste={true}/>
                                    </div>
                                </div>

                                <div className="form-group">
                                            <label className="form-label" htmlFor="field-1">onlyUnique</label>
                                            <div className="controls">
                                <TagsInput value={this.state.tags4} onChange={this.handleChange4} onlyUnique={true}/>
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

export default FormTagsinput;
