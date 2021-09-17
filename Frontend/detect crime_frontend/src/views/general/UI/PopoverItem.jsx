import React from 'react';
import {
Button, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';

class PopoverItem extends React.Component {
    render() {

        return (
            <div key={key}>
	            <Button id="Popover1" onClick={this.toggle}>
		          Launch Popover
		        </Button>
		        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
		          <PopoverHeader>Popover Title</PopoverHeader>
		          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
		        </Popover>
	        </div>
        )
  }
}
export default PopoverItem;