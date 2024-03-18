import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({children}) => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) return children

  return <Navigate to="/login" />
}
export default ProtectedRoute
