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

const createHotspot = (event) => {
    if( document.body.className.indexOf('create-hotspot') < 0 ){
        document.body.className += ' create-hotspot';
        document.querySelector('.btn.btn-hotspot').textContent = "Cancel";
        document.body.onclick = createList;
        document.body.onmousemove = hoverElements;
    } else {
        document.body.className = document.body.className.replace(' create-hotspot', '');
        document.querySelector('.btn.btn-hotspot').textContent = "Create Hotspot";
        document.body.onclick = null;
        document.body.onmousemove = null;
    }
}

const createList = (event) => {
    createHotspot();
    window.alert("teste");
}

const hoverElements = (event) => {
    const activeElements = document.querySelectorAll('.create-hotspot');
    activeElements.forEach((element) => {
        element.className = element.className.replace(' create-hotspot', '');
    });
    event.target.className += ' create-hotspot';
}

const Hotspots = () => {
    return (
        <section className="container hotspot">
            <button className="btn btn-hotspot" onClick={createHotspot}>
                Create Hotspot
            </button>
            <ListHotspots />
        </section>
    )
}

const ListHotspots = (props) => {
    console.log(props);
    const teste = ["Teste", "Teste1", "Teste2"];
    const list  = teste.map((item) => <li className="App-todo-list" ><p>{item}</p><a href="#">Delete</a></li>)
    return (
        <div className="hotspot-list">
            <div className="hotspot-list-label">
                <p>List of hotspots</p>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
