const http = require('http')

//设定测试数据
let postData =JSON.stringify({
        "id": "63",
        "title": "how to learn nodejs3334sdf545rere61",
        "content": "balalallalalalaaallalalallalalal"
}) 

//请求配置
let opts = {
    hostname: 'localhost',
    port: 3000,
    path: '',
    method: 'get',
    headers: {
        "Content-type": "application/json"
    }
}


//测试接口
describe('验证web 服务是否正常', () => {
    test('/api/blog 正常', (done) => {
        opts.path = '/api/blog'
        const req = http.request(opts, (res) => {
            expect(res.statusCode).toEqual(200)
            done()
        })
        req.end()
    })


    test('/api/blog_create', (done) => {
        opts.path = '/api/blog_create'
        opts.method = 'POST'
        let body = ''
        const req = http.request(opts, (res) => {
            res.on('data', (data) => {
                body += data
            })
            res.on('end', () => {
                body = JSON.parse(body)
                expect(body.message).toBe('create success')
            })

            expect(res.statusCode).toEqual(200)
            done()
        })

        req.write(postData.toString())
        req.end()
    })


    test('/api/blog/id=xxx', (done) => {
        opts.path = `/api/blog?id=82`
        let body = ''
        const req = http.request(opts, (res) => {
            expect(res.statusCode).toEqual(200)
            done()
        })
        req.end()
    })
    
    test('/api/blog_list', (done) => {
        opts.path = '/api/blog_list?limit=3&offset=0'

        let body = ''
        const req = http.request(opts, (res) => {
            res.on('data', (data) => {
                body += data
            })
            res.on('end', () => {
                body = JSON.parse(body)
                expect(body.code).toEqual(0)
            })
            expect(res.statusCode).toEqual(200)
            done()
        })
        req.end()
    })




    
    test('/api/blog_update', (done) => {
        opts.path = '/api/blog_update'
        opts.method = 'POST'
        let body = ''
        const req = http.request(opts, (res) => {
            res.on('data', (data) => {
                body += data
            })
            res.on('end', () => {
                body = JSON.parse(body)
                expect(body.message).toBe('update success')
            })

            expect(res.statusCode).toEqual(200)
            done()
        })

        req.write(postData.toString())
        req.end()
    })


    test('/api/blog_delete', (done) => {
        opts.path = '/api/blog_delete'
        opts.method = 'POST'
        let body = ''
        const req = http.request(opts, (res) => {
            res.on('data', (data) => {
                body += data
            })
            res.on('end', () => {
                body = JSON.parse(body)
                expect(body.message).toBe('delete success')
            })

            expect(res.statusCode).toEqual(200)
            done()
        })

        req.write(postData.toString())
        req.end()
    })

})

