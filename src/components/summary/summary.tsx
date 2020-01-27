import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentPath } from '../../actions';
import { path } from '../../constants';

interface Istate {
  numberOfParts: any;
}

const mapStateToProps = state => {
  return {
    userDetails: state.userDetails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentPath: pathValue => dispatch(setCurrentPath(pathValue)),
  };
}

/**
 * @desc This component show the details entered by user in registeration page.
 * @param setCurrentPath : Calls this method defined in action to set current path
 * @param userDetails : Calls this method to fetch the userdetails.
 */
class Summary extends React.Component<{ setCurrentPath: any, userDetails: any }, Istate> {
  constructor(props) {
    super(props);
    this.state = {
      numberOfParts: ""
    }
    this.props.setCurrentPath(path.summary);
  }


  render() {
    return (
      <div style={{flex:1}} className="col-md-6 col-md-offset-3 summaryContainer mt-2">
      <h2>User Details</h2>
        <div className={'form-group'}>
          <label>First Name : </label>
          <label>{this.props.userDetails.firstName}</label>
        </div>
        <div className={'form-group'}>
          <label>Last Name : </label>
          <label>{this.props.userDetails.firstName}</label>
        </div>
        <div className={'form-group'}>
          <label>Email Address : </label>
          <label>{this.props.userDetails.emailAddress}</label>
        </div>
        <div className={'form-group'}>
          <label>Phone Number : </label>
          <label>{this.props.userDetails.phoneNumber}</label>
        </div>
        <div className={'form-group'}>
          <label>Gender : </label>
          <label>{this.props.userDetails.gender}</label>
        </div>
        <div className="form-group">
        <div className="form-group">
        <Link to={path.registeration} ><button className="btn btn-primary btn-lg mr-5">Edit Details</button></Link>
        <Link to={path.successPage}><button className="btn btn-primary btn-lg" >Submit details</button></Link>
        </div>
        </div>
    </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);