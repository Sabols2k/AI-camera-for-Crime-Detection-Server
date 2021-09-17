import React from 'react';
import {
} from 'reactstrap';

import {
    
} from 'components';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class LockScreen extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="">
                   

        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">

                        <div className="content-body">    <div className="row">
                                <div className="col-12">
                                    <h1 className="lockscreen_info"><img alt="" src={IMGDIR+'/images/profile/profile-general.jpg'} /></h1>
                                    <h1 className="lockscreen_info"> Hello Ella,</h1>
                                    <p className="lockscreen_tagline">Please re-enter your password to continue</p>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-8 offset-lg-4 offset-md-3 offset-2 lockscreen_search_area">
                                            <form action="#!" method="post" className="lockscreen_search">
                                                <div className="input-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                    <button className="btn btn-primary">Submit</button> 
                                                </div>
                                            </form>
                                        </div></div>
                                    <div className="clearfix"></div>


                                </div>
                            </div>
                        </div></div>

            </div>
        </div>



                </div>
            </div>
        );
    }
}

export default LockScreen;
