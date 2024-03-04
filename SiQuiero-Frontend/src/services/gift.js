import api from '../services/config'

export const gift = async (giftData) => {
    try{
      const {data} = await api.post('/gift', giftData, {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      return data
    } catch (error){
      console.log(error)
    }
  }