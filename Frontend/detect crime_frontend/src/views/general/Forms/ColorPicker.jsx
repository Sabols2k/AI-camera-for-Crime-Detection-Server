import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';
import { Panel as ColorPickerPanel } from 'rc-color-picker';


class FormColorPicker extends React.Component{
    constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleChange() {     }
   
 onChange(obj) {
  console.log(obj);
}

 changeHandler(obj) {
  console.log(obj);
}
 closeHandler(obj) {
  console.log(obj);
}

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Color Picker</h1>
                        </div>
                    </div>


                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Color Picker</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-8 col-md-9 col-10">

                                        <h4>Basic</h4>
                                        <div style={{ margin: '50px 20px 20px 0px', textAlign: 'left' }}>
                                            <ColorPicker
                                              animation="slide"
                                              color={'#26a69a'}
                                              onChange={this.handleChange}
                                            />

                                          </div>


<br/>
<br/>

<div style={{}}>
<h4>RGB</h4>
    <ColorPickerPanel enableAlpha={false} color={'#26a69a'} onChange={this.onChange} mode="RGB" />
</div>

<br/>
<br/>

<div>
<h4>HSB</h4>
    <ColorPickerPanel alpha={80} color={'#26a69a'} onChange={this.onChange} mode="HSB" />
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

export default FormColorPicker;
