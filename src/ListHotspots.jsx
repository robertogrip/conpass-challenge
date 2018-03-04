import React, { Component } from 'react';

class ListHotspots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotspots: props.hotspots
        };
    }

    componentDidMount() {
        console.log(this.state);
    }

    componentDidUpdate() {
        this.props.hotspots.forEach((item, index) => {
            let elHotspot = document.createElement('div');
            elHotspot.className = 'user-hotspot';
            elHotspot.style.top = `${item.positionY}px`;
            elHotspot.style.left = `${item.positionX}px`;
            document.body.appendChild(elHotspot);
        });
    }

    render() {
        const hotspotItems = this.state.hotspots.map((item, index) => {
            return (
                <li className="App-todo-list" key={index}>
                    <p>{item.name}</p>
                    <a href="#">Delete</a>
                </li>
            )
        });

        return (
            <div className="hotspot-list">
                <div className="hotspot-list-label">
                    <p>List of hotspots</p>
                </div>
                <ul>
                    { hotspotItems }
                </ul>
            </div>
        )
    }
};

export default ListHotspots;