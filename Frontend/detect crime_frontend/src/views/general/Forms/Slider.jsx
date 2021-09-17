import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';



const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: '100%', margin: 0 };

class FormSlider extends React.Component{
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Sliders</h1>
                        </div>
                    </div>


                              
                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Sliders</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-xl-9 col-lg-10 col-md-10 col-12">

                                    
                                    <div className="form-group">
                                            <label className="form-label" htmlFor="field-1">Slider with custom handle</label>
                                      <div style={wrapperStyle}>
                                      <Slider min={0} max={20} defaultValue={3} />
                                      </div>
                                    </div>
                                    <br/>
                                    
                                    <div className="form-group">
                                          <label className="form-label" htmlFor="field-1">Slider with custom handle</label>
                                      <div style={wrapperStyle}>
                                      <Range min={0} max={20} defaultValue={[3, 10]} />
                                      </div>
                                    </div>
                                    <br/>

                                    

                                    <div className="form-group">
                                            <label className="form-label" htmlFor="field-1">Slider with custom handle</label>
                                        <div style={wrapperStyle}>
                                          <Slider min={0} max={20} defaultValue={3} handle={handle} />
                                        </div>
                                    </div>
                                    <br/>



                                     <div className="form-group">
                                            <label className="form-label" htmlFor="field-1">Range with custom handle</label>
                                        <div style={wrapperStyle}>
                                          <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
                                        </div>
                                    </div>
                                    <br/>
                                

                                      <div className="form-group">
                                            <label className="form-label" htmlFor="field-1">Pushable</label>
                                        <div style={wrapperStyle}>
                                          <Range min={0} max={20} defaultValue={[3, 5, 10]} tipFormatter={value => `${value}%`} pushable={5} />
                                        </div>
                                    </div>
                                    <br/>


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

export default FormSlider;
