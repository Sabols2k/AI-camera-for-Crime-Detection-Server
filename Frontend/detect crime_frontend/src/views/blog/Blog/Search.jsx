import React from 'react';
import {
    TabContent, TabPane, Nav, NavItem, NavLink,
    Row, Col, FormGroup, Input,
} from 'reactstrap';

import classnames from 'classnames';

//import PerfectScrollbar from 'perfect-scrollbar';

import {
    BlogSearchPosts
} from 'components';

import { search } from 'variables/blog/search.jsx';

//var ps;


class BlogSearch extends React.Component{
   
    constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
    /*componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.searcharea,{suppressScrollX: true, suppressScrollY: false});
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }*/

    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Search</h1>
                        </div>
                    </div>


                            
    

    
                    <div className="col-xl-12">

                            <div className="content-body">    


                            <div className="row">


                                    <div className="col-md-6 col-sm-5 col-4">
                                        <div className="input-group primary">
                                            <input type="text" className="form-control search-page-input" placeholder="Enter your search" />
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-sm-4 col-4">
                                        <FormGroup>
                                              <Input type="select" name="select" id="exampleSelect">
                                                <option>Sort By</option>
                                                <option>Latest</option>
                                                <option>Most viewed</option>
                                                <option>Most Rated</option>
                                                <option>Trending</option>
                                              </Input>
                                            </FormGroup>
                                    </div>

                                    <div className="col-md-2 col-sm-3 col-4">
                                      <button type="button" className="btn btn-primary">Search</button>
                                    </div>


                                    <div className="clearfix"></div><br/>


                                    <div className="col-lg-12 search_data">

    <div>
        <Nav tabs className="left-aligned col-lg-12 col-xl-12 col-md-12 col-12">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <i className="i-home"></i> Web
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <i className="i-picture"></i> Images
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <i className="i-user"></i> Contacts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              <i className="i-briefcase"></i> Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              <i className="i-location-pin"></i> Maps
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              <i className="i-envelope"></i> Messages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >
              <i className="i-share"></i> Profile
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab} className="col-lg-12 col-xl-12 col-12">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              <div /*ref="searcharea" style={{position: 'relative', height: 800+'px'}}*/>
                                <BlogSearchPosts search={search} />
                </div>                                                
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">

                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to disable the data attribute API by unbinding all events on the document namespaced with data-api. </p>
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                                                <p>We also believe you should be able to use all Bootstrap plugins purely through the JavaScript API. All public APIs are single, chainable methods, and return the collection acted upon.</p>
                                                <p>Don't use data attributes from multiple plugins on the same element. For example, a button cannot both have a tooltip and toggle a modal. To accomplish this, use a wrapping element.</p>                    
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">

                                                <p>Don't use data attributes from multiple plugins on the same element. For example, a button cannot both have a tooltip and toggle a modal. To accomplish this, use a wrapping element.</p>
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">

                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to disable the data attribute API by unbinding all events on the document namespaced with data-api. </p>
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12">
                                                <p>We also believe you should be able to use all Bootstrap plugins purely through the JavaScript API. All public APIs are single, chainable methods, and return the collection acted upon.</p>
                                                <p>Don't use data attributes from multiple plugins on the same element. For example, a button cannot both have a tooltip and toggle a modal. To accomplish this, use a wrapping element.</p>                    
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="7">
            <Row>
              <Col sm="12">

                                                <p>Don't use data attributes from multiple plugins on the same element. For example, a button cannot both have a tooltip and toggle a modal. To accomplish this, use a wrapping element.</p>
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>


















                                    </div>

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

export default BlogSearch;
