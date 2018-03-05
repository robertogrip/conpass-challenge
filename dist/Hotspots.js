'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListHotspots = require('./ListHotspots');

var _ListHotspots2 = _interopRequireDefault(_ListHotspots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hotspots = function (_Component) {
	_inherits(Hotspots, _Component);

	function Hotspots(props) {
		_classCallCheck(this, Hotspots);

		var _this = _possibleConstructorReturn(this, (Hotspots.__proto__ || Object.getPrototypeOf(Hotspots)).call(this, props));

		_this.state = {
			hotspots: []
		};

		_this.createModeHotspot = function (event) {
			var changeBtn = function changeBtn(cancel) {
				if (cancel) {
					document.querySelector('.btn.btn-hotspot').textContent = "Create Hotspot";
					document.body.className = document.body.className.replace(' create-mode', '');
				} else {
					document.querySelector('.btn.btn-hotspot').textContent = "Cancel";
					document.body.className += ' create-mode';
				}
			};

			var isCreateMode = function isCreateMode() {
				return document.body.className.indexOf('create-mode') < 0;
			};

			if (isCreateMode()) {
				document.body.onclick = _this.addHotspotList;
				document.body.onmousemove = _this.hoverElements;
				changeBtn();
			} else {
				document.body.onclick = null;
				document.body.onmousemove = null;
				changeBtn(true);
			}
		};

		var removeHoverElements = function removeHoverElements() {
			var activeElements = document.querySelectorAll('.create-hotspot');
			activeElements.forEach(function (element) {
				element.className = element.className.replace(' create-hotspot', '');
			});
		};

		_this.addHotspotList = function (event) {
			if (event.target !== document.querySelector('.btn.btn-hotspot')) {
				removeHoverElements();
				var hotspots = _this.state.hotspots;
				hotspots.push({
					name: 'Hotspot List #' + (hotspots.length + 1),
					positionX: event.x,
					positionY: event.y
				});
				_this.setState({ hotspots: hotspots });
				_this.setHotspotsLocal(hotspots);
				_this.createModeHotspot(event);
			}
		};

		_this.hoverElements = function (event) {
			removeHoverElements();
			event.target.className += ' create-hotspot';
		};

		_this.getHotspotsLocal = function () {
			return window.localStorage.getItem('hotspots') && JSON.parse(window.localStorage.getItem('hotspots'));
		};

		_this.setHotspotsLocal = function (hotspots) {
			if (hotspots.length > 0) {
				window.localStorage.setItem('hotspots', JSON.stringify(hotspots));
			}
		};

		_this.deleteHotspot = function (event) {
			var hotspotIndex = event.target.parentNode.getAttribute('data-id') || 0;
			var hotspots = _this.state.hotspots;
			hotspots.splice(hotspotIndex, 1);
			_this.setState({ hotspots: hotspots });
			_this.setHotspotsLocal(hotspots);
		};
		return _this;
	}

	_createClass(Hotspots, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.getHotspotsLocal()) {
				this.setState({ hotspots: this.getHotspotsLocal() });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ className: 'container hotspot' },
				_react2.default.createElement(
					'button',
					{ className: 'btn btn-hotspot', onClick: this.createModeHotspot },
					'Create Hotspot'
				),
				_react2.default.createElement(_ListHotspots2.default, { hotspots: this.state.hotspots, deleteHotspot: this.deleteHotspot })
			);
		}
	}]);

	return Hotspots;
}(_react.Component);

exports.default = Hotspots;