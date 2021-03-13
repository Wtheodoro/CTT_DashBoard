import api from './api'

const productService = {    
    getProducts: (token: any) => api.get('/beers',
    {headers: {
        'Authorization' : `Bearer ${token}`
    }}),

    postProducts: (token: any, item: any) => api.post('/beers', item, {
    headers: {
            'Authorization' : `Bearer ${token}`
    }}),

    deleteProduct: (token: any, id: number) => api.delete(`/beers/${id}`, {
        headers: {
                'Authorization' : `Bearer ${token}`
    }})
}

export default productService