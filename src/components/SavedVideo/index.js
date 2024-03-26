import {useContext} from 'react'
import HomeVideoCard from '../SavedVideoCard'
import Theme from '../Context'

const SavedVideos = () => {
  const {themeDark, video} = useContext(Theme)
  const videosCount = video.length
  return (
    <div
      style={{backgroundColor: themeDark ? 'black' : 'white'}}
      className="video-card-list"
    >
      {videosCount > 0 ? (
        video.map(videoItem => (
          <HomeVideoCard video={videoItem} key={videoItem.id} />
        ))
      ) : (
        <div className="no-videos-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no videos"
            className="no-videos-image"
          />
        </div>
      )}
    </div>
  )
}
export default SavedVideos
