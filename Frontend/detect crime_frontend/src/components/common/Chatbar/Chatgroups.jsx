import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';


class Chatgroup extends React.Component{ 
    render(){
        var chatgroupsList = [];
        for (var i = 0; i < this.props.chatgroups.length; i++) {
            chatgroupsList.push(
                <ListGroupItem key={i}>
                    <div className="user-info groupname">
                            <span data-status={this.props.chatgroups[i].color} className = "profile-status"></span>
                            <span className="name">{ this.props.chatgroups[i].name }</span>
                    </div>                        
                </ListGroupItem>
            );
        }
        return (          
                                <div>
                                <ListGroup>
                                       { chatgroupsList }
                                </ListGroup>
                                </div>
        );
    }
}

Chatgroup.propTypes = {
    chatgroups: PropTypes.arrayOf(PropTypes.object)
}

export default Chatgroup;
