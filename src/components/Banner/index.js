import {RxCross2} from 'react-icons/rx'
import './index.css'

const Banner = props => {
  const {onCloseBanner} = props
  return (
    <div className="banner-div">
      <div className="banner-div1">
        <img
          className="banner-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt-watch-logo"
        />
        <RxCross2
          className="cross"
          data-testid="close"
          onClick={onCloseBanner}
        />
      </div>
      <h4>
        Buy Nxt Watch Premium prepaid plans with
        <br /> UPI
      </h4>
      <button className="banner-but" type="button">
        GET IT NOW
      </button>
    </div>
  )
}
export default Banner
