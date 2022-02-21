import { useEffect, useState } from 'react'
import { TextInput, FlatList } from 'react-native'
import { getCharacters, getSingleCharacter } from '../services/api'
import debounce from 'lodash/debounce'

import Card from '../components/Card'

function DetailScreen(props) {
  const [data, setData] = useState({
    currentPage: 1,
    characters: []
  })

  const getAllCharacters = async (page = 1) => {
    const response = await getCharacters(page)
    const result = await response.json()
    setData({ ...data, currentPage: page,  characters: [ ...data.characters, ...result.results ]})   
  }

  const searchCharacterHandler = async (text) => {
    console.log(text)
    try {
      const response = await getSingleCharacter(text)
      const result = await response.json()
      console.log("🚀 ~ file: Characters.jsx ~ line 25 ~ searchCharacterHandler ~ result", result)
      if (!result?.error) {
        setData({ 
          ...data, 
          currentPage: 1,  
          characters: result.results
        })
      } else {
        setData({ 
          ...data, 
          currentPage: 1,  
          characters: []
        })
      }
      
    } catch(err) {

    }
  }

  const searchCharacter = debounce(searchCharacterHandler, 900)

  useEffect(() => {
    getAllCharacters()
  }, [])
  return (
    <>
      <TextInput
        onChangeText={searchCharacter}  
        style={{
          width: 200,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
      />
      <FlatList 
        data={data.characters}
        renderItem={({ item }) => <Card {...item} /> }
        keyExtractor={item => Math.random() * item.id}
        numColumns={2}
        onEndReachedThreshold={0.5}
        onEndReached={() => getAllCharacters(data.currentPage + 1)}
      />
    </>

  )
}

export default DetailScreen