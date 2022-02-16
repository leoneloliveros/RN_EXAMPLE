import { useState } from 'react';
import { View, Text, Image, TextInput, Platform, Button, Alert, TouchableOpacity, Switch } from 'react-native';
import styles from './App.styles'
import * as ImagePicker from 'expo-image-picker';

function HomeScreen(props) {
  console.log("🚀 ~ file: HomeScreen.jsx ~ line 7 ~ HomeScreen ~ props", props)
  const [text, setText] = useState({})
  const [image, setImage] = useState(null);
  const [isDisable, setDisable] = useState(true)
  const [isEnabled, setIsEnabled] = useState(false);

  const handleChange = (text) => {
    console.log('handleChange', text)
    setText((prev) => ({...prev, email: text}))
  }

  const handleChangeNumber = (num) => {
    console.log('handleChange', num)
    setText((prev) => ({...prev, number: num}))
  }

  const pickImage = async () => {
      // const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()
      // console.log('permission', permissionResult)
      // if (permissionResult.granted === false) {
      //   alert("Needs permission")
      //   return
      // }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log('permission', permissionResult)
      if (!result.cancelled) {
        // await podemos guardarla en cloudinary url
        setImage(result)
      }
  }
   
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  

  return (
    <View style={styles.viewPage}>
      <Text>Leonel</Text>
      <Image
          style={{
            width: 50,
            height: 50
          }}
          source={{
            uri: !image ? 'https://reactnative.dev/img/tiny_logo.png' : image.uri,
          }}
      />
      <TextInput 
        style={styles.input}
        onChangeText={handleChange} 
      />
      { Platform.OS === 'ios' ? (
        <TextInput 
          style={styles.input}
          onChangeText={handleChangeNumber} 
          keyboardType="numeric"
        />
      ) : (
        <TextInput 
          style={styles.input}
          onChangeText={handleChangeNumber} 
          keyboardType="numeric"
          autoComplete="on"
        />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={pickImage}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>


      <Button title="Login" color="#841584" onPress={() => Alert.alert(
      "Alert Title")} 
        disabled={!(text.number && text.email) || false} 
      />

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Button title="Go to details" onPress={() => props.navigation.navigate('Lading', {
        screen: 'Detail',
        initial: false,
      })}/>
    </View>
  );
}

export default HomeScreen
