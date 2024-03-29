import axios from 'axios'

export const axiosInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBIC_API_URL
  })

  return instance
}
