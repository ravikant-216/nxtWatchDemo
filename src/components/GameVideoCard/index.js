import {Link} from 'react-router-dom'
import {useContext} from 'react'
import Theme from '../Context'

const GameVideoCard = ({video}) => {
  const {id, title, thumbnailUrl, viewCount} = video
  const {themeDark} = useContext(Theme)
  return (
    <Link to={`/videos/${id}`} className="link">
      <li className="list-item">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="thumbnail-image"
        />
        <div className="video-details">
          <div className="content-section">
            <p className="title" style={{color: themeDark ? 'white' : 'black'}}>
              {title}
            </p>
            <p
              className="views-and-date"
              style={{color: themeDark ? 'white' : 'black'}}
            >
              {viewCount} Watching Worldwide
            </p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default GameVideoCard
