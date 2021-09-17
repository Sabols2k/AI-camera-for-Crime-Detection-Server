import React from 'react';

class Navmenugroup extends React.Component {
    render() {

        return (
            <li className="navgroup">
                    <div>{this.props.name}</div>
            </li>
        )
  }
}
export default Navmenugroup;