'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListHotspots = function (_Component) {
    _inherits(ListHotspots, _Component);

    function ListHotspots(props) {
        _classCallCheck(this, ListHotspots);

        var _this = _possibleConstructorReturn(this, (ListHotspots.__proto__ || Object.getPrototypeOf(ListHotspots)).call(this, props));

        _this.state = {
            hotspots: props.hotspots
        };
        return _this;
    }

    _createClass(ListHotspots, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.state);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.props.hotspots.forEach(function (item, index) {
                var elHotspot = document.createElement('div');
                elHotspot.className = 'user-hotspot';
                elHotspot.style.top = item.positionY + 'px';
                elHotspot.style.left = item.positionX + 'px';
                document.body.appendChild(elHotspot);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var hotspotItems = this.state.hotspots.map(function (item, index) {
                return _react2.default.createElement(
                    'li',
                    { className: 'App-todo-list', key: index },
                    _react2.default.createElement(
                        'p',
                        null,
                        item.name
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
                    hotspotItems
                )
            );
        }
    }]);

    return ListHotspots;
}(_react.Component);

;

exports.default = ListHotspots;