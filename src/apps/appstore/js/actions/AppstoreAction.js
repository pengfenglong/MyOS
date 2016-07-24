var AppstoreDispatcher = require('../dispatcher/AppstoreDispatcher');
var AppstoreConstants = require('../constants/AppstoreConstants');

var AppstoreActions = {
  list: function() {
    AppstoreDispatcher.dispatch({
      actionType: AppstoreConstants.APPSTORE_LIST
    });
  }

};

module.exports = AppstoreActions;