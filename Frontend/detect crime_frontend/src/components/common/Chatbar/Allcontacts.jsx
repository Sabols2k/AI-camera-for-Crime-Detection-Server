import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

// used for making the prop types of this component
import PropTypes from 'prop-types';


class Allcontact extends React.Component{ 
    render(){
        var allcontactsList = [];
        for (var i = 0; i < this.props.allcontacts.length; i++) {
            allcontactsList.push(
                <ListGroupItem key={i} className="contact">
                    <div className="user-img">
                        <img src={this.props.allcontacts[i].avatar} alt="user avatar" className="avatar-image img-inline"/>
                    </div>
                    <div className="user-info">
                            <span className="name">{ this.props.allcontacts[i].name }</span>
                            <span className="status small">{ this.props.allcontacts[i].status }</span>
                            <span data-status={this.props.allcontacts[i].status} className = "profile-status float-right"></span>
                    </div>                        
                </ListGroupItem>
            );
        }
        return (          
                                <div>
                                <ListGroup>
                                       { allcontactsList }
                                </ListGroup>
                                </div>
        );
    }
}

Allcontact.propTypes = {
    allcontacts: PropTypes.arrayOf(PropTypes.object)
}

export default Allcontact;
