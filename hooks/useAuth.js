import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        setAuthenticated(true)
      }
    } catch(e) {
      // error reading value
    }
  }
  

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(value))
    } catch (e) {
      // saving error
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    isAuthenticated,
    storeData
  }
}

export default useAuth