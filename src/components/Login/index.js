import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  AppContainer,
  ResponsiveContainer,
  LoginImage,
  FormContainer,
  Form,
  FormHeading,
  InputContainer,
  Label,
  Input,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', pin: '', errMsg: ''}

  fetchApi = async () => {
    const {userId, pin} = this.state
    const userDetails = {
      user_id: userId,
      pin,
    }

    const url = 'https://apis.ccbp.in/ebank/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok) {
      this.successView(data.jwt_token)
    } else {
      this.failureView(data.error_msg)
    }
  }

  successView = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })

    history.replace('/')
  }

  failureView = error => {
    this.setState({errMsg: `*${error}`})
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {userId, pin} = this.state

    if (userId === '') {
      this.setState({errMsg: '*Invalid User ID'})
    } else if (pin === '') {
      this.setState({errMsg: '*Invalid PIN'})
    } else {
      this.fetchApi()
    }
  }

  renderLoginForm = () => {
    const {errMsg} = this.state
    return (
      <ResponsiveContainer>
        <LoginImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
          alt="website login"
        />
        <FormContainer>
          <Form onSubmit={this.submitForm}>
            <FormHeading>Welcome Back!</FormHeading>
            {this.renderUserIdInputField()}
            {this.renderPinInput()}
            <LoginButton type="submit">Login</LoginButton>
            <ErrorMsg>{errMsg}</ErrorMsg>
          </Form>
        </FormContainer>
      </ResponsiveContainer>
    )
  }

  renderUserIdInputField = () => {
    const {userId} = this.state
    return (
      <InputContainer>
        <Label htmlFor="userId">User ID</Label>
        <Input
          type="text"
          placeholder="Enter User ID"
          onChange={this.onChangeUserId}
          value={userId}
          id="userId"
        />
      </InputContainer>
    )
  }

  renderPinInput = () => {
    const {pin} = this.state
    return (
      <InputContainer>
        <Label htmlFor="pin">PIN</Label>
        <Input
          type="password"
          placeholder="Enter PIN"
          onChange={this.onChangePin}
          value={pin}
          id="pin"
        />
      </InputContainer>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return <AppContainer>{this.renderLoginForm()}</AppContainer>
  }
}

export default Login
