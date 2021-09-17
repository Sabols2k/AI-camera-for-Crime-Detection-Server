import React from 'react';
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from 'perfect-scrollbar';
import {
    Route,
    Switch,
} from 'react-router-dom';

import { Header, Footer, Sidebar, ChatSidebar, Stylebar } from 'components'

import dashboardRoutes from 'routes/general.jsx';
import { topbarStyle, menuStyle, menuType, topbarType, navWidth, chatWidth, chatType } from 'variables/settings/pagelayouts/layout14.jsx';

//var ps;

class Layout14 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            menuColor: menuStyle,
            topbarColor: topbarStyle,
            menuType: menuType,
            topbarType: topbarType,
        };
        this.menuSettings = this.menuSettings.bind(this);
        this.topbarSettings = this.topbarSettings.bind(this);
    }

    menuSettings(val1,val2) {
        this.setState({
          menuColor: val1,
          menuType: val2,
        });
    }
    topbarSettings(val1,val2) {
        this.setState({
          topbarColor: val1,
          topbarType: val2,
        });
    }

    componentDidMount(){
        /*if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.mainPanel);
            document.body.classList.toggle("perfect-scrollbar-on");
        }*/
    }
    componentWillUnmount(){
        /*if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
            document.body.classList.toggle("perfect-scrollbar-on");
        }*/
    }
    componentDidUpdate(e) {
      if(e.history.action === "PUSH"){
        this.refs.mainPanel.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      }
    }
    render(){
        return (
            <div className="wrapper" ref="themeWrapper" data-menu={this.state.menuColor} data-topbar={this.state.topbarColor} data-menutype={this.state.menuType} data-topbartype={this.state.topbarType}>


                <Header {...this.props} navtype={navWidth}/>
                <Sidebar {...this.props} routes={dashboardRoutes}/>
                <div className="main-panel" ref="mainPanel">

                                
                

                    <Switch>
                        {
                            dashboardRoutes.map((prop,key) => {
                                //console.log(this.props.location.pathname);
                                if(this.props.location.pathname === prop.path){
                                    return (
                                        <Route path={prop.path} component={prop.component} key={key}/>
                                    );
                                }
                                return ("");
                            })
                        }
                    </Switch>
                    <Footer fluid/>
                </div>
                <ChatSidebar {...this.props} routes={dashboardRoutes} chatwidth={chatWidth}  chattype={chatType}/>
                <Stylebar menuSettings={this.menuSettings} topbarSettings={this.topbarSettings} />
            </div>
        );
    }
}

export default Layout14;
