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
    .then(data => data.categories)

export const getComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(comments => comments)

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(posts => posts)

export const getSpecificPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => {
      console.log(id)
      return res.json();
    })
    .then(post => post)

export const getPostsInCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const deletePostById = (id) =>
  fetch(`${api}/posts/${id}`, {
      method: 'DELETE',
      headers: headers
    })
    .then(res => {
      res.json();
      console.log(res.ok);
      return res.ok
    })

export const changePost = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({body, title: title})
    }
  )
  .then(res => {
    res.json();
    console.log(res.ok);
    return res.ok
  })

export const createComment = (comment) =>
  fetch(`${api}/comments/`, { 
      method: 'POST', 
      headers: headers, 
      body: JSON.stringify(
        comment
      )
    }
  )
  .then(res => res.ok)

export const createPost = (post) =>
  fetch(`${api}/posts/`, { 
      method: 'POST', 
      headers: headers, 
      body: post
    }
  )
  .then(res => {res.json(); console.log(res.ok); return res.ok})