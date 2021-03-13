import api from './api'

const userService = {
    getUsers: (token: any) => api.get('/users?role=admin&role=editor',
    {headers: {
        'Authorization' : `Bearer ${token}`
    }}),

    postUser: (token: any, item: any) => api.post('/users', item, {
    headers: {
            'Authorization' : `Bearer ${token}`
    }}),

    deleteUser: (token: any, id: number) => api.delete(`/users/${id}`, {
        headers: {
                'Authorization' : `Bearer ${token}`
    }})
}

export default userService