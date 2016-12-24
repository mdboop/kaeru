/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _cardBuilder = __webpack_require__(2);
	
	var cardBuilder = function cardBuilder(_ref) {
	  var sendResponse = _ref.sendResponse;
	
	  var exactBlock = (0, _cardBuilder.findExactBlock)().cloneNode(true);
	  (0, _cardBuilder.removeNodes)((0, _cardBuilder.getSeeAlsoTags)(exactBlock));
	  exactBlock.querySelector('h4').remove();
	  exactBlock.querySelectorAll('a').forEach(function (node) {
	    return node.remove();
	  });
	  var frontNode = (0, _cardBuilder.getFrontText)(exactBlock);
	  var cardFront = frontNode.textContent.trim();
	  var cardBack = exactBlock.innerHTML.replace(/\t/g, ' ').replace(/"/g, '""').replace(/>\s+</g, '><').replace(/>\s+(.+)\s+</g, '>$1<').trim();
	  var card = cardFront + ' "' + cardBack + '"';
	
	  sendResponse({ payload: card });
	};
	
	var downloadCard = function downloadCard(_ref2) {
	  var sendResponse = _ref2.sendResponse,
	      request = _ref2.request;
	
	  var card = request.payload;
	  var blob = new Blob([card], { type: 'text/plain' });
	  var url = window.URL.createObjectURL(blob);
	  var downloadLink = document.createElement('a');
	  downloadLink.href = url;
	  downloadLink.download = genId() + '.txt';
	  downloadLink.click();
	  sendResponse({ payload: true });
	};
	
	var genId = function genId() {
	  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
	}; // eslint-disable-line
	
	var requestMap = {
	  REQUEST_CARD: cardBuilder,
	  DOWNLOAD_CARD: downloadCard
	};
	
	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	  if (Object.hasOwnProperty.call(requestMap, request.type)) {
	    requestMap[request.type]({ request: request, sendResponse: sendResponse });
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var cloneNode = exports.cloneNode = function cloneNode(node) {
	  return node.cloneNode(true);
	};
	
	var findExactBlock = exports.findExactBlock = function findExactBlock() {
	  return document.querySelector('.exact_block');
	};
	
	var findResultTitle = exports.findResultTitle = function findResultTitle(node) {
	  return node.querySelector('.text');
	};
	
	var getPartOfSpeech = exports.getPartOfSpeech = function getPartOfSpeech(node) {
	  return node.querySelector('.meaning-tags');
	};
	
	var getSeeAlsoTags = exports.getSeeAlsoTags = function getSeeAlsoTags(node) {
	  return node.querySelectorAll('.tags-see_also');
	};
	
	var getFrontText = exports.getFrontText = function getFrontText(node) {
	  return node.querySelector('.concept_light-representation').querySelector('.text');
	};
	
	var removeNodes = exports.removeNodes = function removeNodes(nodes) {
	  return nodes.forEach(function (node) {
	    return node.remove();
	  });
	};
	
	var Node = exports.Node = function Node(node) {
	  return {
	    map: function map(f) {
	      return Node(f(node));
	    },
	    fold: function fold(f) {
	      return f(node);
	    }
	  };
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWJjMmY1NjM3MGUxNDkwNDBiNGI/NTUwZSIsIndlYnBhY2s6Ly8vLi9pbmplY3Rvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmplY3Rvci9pbml0LmpzIiwid2VicGFjazovLy8uL2luamVjdG9yL2NhcmRCdWlsZGVyLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjYXJkQnVpbGRlciIsInNlbmRSZXNwb25zZSIsImV4YWN0QmxvY2siLCJjbG9uZU5vZGUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJub2RlIiwiZnJvbnROb2RlIiwiY2FyZEZyb250IiwidGV4dENvbnRlbnQiLCJ0cmltIiwiY2FyZEJhY2siLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwiY2FyZCIsInBheWxvYWQiLCJkb3dubG9hZENhcmQiLCJyZXF1ZXN0IiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwidXJsIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWRMaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiZ2VuSWQiLCJjbGljayIsIk1hdGgiLCJyYW5kb20iLCJwb3ciLCJ0b1N0cmluZyIsInNsaWNlIiwicmVxdWVzdE1hcCIsIlJFUVVFU1RfQ0FSRCIsIkRPV05MT0FEX0NBUkQiLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJzZW5kZXIiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJmaW5kRXhhY3RCbG9jayIsImZpbmRSZXN1bHRUaXRsZSIsImdldFBhcnRPZlNwZWVjaCIsImdldFNlZUFsc29UYWdzIiwiZ2V0RnJvbnRUZXh0IiwicmVtb3ZlTm9kZXMiLCJub2RlcyIsIk5vZGUiLCJtYXAiLCJmIiwiZm9sZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FB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QVksQ0FBQ0ssSUFBRDtBQUFBLFVBQVVBLEtBQUtMLFNBQUwsQ0FBZSxJQUFmLENBQVY7QUFBQSxFQUFsQjs7QUFFQSxLQUFNK0MsMENBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFVBQzVCdEIsU0FBU3hCLGFBQVQsQ0FBdUIsY0FBdkIsQ0FENEI7QUFBQSxFQUF2Qjs7QUFHQSxLQUFNK0MsNENBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFVBQVEzQyxLQUFLSixhQUFMLENBQW1CLE9BQW5CLENBQVI7QUFBQSxFQUF4Qjs7QUFFQSxLQUFNZ0QsNENBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFVBQVE1QyxLQUFLSixhQUFMLENBQW1CLGVBQW5CLENBQVI7QUFBQSxFQUF4Qjs7QUFFQSxLQUFNaUQsMENBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFVBQVE3QyxLQUFLRixnQkFBTCxDQUFzQixnQkFBdEIsQ0FBUjtBQUFBLEVBQXZCOztBQUVBLEtBQU1nRCxzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsVUFBUTlDLEtBQUtKLGFBQUwsQ0FBbUIsK0JBQW5CLEVBQW9EQSxhQUFwRCxDQUFrRSxPQUFsRSxDQUFSO0FBQUEsRUFBckI7O0FBRUEsS0FBTW1ELG9DQUFjLFNBQWRBLFdBQWM7QUFBQSxVQUFTQyxNQUFNakQsT0FBTixDQUFjO0FBQUEsWUFBUUMsS0FBS0gsTUFBTCxFQUFSO0FBQUEsSUFBZCxDQUFUO0FBQUEsRUFBcEI7O0FBRUEsS0FBTW9ELHNCQUFPLFNBQVBBLElBQU8sQ0FBQ2pELElBQUQ7QUFBQSxVQUFXO0FBQzdCa0QsVUFBSyxhQUFDQyxDQUFEO0FBQUEsY0FBT0YsS0FBS0UsRUFBRW5ELElBQUYsQ0FBTCxDQUFQO0FBQUEsTUFEd0I7QUFFN0JvRCxXQUFNLGNBQUNELENBQUQ7QUFBQSxjQUFPQSxFQUFFbkQsSUFBRixDQUFQO0FBQUE7QUFGdUIsSUFBWDtBQUFBLEVBQWIsQyIsImZpbGUiOiJpbmplY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDViYzJmNTYzNzBlMTQ5MDQwYjRiIiwicmVxdWlyZSgnLi9pbml0LmpzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmplY3Rvci9pbmRleC5qcyIsImltcG9ydCB7XG4gIGZpbmRFeGFjdEJsb2NrLFxuICAvLyBjbG9uZU5vZGUsXG4gIGdldFNlZUFsc29UYWdzLFxuICByZW1vdmVOb2RlcyxcbiAgZ2V0RnJvbnRUZXh0LFxufSBmcm9tICcuL2NhcmRCdWlsZGVyJztcblxuY29uc3QgY2FyZEJ1aWxkZXIgPSAoeyBzZW5kUmVzcG9uc2UgfSkgPT4ge1xuICBjb25zdCBleGFjdEJsb2NrID0gZmluZEV4YWN0QmxvY2soKS5jbG9uZU5vZGUodHJ1ZSk7XG4gIHJlbW92ZU5vZGVzKGdldFNlZUFsc29UYWdzKGV4YWN0QmxvY2spKTtcbiAgZXhhY3RCbG9jay5xdWVyeVNlbGVjdG9yKCdoNCcpLnJlbW92ZSgpO1xuICBleGFjdEJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKS5mb3JFYWNoKG5vZGUgPT4gbm9kZS5yZW1vdmUoKSk7XG4gIGNvbnN0IGZyb250Tm9kZSA9IGdldEZyb250VGV4dChleGFjdEJsb2NrKTtcbiAgY29uc3QgY2FyZEZyb250ID0gZnJvbnROb2RlLnRleHRDb250ZW50LnRyaW0oKTtcbiAgY29uc3QgY2FyZEJhY2sgPSBleGFjdEJsb2NrLmlubmVySFRNTFxuICAgIC5yZXBsYWNlKC9cXHQvZywgJyAnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnXCJcIicpXG4gICAgLnJlcGxhY2UoLz5cXHMrPC9nLCAnPjwnKVxuICAgIC5yZXBsYWNlKC8+XFxzKyguKylcXHMrPC9nLCAnPiQxPCcpXG4gICAgLnRyaW0oKTtcbiAgY29uc3QgY2FyZCA9IGAke2NhcmRGcm9udH0gXCIke2NhcmRCYWNrfVwiYDtcblxuICBzZW5kUmVzcG9uc2UoeyBwYXlsb2FkOiBjYXJkIH0pO1xufTtcblxuY29uc3QgZG93bmxvYWRDYXJkID0gKHsgc2VuZFJlc3BvbnNlLCByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgY2FyZCA9IHJlcXVlc3QucGF5bG9hZDtcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjYXJkXSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSk7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICBjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGRvd25sb2FkTGluay5ocmVmID0gdXJsO1xuICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBgJHtnZW5JZCgpfS50eHRgO1xuICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgc2VuZFJlc3BvbnNlKHsgcGF5bG9hZDogdHJ1ZSB9KTtcbn07XG5cbmNvbnN0IGdlbklkID0gKCkgPT4gKCcwMDAwJyArIChNYXRoLnJhbmRvbSgpICogTWF0aC5wb3coMzYsIDQpIDw8IDApLnRvU3RyaW5nKDM2KSkuc2xpY2UoLTQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmNvbnN0IHJlcXVlc3RNYXAgPSB7XG4gIFJFUVVFU1RfQ0FSRDogY2FyZEJ1aWxkZXIsXG4gIERPV05MT0FEX0NBUkQ6IGRvd25sb2FkQ2FyZCxcbn07XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVlc3RNYXAsIHJlcXVlc3QudHlwZSkpIHtcbiAgICByZXF1ZXN0TWFwW3JlcXVlc3QudHlwZV0oeyByZXF1ZXN0LCBzZW5kUmVzcG9uc2UgfSk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5qZWN0b3IvaW5pdC5qcyIsIlxuZXhwb3J0IGNvbnN0IGNsb25lTm9kZSA9IChub2RlKSA9PiBub2RlLmNsb25lTm9kZSh0cnVlKTtcblxuZXhwb3J0IGNvbnN0IGZpbmRFeGFjdEJsb2NrID0gKCkgPT5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4YWN0X2Jsb2NrJyk7XG5cbmV4cG9ydCBjb25zdCBmaW5kUmVzdWx0VGl0bGUgPSBub2RlID0+IG5vZGUucXVlcnlTZWxlY3RvcignLnRleHQnKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhcnRPZlNwZWVjaCA9IG5vZGUgPT4gbm9kZS5xdWVyeVNlbGVjdG9yKCcubWVhbmluZy10YWdzJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWVBbHNvVGFncyA9IG5vZGUgPT4gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcudGFncy1zZWVfYWxzbycpO1xuXG5leHBvcnQgY29uc3QgZ2V0RnJvbnRUZXh0ID0gbm9kZSA9PiBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5jb25jZXB0X2xpZ2h0LXJlcHJlc2VudGF0aW9uJykucXVlcnlTZWxlY3RvcignLnRleHQnKTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID0gbm9kZXMgPT4gbm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUucmVtb3ZlKCkpO1xuXG5leHBvcnQgY29uc3QgTm9kZSA9IChub2RlKSA9PiAoe1xuICBtYXA6IChmKSA9PiBOb2RlKGYobm9kZSkpLFxuICBmb2xkOiAoZikgPT4gZihub2RlKSxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5qZWN0b3IvY2FyZEJ1aWxkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9