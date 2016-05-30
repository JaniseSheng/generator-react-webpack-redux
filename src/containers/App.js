require('normalize.css/normalize.css');
require('../styles.less');
import styles from './styles.css'


import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/main/';
import {numberAddOne, getDate} from './action';




/* Populated by react-webpack-redux:reducer */
class App extends Component {

  constructor(){
    super();
    this.handerAddNumber = this.handerAddNumber.bind(this);
    this.handerGetDate = this.handerGetDate.bind(this);
  }

  handerAddNumber(){
    const {actions} = this.props;
    actions.numberAddOne('2');
  }

  handerGetDate(){
    const {actions} = this.props;
    $.get("http://172.16.16.128:8080/KQGL/holidayCtrl/dataGrid.do?page=1&rows=100", function(result){
      debugger;
      console.log(result);

    });
    
    actions.getDate(1,100);
  }

  render() {
    const {actions,appReaducer} = this.props;
    return <div>
      <button style={{width:'120px', height:'60px'}} onClick={this.handerAddNumber}>
      </button>

      <button style={{width:'120px', height:'60px'}} onClick={this.handerGetDate}>
      </button>

      <span>
        {appReaducer.number}
      </span>
      <Main actions={actions}/>
    </div>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {appReaducer: state.appReaducer};
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {numberAddOne, getDate};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
