import React from 'react';
import ReactDOM from 'react-dom';

//import components
import Hotspots from './Hotspots';

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

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
