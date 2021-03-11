import api from './api'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGVuQGZhY2Vib29rLmNvbSIsImlhdCI6MTYxNTQ3Njc1NCwiZXhwIjoxNjE1NDgwMzU0LCJzdWIiOiIxIn0.tAAewv3IuDWT94918fCZc-wNcULndo6ZsTbVvQEo11A'
    
const headers = {
    'Authorization' : `Bearer ${token}`
}

const service = {
    postSignIn: (signIn: any) => api.post('/login', {
        email: signIn.email,
        password: signIn.password
    }),

    postSignInWithId: (id: number) => api.get(`/users/${id}`),

    
    getProducts: () => api.get(`beers`, {headers: headers}),
}

export default service