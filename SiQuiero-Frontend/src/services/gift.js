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

export const getGift = async () => {
    try{
      const { data } = await api.get('/gift', {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      console.log(data)
      return data
    } catch (error){
      console.log(error)
    }
}

export const addFavoriteGift = async (giftId, weddingId) => {
  try {
    const {data} = await api.post(`/gift/addgift/${giftId}/${weddingId}`)
  } catch (error) {
    console.log(error)
  }
}


