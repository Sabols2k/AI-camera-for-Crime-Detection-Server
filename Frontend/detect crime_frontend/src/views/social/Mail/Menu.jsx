import React from 'react';
import { NavLink } from 'react-router-dom';

var BASEDIR = process.env.REACT_APP_BASEDIR;
class Mailmenu extends React.Component{
    render(){
        return (
                                    <div className="col-lg-2 col-md-3 col-12 mail_tabs_wrap">



                                        <ul className="list-unstyled mail_tabs">
                                            <li className="compose">
                                            <NavLink to={BASEDIR+'/social/mail-compose'}>
                                                <i className="i-envelope"></i> Compose
                                            </NavLink>
                                            </li>
                                            <li className="">
                                            <NavLink to={BASEDIR+'/social/mail-inbox'}>
                                                <i className="i-drawer"></i> Inbox 
                                            </NavLink>
                                            </li>
                                            <li className="">
                                                <NavLink to={'#!'}>
                                                    <i className="i-paper-plane"></i> Sent
                                                </NavLink>
                                            </li>
                                            <li className="">
                                                <NavLink to={'#!'}>
                                                    <i className="i-pencil"></i> Drafts 
                                                </NavLink>
                                            </li>
                                            <li className="">
                                                <NavLink to={'#!'}>
                                                    <i className="i-star"></i> Important
                                                </NavLink>
                                            </li>
                                            <li className="">
                                                <NavLink to={'#!'}>
                                                    <i className="i-trash"></i> Trash
                                                </NavLink>
                                            </li>
                                        </ul>

                                    </div>

        );
    }
}

export default Mailmenu;
