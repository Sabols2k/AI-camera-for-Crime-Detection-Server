import React from 'react';
// javascript plugin used to create scrollbars on windows
//import PerfectScrollbar from 'perfect-scrollbar';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

//import { Header, Footer, Sidebar, ChatSidebar } from 'components'

import dashboardRoutes from 'routes/general.jsx';

//var ps;

class BlankPage extends React.Component{
    componentDidMount(){
    }
    componentWillUnmount(){
    }
    componentDidUpdate(e) {
      if(e.history.action === "PUSH"){
        this.refs.mainPanel.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
      }
    }
    render(){
        return (
            <div className="wrapper">
                
                <div className="main-panel blankpage" ref="mainPanel">
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
                </div>
            </div>
        );
    }
}

export default BlankPage;
