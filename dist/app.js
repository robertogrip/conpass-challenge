'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Hotspots = require('./Hotspots');

var _Hotspots2 = _interopRequireDefault(_Hotspots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Navbar, null),
        _react2.default.createElement(_Hotspots2.default, null)
    );
};

//import components


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

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('content'));