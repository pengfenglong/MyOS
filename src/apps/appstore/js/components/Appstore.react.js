var React = require('react');
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import ActionAssignment from 'material-ui/lib/svg-icons/action/assignment';
import Colors from 'material-ui/lib/styles/colors';
import EditorInsertChart from 'material-ui/lib/svg-icons/editor/insert-chart';
require('../../css/appstore.css');
 
var Appstore = React.createClass({
	render:function(){
		return(
			<div>
				<List>
				  <ListItem
					leftAvatar={<Avatar icon={<ActionAssignment />}/>}
					rightIcon={<ActionInfo />}
					primaryText="Vacation itinerary"
					secondaryText="Jan 20, 2014"
				  />
				  <Divider/>
				  <ListItem
					leftAvatar={<Avatar icon={<EditorInsertChart />}/>}
					rightIcon={<ActionInfo />}
					primaryText="Kitchen remodel"
					secondaryText="Jan 10, 2014"
				  />
				  <Divider/>
				  <ListItem
					leftAvatar={<Avatar icon={<EditorInsertChart />}/>}
					rightIcon={<ActionInfo />}
					primaryText="Kitchen remodel"
					secondaryText="Jan 10, 2014"
				  />
				  <Divider/>
				  <ListItem
					leftAvatar={<Avatar icon={<EditorInsertChart />}/>}
					rightIcon={<ActionInfo />}
					primaryText="Kitchen remodel"
					secondaryText="Jan 10, 2014"
				  />
				  <Divider/>
				  <ListItem
					leftAvatar={<Avatar icon={<EditorInsertChart />}/>}
					rightIcon={<ActionInfo />}
					primaryText="Kitchen remodel"
					secondaryText="Jan 10, 2014"
				  />
				</List>
			</div>
		)
	}
});


module.exports = Appstore;