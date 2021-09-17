import React from 'react';
import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';


class Notification extends React.Component{
    render(){
        var notificationsList = [];
        for (var i = 0; i < this.props.notifications.length; i++) {
            notificationsList.push(
                <DropdownItem tag="a" className={this.props.notifications[i].type} key={i}>
                    <div className="notify-icon" data-status={this.props.notifications[i].status}>
                        <i className={'i-' + this.props.notifications[i].icon}></i>
                    </div>
                    <div className="notify-info">
                        <span className="title">
                            { this.props.notifications[i].title }
                            <span className="time small">{ this.props.notifications[i].time }</span>
                            <span data-status={this.props.notifications[i].status} className = "profile-status float-right"></span>
                        </span>
                    </div>                        
                </DropdownItem>
            );
        }
        return (          
                                <DropdownMenu>
                                       { notificationsList }
                                </DropdownMenu>
        );
    }
}

Notification.propTypes = {
    notifications: PropTypes.arrayOf(PropTypes.object)
}

export default Notification;
