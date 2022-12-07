import { useParams } from 'react-router-dom'
import { api } from '../services/api'

const WithId = () => {
    const { id } = useParams()

  return (
    <div>id: {id}</div>
  )
}

export default WithId