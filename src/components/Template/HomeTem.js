import {useContext} from 'react'
import NavBar from '../NavBar'
import Header from '../Header'
import './index.css'

import Theme from '../Context'

const Template = ({children}) => {
  const {themeDark} = useContext(Theme)
  return (
    <div style={{backgroundColor: themeDark ? 'black' : 'white'}}>
      <div className="head">
        <Header />
      </div>
      <div className="Temp-div2">
        <div className="navbar">
          <NavBar />
        </div>

        <div
          className="rr"
          style={{backgroundColor: themeDark ? 'black' : 'white'}}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
export default Template
