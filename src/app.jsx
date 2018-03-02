import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return (
		<div>
			<Navbar />
			<Hotspots />
		</div>
	)
}

const Navbar = () => {
    return (
      <section className="container navbar">
        <div className="navbar-content">
        	<div className="navbar-logo">
        		<img src="https://dgivdslhqe3qo.cloudfront.net/careers/photos/23661/thumb_photo_1484531612.png" alt="" />
        	</div>
        	<ul className="navbar-link">
        		<li><a href="#">Link fake 1</a></li>
        		<li><a href="#">Link fake 2</a></li>
        		<li><a href="#">Link fake 3</a></li>
        		<li><a href="#">Link fake 4</a></li>
        	</ul>
        </div>
      </section>
    );
};

const Hotspots = () => {
	return (
		<section className="container hotspot">
			<button className="btn btn-hotspot">
				Create Hotspot
			</button>
			<ListHotspots />
		</section>
	)
}

const ListHotspots = (props) => {
	return (
		<div className="hotspot-list">
			<div className="hotspot-list-label">
				<p>List of hotspots</p>
			</div>
			<ul>
				<li>
					<p>List</p>
					<a href="#">Delete</a>
				</li>
				<li>
					<p>List</p>
					<a href="#">Delete</a>
				</li>
				<li>
					<p>List</p>
					<a href="#">Delete</a>
				</li>
				<li>
					<p>List</p>
					<a href="#">Delete</a>
				</li>
			</ul>
		</div>
	)
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
