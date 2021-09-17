import React from 'react';

// used for making the prop types of this component
import PropTypes from 'prop-types';


class Messagewidget extends React.Component{ 
    render(){
        var messagewidgetList = [];
        for (var i = 0; i < this.props.messagewidget.length; i++) {
            messagewidgetList.push(


                    <li className="unread status-available" key={i}>
                                                        <a href="#!">
                                                            <div className="user-img">
                                                                <img src={this.props.messagewidget[i].avatar} alt="user avatar" className="avatar-image img-inline"/>
                                                            </div>
                                                            <div>
                                                                <span className="name">
                                                                    <span>{ this.props.messagewidget[i].name }</span>
                                                                    <span className="time small">{ this.props.messagewidget[i].time }</span>
                                                                    <span className={"profile-status float-right " + ( this.props.messagewidget[i].status) }></span>
                                                                </span>
                                                                <span className="desc">
                                                                    { this.props.messagewidget[i].msg }
                                                                </span>
                                                            </div>
                                                        </a>
                    </li>

            );
        }
        return (          
                                <div className="">
                                       { messagewidgetList }
                                </div>
        );
    }
}

Messagewidget.propTypes = {
    messagewidget: PropTypes.arrayOf(PropTypes.object)
}

export default Messagewidget;
