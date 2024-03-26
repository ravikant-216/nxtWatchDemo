import {useEffect, useState, useContext} from 'react'
import Cookies from 'js-cookie'
import Theme from '../Context'
import TrendingVideos from '../TrendingVideo'

const Treanding = () => {
  const [data, setData] = useState([])
  const {themeDark} = useContext(Theme)
  useEffect(() => {
    const getData = async () => {
      const jwtToken = Cookies.get('jwt_token')

      const datas = await fetch('https://apis.ccbp.in/videos/trending', {
        option: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      if (datas.ok) {
        const newData = await datas.json()
        const formatedData = newData.videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          viewCount: eachVideo.view_count,
          publishedAt: eachVideo.published_at,
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        }))
        setData(formatedData)
      }
    }
    getData()
  }, [])
  return (
    <div style={{backgroundColor: themeDark ? 'black' : 'white'}}>
      <TrendingVideos videos={data} />
    </div>
  )
}

export default Treanding
