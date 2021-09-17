import React from 'react';
import {
    Table,
    Row, Col,
} from 'reactstrap';

import { Bar } from 'react-chartjs-2';

import {
    
} from 'components';

import {
    playlistCharts
} from 'variables/music/playlists-charts.jsx';
var IMGDIR = process.env.REACT_APP_IMGDIR;

class PlaylistView extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Playlist Detail</h1>
                        </div>
                    </div>


                    <div className="col-xl-12">
                        <section className="box profile-page">
                            <div className="content-body">
                                    <div className="col-12">
                                    <div className="row uprofile">
                                        <div className="uprofile-image col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12">
                                            <img alt="" src={IMGDIR+"/images/music/playlists/playlist-4.jpg"} className="img-fluid" />
                                        </div>
                                        <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                                            <h3 className="uprofile-owner">
                                                <a href="#!">Rock Music Playlist</a>
                                            </h3>
                                            <button className="btn btn-primary btn-sm profile-btn">Add as Favorite</button>
                                            <button className="btn btn-primary btn-sm profile-btn">Share</button>
                                            <div className="clearfix"></div>
                                            <p className="uprofile-title">Jack Doug</p>
                                            <div className="clearfix"></div>
                                            <p>Humans can evaluate these visual elements in several situations to find a sense of balance. Humans can evaluate these visual elements in several situations to find a sense of balance.</p>
                                            <p className="uprofile-list">
                                                <span><i className='i-home'></i> New York, USA</span> 
                                                <span><i className='i-user'></i> 340 Contacts</span>
                                                <span><i className='i-briefcase'></i> Tech Lead, YIAM</span>

                                            </p>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="col-12">

                                        <hr/>

                                        <h4>About this playlist:</h4>
                                        <p>
                                            Music is an art form, social activity or cultural activity whose medium is sound and silence. The common elements of music are pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics (loudness and softness), and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). Different styles or types of music may emphasize, de-emphasize or omit some of these elements. Music is performed with a vast range of instruments and with vocal techniques ranging from singing to rapping, and there are solely instrumental pieces, solely vocal pieces and pieces that combine singing and instruments.
                                        </p>
                                        


                                    <Table hover responsive>
                                            <thead>
                                              <tr>
                                                <th>Play</th>
                                                <th>Song Name</th>
                                                <th>Song Artist</th>
                                                <th>Trending</th>
                                              </tr>
                                            </thead>
                                            <tbody>
          
                                <tr>
                                    <td><i className="i-control-play icon-accent"></i></td>
                                    <td>In the depth of the sea</td>
                                    <td>Jack Hector</td>
                                    <td><span className="playlist_song1">
                                    <div className="chart-area" style={{height: 50+'px', width: 100+'px'}}>
                                        <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                    </div>
                                    </span></td>
                                </tr>
                                <tr>
                                      <td><i className="i-control-play icon-accent"></i></td>
                                    <td>Hurrican dancing</td>
                                    <td>June Douglas</td>
                                    <td><span className="playlist_song2">
                                    <div className="chart-area" style={{height: 50+'px', width: 100+'px'}}>
                                        <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                    </div>
                                    </span></td>
                                </tr>
                                <tr>
                                    <td><i className="i-control-play icon-accent"></i></td>
                                    <td>Love is the depth</td>
                                    <td>Linda Ocean</td>
                                    <td><span className="playlist_song3">
                                    <div className="chart-area" style={{height: 50+'px', width: 100+'px'}}>
                                        <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                    </div>
                                    </span></td>
                                </tr>
                                <tr>
                                    <td><i className="i-control-play icon-accent"></i></td>
                                    <td>When guns go out</td>
                                    <td>Danieal Hector</td>
                                    <td><span className="playlist_song4">
                                    <div className="chart-area" style={{height: 50+'px', width: 100+'px'}}>
                                        <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                    </div>
                                    </span></td>
                                </tr>
                                <tr>
                                    <td><i className="i-control-play icon-accent"></i></td>
                                    <td>Dancing in the rain</td>
                                    <td>Sean Paul</td>
                                    <td><span className="playlist_song5">
                                    <div className="chart-area" style={{height: 50+'px', width: 100+'px'}}>
                                        <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                    </div>
                                    </span></td>
                                </tr>
                                <tr>
                                    <td><i className="i-control-play icon-accent"></i></td>
                                    <td>Making the music go</td>
                                    <td>Fred Diana</td>
                                    <td><span className="playlist_song6">
                                    <div className="chart-area" style={{height: 50+'px', width: 100+'px'}}>
                                        <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                    </div>
                                    </span></td>
                                </tr>
                                <tr>
                                    <td><i className="i-control-play icon-accent"></i></td>
                                    <td>In the depts of the soul</td>
                                    <td>Arthur Kane</td>
                                    <td><span className="playlist_song7">
                                    <div className="chart-area" style={{height: 50+'px', width: 100+'px'}}>
                                        <Bar data={playlistCharts.data} options={playlistCharts.options} />
                                    </div>
                                    </span></td>
                                </tr>
        </tbody>
      </Table>
                                        <div className="clearfix"></div>
                                        <hr/>



                                        <div className="clearfix"></div>
                                        <div className="clearfix"></div>




                                    </div>
                                    <div className="row" style={{"marginLeft": "0px"}}>
                                    <div className="col-12">

                                        <div className="uprofile-content row">
                                            <div className="enter_post col-12">

                                                <div className="form-group">
                                                    <div className="controls">
                                                        <textarea className="form-control autogrow" id="field-7"  placeholder="Create new post"></textarea>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="enter_post_btns">
                                                    <a href="#!" className="btn btn-md float-right btn-primary btn-sm">Post</a>
                                                </div>
                                                <div className="clearfix"></div><br/>
        
                                            </div>

                                            <div className="uprofile_wall_posts col-12">
                                                <div className="row">
                                                    <div className="pic-wrapper float-left col-1">
                                                        <img src={IMGDIR+"/images/profile/avatar-2.jpg"} className="" alt="" />
                                                    </div>
                                                    <div className="info-wrapper float-left col-11">                  
                                                        <div className="username">
                                                            <span className="bold">John Smith</span> post in group <span className="bold">work</span>   
                                                        </div>
                                                        <div className="info text-muted">
                                                            "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance.
                                                        </div>  
                                                        <div className="info-details">
                                                            <ul className="list-unstyled list-inline">
                                                                <li className="list-inline-item"><a href="#!" className="text-muted">15 Minutes ago</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-bubble"></i> 584</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-heart"></i> 12k</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-action-redo"></i> Reply</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-star"></i> Favourite</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted">More</a></li>
                                                            </ul>

                                                        </div>
                                                        <div className="clearfix"></div>
                                                        <div className="comment row">
                                                            <div className="pic-wrapper float-left col-1">
                                                                <img  data-src={IMGDIR+"/images/profile/avatar-3.jpg"} src={IMGDIR+"/images/profile/avatar-3.jpg"} alt="" />
                                                            </div>
                                                            <div className="info-wrapper float-left col-11">                  
                                                                <div className="username">
                                                                    <span className="bold">Fin</span> 
                                                                </div>
                                                                <div className="info text-muted">
                                                                    Perfect info for the project. Great work :)
                                                                </div>  
                                                                <div className="info-details">
                                                                    <ul className="list-unstyled list-inline">
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted">10 Minutes ago</a></li>
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-heart"></i> Like</a></li>
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted">More</a></li>
                                                                    </ul>
                                                                </div>

                                                            </div>  
                                                            <div className="clearfix"></div>                        
                                                        </div>

                                                        <div className="clearfix"></div>
                                                        <div className="comment row">
                                                            <div className="pic-wrapper float-left col-1">
                                                                <img  data-src={IMGDIR+"/images/profile/avatar-4.jpg"} src={IMGDIR+"/images/profile/avatar-4.jpg"} alt="" />
                                                            </div>
                                                            <div className="info-wrapper float-left col-11">                  
                                                                <div className="username">
                                                                    <span className="bold">Arun</span> 
                                                                </div>
                                                                <div className="info text-muted">
                                                                    Keep it up. Much appreciated effort.
                                                                </div>  
                                                                <div className="info-details">
                                                                    <ul className="list-unstyled list-inline">
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted">8 Minutes ago</a></li>
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-heart"></i> Liked</a></li>
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted">More</a></li>
                                                                    </ul>
                                                                </div>

                                                            </div>  
                                                            <div className="clearfix"></div>                        
                                                        </div>

                                                        <div className="comment comment-input row">                         

                                                            <div className="pic-wrapper float-left col-1">
                                                                <img  data-src={IMGDIR+"/images/profile/profile-general.jpg"} src={IMGDIR+"/images/profile/profile-general.jpg"} alt="" />
                                                            </div>
                                                            <div className="info-wrapper float-left col-11 input-group">
                                                                <input type="text" className="form-control" placeholder="Post Comment" aria-label="Post Comment" aria-describedby="basic-addon2" />
                                                                <div className="input-group-append primary">
                                                                    <span className="input-group-text" id="basic-addon2"><i className="i-rocket"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>  
                                                </div>
                                            </div>



                                            <div className="uprofile_wall_posts col-12">
                                                <div className="row">
                                                    <div className="pic-wrapper float-left col-1">
                                                        <img src={IMGDIR+"/images/profile/avatar-1.jpg"} className="" alt="" />
                                                    </div>
                                                    <div className="info-wrapper float-left col-11">                  
                                                        <div className="username">
                                                            <span className="bold">John Smith</span> post in group <span className="bold">work</span>   
                                                        </div>
                                                        <div className="info text-muted">
                                                            "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance.
                                                        </div>  
                                                        <div className="info-details">
                                                            <ul className="list-unstyled list-inline">
                                                                <li className="list-inline-item"><a href="#!" className="text-muted">15 Minutes ago</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-bubble"></i> 584</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-heart"></i> 12k</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-action-redo"></i> Reply</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-star"></i> Favourite</a></li>
                                                                <li className="list-inline-item"><a href="#!" className="text-muted">More</a></li>
                                                            </ul>

                                                        </div>
                                                        <div className="clearfix"></div>
                                                        <div className="comment row">
                                                            <div className="pic-wrapper float-left col-1">
                                                                <img  data-src={IMGDIR+"/images/profile/avatar-2.jpg"} src={IMGDIR+"/images/profile/avatar-2.jpg"} alt="" />
                                                            </div>
                                                            <div className="info-wrapper float-left col-11">                  
                                                                <div className="username">
                                                                    <span className="bold">Fin</span> 
                                                                </div>
                                                                <div className="info text-muted">
                                                                    Perfect info for the project. Great work :)
                                                                </div>  
                                                                <div className="info-details">
                                                                    <ul className="list-unstyled list-inline">
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted">10 Minutes ago</a></li>
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-heart"></i> Like</a></li>
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted">More</a></li>
                                                                    </ul>
                                                                </div>

                                                            </div>  
                                                            <div className="clearfix"></div>                        
                                                        </div>

                                                        <div className="clearfix"></div>
                                                        <div className="comment row">
                                                            <div className="pic-wrapper float-left col-1">
                                                                <img  data-src={IMGDIR+"/images/profile/avatar-3.jpg"} src={IMGDIR+"/images/profile/avatar-3.jpg"} alt="" />
                                                            </div>
                                                            <div className="info-wrapper float-left col-11">                  
                                                                <div className="username">
                                                                    <span className="bold">Arun</span> 
                                                                </div>
                                                                <div className="info text-muted">
                                                                    Keep it up. Much appreciated effort.
                                                                </div>  
                                                                <div className="info-details">
                                                                    <ul className="list-unstyled list-inline">
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted">8 Minutes ago</a></li>
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted"><i className="i-heart"></i> Liked</a></li>
                                                                        <li className="list-inline-item"><a href="#!" className="text-muted">More</a></li>
                                                                    </ul>
                                                                </div>

                                                            </div>  
                                                            <div className="clearfix"></div>                        
                                                        </div>

                                                        <div className="comment comment-input row">                         

                                                            <div className="pic-wrapper float-left col-1">
                                                                <img  data-src={IMGDIR+"/images/profile/profile-general.jpg"} src={IMGDIR+"/images/profile/profile-general.jpg"} alt="" />
                                                            </div>

                                                            <div className="info-wrapper float-left col-11 input-group">
                                                                <input type="text" className="form-control" placeholder="Post Comment" aria-label="Post Comment" aria-describedby="basic-addon2" />
                                                                <div className="input-group-append primary">
                                                                    <span className="input-group-text" id="basic-addon2"><i className="i-rocket"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>  
                                                </div>
                                            </div>


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

export default PlaylistView;
