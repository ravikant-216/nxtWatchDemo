import {useLocation} from 'react-router-dom'
import {useEffect, useState, useContext} from 'react'
import Cookies from 'js-cookie'
import {BsBoxArrowInDown} from 'react-icons/bs'
import {SlLike, SlDislike} from 'react-icons/sl'
import Theme from '../Context'

const VideoPlay = () => {
  const location = useLocation()
  const path = location.pathname
  const id = path.split('/videos/')[1]
  const [data, setData] = useState(null)
  const [likeClicked, setLikeClicked] = useState(false)
  const [dislikeClicked, setDislikeClicked] = useState(false)
  const [isSaved, setSaved] = useState(false)

  const datadd = useContext(Theme)
  const {themeDark, video, setVideo} = datadd
  useEffect(() => {
    const getData = async () => {
      const jwtToken = Cookies.get('jwt_token')
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      if (response.ok) {
        const fetchedData = await response.json()
        const videoId = new URL(
          fetchedData.video_details.video_url,
        ).searchParams.get('v')
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
        const formattedData = {
          id: fetchedData.video_details.id,
          title: fetchedData.video_details.title,
          videoUrl: embedUrl,
          thumbnailUrl: fetchedData.video_details.thumbnail_url,
          channel: {
            name: fetchedData.video_details.channel.name,
            profileImageUrl:
              fetchedData.video_details.channel.profile_image_url,
            subscriberCount: fetchedData.video_details.channel.subscriber_count,
          },
          viewCount: fetchedData.video_details.view_count,
          publishedAt: fetchedData.video_details.published_at,
          description: fetchedData.video_details.description,
        }
        const isVideoPresent = video.some(
          videoItem => videoItem.id === formattedData.id,
        )
        setSaved(isVideoPresent)
        setData(formattedData)
      }
    }
    getData()
  }, [id, video])

  return (
    <div>
      {data && (
        <div>
          <iframe
            style={{height: '60vh', width: '100%', border: 'none'}}
            src={data.videoUrl}
            title="Video Player"
          />

          <h2 style={{color: themeDark ? 'white' : 'black'}}>{data.title}</h2>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'space-between',
            }}
          >
            <div style={{display: 'flex', gap: '20px'}}>
              <h4 style={{color: themeDark ? 'white' : 'black'}}>
                {data.viewCount} views
              </h4>
              <p
                style={{
                  color: themeDark ? 'white' : 'black',
                  marginTop: '22px',
                }}
              >
                {data.publishedAt}
              </p>
            </div>
            <div style={{display: 'flex', gap: '20px'}}>
              <div style={{marginTop: '18px', display: 'flex', gap: '12px'}}>
                <SlLike
                  size={35}
                  color={themeDark ? 'white' : 'black'}
                  style={{
                    cursor: 'pointer',
                    color: likeClicked ? 'green' : '',
                  }}
                  onClick={() => {
                    setLikeClicked(true)
                    setDislikeClicked(false)
                  }}
                />

                <SlDislike
                  onClick={() => {
                    setLikeClicked(false)
                    setDislikeClicked(true)
                  }}
                  size={35}
                  style={{
                    cursor: 'pointer',
                    color: dislikeClicked ? 'red' : '',
                  }}
                  color={themeDark ? 'white' : 'black'}
                />
              </div>
              <button
                style={{
                  display: 'flex',
                  border: themeDark ? '2px solid white' : '2px solid black',
                  marginRight: '12px',
                  borderRadius: '12px',
                  padding: '4px',
                  cursor: 'pointer',
                  background: 'none',
                }}
                onClick={() => {
                  const isVideoPresent = video.some(
                    videoItem => videoItem.id === data.id,
                  )
                  if (!isVideoPresent) {
                    setVideo(prevVideo => [...prevVideo, data])
                    setSaved(true)
                  } else {
                    const newData = video.filter(item => item.id !== data.id)
                    setVideo(newData)
                    setSaved(false)
                  }
                }}
              >
                <BsBoxArrowInDown
                  size={30}
                  color={themeDark ? 'white' : 'black'}
                  style={{marginTop: '8px'}}
                />
                <p style={{color: themeDark ? 'white' : 'black'}}>
                  {!isSaved ? 'Save Video' : 'Saved'}
                </p>
              </button>
            </div>
          </div>
          <hr />
          <div style={{display: 'flex'}}>
            <img src={data.channel.profileImageUrl} alt="profile" />
            <div>
              <p style={{color: themeDark ? 'white' : 'black'}}>
                {data.channel.name}
              </p>
              <p style={{color: themeDark ? 'white' : 'black'}}>
                {data.channel.subscriberCount} subscribers
              </p>
            </div>
          </div>
          <div>
            <p style={{color: themeDark ? 'white' : 'black'}}>
              {data.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoPlay
