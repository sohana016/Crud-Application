import React, { Component } from 'react';


class Data extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {/* <img src={this.props.brandImg} style={{ height: "200px" ,width:"100%"}} /> */}
                <h3> {this.props.brandTitle}</h3>
            </div>
        );
    }
}



export default Data;