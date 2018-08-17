$(function() {
    function updateBlog() {
        $.ajax({
            type: "post",
            url:'/api/blog_update',
            data: {
                id: document.getElementsByTagName('input')[0].value,
                title: document.getElementsByTagName('input')[1].value,
                content: document.getElementsByTagName('input')[2].value
            },
            success: data => {
                if(data.code === 0) {
                    location.href = `/api/blog?id=${data.data.id}`
                }else {
                    alert('请更新标题或者内容')
                }
            }
        })
    }

    function bindEvent() {
        $('.btn-update').on('click', updateBlog)
    }

    function init() {
        bindEvent()
    }

    init()
})