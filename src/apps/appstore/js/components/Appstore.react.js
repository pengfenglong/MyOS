var React = require('react');
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import ActionAssignment from 'material-ui/lib/svg-icons/action/assignment';
import Toggle from 'material-ui/lib/toggle';
import Colors from 'material-ui/lib/styles/colors';
import EditorInsertChart from 'material-ui/lib/svg-icons/editor/insert-chart';
require('../../css/appstore.css');

var AppstoreAction = require('../actions/AppstoreAction');
var AppstoreStore = require('../stores/AppstoreStore');

function getAppstoreState() {
  return {
    allApps: AppstoreStore.getAll()
  };
}
 
var Appstore = React.createClass({
	getInitialState: function() {
		return getAppstoreState();
    },

    componentDidMount: function() {
		AppstoreStore.addChangeListener(this._onChange);
		AppstoreAction.list();
    },

    componentWillUnmount: function() {
		AppstoreStore.removeChangeListener(this._onChange);
    },
	render:function(){
		var apps = this.state.allApps;
		
		var listItems = [];
		apps.forEach(function(app,i){
			listItems.push(<ListItem key={'item'+i}
					leftAvatar={<Avatar icon={<EditorInsertChart />}/>}
					rightToggle={<Toggle />}
					primaryText={app.name}
					secondaryText={app.code}
				  /> );
				  
			listItems.push(<Divider key={'divider'+i}/>);
		});
		
		return(
			<div>
				<List>
				  {listItems}
				</List>
			</div>
		)
	},
	_onChange: function() {
		this.setState(getInitialState());
    }
});


module.exports = Appstore;