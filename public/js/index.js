$('.blog-item').on('click', '.btn-del', (e) => {
    const id = e.target.id
    $.ajax({
        type: 'post',
        url: '/api/blog_delete',
        data: {
            id: id
        },
        success: data => {
            if(data.code === 0) {
                location.href = '/'
            }
        }
    })
})