import {BsMoonFill} from 'react-icons/bs'
import './index.css'
import {MdOutlineWbSunny} from 'react-icons/md'
import Cookies from 'js-cookie'

import {useContext} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Theme from '../Context'

const Header = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }
  const {themeDark, setThemeDark} = useContext(Theme)
  return (
    <div
      className="div1"
      style={{backgroundColor: themeDark ? 'black' : 'white'}}
    >
      <Link to="/">
        <img
          className="img"
          src={
            !themeDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          }
          alt="nxt-watch"
        />
      </Link>
      <div className="d">
        {themeDark ? (
          <MdOutlineWbSunny
            size={40}
            color="white"
            onClick={() => {
              setThemeDark(!themeDark)
            }}
            style={{cursor: 'pointer'}}
          />
        ) : (
          <BsMoonFill
            size={40}
            onClick={() => {
              setThemeDark(!themeDark)
            }}
            style={{cursor: 'pointer'}}
          />
        )}
        <img
          className="img1"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <button onClick={handleLogout} className="button1">
          Logout
        </button>
      </div>
    </div>
  )
}
export default Header
