import {useEffect, useState, useContext} from 'react'
import Cookies from 'js-cookie'
import TrendingVideos from '../TrendingGamingVideo'
import Theme from '../Context'

const TreandingGame = () => {
  const [data, setData] = useState([])
  const {themeDark} = useContext(Theme)
  useEffect(() => {
    const getData = async () => {
      const jwtToken = Cookies.get('jwt_token')
      const dataItem = await fetch('https://apis.ccbp.in/videos/gaming', {
        option: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      if (dataItem.ok) {
        const newData = await dataItem.json()
        const formatedData = newData.videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          viewCount: eachVideo.view_count,
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
export default TreandingGame
