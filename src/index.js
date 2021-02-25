import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';
import './common/css/index.scss';
import '../src/common/js/rem'
import FastClick from 'fastclick';

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

FastClick.prototype.focus = function (targetElement) {
  var length
  if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length
    targetElement.focus()
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  }
}

ReactDOM.render(
	<BrowserRouter>
    <App />
	</BrowserRouter>,
  document.getElementById('root')
);
