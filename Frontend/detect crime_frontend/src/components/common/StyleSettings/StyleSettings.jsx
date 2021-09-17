import React from 'react';
//import { Button } from 'reactstrap';
// used for making the prop types of this component
//import PropTypes from 'prop-types';
import PerfectScrollbar from 'perfect-scrollbar';

var menuColor;
var menuType;
var topbarType;
var topbarColor;
var ps;

class StyleSettings extends React.Component{
    constructor(props) {
        super(props);
        this.menuToggle = this.menuToggle.bind(this);
        this.topbarToggle = this.topbarToggle.bind(this);
        this.OpenSettings = this.OpenSettings.bind(this);
    }

    OpenSettings(e){
        this.refs.SettingsToggle.classList.toggle('open');
    }
    menuToggle(e){

        var dataid = e.currentTarget.dataset.id;
        menuColor = dataid;

        if(dataid === "black") {
            menuType = "dark";
        } else if(dataid === "white" || dataid === "transparent") {
            menuType = "light";
        } else if(dataid === "teal" || dataid === "purple" || dataid === "orange" || dataid === "pink" || dataid === "red") {
            menuType = "colored";
        }

        this.props.menuSettings(menuColor, menuType);

    }

     topbarToggle(e){

        var dataid = e.currentTarget.dataset.id;
        topbarColor = dataid;

        if(dataid === "black") {
            topbarType = "dark";
        } else if(dataid === "white" || dataid === "transparent") {
            topbarType = "light";
        } else if(dataid === "teal" || dataid === "purple" || dataid === "orange" || dataid === "pink" || dataid === "red") {
            topbarType = "colored";
        }

        this.props.topbarSettings(topbarColor, topbarType);

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
                <div className="style-settings" ref="SettingsToggle">
                <div className="style-toggle" onClick={() => this.OpenSettings()}><i className="i-settings"></i></div>
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
                         </ul>
                    </div>
                </div>


        );
    }
}

export default StyleSettings;
