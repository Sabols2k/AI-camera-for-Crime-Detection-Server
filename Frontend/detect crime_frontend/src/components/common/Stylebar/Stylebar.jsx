import React from 'react';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

var menuColor;
var menuType;
var topbarType;
var topbarColor;
var ps;

class Stylebar extends React.Component{
    constructor(props) {
        super(props);
        this.menuToggle = this.menuToggle.bind(this);
        this.topbarToggle = this.topbarToggle.bind(this);
    }
    menuToggle(e){

        var dataid = e.currentTarget.dataset.id;
        menuColor = dataid;

        if(dataid === "black" || dataid === "image3" || dataid === "image4") {
            menuType = "dark";
        } else if(dataid === "white" || dataid === "transparent" || dataid === "image1" || dataid === "image2") {
            menuType = "light";
        } else if(dataid === "teal" || dataid === "purple" || dataid === "orange" || dataid === "pink" || dataid === "red") {
            menuType = "colored";
        }

        this.props.menuSettings(menuColor, menuType);

    }
     topbarToggle(e){

        var dataid = e.currentTarget.dataset.id;
        topbarColor = dataid;

        if(dataid === "black" || dataid === "image3" || dataid === "image4") {
            topbarType = "dark";
        } else if(dataid === "white" || dataid === "transparent" || dataid === "image1" || dataid === "image2") {
            topbarType = "light";
        } else if(dataid === "teal" || dataid === "purple" || dataid === "orange" || dataid === "pink" || dataid === "red") {
            topbarType = "colored";
        }

        this.props.topbarSettings(topbarColor, topbarType);

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

    componentDidMount(){
        
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.stylebar,{suppressScrollX: true, suppressScrollY: false});
        }

    }
    componentWillUnmount(){ 
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }
    render(){
        return ( 
            <div className="sidebar stylebar">
                

                                <div className="navbar-toggle style-toggle" onClick={() => this.openStyle()}>
                                            <i className="i-settings"></i>
                                </div>
                <div className="sidebar-wrapper" ref="stylebar">


                        <div className="style-settings" ref="SettingsToggle">

                        <div className="style-wrap" ref="stylebar">
                                <p>Menu Style</p>
                                 <ul className="menu">
                                    <li onClick={(e) => this.menuToggle(e)} data-id="black">Black <i className="i-check"></i></li>
                                    <li onClick={(e) => this.menuToggle(e)} data-id="white">White <i className="i-check"></i></li>
                                    <li onClick={(e) => this.menuToggle(e)} data-id="teal">Teal <i className="i-check"></i></li>
                                    <li onClick={(e) => this.menuToggle(e)} data-id="orange">Orange <i className="i-check"></i></li>
                                    <li onClick={(e) => this.menuToggle(e)} data-id="purple">Purple <i className="i-check"></i></li>
                                    <li onClick={(e) => this.menuToggle(e)} data-id="pink">Pink <i className="i-check"></i></li>
                                    <li onClick={(e) => this.menuToggle(e)} data-id="red">Red <i className="i-check"></i></li>
                                    <li onClick={(e) => this.menuToggle(e)} data-id="transparent">Transparent <i className="i-check"></i></li>
                                    <li onClick={(e) => this.menuToggle(e)} data-id="image1">Image 1 <i className="i-check"></i></li>
                                    <li onClick={(e) => this.menuToggle(e)} data-id="image2">Image 2 <i className="i-check"></i></li>
                                    <li onClick={(e) => this.menuToggle(e)} data-id="image3">Image 3 <i className="i-check"></i></li>
                                    <li onClick={(e) => this.menuToggle(e)} data-id="image4">Image 4 <i className="i-check"></i></li>
                                 </ul>
                                <p>Top Bar Style</p>
                                 <ul className="topbar">
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="black">Black <i className="i-check"></i></li>
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="white">White <i className="i-check"></i></li>
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="teal">Teal <i className="i-check"></i></li>
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="orange">Orange <i className="i-check"></i></li>
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="purple">Purple <i className="i-check"></i></li>
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="pink">Pink <i className="i-check"></i></li>
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="red">Red <i className="i-check"></i></li>
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="transparent">Transparent <i className="i-check"></i></li>
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="image1">Image 1 <i className="i-check"></i></li>
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="image2">Image 2 <i className="i-check"></i></li>
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="image3">Image 3 <i className="i-check"></i></li>
                                    <li onClick={(e) => this.topbarToggle(e)} data-id="image4">Image 4 <i className="i-check"></i></li>
                                 </ul>
                            </div>
                        </div>

                </div>
            </div>
        );
    }
}

export default Stylebar;
