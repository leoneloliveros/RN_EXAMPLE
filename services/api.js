export const loginRequest = (form) => {
  const payload = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  }
  return fetch('http://localhost:3000/api/users/login', payload)
  
}

export const getCharacters = (page) => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`, payload)
}

export const getSingleCharacter = (name) => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`https://rickandmortyapi.com/api/character?name=${name}&page=1`, payload)
}