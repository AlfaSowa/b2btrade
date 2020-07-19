import React from "react";

export class Tab extends React.Component {
    handleClick = () => {
        console.log(1);
    };

    render() {
        const { label } = this.props;
        return (
            <li className="tab" onClick={this.handleClick}>
                {label}
            </li>
        );
    }
}
