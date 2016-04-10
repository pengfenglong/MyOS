var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;

var Appstore = require('../../../appstore/js/components/Appstore.react.js');

require('../../css/navigation.css');
 
 var Nav = React.createClass({
	render:function(){
		return(
			<div className="top_bar">
				{this.props.children}
				<nav>				
					<ul id="top_menu" className="top_menu">
						<li className="navigation_a">
							<Link to="/message" className="navigation_a">
								<img src="image/message.png"/>
								<label>消息</label>
							</Link>
						</li>
						<li className="navigation_a">
							<Link to="/appstore" className="navigation_a">
								<img src="image/message.png"/>
								<label>应用</label>
							</Link>
						</li>
						<li className="home">
							<Link to="/home" className="navigation_a"></Link>
						</li>
						<li className="navigation_a">
							<Link to="/fav" className="navigation_a">
								<img src="image/message.png"/>
								<label>发现</label>
							</Link>
						</li>
						<li className="navigation_a">
							<Link to="/my" className="navigation_a">
								<img src="image/message.png"/>
								<label>我的</label>
							</Link>
						</li>
					</ul>					
				</nav>
			</div>
		)
	}
});

 var Message = React.createClass({
	render:function(){
		return(
			<div>
				Message
			</div>
		)
	}
});

 var Home = React.createClass({
	render:function(){
		return(
			<div>
				Home
			</div>
		)
	}
});

 var Fav = React.createClass({
	render:function(){
		return(
			<div>
				Fav
			</div>
		)
	}
});

var My = React.createClass({
	render:function(){
		return(
			<div>
				My
			</div>
		)
	}
});

var Navigation = React.createClass({
	render:function(){
		return(
			<Router history={browserHistory}>
				<Route path="/" component={Nav}>
				  <IndexRoute component={Home}/>
				  <Route path="home" component={Home}/>
				  <Route path="message" component={Message}/>
				  <Route path="appstore" component={Appstore} />
				  <Route path="Fav" component={Fav} />
				  <Route path="my" component={My} />
				</Route>
			</Router>
		)
	}
});

module.exports = Navigation;