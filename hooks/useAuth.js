import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const getData = async () => {
    setAuthenticated(true)
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      console.log("🚀 ~ file: useAuth.js ~ line 10 ~ getData ~ value", value)
      if(value !== null) {
        
      }
    } catch(e) {
      // error reading value
    }
  }
  

  const storeData = async (value) => {
  console.log("🚀 ~ file: useAuth.js ~ line 21 ~ storeData ~ value", value)
    try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(value))
      setAuthenticated(true)
    } catch (e) {
      // saving error
    }
  }

  useEffect(async () => {
    getData()
  }, [])

  return {
    isAuthenticated,
    storeData
  }
}

export default useAuth