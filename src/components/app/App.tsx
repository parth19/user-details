import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Registeration from '../registeration';
import Summary from '../summary';
import SuccessPage from '../success-page';
import Steps from '../../commons/steps';
import { path } from '../../constants';

import './App.css';

const mapStateToProps = state => {
  return {
    currentPath: state.currentPath
  };
}

/**
 * @desc This is the main container page, having routes to show any component as a part of it. 
 * @param currentPath : to update the route and let child component know about new path
 */
class App extends React.Component<{ currentPath: string }, {}>  {

  render() {
    return (
      <Router>
        <div className="app">
            <Steps currentPath={this.props.currentPath} />
            <Switch>
              <Route exact path={path.registeration} component={Registeration} />
              <Route path={path.summary} component={Summary} />
              <Route path={path.successPage} component={SuccessPage} />
            </Switch>
        </div>
      </Router>
    );
  }
}


export default connect(
  mapStateToProps
)(App);
