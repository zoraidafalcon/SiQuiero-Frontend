import api from '../services/config'

export const wedding = async (weddingData) => {
    try{
      const {data} = await api.post('/wedding', weddingData, {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      return data
    } catch (error){
      console.log(error)
    }
  }
  