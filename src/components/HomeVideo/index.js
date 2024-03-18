import React, {useContext} from 'react'
import HomeVideoCard from '../HomeVideoCard'
import './index.css'

import Theme from '../Context'

const HomeVideos = ({homeVideos, onRetry}) => {
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }
  const {themeDark} = useContext(Theme)
  return (
    <div className="video-card-list">
      {videosCount > 0 ? (
        homeVideos.map(video => <HomeVideoCard video={video} key={video.id} />)
      ) : (
        <div className="no-videos-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
            className="no-videos-image"
          />
          <h1
            className="no-videos-heading"
            style={{color: themeDark ? 'white' : 'black'}}
          >
            No Search results found
          </h1>
          <p
            className="no-videos-note"
            style={{color: themeDark ? 'white' : 'black'}}
          >
            Try different keywords or remove search filter
          </p>
          <button type="button" onClick={onClickRetry} className="retry-button">
            Retry
          </button>
        </div>
      )}
    </div>
  )
}

export default HomeVideos
