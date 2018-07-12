
import React from 'react';

class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: false,
        };
    };

    render() {
        return (
            <div>
                <small>Display all prices</small><br/>
                <label className="switch">
                    <input type="checkbox" onChange={this.props.handleChange} />
                    <span className="slider round"></span>
                </label>
            </div>
        );
    };

};

export default Toggle;