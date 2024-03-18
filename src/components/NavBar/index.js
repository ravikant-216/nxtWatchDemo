import {FaFire} from 'react-icons/fa'
import {IoGameControllerOutline} from 'react-icons/io5'
import {IoMdHome} from 'react-icons/io'
import {HiOutlineSaveAs} from 'react-icons/hi'
import {Link, useLocation} from 'react-router-dom'
import {useContext} from 'react'
import Theme from '../Context'
import './index.css'

const NavBar = () => {
  const location = useLocation()
  const selectedItem = location.pathname
  const data = useContext(Theme)
  const {themeDark} = data

  return (
    <div
      className="div"
      style={{backgroundColor: themeDark ? 'black' : 'white'}}
    >
      <div
        className="nav-div1"
        style={{backgroundColor: themeDark ? 'black' : 'white'}}
      >
        <div className={`di ${selectedItem === '/' ? 'selected' : ''}`}>
          <IoMdHome size={30} style={{color: themeDark ? 'white' : 'red'}} />
          <Link to="/" className="dd">
            <h3 style={{color: themeDark ? 'white' : 'black'}}>Home</h3>
          </Link>
        </div>
        <div className={`di ${selectedItem === '/trending' ? 'selected' : ''}`}>
          <FaFire size={30} style={{color: themeDark ? 'white' : 'red'}} />
          <Link to="/trending" className="dd">
            <h3 style={{color: themeDark ? 'white' : 'black'}}>Trending</h3>
          </Link>
        </div>
        <div className={`di ${selectedItem === '/gamming' ? 'selected' : ''}`}>
          <IoGameControllerOutline
            size={30}
            style={{color: themeDark ? 'white' : 'red'}}
          />
          <Link to="/gamming" className="dd">
            <h3 style={{color: themeDark ? 'white' : 'black'}}>Gamming</h3>
          </Link>
        </div>
        <div
          className={`di ${selectedItem === '/saved_videos' ? 'selected' : ''}`}
        >
          <HiOutlineSaveAs
            size={30}
            style={{color: themeDark ? 'white' : 'red'}}
          />
          <Link to="/saved_videos" className="dd">
            <h3 style={{color: themeDark ? 'white' : 'black'}}>Saved videos</h3>
          </Link>
        </div>
      </div>
      <div className="div2">
        <h2 style={{color: themeDark ? 'white' : 'black'}}>CONTACT US</h2>
        <div className="div3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linkedin logo"
          />
        </div>
        <p style={{color: themeDark ? 'white' : 'black'}}>
          Enjoy! Now you can see your recommendations!
        </p>
      </div>
    </div>
  )
}

export default NavBar
