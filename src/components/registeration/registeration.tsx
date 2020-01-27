import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserDetails, setCurrentPath } from '../../actions';
import { path } from '../../constants';

function mapDispatchToProps(dispatch) {
  return {
    setUserDetails: userDetails => dispatch(setUserDetails(userDetails)),
    setCurrentPath: pathValue => dispatch(setCurrentPath(pathValue))
  };
}

const mapStateToProps = state => {
  return {
    userDetails: state.userDetails,
    successFlag: state.successFlag
  };
}

interface Istate {
  user: any;
  submitted: boolean;
  registering: boolean;
  validEmail: boolean;
  validPhoneNumber: boolean;
  validLastName: boolean;
  validFirstName: boolean;
  enableSubmitButton: boolean;
  emptyEmail: boolean;
  emptyPhoneNumber: boolean;
}

/**
 * @desc This component is the first page of application which allows user to enter the details to submit.
 * @param setCurrentPath : Calls this method defined in action to set current path
 */
class Registeration extends React.Component<{ setUserDetails: any, setCurrentPath: any, userDetails: any, successFlag: boolean }, Istate> {
  constructor(props) {
    super(props);
    let userDetails = this.props.userDetails;
    let succesFlag = this.props.successFlag;
    this.state = {
      user: {
        firstName: !succesFlag && userDetails && userDetails.firstName ? userDetails.firstName : "",
        lastName: !succesFlag && userDetails && userDetails.lastName ? userDetails.lastName : "",
        emailAddress: !succesFlag && userDetails && userDetails.emailAddress ? userDetails.emailAddress : "",
        phoneNumber: !succesFlag && userDetails && userDetails.phoneNumber ? userDetails.phoneNumber : "",
        gender: !succesFlag && userDetails && userDetails.gender ? userDetails.gender : "Male",
      },
      submitted: false,
      registering: false,
      validEmail: true,
      validPhoneNumber: true,
      validFirstName: true,
      validLastName: true,
      enableSubmitButton: false,
      emptyEmail: false,
      emptyPhoneNumber: false
    };
    this.props.setCurrentPath(path.registeration);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearFormDetails = this.clearFormDetails.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  /**
   * @desc This is an event callback for input boxes to validate it's value.
   * @param event the elemtnt which has invoked the event
   */
  handleBlur(event) {
    const { name, value } = event.target;
    const { validEmail, validFirstName, validLastName, validPhoneNumber, user} = this.state
    if (name === "firstName" && value === "") {
      this.setState({
        validFirstName: false
      })
    }

    if (name === "lastName" && value === "") {
      this.setState({
        validLastName: false
      })
    }

    if (name === "emailAddress" ) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      this.setState({
        validEmail: re.test(value),
        emptyEmail: value === ''
      })
    }
    if (name === "phoneNumber") {
      const re = /^[0-9\b]+$/;
      this.setState({
        validPhoneNumber: re.test(value),
        emptyPhoneNumber: value === ''
      })
    }

    if (!validFirstName || !validLastName || !validEmail || !validPhoneNumber || !user.firstName || !user.lastName || !user.emailAddress || !user.phoneNumber){
      this.setState({
        enableSubmitButton: false
      })
    }
  }

  /**
   * @desc This is an event callback for input boxes to validate it's value.
   * @param event the elemtnt which has invoked the event
   */
  handleChange(event) {
    const { name, value } = event.target;
    const { validEmail, validFirstName, validLastName, validPhoneNumber, user} = this.state
    const re = /^[0-9\b]+$/;
    if (name === "firstName" && value !== "") {
      this.setState({
        validFirstName: true
      })
    }

    if (name === "lastName" && value !== "") {
      this.setState({
        validLastName: true
      })
    }

    if (name === "emailAddress" && value !== "") {
      this.setState({
        validEmail: true,
        emptyEmail: false
      })
    }

    if (name === "phoneNumber" && value !== "") {
      this.setState({
        validPhoneNumber: true,
        emptyPhoneNumber: false
      })
    }
    
    if (name === "phoneNumber" && !re.test(((event.target) as any).value) && value !== "") {
      return;
    }

    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });

    if (validFirstName && validLastName && validEmail && validPhoneNumber && user.firstName && user.lastName && user.emailAddress && user.phoneNumber){
      this.setState({
        enableSubmitButton: true
      })
    }
  }

  /**
   * @desc This method submits the value to state mgmt. and stores it for other compnents to use.
   * @param event the elemtnt which has invoked the event
   */
  handleSubmit(event) {
    this.setState({ submitted: true });
    const { user, validFirstName, validLastName, validEmail, validPhoneNumber } = this.state;
    if (validFirstName && validLastName && validEmail && validPhoneNumber && user.firstName && user.lastName && user.emailAddress && user.phoneNumber) {
      this.props.setUserDetails(user);
    }
  }

  /**
   * @desc This method clears the input boxe values.
   */
  clearFormDetails() {
    this.setState({
      user: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        gender: "Male"
      }
    })
  }

  render() {
    const { user, submitted, validEmail, validPhoneNumber, validFirstName, validLastName, enableSubmitButton, emptyEmail, emptyPhoneNumber } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} onBlur={this.handleBlur} />
          {(submitted && !user.firstName) || !validFirstName &&
            <div className="help-block">First Name is required</div>
          }
        </div>
        <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} onBlur={this.handleBlur} />
          {(submitted && !user.lastName) || !validLastName &&
            <div className="help-block">Last Name is required</div>
          }
        </div>
        <div className={'form-group' + (submitted && !user.emailAddress ? ' has-error' : '')}>
          <label htmlFor="emailAddress">Email Address</label>
          <input type="text" className="form-control" name="emailAddress" value={user.emailAddress} onChange={this.handleChange} onBlur={this.handleBlur} />
          {submitted && !user.emailAddress &&
            <div className="help-block">Email Address is required</div>
          }
          {!validEmail &&
            <div className="help-block">Email Address is not valid</div>
          }
          {/* {emptyEmail &&
            <div className="help-block">Email Address is required</div>
          } */}
        </div>
        <div className={'form-group' + (submitted && !user.phoneNumber ? ' has-error' : '')}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" className="form-control" name="phoneNumber" value={user.phoneNumber} onChange={this.handleChange} onBlur={this.handleBlur} />
          {submitted && !user.phoneNumber &&
            <div className="help-block">Phone Number is required</div>
          }
          {!validPhoneNumber &&
            <div className="help-block">Please enter valid phone number.</div>
          }
          {/* {
            emptyPhoneNumber &&
            <div className="help-block">Phone Number is required</div>
          } */}
        </div>
        <div className={'form-group' + (submitted && !user.gender ? ' has-error' : '')}>
          <label htmlFor="phoneNumber">Gender</label><br />
          <div className="form-check-inline">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" value="Male" name="gender" defaultChecked onChange={this.handleChange} />Male
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" value="Female" name="gender" onChange={this.handleChange} />Female
            </label>
          </div>
          {submitted && !user.gender &&
            <div className="help-block"></div>
          }
        </div>
        <div className="form-group">
          <Link to={path.summary} ><button className="btn btn-primary btn-lg mr-5" onClick={this.handleSubmit} disabled={!enableSubmitButton}>Register</button></Link>
          <button className="btn btn-primary btn-lg" onClick={this.clearFormDetails}>Clear Form</button>
        </div>
      </div>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registeration);
