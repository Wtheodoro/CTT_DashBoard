import api from './api'

const loginService = {
    postSignIn: (signIn: any) => api.post('/login', {
        email: signIn.email,
        password: signIn.password
    }),

    postSignInWithId: (id: number) => api.get(`/users/${id}`)
}

export default loginService