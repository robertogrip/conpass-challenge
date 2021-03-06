import React, { Component } from 'react';

class ListHotspots extends Component {
    componentDidUpdate() {
        document.querySelectorAll('.user-hotspot').forEach((item) => {
            item.remove();
        });

        this.props.hotspots.forEach((item, index) => {
            let elHotspot = document.createElement('div');
            elHotspot.className = 'user-hotspot';
            elHotspot.style.top = `${item.positionY}px`;
            elHotspot.style.left = `${item.positionX}px`;

            let elTooltip = document.createElement('div');
            elTooltip.className = 'tooltip';
            elTooltip.textContent = item.name;
            elHotspot.appendChild(elTooltip);

            document.body.appendChild(elHotspot);
        });
    }

    render() {
        const hotspotItems = this.props.hotspots.map((item, index) => {
            return (
                <li className="App-todo-list" key={index} data-id={index}>
                    <p>{item.name}</p>
                    <a href="/" onClick={this.props.deleteHotspot}>Delete</a>
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