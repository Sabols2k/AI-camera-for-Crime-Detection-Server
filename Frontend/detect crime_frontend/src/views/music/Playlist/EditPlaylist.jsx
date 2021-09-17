import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

import InputMask from 'react-input-mask';

//import 'react-datepicker/dist/react-datepicker.css';
//import DatePicker from 'react-datepicker';
import moment from 'moment';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class EditPlaylist extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
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
                            <h1 className="title">Edit Playlist</h1>
                        </div>
                    </div>


                            


                    <div className="row margin-0">
                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Basic Info</h2>
                                    
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4">Playlist Title</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" defaultValue="Latest"/>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                       <Label htmlFor="field-11">Playlist Length (04:54)</Label>
                                                       <InputMask id="field-11" className="form-control" mask="99:99" maskChar="_" defaultValue="05:43"/>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Playlist Genre</Label>
                                                      <Input type="select" name="select" id="exampleSelect" defaultValue="jazz">
                                                        <option>Select</option>
                                                        <option value="jazz">Jazz</option>
                                                        <option>Hip Hop</option>
                                                        <option>Rock</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect1">Playlist Songs</Label>
                                                      <Input type="select" multiple name="select" id="exampleSelect1">
                                                            <option>Song of the ocean</option>
                                                            <option>Giant Mammoth</option>
                                                            <option>In the winter</option>
                                                            <option>Gentle Rains</option>                                    
                                                            <option>Giant Mammoth</option>
                                                            <option>In the winter</option>
                                                            <option>Gentle Rains</option>                                    
                                                      </Input>
                                                    </div>


                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Brief</Label>
                                                      <Input type="textarea" name="text" id="exampleText" defaultValue="Music is an art form, social activity or cultural activity whose medium is sound and silence." />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile">Playlist Image</Label>
                                                      <div className="profileimg-input"><img alt="" src={IMGDIR+"/images/music/playlists/playlist-1.jpg"} className="img-fluid" style={{"width": "120px"}}/></div>
                                                      <Input type="file" name="file" id="exampleFile" />
                                                    </div>

                                                </div>
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </form>

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

export default EditPlaylist;
