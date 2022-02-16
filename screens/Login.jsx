import { useEffect, useState } from 'react'
import { Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import { loginRequest } from '../services/api'
import useAuth from '../hooks/useAuth'

const styles = StyleSheet.create({
  viewPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    alignItems: 'center',
    padding: 10
  }
})

const Login = ({ navigation }) => {
  const [form, setForm] = useState({})
  const { isAuthenticated, storeData } = useAuth()
  const handleChange = (name, value) => {
    setForm(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async () => {
    try{

      const response = await loginRequest(form)
       const { token } = await response.json()
       await storeData(token)
       navigation.navigate('Home', {
        screen: 'Detail',
        initial: false,
      })

    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Home', {
        screen: 'Detail',
        initial: false,
      })
    }
  }, [])

  return (
    <View style={styles.viewPage}>
      <Text>Login Form</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextInput 
        style={styles.input}
        onChangeText={(text) => handleChange("password", text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text>Login</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Login