import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {error: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({error: errorMsg})
  }

  credLogin = async () => {
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const api = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
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
    const jwtToken = Cookies.get('jwt_token')
    const {error} = this.state

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <h1>Please Login</h1>
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={this.credLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
