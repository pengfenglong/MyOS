var React = require('react');
var ReactDOM = require('react-dom'); 
//var Navigation = require('./apps/navigation/js/components/Navigation.react');

//var Test = require('./apps/test/js/components/Test.react');
var MgtNavigation = require('./apps/management/js/components/Navigation.react');


ReactDOM.render(<MgtNavigation />, document.getElementById('app'));