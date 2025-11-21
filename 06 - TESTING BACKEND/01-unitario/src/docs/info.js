export const info = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Products',
            version: '1.0.0',
            description: 'API Products'
        },
        servers: [
            {
                url: 'http://localhost:8080'
            },
            {
                url: 'https://api-products.vercel.com'
            }
        ],
    },
    apis: ['./src/docs/*.yml']
}