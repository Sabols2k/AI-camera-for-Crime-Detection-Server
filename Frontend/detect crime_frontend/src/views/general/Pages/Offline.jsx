import React from 'react';
import {
} from 'reactstrap';

import {
   
} from 'components';

class PageOffline extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="">
                   

        <div className="container-fluid">
            <div className="row">

                <div className="col-xl-12">
                        <div className="content-body">    <div className="row">
                                <div className="col-12">

                                    <h1 className="page_error_code text-primary">Offline</h1>
                                    <h1 className="page_error_info">Oops! Website Is Temporarily Offline</h1>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-8 offset-lg-4 offset-md-3 offset-2 lockscreen_search_area">
                                            <form action="#!" method="post" className="page_error_search">
                                                <div className="row">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Enter your Search" />
                                                        <button className="btn btn-primary">Search</button> 
                                                    </div>
                                                </div>
                                            </form>
                                        </div></div>

                                </div>
                            </div>
                        </div>
                    </div>
            </div></div>




                </div>
            </div>
        );
    }
}

export default PageOffline;
