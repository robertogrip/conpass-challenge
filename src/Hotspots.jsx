import React, { Component } from 'react';
import ListHotspots from './ListHotspots';

class Hotspots extends Component {
    constructor( props ) {
    	super( props );
        this.state = {
            hotspots: []
        };

	    this.createModeHotspot = ( event ) => {
	        const changeBtn = ( cancel ) => {
		        if( cancel ) {
		            document.querySelector('.btn.btn-hotspot').textContent = "Create Hotspot";
		        	document.body.className = document.body.className.replace(' create-mode', '');
		        } else {
		            document.querySelector('.btn.btn-hotspot').textContent = "Cancel";
		        	document.body.className += ' create-mode';
		        }
		    };

		    const isCreateMode = () => {
		        return document.body.className.indexOf('create-mode') < 0;
		    }

		    if( isCreateMode() ){
		        document.body.onclick = this.addHotspotList;
		        document.body.onmousemove = this.hoverElements;
		        changeBtn();
		    } else {
		        document.body.onclick = null;
		        document.body.onmousemove = null;
		        changeBtn( true );
		    }
	    };

		const removeHoverElements = () => {
			const activeElements = document.querySelectorAll('.create-hotspot');
		    activeElements.forEach(( element ) => {
		        element.className = element.className.replace(' create-hotspot', '');
		    });
		}

	    this.addHotspotList = ( event ) => {
	    	if( event.target !== document.querySelector('.btn.btn-hotspot') ){
	    		removeHoverElements();
			    let hotspots = this.state.hotspots;
			    hotspots.push({
			    	name: 'Hotspot List #' + ( hotspots.length + 1 ),
			    	positionX: event.x,
			    	positionY: event.y
			    });
			    this.setState({ hotspots: hotspots });
			    this.setHotspotsLocal( hotspots );
		    	this.createModeHotspot( event );
			}
		};

		this.hoverElements = ( event ) => {
		    removeHoverElements();
		    event.target.className += ' create-hotspot';
		};

		this.getHotspotsLocal = () => {
    		return window.localStorage.getItem( 'hotspots' ) && JSON.parse( window.localStorage.getItem( 'hotspots' ) );
    	}

		this.setHotspotsLocal = ( hotspots )=> {
			if( hotspots.length > 0 ) {
				window.localStorage.setItem( 'hotspots', JSON.stringify( hotspots ) );
			}
		}

		this.deleteHotspot = ( event ) => {
			const hotspotIndex = event.target.parentNode.getAttribute('data-id') || 0;
			let hotspots = this.state.hotspots;
			hotspots.splice( hotspotIndex, 1 );
			this.setState({ hotspots: hotspots });
			this.setHotspotsLocal( hotspots );
		}
    }

    componentDidMount() {
    	if( this.getHotspotsLocal() ) {
    		this.setState({ hotspots: this.getHotspotsLocal() });
    	}
    }

    render() {
	    return (
	        <section className="container hotspot">
	            <button className="btn btn-hotspot" onClick={this.createModeHotspot}>
	                Create Hotspot
	            </button>
	            <ListHotspots hotspots={this.state.hotspots} deleteHotspot={this.deleteHotspot} />
	        </section>
	    )
	}
}

export default Hotspots;