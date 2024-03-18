import React from 'react'
import './index.css'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <div className="failed-view">
      <img
        className="failed-image"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        alt="failure view"
      />
      <h1 className="failed-heading">Oops! Something Went Wrong</h1>
      <p className="failed-note">
        We are having some trouble to complete your request. <br /> Please try
        again later.
      </p>
      <button className="retry-button" type="button" onClick={onClickRetry}>
        Retry
      </button>
    </div>
  )
}

export default FailureView
