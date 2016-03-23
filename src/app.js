var React = require('react');
var ReactDOM = require('react-dom'); 


var Avatar = require('material-ui/lib/avatar');

var Main = React.createClass({
	render:function(){
		return(
		<div><Avatar /></div>
		) 
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));