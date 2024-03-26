import {IoMdSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import {useEffect, useState, useContext} from 'react'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import HomeVideos from '../HomeVideo'
import Banner from '../Banner'
import './index.css'

import Theme from '../Context'

export const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
const Home = () => {
  const [display, setDisplay] = useState(true)
  const onCloseBanner = () => {
    setDisplay(false)
  }
  const {themeDark} = useContext(Theme)
  const [homeVideos, setHomeVideos] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getVideos = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      setHomeVideos(updatedData)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getVideos()
  }, [searchInput])

  const onChangeInput = event => {
    setSearchInput(event.target.value)
  }

  const renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )
  const onRetry = () => {
    getVideos()
  }
  const renderVideosView = () => (
    <HomeVideos homeVideos={homeVideos} onRetry={onRetry} />
  )

  const renderFailureView = () => <FailureView onRetry={onRetry} />

  const renderHomeVideos = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderVideosView()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default:
        return null
    }
  }

  return (
    <div
      style={{backgroundColor: themeDark ? 'black' : 'white'}}
      className="outerDiv"
    >
      {display && <Banner onCloseBanner={onCloseBanner} />}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          onChange={onChangeInput}
        />

        <div className="ee">
          <IoMdSearch
            size={30}
            className="search-icon"
            style={{cursor: 'pointer'}}
          />
        </div>
      </div>
      <div className="lowerDiv">{renderHomeVideos()}</div>
    </div>
  )
}
export default Home
