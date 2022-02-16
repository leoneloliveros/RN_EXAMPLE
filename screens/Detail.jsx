import { Text, Button } from 'react-native'

function DetailScreen(props) {
console.log("🚀 ~ file: DetailScreen.jsx ~ line 4 ~ DetailScreen ~ props", props)
  
  return (
    <>
      <Text>Detail screen {props.route?.params?.id}</Text>
      <Button title="Go to back" onPress={() => props.navigation.goBack()}/>
    </>

  )
}

export default DetailScreen