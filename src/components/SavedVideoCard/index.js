import {useContext} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import Theme from '../Context'

const HomeVideoCard = ({video}) => {
  const {id, title, thumbnailUrl, viewCount, publishedAt, name} = video
  const {themeDark} = useContext(Theme)
  return (
    <Link to={`/videos/${id}`} className="link">
      <li className="list-item1">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="thumbnail-image1"
        />
        <div className="content-section1">
          <p className="title" style={{color: themeDark ? 'white' : 'black'}}>
            {title}
          </p>
          <p
            className="channel-name1"
            style={{color: themeDark ? 'white' : 'black'}}
          >
            {name}
          </p>
          <p
            className="views-and-date1"
            style={{color: themeDark ? 'white' : 'black'}}
          >
            {viewCount} views {publishedAt}
          </p>
        </div>
      </li>
    </Link>
  )
}
export default HomeVideoCard
