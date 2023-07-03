import React from "react";

export default class TrafficLight extends React.Component{

    constructor(){
        super();
        this.state = {
            clickedLight: null
        };
    }

    render (){
        console.log(this.state);
        const redExtraClass = '';
        const yellowExtraClass = '';
        const greenExtraClass = '' ;

        return <div>

            <div id="trafficTop"></div>
            <div id="container">
                <div className ={"red light"+''} onClick={() => this.setState({ clickedLight: "red"})}></div>
                <div className ={"yellow light"+''} onClick={() => this.setState({ clickedLight: "yellowd"})}></div>
                <div className ={"green light"+''} onClick={() => this.setState({ clickedLight: "green"})}></div>
            </div>
            </div>;
    }
}            
                

