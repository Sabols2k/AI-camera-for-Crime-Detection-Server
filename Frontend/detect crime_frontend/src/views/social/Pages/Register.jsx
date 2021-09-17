import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class Register extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="">
                    <Row>
                        <Col xs={12} md={12}>


        <div className="container-fluid">
            <div className="register-wrapper row">
                <div id="register" className="login loginpage offset-xl-4 offset-lg-3 offset-md-3 offset-0 col-12 col-md-6 col-xl-4">
                    <h1><a href="#!" title="Login Page" tabIndex="-1">&nbsp;</a></h1>

                    <form name="loginform" id="loginform" action="#!" method="post">
                        <p>
                            <label for="user_login">Full Name<br />
                                <input type="text" name="log" id="user_login" className="input" size="20" /></label>
                        </p>
                        <p>
                            <label for="user_login2">Email<br />
                                <input type="text" name="log" id="user_login2" className="input" size="20" /></label>
                        </p>
                        <p>
                            <label for="user_login3">Username<br />
                                <input type="text" name="log" id="user_login3" className="input" size="20" /></label>
                        </p>
                        <p>
                            <label for="user_pass">Password<br />
                                <input type="password" name="pwd" id="user_pass" className="input" size="20" /></label>
                        </p>
                        <p>
                            <label for="user_pass2">Confirm Password<br />
                                <input type="password" name="pwd1" id="user_pass2" className="input" size="20" /></label>
                        </p>
                        <p className="forgetmenot">
                            <label className="form-label" for="rememberme"><input name="rememberme" type="checkbox" id="rememberme" value="forever"/> I agree to terms to conditions</label>
                        </p>



                        <p className="submit">
                            <input type="button" name="wp-submit" id="wp-submit" className="btn btn-accent btn-block" value="Sign Up" />
                        </p>
                    </form>

                    <p id="nav">
                        <a href="#!" title="Password Lost and Found">Forgot password?</a> | <a href="#!" title="Sign Up">Sign In</a>
                    </p>
                    <div className="clearfix"></div>

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

export default Register;
