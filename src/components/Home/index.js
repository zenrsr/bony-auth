import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = () => (
  <div className="container">
    <div className="button-container">
      <Header />
    </div>
    <h1 className="heading">Home Route</h1>
    <div className="button-container">
      <LogoutButton />
    </div>
  </div>
)
export default About
