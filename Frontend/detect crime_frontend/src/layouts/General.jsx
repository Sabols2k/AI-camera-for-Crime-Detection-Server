import React from 'react';
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from 'perfect-scrollbar';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import ReactSession from 'react-client-session';
import { Header, Footer, Sidebar, ChatSidebar, Stylebar } from 'components'

import dashboardRoutes from 'routes/general.jsx';
import { topbarStyle, menuStyle, menuType, topbarType, navWidth, chatWidth, chatType } from 'variables/settings/general.jsx';

//var ps;

class GeneralLayout extends React.Component{
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

    componentDidMount(){}
    componentWillUnmount(){}
    componentDidUpdate(e) {
      if(e.history.action === "PUSH"){
        this.refs.mainPanel.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      }
    }
    render(){
        // ReactSession.setStoreType("localStorage");
        // ReactSession.set("username", "Bob");
        return (
            <div className="wrapper" ref="themeWrapper" data-menu={this.state.menuColor} data-topbar={this.state.topbarColor} data-menutype={this.state.menuType} data-topbartype={this.state.topbarType}>

                <Header {...this.props} navtype={navWidth} admintype={'general'}/>
                <Sidebar {...this.props} routes={dashboardRoutes} admintype={'general'}/>
                <div className="main-panel" ref="mainPanel">
                    <Switch>
                        {
                            dashboardRoutes.map((prop,key) => {
                                if(prop.collapse){
                                    return prop.views.map((prop2,key2) => {
                                        return (
                                            <Route path={prop2.path} component={prop2.component} key={key2}/>
                                        );
                                    })
                                }
                                if(prop.redirect)
                                    return (
                                        <Redirect from={prop.path} to={prop.pathTo} key={key}/>
                                    );
                                return (
                                    <Route path={prop.path} component={prop.component} key={key}/>
                                );
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

export default GeneralLayout;
