import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

import {
    Favcontacts, Allcontacts, Chatgroups
} from 'components';

import { favcontacts, allcontacts, chatgroups } from 'variables/topbar.jsx';

var ps; 

class ChatSidebar extends React.Component{
    constructor(props){
        super(props);
        this.activeRoute.bind(this);
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    componentDidMount(){
        
        if(this.props.chatwidth === "open"){
            document.documentElement.classList.add('nav-toggle-chat');
        } else {
            document.documentElement.classList.remove('nav-toggle-chat');
        }
        
        if(this.props.chattype === "squeeze"){
            document.documentElement.classList.add('nav-chat-squeeze');
        } else {
            document.documentElement.classList.remove('nav-chat-squeeze');
        }

        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.chatbar,{suppressScrollX: true, suppressScrollY: false});
        }

    }
    componentWillUnmount(){ 
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }
    render(){
        return ( 
            <div className="sidebar chatbar">
                
                <div className="sidebar-wrapper" ref="chatbar">

                                <Form className="chat-search">
                                    <FormGroup>
                                      <Input type="text" name="search" id="chatsearch" placeholder="Search" />
                                    </FormGroup>
                                </Form>
                                <h4 className="group-head">Groups</h4>
                                <Chatgroups chatgroups={chatgroups}/>
                                <h4 className="group-head">Favourites</h4>
                                <Favcontacts favcontacts={favcontacts}/>
                                <h4 className="group-head">All Contacts</h4>
                                <Allcontacts allcontacts={allcontacts}/>
                </div>
            </div>
        );
    }
}

export default ChatSidebar;
