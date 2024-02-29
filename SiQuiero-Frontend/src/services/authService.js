import api from '../services/config'


export const login = async(loginData) => {
  try {
    const {data} = await api.post('/auth/login', loginData)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const signup = async (signupData) => {
  try{
    const data = await api.post('/auth/signup', signupData)
    return data
  } catch (error){
    console.log(error)
  }
}
