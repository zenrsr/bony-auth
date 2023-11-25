import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'

class Login extends Component {
  componentDidMount() {
    this.credLogin()
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
  }

  credLogin = async () => {
    const api = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
    }
    const response = await fetch(api, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
      console.log('response is okay')
      console.log(data)
    } else {
      this.onSubmitFailure(data.message)
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Please Login</h1>
        <button type="button" onClick={this.credLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
