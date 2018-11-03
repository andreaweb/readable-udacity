const api = process.env.REACT_APP_API_URL

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

export const getCategories = () =>
  fetch(`${api}/categories/`, { headers })
    .then(res => res.json())
    .then(data => {console.log('data'); return data.categories})

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPostsInCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const createPost = (post) =>
  fetch(`${api}/posts/`, { 
      method: 'POST', 
      headers: headers, 
      body: JSON.stringify({
        title: post, 
        id: Math.random().toString(36).substr(-8), 
        timestamp: Date.now(),
        category: 'redux', 
        author: "Gloryhammer"
      })
    }
  )
  .then(res => res.json())