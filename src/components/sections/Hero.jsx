import React from "react";

import slider from "../../img/hero.jpg";

export class Hero extends React.Component {
    render() {
        return (
            <div className="hero container">
                <div className="slider">
                    <img src={slider} alt="slider" />
                </div>
            </div>
        );
    }
}
