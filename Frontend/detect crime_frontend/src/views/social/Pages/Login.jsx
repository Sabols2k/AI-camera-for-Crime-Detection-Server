import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class Login extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="">
                    <Row>
                        <Col xs={12} md={12}>

        <div className="container-fluid">
            <div className="login-wrapper row">
                <div id="login" className="login loginpage offset-xl-4 offset-lg-3 offset-md-3 offset-0 col-12 col-md-6 col-xl-4">
                    <h1><a href="#!" title="Login Page" tabIndex="-1">&nbsp;</a></h1>

                    <form name="loginform" id="loginform" action="#!" method="post">
                        <p>
                            <label for="user_login">Username<br/>
                                <input type="text" name="un" id="user_name" className="form-control"/>
                            </label>
                        </p>
                        <p>
                            <label for="user_pass">Password<br />
                                <input type="password" name="pwd" id="user_pass" className="input" size="20" /></label>
                        </p>
                        <p className="submit">
                            <input type="button" name="wp-submit" id="wp-submit" className="btn btn-accent btn-block" value="Sign In" />
                        </p>
                    </form>

                    <p id="nav">
                        <a href="#!" title="Password Lost and Found">Forgot password?</a> | <a href="#!" title="Sign Up">Sign Up</a>
                    </p>


                </div>
            </div>
        </div>






                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Login;
