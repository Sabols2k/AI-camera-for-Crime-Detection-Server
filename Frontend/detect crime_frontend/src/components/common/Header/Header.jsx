import React from 'react';
import {
    Collapse, Navbar, NavbarBrand, Nav, NavItem,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Container, InputGroup, InputGroupAddon, Input
} from 'reactstrap';

import {
    Messages, Notifications
} from 'components';

import dashboardRoutes from 'routes/general.jsx';

import { messages } from 'variables/topbar.jsx';
import { notifications } from 'variables/topbar.jsx';

var IMGDIR = process.env.REACT_APP_IMGDIR;
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            userddOpen: false,
            searchOpen: false,
            messagesddOpen: false,
            notificationsddOpen: false,
            color: "primary",
            profilename: 'Đặng Đức Châu',
            profileimg: IMGDIR+'/images/profile/profile-general2.jpg',
        };
        this.toggle = this.toggle.bind(this);
        this.userddToggle = this.userddToggle.bind(this);
        this.messagesddToggle = this.messagesddToggle.bind(this);
        this.notificationsddToggle = this.notificationsddToggle.bind(this);
        this.searchToggle = this.searchToggle.bind(this);

    }
    toggle() {
        if(this.state.isOpen){
            this.setState({
                color: "primary"
            });
        } else {
            this.setState({
                color: "white"
            });
        }
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    userddToggle(e){
        this.setState({
            userddOpen: !this.state.userddOpen
        });
    }
    searchToggle(){
        //this.refs.searchbarToggle.classList.toggle('toggled');
        this.setState({
            searchOpen: !this.state.searchOpen
        });
        //console.log(this.state.searchOpen);
        //this.refs.searchbarToggle.classList.toggle('opened');
    }
    messagesddToggle(e){
        this.setState({
            messagesddOpen: !this.state.messagesddOpen
        });
    }
    notificationsddToggle(e){
        this.setState({
            notificationsddOpen: !this.state.notificationsddOpen
        });
    }
    getBrand(){
        var name;
        dashboardRoutes.map((prop,key) => {
            if(prop.collapse){
                 prop.views.map((prop,key) => {
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                    return null;
                })
            } else {
                if(prop.redirect){
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                }else{
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                }
            }
            return null;
        })
        return name;
    }
    openSidebar(){
        document.documentElement.classList.toggle('nav-toggle');
        this.refs.sidebarToggle.classList.toggle('toggled');

        // close chat bar if open on smaller screens
        if(window.innerWidth < 993){
            document.documentElement.classList.remove('nav-toggle-chat');
           // this.refs.chatToggle.classList.remove('toggled');
        }
    }
    openChat(){
        document.documentElement.classList.toggle('nav-toggle-chat');
       // this.refs.chatToggle.classList.toggle('toggled');

        // close menu bar if open on smaller screens
        if(window.innerWidth < 993){
            document.documentElement.classList.remove('nav-toggle');
            this.refs.sidebarToggle.classList.remove('toggled');
        }
    }
    toggle_grid(){
        document.documentElement.classList.toggle('toggle-grid');
    }


    openStyle(){
        document.documentElement.classList.toggle('nav-toggle-style');
       // this.refs.chatToggle.classList.toggle('toggled');

        // close menu bar if open on smaller screens
        /*if(window.innerWidth < 993){
            document.documentElement.classList.remove('nav-toggle');
            this.refs.sidebarToggle.classList.remove('toggled');
        }*/
    }
    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    updateColor(){
        if(window.innerWidth < 993 && this.state.isOpen){
            this.setState({
                color: "primary"
            });
        } else {
            this.setState({
                color: "primary"
            });
        }

    }
    componentDidMount(){
        if(this.props.navtype === "mini"){
            document.documentElement.classList.add('nav-toggle');
            this.refs.sidebarToggle.classList.add('toggled');
        } else {
            document.documentElement.classList.remove('nav-toggle');
            this.refs.sidebarToggle.classList.remove('toggled');
        }
        window.addEventListener("resize", this.updateColor.bind(this));

            if(this.props.admintype === 'general'){
                this.setState({     
                    profileimg: IMGDIR+'/images/profile/profile-general2.jpg',
                    profilename: 'Đặng Đức Châu'
                });  
            } else if(this.props.admintype === 'hospital'){
                this.setState({     
                    profileimg: IMGDIR+'/images/profile/profile-hospital.jpg',    
                    profilename: 'Dianna Austin'
                });  
            } else if(this.props.admintype === 'university'){
                this.setState({     
                    profileimg: IMGDIR+'/images/profile/profile-general2.jpg',
                    profilename: 'Đặng Đức Châu'    
                });  
            } else if(this.props.admintype === 'crm'){
                this.setState({     
                    profilename: 'Rick  Woods',
                    profileimg: IMGDIR+'/images/profile/profile-crm.jpg'    
                });  
            } else if(this.props.admintype === 'music'){
                this.setState({     
                    profilename: 'Kerry Flores',
                    profileimg: IMGDIR+'/images/profile/profile-music.jpg'    
                });  
            } else if(this.props.admintype === 'blog'){
                this.setState({     
                    profilename: 'Alice Gross',
                    profileimg: IMGDIR+'/images/profile/profile-blog.jpg'    
                });  
            } else if(this.props.admintype === 'ecommerce'){
                this.setState({     
                    profilename: 'Jake  Daniel',
                    profileimg: IMGDIR+'/images/profile/profile-ecommerce.jpg'    
                });  
            } else if(this.props.admintype === 'freelance'){
                this.setState({     
                    profilename: 'Eric Nelson',
                    profileimg: IMGDIR+'/images/profile/profile-freelance.jpg'    
                });  
            } else if(this.props.admintype === 'social'){
                this.setState({     
                    profilename: 'Penny Taylor',
                    profileimg: IMGDIR+'/images/profile/profile-social.jpg'    
                });  
            } else {
                this.setState({     
                    profilename: 'Nancy Spencer',
                    profileimg: IMGDIR+'/images/profile/profile-general.jpg'    
                });  
            }



    }
    componentDidUpdate(e){
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-toggle') !== -1){
            document.documentElement.classList.toggle('nav-toggle');
            this.refs.sidebarToggle.classList.toggle('toggled');
        }
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-toggle-chat') !== -1){
            document.documentElement.classList.toggle('nav-toggle-chat');
           // this.refs.chatToggle.classList.toggle('toggled');
        }
    }
    render(){
        return (
            // add or remove classes depending if we are on full-screen-maps page or not
            <Navbar expand="lg"
                className={
                    this.props.location.pathname.indexOf('full-screen-maps') !== -1 ?
                    "navbar-absolute fixed-top":"navbar-absolute fixed-top "}>
                <Container fluid>
                    <div className="navbar-wrapper">
                        <div className="navbar-toggle">
                            <button type="button" ref="sidebarToggle" className="navbar-toggler" onClick={() => this.openSidebar()}>
                                <i className="i-menu"></i>
                            </button>
                        </div>


                            <Dropdown nav isOpen={this.state.messagesddOpen} toggle={(e) => this.messagesddToggle(e)} className="navbardd">
                                <DropdownToggle caret nav>
                                    <i className="i-envelope"></i>
                                    <span className="badge badge-pill badge-primary">3</span>
                                </DropdownToggle>
                                <Messages messages={messages}/>
                            </Dropdown>

                            <Dropdown nav isOpen={this.state.notificationsddOpen} toggle={(e) => this.notificationsddToggle(e)} className="navbardd">
                                <DropdownToggle caret nav>
                                    <i className="i-bell"></i>
                                    <span className="badge badge-pill badge-primary">7</span>
                                </DropdownToggle>
                                <Notifications notifications={notifications}/>
                            </Dropdown>
    
                            <form className="topbar-search-form">
                                <InputGroup className={"topbar-search "+(this.state.searchOpen === true ? "open":"")}>
                                    <InputGroupAddon addonType="append" onClick={() => this.searchToggle()}><i className="i-magnifier"></i></InputGroupAddon>
                                    <Input placeholder="Search..." />
                                </InputGroup>
                            </form>


                        <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>



                    </div>
                    
                    <Collapse isOpen={this.state.isOpen} navbar className="navbar-right">
                        <Nav navbar>
                            <Dropdown nav isOpen={this.state.userddOpen} toggle={(e) => this.userddToggle(e)} className="userdd">
                                <DropdownToggle caret nav>
                                   <img src={this.state.profileimg} alt="react-logo" className="avatar-image" /> <span>{this.state.profilename}</span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag="a"><i className="i-wrench" href="#!"></i> Settings</DropdownItem>
                                    <DropdownItem tag="a"><i className="i-user" href="#!"></i> Profile</DropdownItem>
                                    <DropdownItem tag="a"><i className="i-info" href="#!"></i> Help</DropdownItem>
                                    <DropdownItem tag="a" className="" href="http://localhost:3000/logout"><i className="i-lock"></i> Logout</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <div className="navbar-toggle chat-toggle">
                                    <button type="button" ref="chatToggle" className="navbar-toggler" onClick={() => this.openChat()}>
                                            <i className="i-bubbles"></i>
                                            <span className="badge badge-pill badge-primary">9</span>
                                    </button>
                                </div>

                                


                            </NavItem>
                        </Nav>
                        <div className="screensize" onClick={() => this.toggle_grid()}></div>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;