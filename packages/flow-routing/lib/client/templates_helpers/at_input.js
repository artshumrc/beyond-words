/* global
  AccountsTemplates: false,
  FlowRouter: false
*/
'use strict';

AccountsTemplates.atInputRendered.push(function(){
  var fieldId = this.props._id;
  var queryKey = this.props.options && this.props.options.queryKey || fieldId;
  var inputQueryVal = FlowRouter.getQueryParam(queryKey);
  if (inputQueryVal) {
    this.$("input#at-field-" + fieldId).val(inputQueryVal);
  }
});
