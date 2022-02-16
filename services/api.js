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