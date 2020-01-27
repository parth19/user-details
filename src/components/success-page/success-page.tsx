import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './success-page.css';
import { setCurrentPath, setUserDetails } from '../../actions';
import StyledButton from '../../commons/styled-button/styled-button';
import { colors, path } from '../../constants';

function mapDispatchToProps(dispatch) {
  return {
    setCurrentPath: pathValue => dispatch(setCurrentPath(pathValue)),
    setUserDetails: userDetails => dispatch(setUserDetails(userDetails))
  };
}


class Success extends React.Component<{ setCurrentPath: any, setUserDetails: any }, {}> {
  constructor(props){
    super(props);
    this.props.setCurrentPath(path.successPage);
    this.props.setUserDetails({})
  }

  render(){
    return (
      <div className="successMessageSection">
          <span className="successText">Success!</span>
        <Link to={path.registeration} ><StyledButton backgroundColor={colors.previousButton}>Home</StyledButton></Link>
      </div>
    );
  }

}

export default connect(
  null,
  mapDispatchToProps
)(Success);
