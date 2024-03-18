import {useContext} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import Theme from '../Context'

const HomeVideoCard = ({video}) => {
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

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
          <img
            src={profileImageUrl}
            alt="channel logo"
            className="profile-image"
          />
          <div className="content-section">
            <p className="title" style={{color: themeDark ? 'white' : 'black'}}>
              {title}
            </p>
            <p
              className="channel-name"
              style={{color: themeDark ? 'white' : 'black'}}
            >
              {name}
            </p>
            <p
              className="views-and-date"
              style={{color: themeDark ? 'white' : 'black'}}
            >
              {viewCount} views * {publishedAt}
            </p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default HomeVideoCard
