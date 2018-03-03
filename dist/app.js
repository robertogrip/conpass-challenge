'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Navbar, null),
        _react2.default.createElement(Hotspots, null)
    );
};

var Navbar = function Navbar() {
    return _react2.default.createElement(
        'section',
        { className: 'container navbar' },
        _react2.default.createElement(
            'div',
            { className: 'navbar-content' },
            _react2.default.createElement(
                'div',
                { className: 'navbar-logo' },
                _react2.default.createElement('img', { src: 'https://dgivdslhqe3qo.cloudfront.net/careers/photos/23661/thumb_photo_1484531612.png', alt: '' })
            ),
            _react2.default.createElement(
                'ul',
                { className: 'navbar-link' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        'Link fake 1'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        'Link fake 2'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        'Link fake 3'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        'Link fake 4'
                    )
                )
            )
        )
    );
};

var createHotspot = function createHotspot(event) {
    if (document.body.className.indexOf('create-hotspot') < 0) {
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
};

var createList = function createList(event) {
    createHotspot();
    window.alert("teste");
};

var hoverElements = function hoverElements(event) {
    var activeElements = document.querySelectorAll('.create-hotspot');
    activeElements.forEach(function (element) {
        element.className = element.className.replace(' create-hotspot', '');
    });
    event.target.className += ' create-hotspot';
};

var Hotspots = function Hotspots() {
    return _react2.default.createElement(
        'section',
        { className: 'container hotspot' },
        _react2.default.createElement(
            'button',
            { className: 'btn btn-hotspot', onClick: createHotspot },
            'Create Hotspot'
        ),
        _react2.default.createElement(ListHotspots, null)
    );
};

var ListHotspots = function ListHotspots(props) {
    console.log(props);
    var teste = ["Teste", "Teste1", "Teste2"];
    var list = teste.map(function (item) {
        return _react2.default.createElement(
            'li',
            { className: 'App-todo-list' },
            _react2.default.createElement(
                'p',
                null,
                item
            ),
            _react2.default.createElement(
                'a',
                { href: '#' },
                'Delete'
            )
        );
    });
    return _react2.default.createElement(
        'div',
        { className: 'hotspot-list' },
        _react2.default.createElement(
            'div',
            { className: 'hotspot-list-label' },
            _react2.default.createElement(
                'p',
                null,
                'List of hotspots'
            )
        ),
        _react2.default.createElement(
            'ul',
            null,
            list
        )
    );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('content'));