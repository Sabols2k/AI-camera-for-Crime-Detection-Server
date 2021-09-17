import React, { useState } from 'react';

 
// import { userLoginAsync } from './../asyncActions/authAsyncActions'; //TODO: đây là nguyên nhân làm cho dashboard ko chạy được. -> tìm hiểu nguyên nhân bên trong

import axios from 'axios';
// import { setUserSession } from './Utils/Common';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

function Login(props) {
   
    // const authObj = useSelector(state => state.auth);
    // const dispatch = useDispatch();
   
    // const { userLoginLoading, loginError } = authObj;
   
    const username = useFormInput('');
    const password = useFormInput('');
   
    // handle button click of login form
    const handleLogin = () => {
    //   dispatch(userLoginAsync(username.value, password.value));
    }
    // render(){

        return (
            <div>
                <div className="">
                    <Row>
                        <Col xs={12} md={12}>

        <div className="container-fluid">
            <div className="login-wrapper row">
                <div id="login" className="login loginpage offset-xl-4 offset-lg-3 offset-md-3 offset-0 col-12 col-md-6 col-xl-4">
                    <h1><a href="#!" title="Login Page" tabIndex="-1">&nbsp;</a></h1>
                    
                    <form method="POST" action="http://localhost:3000/login" class="form">
                        <p>
                            <label htmlFor="user_login">Username<br/>
                                <input type="text" name="username"  className="form-control"/>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="user_pass">Password<br />
                                <input type="password" name="password" className="input" size="20"/>
                            </label>
                        </p>
                        <p className="submit">
                            <input type="submit" name="wp-submit" class="form-submit" className="btn btn-accent btn-block" value="LOGIN"/>
                        </p>
                        {/* {loginError && <div style={{ color: 'red', marginTop: 10 }}>{loginError}</div>} */}
                    </form>

                    <p id="nav">
                        <a href="#!" title="Password Lost and Found">Forgot password?</a> | <a href="#!" title="Sign Up">Sign Up</a>
                    </p>
                    <h4 id="nav">
                        <a href="http://localhost:3001/zestreact/app/loginadmin" title="Password Lost and Found">Are you Admin?</a> 
                    </h4>


                </div>
            </div>
        </div>
                        </Col>

                    </Row>
                </div>
            </div>
        );
    // }
}

// custom hook to manage the form input
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }


export default Login;
