import React from 'react';
import {
    Tooltip , UncontrolledTooltip , Button, 
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UITooltips extends React.Component{
   
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.state = {
      tooltipOpen: false,
      tooltipOpen1: false,
      tooltips: [
        {
          placement: 'top',
          text: 'Top'
        },
        {
          placement: 'bottom',
          text: 'Bottom'
        },
        {
          placement: 'left',
          text: 'Left'
        },
        {
          placement: 'right',
          text: 'Right'
        }
      ]
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  toggle1() {
    this.setState({
      tooltipOpen1: !this.state.tooltipOpen1
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
                            <h1 className="title">Tooltips</h1>
                        </div>
                    </div>



                    <div className="col-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">Tooltips</h2>
                                
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-lg-12">

<h5>Basic</h5>                        
                            
     <div>
        <p>Somewhere in here is a <a href="#!" id="TooltipExample"><strong>tooltip</strong></a>.</p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Hello world!
        </Tooltip>
      </div>
<br/>

<h5>Tooltip Disable Autohide </h5>          
       

      <div>
        <p>Sometimes you need to allow users to select text within a <a href="#!" id="DisabledAutoHideExample"><strong>tooltip</strong></a>.</p>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen1} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle1}>
          Try to select this text!
        </Tooltip>
      </div>
<br/>

<h5>Tooltip directions </h5>          
       
      

      <div className="tooltip-btns">
        { this.state.tooltips.map((tooltip, i) => {
          return <TooltipItem key={i} item={tooltip} id={i} />;
        })}
      </div>


<h5>Uncontrolled Tooltip  </h5>          
       
      <div>
          <p>Somewhere in here is a <a href="#!" id="UncontrolledTooltipExample"><strong>tooltip</strong></a>.</p>
          <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
            Hello world!
          </UncontrolledTooltip>
        </div>


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




class TooltipItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <span className="toolip-btn">
        <Button className="" color="secondary" id={'Tooltip-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          Tooltip Content!
        </Tooltip>
      </span>
    );
  }
}
export default UITooltips;
