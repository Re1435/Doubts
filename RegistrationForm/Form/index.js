import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showLastNameError: false,
    showFirstNameError: false,
    isSubmitted: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({isSubmitted: true})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isValidInput = firstName === ''
    this.setState({showFirstNameError: isValidInput})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isValidInput = lastName === ''
    this.setState({showLastNameError: isValidInput})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitAnotherResponse = () => {
    this.setState({isSubmitted: false})
  }

  renderSubmitSuccessForm = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        type="button"
        className="success-btn"
        onClick={this.onSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  renderUserForm = () => {
    const {
      firstName,
      lastName,
      showFirstNameError,
      showLastNameError,
    } = this.state
    const errorFirstClassName = showFirstNameError ? 'error-bg' : ''
    const errorLastClassName = showLastNameError ? 'error-bg' : ''
    return (
      <>
        <form onSubmit={this.onSubmitForm}>
          <div className="input-form-container">
            <label className="input-label" htmlFor="firstname">
              FIRST NAME
            </label>
            <input
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
              type="text"
              id="firstname"
              value={firstName}
              placeholder="First Name"
              className={`user-input ${errorFirstClassName}`}
            />
            {showFirstNameError && <p className="error-message">Required</p>}
          </div>
          <div className="input-form-container">
            <label className="input-label" htmlFor="lastname">
              LAST NAME
            </label>
            <input
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
              type="text"
              value={lastName}
              id="lastname"
              placeholder="Last Name"
              className={`user-input ${errorLastClassName}`}
            />
            {showLastNameError && <p className="error-message">Required</p>}
          </div>
          <div className="btn-container">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </>
    )
  }

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="title">Registration</h1>
        <div className="form-container">
          {isSubmitted ? this.renderSubmitSuccessForm() : this.renderUserForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm

