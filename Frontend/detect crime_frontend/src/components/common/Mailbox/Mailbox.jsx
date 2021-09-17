import React from 'react';
import { NavLink } from 'react-router-dom';
// used for making the prop types of this component
import PropTypes from 'prop-types';

//var BASEDIR = process.env.REACT_APP_BASEDIR;


class Mailbox extends React.Component{ 
    render(){
        var mailboxList = [];
        for (var i = 0; i < this.props.mailbox.length; i++) {
            mailboxList.push(
                    <tr className="unread" id="mail_msg_1" key={i}>
                        <td className="check"><input type="checkbox"/></td>
                        <td className="imp">
                            <div className="star"><i className={'icon-xs ' + (this.props.mailbox[i].star === "1" ? "i-star icon-accent" : "i-star icon-secondary")}></i></div>
                        </td>
                        <td className="user-img">
                                <img src={this.props.mailbox[i].avatar} alt="user avatar" className="avatar-image img-inline"/>
                        </td>
                        <td className="open-view">
                            <span className="msgtext"><NavLink to={'#!'}>{ this.props.mailbox[i].msg }</NavLink></span>
                            <span className="msgby">{ this.props.mailbox[i].name }</span>
                        </td>
                        <td className="tag">
                            <span className={"badge " + (this.props.mailbox[i].tag === "Family"? "badge-primary" : "") + (this.props.mailbox[i].tag === "Work"? "badge-accent" : "") + (this.props.mailbox[i].tag === "Friends"? "badge-purple" : "")}>{this.props.mailbox[i].tag}</span>
                        </td>
                        <td className="timestamp"><span className="msg_time"><NavLink to={'#!'}>{ this.props.mailbox[i].time }</NavLink></span></td>
                    </tr>
                /*<div tag="a" className={this.props.mailbox[i].type} key={i}>
                    <div className="user-img">
                        <img src={this.props.mailbox[i].avatar} alt="user avatar" className="avatar-image img-inline"/>
                    </div>
                    <div className="user-info">
                        <span className="name">
                            <strong>{ this.props.mailbox[i].name }</strong>
                            <span className="time small"> - { this.props.mailbox[i].time }</span>
                            <span data-status={this.props.mailbox[i].status} className = "profile-status float-right"></span>
                        </span>
                        <span className="desc small">
                            { this.props.mailbox[i].msg }
                        </span>
                    </div>                        
                </div>*/
            );
        }
        return (          
                                <div className="mail_list col-12">
                                    <table className="table table-responsive">
                                        <tbody>
                                            { mailboxList }
                                        </tbody>
                                    </table>
                                </div>
        );
    }
}

Mailbox.propTypes = {
    mailbox: PropTypes.arrayOf(PropTypes.object)
}

export default Mailbox;
