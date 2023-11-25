import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const {history} = props
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    history.replace('/')
  }
  return (
    <button type="button" onClick={onClickLogOut}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
