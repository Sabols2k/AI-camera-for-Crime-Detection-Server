import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

// used for making the prop types of this component
import PropTypes from 'prop-types';


class Favcontact extends React.Component{ 
    render(){
        var favcontactsList = [];
        for (var i = 0; i < this.props.favcontacts.length; i++) {
            favcontactsList.push(
                <ListGroupItem key={i} className="contact">
                    <div className="user-img">
                        <img src={this.props.favcontacts[i].avatar} alt="user avatar" className="avatar-image img-inline"/>
                    </div>
                    <div className="user-info">
                            <span className="name">{ this.props.favcontacts[i].name }</span>
                            <span className="status small">{ this.props.favcontacts[i].status }</span>
                            <span data-status={this.props.favcontacts[i].status} className = "profile-status float-right"></span>
                    </div>                        
                </ListGroupItem>
            );
        }
        return (          
                                <div>
                                <ListGroup>
                                       { favcontactsList }
                                </ListGroup>
                                </div>
        );
    }
}

Favcontact.propTypes = {
    favcontacts: PropTypes.arrayOf(PropTypes.object)
}

export default Favcontact;
