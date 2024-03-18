import React, {useContext} from 'react'
import HomeVideoCard from '../GameVideoCard'
import Theme from '../Context'

const TrendingVideos = ({videos}) => {
  const videosCount = videos.length
  const {themeDark} = useContext(Theme)
  return (
    <div
      style={{backgroundColor: themeDark ? 'black' : 'white'}}
      className="video-card-list"
    >
      {videosCount > 0 ? (
        videos.map(video => <HomeVideoCard video={video} key={video.id} />)
      ) : (
        <div className="no-videos-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
            className="no-videos-image"
          />
        </div>
      )}
    </div>
  )
}
export default TrendingVideos
